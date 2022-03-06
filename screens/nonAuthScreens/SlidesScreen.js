import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import Colors from "./../../constants/Color";
import Heading from "./../../components/shared/Heading";
import CustomButton from "./../../components/shared/Button";

const slides = [
  {
    key: 1,
    title: "Quiz games",
    text: "When it comes to learning, there's no better way to do it than playing the quiz game.",
    image: require("../../assets/images/man.png"),
    backgroundColor: "#59b2ab",
  },
  {
    key: 2,
    title: "Knowledge",
    text: "You can have all your school classwork and home at reach of your hands.",
    image: require("../../assets/images/man1.png"),
    backgroundColor: "#febe29",
  },
  {
    key: 3,
    title: "Statistics",
    text: "An easy way to check progress",
    image: require("../../assets/images/man2.png"),
    backgroundColor: "#22bcb5",
  },
];

export default class SlidesSCreen extends React.Component {
  _renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Image source={item.image} style={styles.image} />
        <Heading style={{ fontSize: 30 }}>{item.title}</Heading>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };
  _onDone = () => {
    this.props.navigation.navigate("SignIn");
  };

  _renderButton = (type) => {
    return (
      <CustomButton touchWidth="100%" onPress={this._onDone}>
        {type}
      </CustomButton>
    );
  };

  render() {
    return (
      <AppIntroSlider
        renderItem={this._renderItem}
        data={slides}
        showNextButton={false}
        showSkipButton={true}
        renderDoneButton={() => this._renderButton("Done")}
        renderSkipButton={() => this._renderButton("Skip")}
        dotStyle={{ backgroundColor: "grey" }}
        activeDotStyle={{ backgroundColor: Colors.green }}
      />
    );
  }
}

const styles = StyleSheet.create({
  slide: {
    backgroundColor: Colors.darkBlack,
    flex: 1,
    alignItems: "center",
    padding: 20,
    overflow: "hidden",
  },
  image: {
    marginTop: 50,
    width: 350,
    height: 400,
  },
  text: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
    marginTop: 20,
    lineHeight: 25,
  },
  next: {
    backgroundColor: Colors.green,
  },
});
