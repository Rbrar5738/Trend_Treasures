import axios from "axios";
import { API_BASE_URL } from "../../config/apiConfig";

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
import { getCart } from "../Cart/Action";
import { CLEAR_CART } from "../Cart/ActionType";
const jwt = localStorage.getItem("jwt");

// const token = localStorage.getItem("jwt");

const registerRequest = () => ({ type: REGISTER_REQUEST });
const registerSucess = (user) => ({ type: REGISTER_SUCCESS, payload: user });
const registerFailure = (error) => ({ type: REGISTER_FAILURE, payload: error });

export const register = (userData) => async (dispatch) => {
  dispatch(registerRequest());
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/signup`, userData);
    const user = response.data;
    if (user.jwt) {
      localStorage.setItem("jwt", user.jwt);
    }

    dispatch(registerSucess(user.jwt));
  } catch (error) {
    // console.log(error.response.data);
    dispatch(registerFailure(error.response.data.message));
  }
};

const loginRequest = () => ({ type: LOGIN_REQUEST });
const loginSucess = (user) => ({ type: LOGIN_SUCCESS, payload: user });
const loginFailure = (error) => ({ type: LOGIN_FAILURE, payload: error });

export const login = (userData) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/signin`, userData);
    const user = response.data;
    // console.log("Loged User", user);
    if (user.jwt) {
      localStorage.setItem("jwt", user.jwt);
    }
    dispatch(loginSucess(user.jwt));
    dispatch(getCart(user.jwt));
  } catch (error) {
    console.log(error.response.data.message);
    dispatch(loginFailure(error.response.data.message));
  }
};

//  get user from token
export const getuser = (token) => {
  return async (dispatch) => {
    dispatch({ type: GET_USER_REQUEST });
    try {
      const response = await axios.get(`${API_BASE_URL}/users/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const user = response.data;
      dispatch({ type: GET_USER_SUCCESS, payload: user });
      console.log("req User ", user);
    } catch (error) {
      const errorMessage = error.message;
      dispatch({ type: GET_USER_FAILURE, payload: errorMessage });
    }
  };
};

export const logout = () => {
  return (dispatch) => {
    dispatch({ type: LOGOUT });
    // localStorage.clear();
    localStorage.removeItem("jwt");
    dispatch({ type: CLEAR_CART });
  };
};
