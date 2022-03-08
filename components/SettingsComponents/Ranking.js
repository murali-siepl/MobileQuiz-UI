import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView, Image, TouchableNativeFeedback, ImageBackground, TouchableOpacity, Dimensions } from "react-native";
import { BarChart } from "react-native-chart-kit";
import { FlatList } from "react-native-gesture-handler";
import DatePicker from 'react-native-neat-date-picker';
import { ranking } from "../../dummy-data/ranking";

const Ranking = () => {

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  useEffect(() => {
    let today = new Date();
    let date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
    setStartDate(date);
    setEndDate(date);
  }, []);

  const setDateFromString = (date) => {
    let today = new Date(date);
    let dateString = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
    return dateString;
  }

  const screenWidth = Dimensions.get("window").width;
  const chartConfig = {
    backgroundGradientFrom: "#2b3931",
    backgroundGradientFromOpacity: 0.5,
    backgroundGradientTo: "#2b3931",
    backgroundGradientToOpacity: 0.8,
    fillShadowGradient: "#79e80d",
    color: (opacity = 1) => `rgba(82, 102, 62, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    strokeWidth: 3, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false,
    propsForDots: {
      r: "6",
      strokeWidth: "2",
      stroke: "#ffa726"
    },
    propsForDots: {
      r: "6",
      strokeWidth: "2",
      stroke: "#ffa726"
    }
  };

  const openDatePicker = () => {
    setShowDatePicker(true)
  }

  const onCancel = () => {
    // You should close the modal in here
    setShowDatePicker(false)
  }

  const onConfirm = (output) => {
    // You should close the modal in here
    setShowDatePicker(false)

    const { startDate, startDateString, endDate, endDateString } = output;

    const startDateStringFormatted = setDateFromString(startDate);
    setStartDate(startDateStringFormatted);
    console.log(startDateStringFormatted);

    const endDateStringFormatted = setDateFromString(endDate);
    console.log(endDateStringFormatted);
    setEndDate(endDateStringFormatted);
    
  }

  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        data: [57, 45, 28, 80, 99, 43, 55]
      }
    ]
  };

  const renderItem = ({ item }) => (
    <TouchableNativeFeedback
      key={item.subject}
      onPress={() => {
        navigation.navigate("Instructions");
      }}
    >
      <View style={{ ...styles.item, }} style={styles.gridBoxes}>
        <ImageBackground
          style={styles.gbQuiz}
          imageStyle={{ borderRadius: 1 }}
          resizeMode={'stretch'}
          source={item.img}
        >
          <Text style={styles.number}>{item.number}</Text>
          <Text style={styles.text}>{item.subject}</Text>
        </ImageBackground>
      </View>
    </TouchableNativeFeedback>
  );

  return (
    <View style={{ flex: 1, backgroundColor: "#1a232a" }}>
      <ScrollView >
        <View style={styles.profileInfo}>
          <View style={styles.spaceBetween}>
            <Text style={styles.headName}>Hello, Mohan</Text>
            <Text style={styles.level}
              onPress={() => {
                navigation.navigate("Offers");
              }}
            >Level 02</Text>
          </View>
          <Text style={styles.welcomeText}>let's Start Learning</Text>
          <View style={styles.spaceBetween}>
            <View>
              <FlatList
                numColumns={2}
                data={ranking}
                keyExtractor={(Item) => Item.subject}
                renderItem={renderItem}
              />
            </View>
          </View>
        </View>

        <View style={styles.profileInfo}>
          <View style={Object.assign({}, styles.spaceBetween, { marginBottom: 15 })}>
            <Text style={styles.subName}>Your Highest Score</Text>
            <Text style={styles.subName}>Date: 12-01-21</Text>
          </View>
          <View style={styles.spaceBetween}>
            <View style={styles.spaceBetweenH}>
              <Text style={styles.hlName}>99pts</Text>
              <Text style={styles.subName}>Best Score</Text>
            </View>
            <View style={styles.spaceBetweenH}>
              <Text style={styles.hlName}>2nd</Text>
              <Text style={styles.subName}>Position</Text>
            </View>
            <View style={styles.spaceBetweenH}>
              <Text style={styles.hlName}>3:22min</Text>
              <Text style={styles.subName}>Time taken</Text>
            </View>
          </View>
        </View>

        <View style={styles.profileInfo}>
          <View>
            <TouchableOpacity onPress={openDatePicker} style={styles.appButtonContainer}>
              <Image
                style={styles.imgScore}
                source={require("../../assets/images/calendar-icon.png")}
              />
              <Text style={styles.appButtonText}>{startDate === "" && endDate === "" ? 'open' : `${startDate} - ${endDate}`}</Text>
              <Image
                style={styles.imageArrow}
                source={require("../../assets/images/arrow-down.png")}
              />
            </TouchableOpacity>
            <DatePicker
              isVisible={showDatePicker}
              mode={'range'}
              onCancel={onCancel}
              onConfirm={onConfirm}
            />
          </View>
          <Text style={styles.subName}>Your Weekly Performance</Text>
          <Text style={styles.subName}>Total No. Point Gain</Text>
          <BarChart
            style={styles.graphStyle}
            data={data}
            width={screenWidth - 50}
            height={220}
            chartConfig={chartConfig}
            fromZero={true}
            withInnerLines={true}
          />
        </View>

        <View style={Object.assign({}, styles.spaceBetween, { marginBottom: 15 })}>
          <View style={styles.spaceBetweenH}>
            <View style={Object.assign({}, styles.scoreAndTime, { marginLeft: 15, marginRight: 0 })}>
              <Text style={styles.subName}>Your Average Score</Text>
              <View style={styles.scoreBlock}>
                <Text style={styles.score}>
                  +45
                </Text>
                <Image
                  style={styles.imgScore}
                  source={require("../../assets/images/feather-book.png")}
                />
              </View>
            </View>
          </View>

          <View style={styles.spaceBetweenH}>
            <View style={Object.assign({}, styles.scoreAndTime, { marginRight: 15 })}>
              <Text style={styles.subName}>Your Average Time</Text>
              <View style={styles.scoreBlock}>
                <Text style={styles.score}>
                  4:34 min
                </Text>
                <Image
                  style={styles.imgScore}
                  source={require("../../assets/images/access-time.png")}
                />
              </View>
            </View>
          </View>
        </View>

      </ScrollView>
    </View>
  );
};

export default Ranking;

const styles = StyleSheet.create({
  profileInfo: {
    justifyContent: "center",
    padding: 10,
    margin: 15,
    borderRadius: 8,
    alignItems: "flex-start",
    backgroundColor: "#23313C",
    borderColor: "#2E4150",
    borderWidth: 2,
  },
  scoreAndTime: {
    flexDirection: "column",
    justifyContent: 'space-between',
    padding: 5,
    borderRadius: 8,
    alignItems: "flex-start",
    backgroundColor: "#23313C",
    borderColor: "#2E4150",
    borderWidth: 2,
  },
  gridBoxes: {
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingRight: 10,
    paddingBottom: 15,
    alignItems: "flex-start",
    padding: 0,
    margin: 0,
  },
  hlName: {
    fontSize: 20,
    color: "green",
    marginVertical: 5,
    fontWeight: "bold",
  },
  headName: {
    fontSize: 18,
    color: "white",
    marginVertical: 5,
    fontWeight: "bold",
  },
  subName: {
    fontSize: 14,
    color: "white",
    marginVertical: 5,
    fontWeight: "bold",
  },
  level: {
    fontSize: 16,
    color: "#6ec43f",
    marginVertical: 5,
    fontWeight: "bold",
  },
  scoreBlock: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
  },
  score: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#6ec43f",
    marginRight: 5,
    display: "flex",
    justifyContent: "flex-start",
  },
  imgScore: {
    width: 25,
    height: 25,
  },
  welcomeText: {
    fontSize: 12,
    color: "#dad8d8",
    marginVertical: 5,
    textTransform: "capitalize",
    paddingBottom: 15,
  },
  text: {
    position: 'absolute',
    paddingLeft: 8,
    bottom: 12,
    fontSize: 12,
    backgroundColor: "rgba(0,0,0,0.1)",
    fontWeight: "bold",
    flex: 1,
    textAlign: "left",
    color: "white",
  },
  number: {
    color: "white",
    fontSize: 20,
    paddingTop: 20,
    paddingLeft: 16,
    fontWeight: "bold",
  },
  spaceBetween: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
  },
  spaceBetweenH: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column",
  },
  gbQuiz: {
    width: 160,
    height: 100,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexDirection: "row",
  },
  graphStyle: {
    marginTop: 10,
  },
  graphBtn: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: "100%"
  },
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#1A232A",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderWidth: 2,
    borderColor: "#2E4150",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  appButtonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
    paddingHorizontal: 10,
  },
  imageArrow: {
    width: 15,
    height: 15,
  },
});
