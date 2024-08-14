import { axiosPost, axiosGet } from "../react_axios/Axios"
import {
  platform, headers, DESCRIPTION_DETAILS_ACTION_TYPE, getdescriptionDetailsUrl, descriptionAddUrl, DESCRIPTION_ADD_ACTION_TYPE,
  descriptionUpdateUrl,DESCRIPTION_UPDATE_ACTION_TYPE ,getdescriptionTermsAndConditionUrl , DESCRIPTION_TERMSANDCONDITION_ACTION_TYPE,
  fetchAuthReport , DESCRIPTION_PREVIEW_ACTION_TYPE,reportName
} from "../utils/constants"


export const getdescriptionDetails_action = (ExhRegistrationID, ExhibitionID) => async (dispatch) => {
  try {
    const mapdata = {
      exhRegistrationID: ExhRegistrationID,
      exhibitionID: ExhibitionID,
    }

    const res = await axiosGet(getdescriptionDetailsUrl, mapdata, headers);
    dispatch({
      type: DESCRIPTION_DETAILS_ACTION_TYPE,
      payload: res,
    });

    return Promise.resolve(res);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const descriptionAdd_action = (exhibitionID, exhRegistrationID, comment, isClaim, isMfg, isRules) => async (dispatch) => {
  try {

    const mapdata = {
      ExhibitionID: exhibitionID,
      ExhRegistrationID: exhRegistrationID,
      Comment: comment,
      Claim: isClaim,
      Mfg: isMfg,
      Rules: isRules,
    }

    const res = await axiosPost(descriptionAddUrl, mapdata, headers);
    dispatch({
      type: DESCRIPTION_ADD_ACTION_TYPE,
      payload: res,
    });

    return Promise.resolve(res);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const descriptionUpdate_action = (exhibitionID, exhRegistrationID, comment, isClaim, isMfg, isRules) => async (dispatch) => {
  try {

    const mapdata = {
      ExhibitionID: exhibitionID,
      ExhRegistrationID: exhRegistrationID,
      Comment: comment,
      Claim: isClaim,
      Mfg: isMfg,
      Rules: isRules,
    }

    const res = await axiosPost(descriptionUpdateUrl, mapdata, headers);
    dispatch({
      type: DESCRIPTION_UPDATE_ACTION_TYPE,
      payload: res,
    });

    return Promise.resolve(res);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const getdescriptionTermsAndCondition_action = (ExhRegistrationID, ExhibitionID) => async (dispatch) => {
  try {
    const mapdata = {
      exhRegistrationID: ExhRegistrationID,
      exhibitionID: ExhibitionID,
    }

    const res = await axiosGet(getdescriptionTermsAndConditionUrl, mapdata, headers);
    dispatch({
      type: DESCRIPTION_TERMSANDCONDITION_ACTION_TYPE,
      payload: res,
    });

    return Promise.resolve(res);
  } catch (err) {
    return Promise.reject(err);
  }
};

// descriptionPreview_action

export const descriptionPreview_action = (exhRegistrationID) => async (dispatch) => {
  try {
      var list = [];
      const mapdata1 = {
          "ParameterName":"@ExhRegistrationID",
          "ParameterValue":exhRegistrationID,
          "ParameterDataType":"int"
      }
      
      list.push(mapdata1);

      const mapData = {
          "report_name": reportName,
          "parameter_details": list
      }

      const res = await axiosPost(fetchAuthReport, mapData);

      dispatch({
          type: DESCRIPTION_PREVIEW_ACTION_TYPE,
          payload: res,
      });

      return Promise.resolve(res);
  } catch (err) {
      return Promise.reject(err);
  }
};