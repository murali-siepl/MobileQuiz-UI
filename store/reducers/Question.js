import {
    AUTHENTICATE,
    LOGIN,
    LOGOUT,
    SET_LOADING,
  } from "../constants/Authenticate";
  import { DID_TRY_LOGIN, QUESTION } from "./../constants/Authenticate";
  const intialState = {
    loading: false,
    questions: null,
    didTryLogin: false,
  };
  
  const Question = (state = intialState, action) => {
    switch (action.type) {
      case SET_LOADING:
        return {
          ...state,
          loading: !state.loading,
        };
      case QUESTION:
        return {
          ...state,
          questions: action.questions,
    
        };
      default:
        return state;
    }
  };
  export default Question;
  