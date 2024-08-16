import {
  ADD_ANSWER_ACTION_TYPE,
  ADD_QUESTION_ACTION_TYPE,
  DELETE_ANSWER_ACTION_TYPE,
  DELETE_QUESTION_ACTION_TYPE,
  VIEW_ALL_QUESTIONS_ACTION_TYPE,
  VIEW_ALL_QUESTIONS_WITH_ANSWERS_ACTION_TYPE,
  VIEW_ANSWERS_WITH_QUESTIONS_ACTION_TYPE,
} from "../../utils/constants";

const initialState = {
  feedItems: [],
};

function QnAReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case VIEW_ALL_QUESTIONS_ACTION_TYPE:
    case VIEW_ALL_QUESTIONS_WITH_ANSWERS_ACTION_TYPE:
    case VIEW_ANSWERS_WITH_QUESTIONS_ACTION_TYPE:
      return {
        ...state,
        feedItems: payload,
      };

    case DELETE_QUESTION_ACTION_TYPE:
      return {
        ...state,
        feedItems: state.feedItems.filter(
          (item) => item.QuestionID !== payload.QuestionID
        ),
      };

    case DELETE_ANSWER_ACTION_TYPE:
      return state;

    case ADD_QUESTION_ACTION_TYPE:
      return {
        ...state,
        feedItems: [payload, ...state.feedItems],
      };

    case ADD_ANSWER_ACTION_TYPE:
      return state;

    default:
      return state;
  }
}

export default QnAReducer;
