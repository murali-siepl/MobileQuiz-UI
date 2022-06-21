import { authHeader } from "./../../helpers";
import { setLoading } from "./Authenticate";
import SuccessModal from "./../../components/shared/SuccessModal";
import ErrorModal from "./../../components/shared/ErrorModal";
// import { config } from "./../../helpers/config";
import { config } from "./../../helpers/api";

export const userFeedback = (values, token) => {
  return async (dispatch) => {
    dispatch(setLoading());

    const requestOptions = {
      method: "POST",
      headers: authHeader(token),
      body: JSON.stringify(values),
    };
    console.log(requestOptions);
    try {
      const response = await fetch(
        config.api_url + "/userFeedback",
        requestOptions
      );
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message);
      }
      const responseData = await response.json();
      SuccessModal("Thank you for your feedback");
      console.log("responseData", responseData);
    } catch (e) {
      ErrorModal(e);
      console.log(e);
    }
    dispatch(setLoading());
  };
};
