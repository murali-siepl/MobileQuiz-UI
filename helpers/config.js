import Constants from "expo-constants";
const { manifest } = Constants;

const api = `http://${manifest.debuggerHost.split(":").shift()}:4000`;

export const config = {
  api_url: "http://23.102.128.226:5000/api",
  // api_url: api,
  // api_url: "http://localhost:4000",
};
