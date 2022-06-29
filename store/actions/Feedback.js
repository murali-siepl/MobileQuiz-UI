import { authHeader } from "./../../helpers";
import { setLoading } from "./Authenticate";
import SuccessModal from "./../../components/shared/SuccessModal";
import ErrorModal from "./../../components/shared/ErrorModal";
// import { config } from "./../../helpers/config";
import Auth from '../../helpers/routes';
import { config } from "./../../helpers/api";

export const userFeedback = (values, token) => {
  return async (dispatch) => {
    // dispatch(setLoading());
    const params = values;
    console.log(params, token);

    Auth.userFeedback(params).then(({ data, error }) => {
      if (error) {
        // dispatch(setLoading());
        console.log("error: " + JSON.stringify(error));
        ErrorModal(error || "Errorrrr");
      } else {
        // dispatch(setLoading());
        console.log("data: " + JSON.stringify(data));
        // if(data.code == 200){
        //   saveDataToStorage(data.results.token);
        // }
        // const { token, userId, email, name } = data.results;
        // saveDataToStorage(token, userId, email, name);
        // dispatch(authenticate(token, userId, email, name));
      }
      // dispatch(setLoading());
    });

    // const requestOptions = {
    //   method: "POST",
    //   headers: authHeader(token),
    //   body: JSON.stringify(values),
    // };
    // console.log(requestOptions);
    // try {
    //   const response = await fetch(
    //     "http://23.102.128.226:5000/api/userFeedback",
    //     requestOptions
    //   );
    //   if (!response.ok) {
    //     const error = await response.json();
    //     throw new Error(error.message);
    //   }
    //   const responseData = await response.json();
    //   SuccessModal("Thank you for your feedback");
    //   console.log("responseData", responseData);
    // } catch (e) {
    //   ErrorModal(e);
    //   console.log(e);
    // }
    // // dispatch(setLoading());
  };
};
