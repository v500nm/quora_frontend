import { combineReducers } from 'redux';
import loginReducer from './user_login_auth_reducer.js/login_reducer';
import QnAReducer from './QnA_Reducer/QnA_reducer';
import CommentVoteReducer from './CommentVote_Reducer/CommentVote_reducer';

export default combineReducers({
    loginReducer,qna:QnAReducer,CommentVoteReducer
});