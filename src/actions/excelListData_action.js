
import { axiosPost, axiosGet } from "../react_axios/Axios"
import {
  platform, headers, getExhRegisterListExcelDataUrl, GET_EXCEL_DATA_ACTION_TYPE
} from "../utils/constants"

export const getExcelListData_action = (exhibitionID) => async (dispatch) => {
    try {
  
      const mapdata = {
        exhibitionID: exhibitionID,
  }
  
      const res = await axiosGet(getExhRegisterListExcelDataUrl, mapdata, headers);
      dispatch({
        type: GET_EXCEL_DATA_ACTION_TYPE,
        payload: res,
      });
  
      return Promise.resolve(res);
    } catch (err) {
      return Promise.reject(err);
    }
  };