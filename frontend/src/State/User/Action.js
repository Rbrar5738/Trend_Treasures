// src/state/auth/actions.js
import {
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAILURE,
} from "./ActionType";
import api, { API_BASE_URL } from "../../config/apiConfig";

// Action to update the profile
export const updateProfile = (profileData) => async (dispatch) => {
  console.log("heeeeee", profileData);
  dispatch({ type: UPDATE_PROFILE_REQUEST });

  try {
    const jwt = localStorage.getItem("jwt");

    const response = await api.put("/users/update", profileData, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });

    dispatch({
      type: UPDATE_PROFILE_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_PROFILE_FAILURE,
      payload: error.response ? error.response.data : { error: error.message },
    });
  }
};
