import * as React from "react";
import { StyleSheet, Animated, Button } from "react-native";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";

export default function Timer(props) {
  const [isPlaying, setIsPlaying] = React.useState(true);
  return (
    <CountdownCircleTimer
      isPlaying={isPlaying}
      duration={props.duration}
      colors={[
        ["#004777", 0.4],
        ["#F7B801", 0.4],
        ["#A30000", 0.2],
      ]}
      onComplete={() => {
        props.nextQuestion();
        return [true];
      }}
      size={40}
      strokeWidth={6}
    >
      {({ remainingTime, animatedColor }) => (
        <Animated.Text
          style={{ color: animatedColor, fontSize: 15, fontWeight: "bold" }}
        >
          {remainingTime}
        </Animated.Text>
      )}
    </CountdownCircleTimer>
  );
}

const styles = StyleSheet.create({});
