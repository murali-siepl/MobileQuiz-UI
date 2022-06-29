import webfox from './api';
import AsyncStorage from "@react-native-async-storage/async-storage";

const logError = (error) => {
  console.log('system error: ', error);
};

webfox.interceptors.request.use(
  async (config) => {
    const userJson = await AsyncStorage.getItem("userData");
    const transformedData = JSON.parse(userJson);
    const { token } = transformedData;

    webfox.defaults.headers.common['Authorization'] = token ? `Bearer ${token}` : '';
    config.headers['Content-Type'] = "application/json";
    config.headers['Authorization'] = token ? `Bearer ${token}` : '';
    // config.headers.Authorization = token ? `Bearer ${token}` : '';

    return config;
  },
  (error) => Promise.reject(error)
);

webfox.interceptors.response.use(
  async (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 403) {
      console.log("Error: " + JSON.stringify(error));
      return Promise.reject(error);
    } else if (error.response && error.response.status === 401) {
      AsyncStorage.clear;
      return Promise.reject(error);
    } else {
      return Promise.reject(error);
    }
  }
);

const exec = async (fn, params = null, error = null) => {
  const res = {
    data: null,
    error: null,
    syserror: null,
  };

  await fn(params)
    .then((response) => {
      res.data = response;
    })
    .catch((err) => {
      if (err.response) {
        res.error = err.response;
      } else if (err.request) {
        res.error = err.request;
      } else {
        res.error = err;
      }
    });

  return res;
};

const login = (params) =>
  exec(() => {
    return webfox.post(`login`, params);
  });

const signup = (params) =>
  exec(() => {
    return webfox.post(`signup`, params);
  });

const forgetPassword = (params) =>
  exec(() => {
    return webfox.post(`forgetPassword`, params);
  });

const userFeedback = (params) =>
  exec(() => {
    return webfox.post(`userFeedback`, params);
  });

export default {
  logError,
  login,
  signup,
  forgetPassword,
  userFeedback,
};
