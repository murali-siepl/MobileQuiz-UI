import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
} from "react-native";
import Heading from "./shared/Heading";
import Accordion from 'react-native-collapsible/Accordion';
import CustomButton from "./../components/shared/Button";

const SECTIONS = [
  {
    id: "1",
    name: "First",
    img: "",
    pts: "11",
    img: require("../assets/images/ava.png"),
    content: {
      question: "10",
      time: "10",
      type: "Free",
    },
  },
  {
    id: "2",
    name: "Second",
    img: "",
    pts: "22",
    img: require("../assets/images/ava.png"),
    content: {
      question: "10",
      time: "10",
      type: "Free",
    },
  },
  {
    id: "1",
    name: "First",
    img: "",
    pts: "11",
    img: require("../assets/images/ava.png"),
    content: {
      question: "10",
      time: "10",
      type: "Free",
    },
  },
];

const Offers = (props) => {
  const [activeSections, setActiveSections] = useState([]);
  const [collapsed, setCollapsed] = useState(false);

  const _renderSectionTitle = (section) => {
    return (
      <View style={styles.content}>
        <Text>{section.content}</Text>
      </View>
    );
  };

  const _renderHeader = (section, index, isActive, sections) => {
    return (
      <View style={isActive ? styles.headerActive : styles.header}>
        <Image style={styles.pImg} source={section.img} />
        <Text style={styles.headerText}>{section.name}</Text>
        {isActive ? (
          <Image
            style={styles.arrowDown}
            source={require("../assets/images/arrow-up.png")}
          />
        ) : (
          <Image
            style={styles.arrowDown}
            source={require("../assets/images/arrow-down.png")}
          />
        )}
      </View>
    );
  };

  const _renderContent = (section) => {
    return (
      <View style={styles.content}>
        <View style={styles.spaceBetween}>
          <Text style={styles.contentTitle}>Top 10 Quiz</Text>
          <CustomButton
            onPress={() => {
              navigation.navigate("");
            }}
            touchWidth="30%"
            button={{ fontSize: 14 }}
            style={{ paddingHorizontal: 10, marginBottom: 18 }}
          >
            Play Now
          </CustomButton>
        </View>
        <View style={styles.spaceBetween}>
          <View style={styles.spaceBetweenH}>
            <Text style={styles.contentHead}>{section.content.question}</Text>
            <Text style={styles.contentText}>Total Questions</Text>
          </View>
          <View style={styles.spaceBetweenH}>
            <Text style={styles.contentHead}>{section.content.time}</Text>
            <Text style={styles.contentText}>Total Time</Text>
          </View>
          <View style={styles.spaceBetweenH}>
            <Text style={styles.contentHead}>{section.content.type}</Text>
            <Text style={styles.contentText}>Subscription Type</Text>
          </View>
        </View>
      </View>
    );
  };

  const _updateSections = (activeSections) => {
    setActiveSections(activeSections);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={{ width: "100%" }}
        contentContainerStyle={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <Heading style={styles.heading}>Latest Quiz Offers</Heading>
        <ImageBackground
          imageStyle={{ borderRadius: 10 }}
          source={require("../assets/images/quiz-bg-img.png")}
          style={styles.imgBackground}
        >
          <Text style={styles.text}>
            Lets Play Quiz And Win Exciting Prizes !!
          </Text>
          <CustomButton
            onPress={() => {
              navigation.navigate("");
            }}
            touchWidth="30%"
            button={{ fontSize: 15 }}
            style={{ paddingHorizontal: 10 }}
          >
            Start Now
          </CustomButton>
        </ImageBackground>
        <Heading style={styles.heading}>Recently Played Quiz</Heading>
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
  );
};

export default Offers;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 25,
    flex: 1,
    backgroundColor: Colors.darkBlack,
    paddingVertical: 10,
    paddingHorizontal: 18,
    width: "100%",
  },
  scrollView: {
    width: "100%",
  },
  text: {
    fontSize: 20,
    lineHeight: 22,
    marginBottom: 10,
    fontWeight: "bold",
    color: "#000",
    width: "60%",
    marginLeft: 2,
  },
  imgBackground: {
    height: 180,
    opacity: 0.9,
    borderRadius: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingLeft: 30,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "left",
    paddingVertical: 10,
  },
  accordion: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  header: {
    marginTop: 15,
    borderRadius: 10,
    height: 60,
    backgroundColor: "#1D2933",
    borderColor: "#23313C",
    borderWidth: 1,
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
  },
  headerActive: {
    marginTop: 15,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    height: 60,
    backgroundColor: "#1D2933",
    borderColor: "#23313C",
    borderWidth: 1,
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
  },
  headerText: {
    textAlign: "left",
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    width: "60%",
  },
  pImg: {
    borderRadius: 50,
  },
  content: {
    width: "100%",
    padding: 20,
    backgroundColor: "#1D2933",
    color: "#fff",
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderWidth: 1,
    borderColor: "#2E4150",
  },
  contentTitle: {
    color: "#89FB41",
    fontSize: 18,
    marginTop: 5,
    marginBottom: 20,
  },
  contentHead: {
    color: "#fff",
    fontSize: 24,
  },
  contentText: {
    color: "#BBBBBB",
    width: "75%",
    fontWeight: "500",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
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
});
