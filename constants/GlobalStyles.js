import { StyleSheet } from "react-native";
import Color from "./Color";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: "100%",
    paddingVertical: 13,
    paddingHorizontal: 30,
    backgroundColor: Color.darkGreen,
    borderRadius: 5,
    alignItems: "center",
    color: "black",
    fontWeight: "bold",
    fontSize: 16,
  },
});
