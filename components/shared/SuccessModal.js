import React from "react";
import { Alert } from "react-native";

const SuccessModal = (message) => {
  Alert.alert("Success", message, [{ text: "ok", style: "cancel" }]);
};

export default SuccessModal;
