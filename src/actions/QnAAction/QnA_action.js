import { axiosGet, axiosPost } from "../../react_axios/Axios";
import {
    ADD_ANSWER_ACTION_TYPE,
    ADD_QUESTION_ACTION_TYPE,
    addAnswerUrl,
    addQuestionUrl,
  DELETE_ANSWER_ACTION_TYPE,
  DELETE_QUESTION_ACTION_TYPE,
  deleteAnswerUrl,
  deleteQuestionUrl,
  headers,
  VIEW_ALL_QUESTIONS_ACTION_TYPE,
  VIEW_ALL_QUESTIONS_WITH_ANSWERS_ACTION_TYPE,
  VIEW_ANSWERS_WITH_QUESTIONS_ACTION_TYPE,
  VIEW_COMMENT_FOR_ANSWERS_ACTION_TYPE,
  viewAllQuestionsUrl,
  viewAllQuestionsWithAnswersUrl,
  viewAnswersWithQuestionsUrl,
  viewCommentforAnswersUrl,
} from "../../utils/constants";

export const add_question_action =
  (Title, Content) => async (dispatch) => {
    try {
      const mapdata = {
        UserID: sessionStorage.getItem("UserID"),
        Title: Title,
        Content: Content,
      };
      console.log("data----------", mapdata);
      const res = await axiosPost(addQuestionUrl, mapdata, headers);
      dispatch({
        type: ADD_QUESTION_ACTION_TYPE,
        payload: res,
      });

      return Promise.resolve(res);
    } catch (err) {
      return Promise.reject(err);
    }
  };

  export const add_answer_action =
  (QuestionID, Content) => async (dispatch) => {
    try {
      const mapdata = {
        UserID: sessionStorage.getItem("UserID"),
        QuestionID: QuestionID,
        Content: Content,
      };
      console.log("data----------", mapdata);
      const res = await axiosPost(addAnswerUrl, mapdata, headers);
      dispatch({
        type: ADD_ANSWER_ACTION_TYPE,
        payload: res,
      });

      return Promise.resolve(res);
    } catch (err) {
      return Promise.reject(err);
    }
  };

export const view_all_questions_action = (Title) => async (dispatch) => {
  console.log(Title,"Search")
  try {
    const mapdata = {
      UserID: sessionStorage.getItem("UserID"),
      Title:Title!=""?Title:null
    };
    console.log("data----------", mapdata);
    const res = await axiosGet(viewAllQuestionsUrl, mapdata, headers);
    dispatch({
      type: VIEW_ALL_QUESTIONS_ACTION_TYPE,
      payload: res,
    });

    return Promise.resolve(res);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const view_all_questions_with_answers_action = () => async (dispatch) => {
    try {
      const mapdata = {
        UserID: sessionStorage.getItem("UserID")
      };
      console.log("data----------", mapdata);
      const res = await axiosGet(viewAllQuestionsWithAnswersUrl, mapdata, headers);
      dispatch({
        type: VIEW_ALL_QUESTIONS_WITH_ANSWERS_ACTION_TYPE,
        payload: res,
      });
  
      return Promise.resolve(res);
    } catch (err) {
      return Promise.reject(err);
    }
  };

  export const view_answers_with_questions_action = (QuestionID) => async (dispatch) => {
    try {
      const mapdata = {
        UserID: sessionStorage.getItem("UserID"),
        QuestionID: QuestionID!=""?QuestionID:null,
      };
      console.log("data----------", mapdata);
      const res = await axiosGet(viewAnswersWithQuestionsUrl, mapdata, headers);
      dispatch({
        type: VIEW_ANSWERS_WITH_QUESTIONS_ACTION_TYPE,
        payload: res,
      });
  
      return Promise.resolve(res);
    } catch (err) {
      return Promise.reject(err);
    }
  };

export const delete_question_action = ( QuestionID) => async (dispatch) => {
    try {
      const mapdata = {
        UserID: sessionStorage.getItem("UserID"),
        QuestionID: QuestionID,
      };
      console.log("data----------", mapdata);
      const res = await axiosGet(deleteQuestionUrl, mapdata, headers);
      dispatch({
        type: DELETE_QUESTION_ACTION_TYPE,
        payload: res,
      });
  
      return Promise.resolve(res);
    } catch (err) {
      return Promise.reject(err);
    }
  };

  export const delete_answer_action = ( AnswerID) => async (dispatch) => {
    try {
      const mapdata = {
        UserID: sessionStorage.getItem("UserID"),
        AnswerID: AnswerID,
      };
      console.log("data----------", mapdata);
      const res = await axiosGet(deleteAnswerUrl, mapdata, headers);
      dispatch({
        type: DELETE_ANSWER_ACTION_TYPE,
        payload: res,
      });
  
      return Promise.resolve(res);
    } catch (err) {
      return Promise.reject(err);
    }
  };

