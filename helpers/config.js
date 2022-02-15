import Constants from "expo-constants";
const { manifest } = Constants;

const api = `http://${manifest.debuggerHost.split(":").shift()}:4000`;

export const config = {
  // api_url: "http://192.168.50.49:4000",
  api_url: api,
};
