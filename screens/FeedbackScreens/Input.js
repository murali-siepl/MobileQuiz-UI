import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { ErrorMessage } from "../../components/shared/ErrorModal";
import Colors from "./../../constants/Color";

const Input = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput
        style={styles.input}
        {...props}
        placeholderTextColor="#999999"
      />
      {props.error && props.touched && (
        <ErrorMessage style={{ marginLeft: 10 }} error={props.error} />
      )}
    </View>
  );
};

export default Input;
export const MessageInput = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props.label}</Text>
      <View style={styles.messages}>
        {messages.map((message, i) => (
          <Card
            text={message}
            key={i}
            onPress={() =>
              props.setFieldValue("message", props.value + message)
            }
          />
        ))}
      </View>
      <TextInput
        style={{ ...styles.input, paddingTop: 15 }}
        {...props}
        placeholderTextColor="#999999"
        editable={props.value.length > 100 ? false : true}
      />
      {props.value.length > 0 && (
        <Text style={styles.remaining}>
          Remaining Characters : {100 - props.value.length}
        </Text>
      )}

      {props.error && props.touched && (
        <ErrorMessage style={{ marginLeft: 10 }} error={props.error} />
      )}
    </View>
  );
};

const Card = (props) => (
  <TouchableOpacity onPress={props.onPress} activeOpacity={0.5}>
    <View style={styles.card}>
      <Text style={styles.content}>{props.text}</Text>
    </View>
  </TouchableOpacity>
);
const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 20,
  },
  label: {
    color: "#BBBBBB",
    fontWeight: "600",
    marginBottom: 5,
    fontWeight: "700",
  },
  input: {
    borderColor: "#2E4150",
    borderWidth: 1,
    width: "100%",
    fontSize: 12,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: "#23313C",
    borderRadius: 10,
    color: "#999999",
  },
  messages: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    backgroundColor: Colors.lightGreen,
    padding: 10,
    paddingHorizontal: 10,
    marginRight: 6,
    marginBottom: 10,
    borderRadius: 50,
  },
  content: {
    color: "#000000",
    fontSize: 12,
  },
  remaining: {
    color: "#999999",
    marginTop: 5,
  },
});

const messages = [
  "app not working properly",
  "Technical Support",
  "Customer Support",
  "Not Enough Content",
];
