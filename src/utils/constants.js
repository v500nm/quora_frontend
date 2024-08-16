import { axiosPost, axiosGet } from "../react_axios/Axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const BASE_URL = "http://localhost:9000";

//3.11...............................................
// export const BASE_URL = "http://192.168.3.11:9304/api";
export var REPORT_BASE_URL = `http://192.168.3.11:9201/doc`;


//..............................................................
export const sessionExpireMessage = "Session expired! Please login again.";
export const tokenInavlidMessage = "Token invalid";

// prod url with HTTPS.....................................................
// export var BASE_URL = `https://${window.location.host}/api`;
// prod url with HTTP only.....................................................
// export var BASE_URL = `http://${window.location.host}/api`;

// link for Download submitted undertaking for uat

export const fetchAuthReport = `${REPORT_BASE_URL}/report/SetParameterData`;
export const downloadReport = `${REPORT_BASE_URL}/WebForm/ItmeReportViewer.aspx`;

// export const reportName = "ExhibitorRegistration.rpt";
// export const bonafideDocName = "bonafideCertificate.rpt";

// auth
export const loginUrl = `${BASE_URL}/auth/loginUser`;
export const registerUrl = `${BASE_URL}/auth/registerUser`;

//QnA
export const viewAllQuestionsUrl = `${BASE_URL}/QnA/viewAllQuestions`;
export const viewAllQuestionsWithAnswersUrl = `${BASE_URL}/QnA/viewAllQuestionsWithAnswers`;
export const viewAnswersWithQuestionsUrl = `${BASE_URL}/QnA/viewAnswersWithQuestions`;
export const deleteQuestionUrl = `${BASE_URL}/QnA/deleteQuestion`;
export const deleteAnswerUrl = `${BASE_URL}/QnA/deleteAnswer`;
export const addQuestionUrl = `${BASE_URL}/QnA/addQuestion`;
export const addAnswerUrl = `${BASE_URL}/QnA/addAnswer`;

//CommentVote
export const viewCommentforAnswersUrl = `${BASE_URL}/CommentVote/viewCommentforAnswers`;
export const deleteCommentUrl = `${BASE_URL}/CommentVote/deleteComment`;
export const addCommentUrl = `${BASE_URL}/CommentVote/addComment`;
export const addVoteUrl = `${BASE_URL}/CommentVote/addVote`;


//  platform  name  const platform = window.navigator.platform
export const platform = window.navigator.platform;

//get user manual pdf download...............
export const userManualDownloadUrl = `${BASE_URL}/userManualDownload`;

export const headers = {
  Accept: "application/json, text/plain, */*", // It can be used to overcome cors errors
  "Content-Type": "application/json",
};

// registrationDeskListUrl, platform, REGISTRATION_DESK_LIST_ACTION_TYPE,

//action type start.....................

// login
export const LOGIN_ACTION_TYPE = "LOGIN";
export const REGISTER_ACTION_TYPE = "REGISTER";

//QnA
export const VIEW_ALL_QUESTIONS_ACTION_TYPE = "VIEW_ALL_QUESTIONS";
export const VIEW_ALL_QUESTIONS_WITH_ANSWERS_ACTION_TYPE = "VIEW_ALL_QUESTIONS_WITH_ANSWERS";
export const VIEW_ANSWERS_WITH_QUESTIONS_ACTION_TYPE = "VIEW_ANSWERS_WITH_QUESTIONS";
export const DELETE_QUESTION_ACTION_TYPE = "DELETE_QUESTION";
export const DELETE_ANSWER_ACTION_TYPE = "DELETE_ANSWER";
export const ADD_QUESTION_ACTION_TYPE = "ADD_QUESTION";
export const ADD_ANSWER_ACTION_TYPE = "ADD_ANSWER";

//CommentVote
export const VIEW_COMMENT_FOR_ANSWERS_ACTION_TYPE = "VIEW_COMMENT_FOR_ANSWERS";
export const DELETE_COMMENT_ACTION_TYPE = "DELETE_COMMENT";
export const ADD_COMMENT_ACTION_TYPE = "ADD_COMMENT";
export const ADD_VOTE_ACTION_TYPE = "ADD_VOTE";

//action type end..........................

// action ID name
export const cityActionId = "1";
export const countryActionId = "2";
export const stateActionId = "3";

export const appVersion = "1.0.0";
export const buildNumber = "20220511";
export const NA = "NA";

// for clear search fields
export const clearlocalStorage = (pageName) => {
  if (pageName === "registrationDesk") {
  }
};

const registrationDeskSS = () => {
  localStorage.setItem("campIdRDSS", "Select");
  localStorage.setItem("campDateRDSS", "");
};

export const sort = (list, tableValue, isSort) => {
  isSort = !isSort;
  if (!isSort) {
    // sorting
    var sort = list.sort((a, b) => {
      const nameA = tableValue.toUpperCase(); // ignore upper and lowercase
      const nameB = tableValue.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    // this.setState({list : sort})
    var data = [sort, !sort];
    return data;
  } else {
    // reverse
    var sort = list.sort((a, b) => {
      const nameA = tableValue.toUpperCase(); // ignore upper and lowercase
      const nameB = tableValue.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return 1;
      }
      if (nameA > nameB) {
        return -1;
      }
      return 0;
    });
    // this.setState({list : sort})
    var data = [sort, !sort];
    return data;
  }
  // this.setState({isToDateSort : !isToDateSort})
};

export const toastError = (msg) => {
  toast.error(msg, {
    theme: "colored",
    autoClose: 3000,
    hideProgressBar: true,
    position: "top-center",
  });
};

export const toastSuccess = (msg) => {
  toast.success(msg, {
    theme: "colored",
    autoClose: 1000,
    hideProgressBar: true,
  });
};

export function timeout(delay) {
  return new Promise((res) => setTimeout(res, delay));
}

//Role and report module id's
export const Dashboard = 30;
export const Contact = 31;
export const Campaign = 32;
export const Report = 33;
export const Master = 34;
