import { axiosGet, axiosPost } from "../react_axios/Axios"
import { fillListUrl, platform, FILL_LIST_ACTION_TYPE, headers } from "../utils/constants"

export const fill_action = (actionID, UserID, keyword, keyValue) => async (dispatch) => {

  try {
    const mapdata = {
      ActionID: actionID,
      UserID: UserID != '' ? UserID : localStorage.getItem("UserID"),
      keyword: keyword,
      keyValue: keyValue,
    }
    console.log('mapdata', mapdata)
    const res = await axiosGet(fillListUrl, mapdata, headers);

    dispatch({
      type: FILL_LIST_ACTION_TYPE,
      payload: res,
    });

    return Promise.resolve(res);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const fill_master_action = (actionID, exhibitionID, moduleID, keyValue, value) => async (dispatch) => {

  try {
    const mapdata = {
      ActionID: actionID,
      ExhibitionID: exhibitionID,
      ModuleID: moduleID,
      KeyValue: keyValue,
      Value: value,
      ExhRegistrationID: localStorage.getItem("sessionExhRegistrationID")
    }
    console.log('mapdata', mapdata)
    const res = await axiosGet(fillListUrl, mapdata);

    dispatch({
      type: FILL_LIST_ACTION_TYPE,
      payload: res,
    });

    return Promise.resolve(res);
  } catch (err) {
    return Promise.reject(err);
  }
};



