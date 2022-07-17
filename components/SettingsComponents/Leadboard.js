import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  ImageBackground,
} from "react-native";
import Accordion from "react-native-collapsible/Accordion";
import Colors from "./../../constants/Color";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "./../shared/CustomHeaderButton";

const SECTIONS = [
  {
    id: "1",
    name: "Ashish Gupta",
    img: "",
    pts: "1500",
    img: require("../../assets/images/Ellipse_17.png"),
    content: "Lorem ipsum...",
  },
  {
    id: "2",
    name: "Aastha Sharma",
    img: "",
    pts: "1000",
    img: require("../../assets/images/ava.png"),
    content: "Lorem ipsum...",
  },
  {
    id: "3",
    name: "Sid Malhotra",
    img: "",
    pts: "700",
    img: require("../../assets/images/Ellipse_20.png"),
    content: "Lorem ipsum...",
  },
  {
    id: "4",
    name: "Rahul Mahi",
    img: "",
    pts: "500",
    img: require("../../assets/images/Ellipse_21.png"),
    content: "Lorem ipsum...",
  },
  {
    id: "5",
    name: "Anjali Paul",
    img: "",
    pts: "400",
    img: require("../../assets/images/Ellipse_22.png"),
    content: "Lorem ipsum...",
  },
  {
    id: "6",
    name: "Ashishi Gupta",
    img: "",
    pts: "200",
    img: require("../../assets/images/Ellipse_23.png"),
    content: "Lorem ipsum...",
  },
  // {
  //   id: "7",
  //   name: "First",
  //   img: "",
  //   pts: "11",
  //   img: require("../../assets/images/ava.png"),
  //   content: "Lorem ipsum...",
  // },
  // {
  //   id: "8",
  //   name: "Second",
  //   img: "",
  //   pts: "22",
  //   img: require("../../assets/images/ava.png"),
  //   content: "Lorem ipsum...",
  // },
  // {
  //   id: "9",
  //   name: "First",
  //   img: "",
  //   pts: "11",
  //   img: require("../../assets/images/ava.png"),
  //   content: "Lorem ipsum...",
  // },
  // {
  //   id: "10",
  //   name: "Second",
  //   img: "",
  //   pts: "22",
  //   img: require("../../assets/images/ava.png"),
  //   content: "Lorem ipsum...",
  // },
];

const Leadboard = ({ navigation }) => {
  const [activeSections, setActiveSections] = useState([]);

  const _renderHeader = (section) => {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>{section.id}</Text>
        <Image style={styles.pImg} source={section.img} />
        <View style={styles.nameAndPts}>
          <Text style={styles.headerText}>{section.name}</Text>
          <Text style={styles.pts}>{section.pts} pts</Text>
        </View>
        <Image
          style={styles.arrowDown}
          source={require("../../assets/images/gray-arrow-down.png")}
        />
      </View>
    );
  };

  const _renderContent = (section) => {
    return (
      <View style={styles.content}>
        <Text style={styles.contentText}>{section.content}</Text>
      </View>
    );
  };

  const _updateSections = (activeSections) => {
    setActiveSections(activeSections);
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerContent}>
        <ScrollView
          style={{ width: "100%" }}
          contentContainerStyle={styles.scrollView}
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.heading}>Leadership Board</Text>
          {/* ///////////////// RANK CONTAINER/////////////////////// */}
          <View style={styles.rankContainer}>
            <ImageBackground
              source={require("../../assets/images/leaderBoard/rankBackground.png")}
              style={styles.background}
            >
              {/* <View style={styles.cards}>
                <Text style={styles.card}>Today</Text>
                <Text
                  style={{
                    ...styles.card,
                    backgroundColor: Colors.lightGrey,
                    color: Colors.green,
                    borderRadius: 40,
                  }}
                >
                  Average
                </Text>
              </View> */}
              <View style={styles.ranking}>
                <View style={styles.rankingContainer}>
                  <View style={styles.rankingDetails}>
                    <Image
                      style={styles.rankingAvatar}
                      source={require("../../assets/images/ava.png")}
                    />
                    <Text style={styles.rankingName}>Aastha</Text>
                    <Text style={styles.rankingPoints}>1000 pts</Text>
                  </View>
                  <Image
                    source={require("../../assets/images/leaderBoard/rank2.png")}
                  />
                </View>
                <View style={styles.rankingContainer}>
                  <View style={styles.rankingDetails}>
                    <Image
                      style={styles.rankingAvatar}
                      source={require("../../assets/images/Ellipse_20.png")}
                    />
                    <Text style={styles.rankingName}>Ashish</Text>
                    <Text style={styles.rankingPoints}>1500 pts</Text>
                  </View>
                  <Image
                    source={require("../../assets/images/leaderBoard/rank1.png")}
                  />
                </View>
                <View style={styles.rankingContainer}>
                  <View style={styles.rankingDetails}>
                    <Image
                      style={styles.rankingAvatar}
                      source={require("../../assets/images/Ellipse_17.png")}
                    />
                    <Text style={styles.rankingName}>Sid</Text>
                    <Text style={styles.rankingPoints}>700 pts</Text>
                  </View>
                  <Image
                    source={require("../../assets/images/leaderBoard/rank3.png")}
                  />
                </View>
              </View>
            </ImageBackground>
          </View>
          {/* ////////////////////////////////////////////////////// */}
          {/* ///////////////// YOUR SCORE /////////////////////// */}
          <View style={styles.yourScoreContainer}>
            <Text style={styles.yourScoreText}>Your Score</Text>
            <Text style={styles.yourScorePoints}>114 pts</Text>
          </View>
          <View style={styles.lineContainer}>
            <Text style={styles.line}></Text>
          </View>
          {/* ///////////////// ACCORDION/////////////////////// */}
          <Accordion
            style={styles.accordion}
            sections={SECTIONS}
            activeSections={activeSections}
            renderHeader={_renderHeader}
            renderContent={_renderContent}
            onChange={_updateSections}
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default Leadboard;
export const LeaderBoardnavigationOptions = (navData) => {
  return {
    headerTitle: "Leaderboard",
    headerLeft: () => {},
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
          title="menu"
          color="black"
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.darkBlack,
    paddingVertical: 10,
    paddingHorizontal: 18,
    width: "100%",
  },
  containerContent: {
    marginTop: 10,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#2E4150",
    width: "100%",
    flex: 1,
    paddingHorizontal: 20,
    borderRadius: 10,
    paddingVertical: 10,
  },
  scrollView: {
    width: "100%",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    paddingBottom: 10,
  },
  rankContainer: {
    width: "100%",
  },
  background: {
    flex: 1,
    borderRadius: 10,
    overflow: "hidden",
    paddingTop: 15,
    paddingBottom: 0,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  cards: {
    flexDirection: "row",
    backgroundColor: "#1A232A",
    borderColor: "#2E4150",
    borderWidth: 1,
    width: "100%",
    borderRadius: 40,
    overflow: "hidden",
    justifyContent: "center",
  },
  card: {
    padding: 5,
    flex: 1,
    color: "#DDDDDD",
    fontSize: 13,
    textAlign: "center",
  },
  ranking: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "flex-end",
    marginTop: 15,
  },
  rankingContainer: {
    alignItems: "center",
  },
  rankingDetails: {
    alignItems: "center",
    marginVertical: 10,
  },
  rankingAvatar: {
    width: 24,
    height: 24,
  },
  rankingName: {
    color: "#DDDDDD",
    fontSize: 10,
  },
  rankingPoints: {
    color: "#C0FF77",
    fontSize: 9,
    backgroundColor: "#425729B9",
    paddingHorizontal: 10,
    borderRadius: 5,
    paddingVertical: 2,
  },
  yourScoreContainer: {
    backgroundColor: "#2E4150",
    borderColor: "#2E4150",
    borderWidth: 1,
    paddingVertical: 20,
    paddingHorizontal: 23,
    flexDirection: "row",
    marginTop: 16,
    borderRadius: 10,
    alignItems: "center",
  },
  yourScoreText: {
    fontSize: 16,
    color: "#fff",
  },
  yourScorePoints: { fontSize: 19, color: "#FFC83D", marginLeft: 15 },
  lineContainer: {
    alignItems: "center",
  },
  line: {
    height: 2,
    width: "15%",
    backgroundColor: Colors.darkGreen,
    marginTop: 15,
    textAlign: "center",
  },
  accordion: {
    width: "100%",
    margin: 0,
    padding: 0,
  },
  title: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "300",
    marginBottom: 20,
  },
  header: {
    padding: 10,
    marginTop: 15,
    borderRadius: 10,
    height: 60,
    backgroundColor: "#2E4150",
    borderColor: "#23313C",
    borderWidth: 1,
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
  },
  headerText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  pImg: {
    borderRadius: 50,
  },
  pts: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    color: "gold",
  },
  nameAndPts: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    width: "50%",
  },
  content: {
    padding: 20,
    backgroundColor: "#2E4150",
    color: "#fff",
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderWidth: 1,
    borderColor: "#2E4150",
  },
  contentText: {
    color: "#fff",
  },
  active: {
    backgroundColor: "white",
  },
  inactive: {
    backgroundColor: "rgba(245,252,255,1)",
  },
  selectors: {
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
  selector: {
    backgroundColor: "#F5FCFF",
    padding: 10,
  },
  activeSelector: {
    fontWeight: "bold",
  },
  selectTitle: {
    fontSize: 14,
    fontWeight: "500",
    padding: 10,
  },
  multipleToggle: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 30,
    alignItems: "center",
  },
  multipleToggle__title: {
    fontSize: 16,
    marginRight: 8,
  },
});
