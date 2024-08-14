import { axiosPost } from "../../react_axios/Axios"
import { authUrl, platform, LOGIN_ACTION_TYPE, headers, changePasswordUrl, CHANGE_PASSWORD_ACTION_TYPE, updatePasswordUrl, UPDATE_PASSWORD_ACTION_TYPE, forgetCheckedEmailUrl, forgetGetOtpUrl, forgetUpdatePasswordUrl, FORGET_CHECKED_EMAIL_ACTION_TYPE, FORGET_GET_OTP_ACTION_TYPE, FORGET_UPDATE_PASSWORD_ACTION_TYPE } from "../../utils/constants"

export const login_action = (Email, password) => async (dispatch) => {

  try {
    const mapdata = {
      Email: Email,
      Password: password,
    }
    console.log("data----------", mapdata)
    const res = await axiosPost(authUrl, mapdata, headers);
    dispatch({
      type: LOGIN_ACTION_TYPE,
      payload: res,
    });

    return Promise.resolve(res);
  } catch (err) {
    return Promise.reject(err);
  }
};


export const changePassword_action = (oldPassword, newPassword) => async (dispatch) => {
  try {
    const mapdata = {
      loginUserID: parseInt(localStorage.getItem('UserId')),
      platform: platform,
      oldPassword: oldPassword.toString().trim(),
      newPassword: newPassword.toString().trim(),
    }
    const res = await axiosPost(changePasswordUrl, mapdata, headers);
    dispatch({
      type: CHANGE_PASSWORD_ACTION_TYPE,
      payload: res,
    });

    return Promise.resolve(res);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const updatePassword_action = (oldPassword, newPassword) => async (dispatch) => {
  try {
    const mapdata = {
      UserID: JSON.parse(localStorage.getItem('loginDataSS')).UserID,
      OldPassword: oldPassword.toString().trim(),
      NewPassword: newPassword.toString().trim(),
    }
    const res = await axiosPost(updatePasswordUrl, mapdata, headers);
    dispatch({
      type: UPDATE_PASSWORD_ACTION_TYPE,
      payload: res,
    });

    return Promise.resolve(res);
  } catch (err) {
    return Promise.reject(err);
  }
};

// login forget password

export const forgetCheckedEmail_action = (email) => async (dispatch) => {
  try {
    const mapdata = {
      UserID: null,
      EmailID: email.toString().trim(),
    }

    const res = await axiosPost(forgetCheckedEmailUrl, mapdata, headers);
    dispatch({
      type: FORGET_CHECKED_EMAIL_ACTION_TYPE,
      payload: res,
    });

    return Promise.resolve(res);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const forgetGetOtp_action = (email) => async (dispatch) => {
  try {
    const mapdata = {
      Email: email.toString().trim(),
    }

    const res = await axiosPost(forgetGetOtpUrl, mapdata, headers);
    dispatch({
      type: FORGET_GET_OTP_ACTION_TYPE,
      payload: res,
    });

    return Promise.resolve(res);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const forgetUpdatePassword_action = (password) => async (dispatch) => {
  try {
    const mapdata = {
      UserID: localStorage.getItem("userIdForget"),
      Password: password,
    }

    const res = await axiosPost(forgetUpdatePasswordUrl, mapdata, headers);
    dispatch({
      type: FORGET_UPDATE_PASSWORD_ACTION_TYPE,
      payload: res,
    });

    return Promise.resolve(res);
  } catch (err) {
    return Promise.reject(err);
  }
};

