import { authHeader } from "./../../helpers";

import SuccessModal from "./../../components/shared/SuccessModal";
import ErrorModal from "./../../components/shared/ErrorModal";
// import { config } from "./../../helpers/config";
import Auth from '../../helpers/routes';
import { config } from "./../../helpers/api";
import { QUESTION } from "../constants/Authenticate";

export const questions = (questions) => {
    return { type: QUESTION, questions };
  };

export const userQuestion = (subject) => {
  return async (dispatch) => {
    Auth.userQuestions(subject).then(({ data, error }) => {
      if (error) {
        ErrorModal(error || "Error");
        console.log("error: " + JSON.stringify(error));
        return error;
      } else {
        console.log("data: " + JSON.stringify(data));
        // return data;
        dispatch(questions(data));
      }
    });
  };
};
