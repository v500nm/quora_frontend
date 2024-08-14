
import { axiosPost, axiosGet } from "../react_axios/Axios"
import {
  platform, headers, lastSubmitAddUrl, LAST_SUBMIT_ADD_ACTION_TYPE
} from "../utils/constants"

export const lastSubmitAdd_action = (exhibitionID, exhRegistrationID) => async (dispatch) => {
    try {
  
      const mapdata = {
        exhibitionID: exhibitionID,
        exhRegistrationID: exhRegistrationID,
      }
  
      const res = await axiosPost(lastSubmitAddUrl, mapdata, headers);
      dispatch({
        type: LAST_SUBMIT_ADD_ACTION_TYPE,
        payload: res,
      });
  
      return Promise.resolve(res);
    } catch (err) {
      return Promise.reject(err);
    }
  };