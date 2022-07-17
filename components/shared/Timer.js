import React,{forwardRef,useImperativeHandle} from "react";
import { StyleSheet, Animated, Button } from "react-native";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";

const Timer = forwardRef((props,ref) => {
  const [isPlaying, setIsPlaying] = React.useState(true);
  const [remaintime, setRemainTime] = React.useState(0);

  useImperativeHandle(ref, () => ({
    getAlert() {
      return 30-remaintime;
    }
  }));

  return (
    <CountdownCircleTimer
      key={props.index}
      isPlaying={isPlaying}
      duration={props.duration}
      colors={[
        ["#004777", 0.4],
        ["#F7B801", 0.4],
        ["#A30000", 0.2],
      ]}
      onComplete={(time) => {
        props.nextQuestion(time);
        return [true];
      }}
      children={(remainingTime) => {
        console.log(remainingTime);
      }}
      size={40}
      strokeWidth={6}
    >
      {({ remainingTime, animatedColor }) => {
        setRemainTime(remainingTime);
        return(
        <Animated.Text
          style={{ color: animatedColor, fontSize: 15, fontWeight: "bold" }}
        >
          {remainingTime}
        </Animated.Text>
      )}}
    </CountdownCircleTimer>
  );
});

const styles = StyleSheet.create({});

export default Timer;