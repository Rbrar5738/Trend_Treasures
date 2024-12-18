import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  LOGOUT,
} from "./ActionType";

const initialState = {
  user: null,
  jwt: null,
  isAuthenticated: false,
  isLloading: false,
  error: null,
  successmessage: false,
};
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
    case LOGIN_REQUEST:
    case GET_USER_REQUEST:
      return {
        ...state,
        isLloading: true,
        error: null,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,

        isLloading: false,
        error: null,
        successmessage: true,
      };

    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      return {
        ...state,
        jwt: action.payload,
        isLloading: false,
        error: null,
        successmessage: true,
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isLloading: false,
        error: null,
      };
    case REGISTER_FAILURE:
    case LOGIN_FAILURE:
    case GET_USER_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLloading: false,
        successmessage: false,
      };
    case LOGOUT:
      localStorage.removeItem("jwt");
      return { ...state, jwt: null, user: null };

    default:
      return state;
  }
};
