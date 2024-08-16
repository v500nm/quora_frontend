import { axiosPost } from "../../react_axios/Axios";
import {
  loginUrl,
  registerUrl,
  REGISTER_ACTION_TYPE,
  LOGIN_ACTION_TYPE,
  headers,
} from "../../utils/constants";

export const login_action = (Email, password) => async (dispatch) => {
  try {
    const mapdata = {
      Email: Email,
      Password: password,
    };
    console.log("data----------", mapdata);
    const res = await axiosPost(loginUrl, mapdata, headers);
    dispatch({
      type: LOGIN_ACTION_TYPE,
      payload: res,
    });

    return Promise.resolve(res);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const register_action =
  (UserName, Email, password) => async (dispatch) => {
    try {
      const mapdata = {
        UserName: UserName,
        Email: Email,
        Password: password,
      };
      console.log("data----------", mapdata);
      const res = await axiosPost(registerUrl, mapdata, headers);
      dispatch({
        type: REGISTER_ACTION_TYPE,
        payload: res,
      });

      return Promise.resolve(res);
    } catch (err) {
      return Promise.reject(err);
    }
  };
