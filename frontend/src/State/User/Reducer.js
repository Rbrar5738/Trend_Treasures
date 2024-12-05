// src/state/auth/reducer.js
import {
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAILURE,
} from "./actionTypes";

const initialState = {
  isAuthenticated: false,
  isLoading: false,
  user: null,
  error: null,
  successMessage: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PROFILE_REQUEST:
      return {
        ...state,

        isLoading: true,
        error: null,
        successMessage: false,
      };
    case UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isLoading: false,

        successMessage: true,
      };
    case UPDATE_PROFILE_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
