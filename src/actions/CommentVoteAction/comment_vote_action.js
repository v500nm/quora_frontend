import { axiosGet, axiosPost } from "../../react_axios/Axios";
import {
    ADD_COMMENT_ACTION_TYPE,
    ADD_VOTE_ACTION_TYPE,
    addCommentUrl,
    addVoteUrl,
    DELETE_COMMENT_ACTION_TYPE,
    deleteCommentUrl,
  headers,
  VIEW_COMMENT_FOR_ANSWERS_ACTION_TYPE,
  viewCommentforAnswersUrl,
} from "../../utils/constants";

export const add_comment_action =
  (AnswerID, Content) => async (dispatch) => {
    try {
      const mapdata = {
        UserID: sessionStorage.getItem("UserID"),
        AnswerID: AnswerID,
        Content: Content,
      };
      console.log("data----------", mapdata);
      const res = await axiosPost(addCommentUrl, mapdata, headers);
      dispatch({
        type: ADD_COMMENT_ACTION_TYPE,
        payload: res,
      });

      return Promise.resolve(res);
    } catch (err) {
      return Promise.reject(err);
    }
  };

  export const add_vote_action =
  (AnswerID, IsUpvote) => async (dispatch) => {
    try {
      const mapdata = {
        UserID: sessionStorage.getItem("UserID"),
        AnswerID: AnswerID,
        IsUpvote: IsUpvote,
      };
      console.log("data----------", mapdata);
      const res = await axiosPost(addVoteUrl, mapdata, headers);
      dispatch({
        type: ADD_VOTE_ACTION_TYPE,
        payload: res,
      });

      return Promise.resolve(res);
    } catch (err) {
      return Promise.reject(err);
    }
  };

export const view_comment_for_answers_action = (AnswerID) => async (dispatch) => {
  try {
    const mapdata = {
      UserID: sessionStorage.getItem("UserID"),
      AnswerID: AnswerID,
    };
    console.log("data----------", mapdata);
    const res = await axiosGet(viewCommentforAnswersUrl, mapdata, headers);
    dispatch({
      type: VIEW_COMMENT_FOR_ANSWERS_ACTION_TYPE,
      payload: res,
    });

    return Promise.resolve(res);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const delete_comment_action = ( CommentID) => async (dispatch) => {
    try {
      const mapdata = {
        UserID: sessionStorage.getItem("UserID"),
        CommentID: CommentID,
      };
      console.log("data----------", mapdata);
      const res = await axiosGet(deleteCommentUrl, mapdata, headers);
      dispatch({
        type: DELETE_COMMENT_ACTION_TYPE,
        payload: res,
      });
  
      return Promise.resolve(res);
    } catch (err) {
      return Promise.reject(err);
    }
  };


