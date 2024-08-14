import { axiosPost, axiosGet } from "../react_axios/Axios"
import {
  platform, headers,
  primaryChapterUrl, PRIMARY_CHAPTER_ADD_ACTION_TYPE, getPreviewDetailsUrl, PREVIEW_DETAILS_ACTION_TYPE, getDoubleStoreySSIUrl, GET_DOUBLE_STOREY_SSI, deleteSSiUrl, deleteTMMAITAMMAUrl, DELETE_TMMAITAMMA_CERTIFICATE, DELETE_SSI_CERTIFICATE,
} from "../utils/constants"


export const primaryChapterAdd_action = (ExhibitionID, exhRegistrationID, ExhibitionStallSizeID, StallArea, StallTypeID, OpenSides, chapterList, primaryChapterRadioId, isDoubleStorey, DoubleStoreyArea, isSSICertified, TMMA_ITAMMA, ExhRegistrationNo, isSSICertifiedFile, TMMA_ITAMMAFile, isSSICertifiedFiletype, TMMA_ITAMMAfileType, ssiFilepath, TMMA_ITAMMAfilepath) => async (dispatch) => {
  try {
    const mapdata = {
      ExhibitionID: ExhibitionID,
      ExhRegistrationID: exhRegistrationID,
      ExhibitionStallSizeID: ExhibitionStallSizeID,
      StallArea: StallArea,
      StallTypeID: StallTypeID,
      OpenSides: OpenSides,
      chapterList: chapterList,
      PrimaryChapter: primaryChapterRadioId,
      isDoubleStorey: isDoubleStorey,
      DoubleStoreyArea: DoubleStoreyArea,
      isSSICertified: isSSICertified,
      TMMA_ITAMMA: TMMA_ITAMMA,
      ExhRegistrationNo: ExhRegistrationNo,
      isSSICertifiedFile: isSSICertifiedFile,
      TMMA_ITAMMAFile: TMMA_ITAMMAFile,
      isSSICertifiedFiletype: isSSICertifiedFiletype,
      TMMA_ITAMMAfileType: TMMA_ITAMMAfileType,
      ssiFilepath: ssiFilepath,
      TMMA_ITAMMAfilepath: TMMA_ITAMMAfilepath,
    }
    console.log(mapdata)

    const res = await axiosPost(primaryChapterUrl, mapdata, headers);
    dispatch({
      type: PRIMARY_CHAPTER_ADD_ACTION_TYPE,
      payload: res,
    });

    return Promise.resolve(res);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const getPreviewDetails_action = (ExhRegistrationID, ExhibitionID) => async (dispatch) => {
  try {
    const mapdata = {
      ExhRegistrationID: ExhRegistrationID,
      ExhibitionID: ExhibitionID,
    }

    const res = await axiosGet(getPreviewDetailsUrl, mapdata, headers);
    dispatch({
      type: PREVIEW_DETAILS_ACTION_TYPE,
      payload: res,
    });

    return Promise.resolve(res);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const getDoubleStoreySSI_action = (ExhRegistrationID, ExhibitionID) => async (dispatch) => {
  try {
    // req.input('UserID', request.query.UserID);
    // req.input('ExhibitionID', request.query.ExhibitionID);
    // req.input('ExhRegistrationID', request.query.ExhRegistrationID);
    const mapdata = {
      UserID: 0,
      ExhRegistrationID: ExhRegistrationID,
      ExhibitionID: ExhibitionID,
    }

    const res = await axiosGet(getDoubleStoreySSIUrl, mapdata, headers);
    dispatch({
      type: GET_DOUBLE_STOREY_SSI,
      payload: res,
    });

    return Promise.resolve(res);
  } catch (err) {
    return Promise.reject(err);
  }
};


export const deleteSSicertificate_action = (ExhRegistrationID, ExhibitionID) => async (dispatch) => {
  try {
    const mapdata = {
      ExhRegistrationID: ExhRegistrationID,
      ExhibitionID: ExhibitionID,
    }

    const res = await axiosGet(deleteSSiUrl, mapdata, headers);
    dispatch({
      type: DELETE_SSI_CERTIFICATE,
      payload: res,
    });

    return Promise.resolve(res);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const deleteTMMAITAMMA_action = (ExhRegistrationID, ExhibitionID) => async (dispatch) => {
  try {
    const mapdata = {
      ExhRegistrationID: ExhRegistrationID,
      ExhibitionID: ExhibitionID,
    }

    const res = await axiosGet(deleteTMMAITAMMAUrl, mapdata, headers);
    dispatch({
      type: DELETE_TMMAITAMMA_CERTIFICATE,
      payload: res,
    });

    return Promise.resolve(res);
  } catch (err) {
    return Promise.reject(err);
  }
};