import { axiosGet, axiosPost } from "../react_axios/Axios";
import {
  IMPORT_CONTACT_ACTION_TYPE,
  IMPORT_FIELDS_ACTION_TYPE,
  headers,
  importContactUrl,
  importFieldsUrl,
  CONTACT_BULK_UPDATE_ACTION_TYPE,
  bulkUpdateUrl,
  IMPORT_CONTACT_LIST_ACTION_TYPE,
  importContactsListUrl,
} from "../utils/constants";

export const importContactsAndBulkUpdateAction =
  (userid, Is_import_update, ImportContactFileName, contactData) =>
  async (dispatch) => {
    try {
      const mapdata = {
        UserID: userid,
        Is_import_update: Is_import_update,
        ImportContactFileName: ImportContactFileName,
        contactData: contactData,
      };
      const res = await axiosPost(importContactUrl, mapdata, headers);

      dispatch({
        type: IMPORT_CONTACT_ACTION_TYPE,
        payload: res.data,
      });

      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };

export const bulkUpdateAction = (userid, contactData) => async (dispatch) => {
  try {
    const mapdata = {
      UserID: userid,
      contactData: contactData,
    };
    const res = await axiosPost(bulkUpdateUrl, mapdata, headers);

    dispatch({
      type: CONTACT_BULK_UPDATE_ACTION_TYPE,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
export const importFieldAction = (userData) => async (dispatch) => {
  try {
    const { userid } = userData;

    const payload = {
      userid,
    };

    const res = await axiosGet(importFieldsUrl, payload, headers);

    dispatch({
      type: IMPORT_FIELDS_ACTION_TYPE,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
export const importContactListAction = (userid) => async (dispatch) => {
  try {
    const mapdata = {
      UserID: userid,
    };
    const res = await axiosGet(importContactsListUrl, mapdata, headers);

    dispatch({
      type: IMPORT_CONTACT_LIST_ACTION_TYPE,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
