import { ADD_COMMENT_ACTION_TYPE, ADD_VOTE_ACTION_TYPE, DELETE_COMMENT_ACTION_TYPE, VIEW_COMMENT_FOR_ANSWERS_ACTION_TYPE } from "../../utils/constants";

const initialState = [];

function CommentVoteReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case VIEW_COMMENT_FOR_ANSWERS_ACTION_TYPE:
      return [...state, payload];
    case DELETE_COMMENT_ACTION_TYPE:
      return [...state, payload];
    case ADD_COMMENT_ACTION_TYPE:
      return [...state, payload];
    case ADD_VOTE_ACTION_TYPE:
      return [...state, payload];
    default:
      return state;
  }
}

export default CommentVoteReducer;
