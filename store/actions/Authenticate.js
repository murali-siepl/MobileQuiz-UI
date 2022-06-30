import { AUTHENTICATE, LOGOUT, SET_LOADING } from "../constants/Authenticate";
import Auth from '../../helpers/routes';
import { DID_TRY_LOGIN } from "./../constants/Authenticate";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ErrorModal from "./../../components/shared/ErrorModal";
import { Alert } from "react-native";
import { Headers } from "../../helpers";
import SuccessModal from "../../components/shared/SuccessModal";
import { config } from "../../helpers/config"; 

export const didTryLogin = () => {
  return { type: DID_TRY_LOGIN };
};

export const authenticate = (token, userId, email, name) => {
  return { type: AUTHENTICATE, token, userId, email, name };
};

export const setLoading = () => {
  return { type: SET_LOADING };
};

export const logout = () => {
  AsyncStorage.removeItem("userData");
  return { type: LOGOUT };
};

export const signInOrUp = (values, path) => {
  return async (dispatch) => {
    dispatch(setLoading());
    const params = values;

    if (path === "login") {
      Auth.login(params).then(({ data, error }) => {
        if (error) {
          dispatch(setLoading());
          console.log("error: " + JSON.stringify(error));
          ErrorModal(error?.data?.message || "Error");
        } else {
          dispatch(setLoading());
          console.log("data: " + JSON.stringify(data));
          if(data.code == 200){
            saveDataToStorage(data.results.token);
          }
          const { token, userId, email, name } = data.results;
          saveDataToStorage(token, userId, email, name);
          dispatch(authenticate(token, userId, email, name));
        }
      });
    } else {
      Auth.signup(params).then(({ data, error }) => {
        if (error) {
          dispatch(setLoading());
          console.log("error: " + JSON.stringify(error));
          ErrorModal(error?.data?.message || "Error");
        } else {
          dispatch(setLoading());
          const { token, userId, email, name } = data.results;
          SuccessModal(`${email} is Success register with us`)
          saveDataToStorage(token, userId, email, name);
          dispatch(authenticate(token, userId, email, name));
        }
      });
    }
  };
};

export const forgetPassword = (values, navigation, mobile) => {
  return async (dispatch) => {
    dispatch(setLoading());
  
    const requestOptions = Headers(
      mobile ? { type: "mobile", mobile: values.phone } : values
    );

    try {
      const response = await fetch(
        config.api_url + "/forgetPassword",
        requestOptions
      );
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message);
      }
      const responseData = await response.json();
      navigation.navigate("Reset", { email: values.email,mobile:mobile});
    } catch (e) {
      ErrorModal(e);
    }
    dispatch(setLoading());
  };
};
export const resetPassword = (values, navigation, mode) => {
  return async (dispatch) => {
    dispatch(setLoading());

    const requestOptions = Headers(values);

    try {
      const response = await fetch(
        config.api_url + "/resetPassword",
        requestOptions
      );
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message);
      }
      const responseData = await response.json();
      if (mode === "resend") {
        Alert.alert("Otp sent to your mail", "please check", [
          {
            text: "ok",
          },
        ]);
        return;
      }
      Alert.alert("Reset Password is successful", "please login", [
        {
          text: "Login",
          onPress: () => {
            navigation.navigate("SignIn");
          },
        },
      ]);
    } catch (e) {
      ErrorModal(e);
    }
    dispatch(setLoading());
  };
};
//////////////    HELPER FUNCTIONS   //////////////////////////////

const saveDataToStorage = async (token, userId, email, name) => {
  await AsyncStorage.setItem(
    "userData",
    JSON.stringify({
      token,
      userId,
      email,
      name,
    })
  );
};
