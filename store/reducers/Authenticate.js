import {
  AUTHENTICATE,
  LOGIN,
  LOGOUT,
  SET_LOADING,
} from "../constants/Authenticate";
import { DID_TRY_LOGIN } from "./../constants/Authenticate";
const intialState = {
  loading: false,
  token: null,
  userId: null,
  email: null,
  name: null,
  didTryLogin: false,
};

const Authenticate = (state = intialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: !state.loading,
      };
    case AUTHENTICATE:
      return {
        ...state,
        token: action.token,
        userId: action.userId,
        email: action.email,
        didTryLogin: true,
        name: action.name,
      };
    case DID_TRY_LOGIN:
      return {
        ...state,
        didTryLogin: true,
      };
    case LOGOUT:
      return intialState;
    default:
      return state;
  }
};
export default Authenticate;
