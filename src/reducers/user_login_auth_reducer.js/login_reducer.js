import { LOGIN_ACTION_TYPE, CHANGE_PASSWORD_ACTION_TYPE, UPDATE_PASSWORD_ACTION_TYPE, FORGET_CHECKED_EMAIL_ACTION_TYPE,FORGET_GET_OTP_ACTION_TYPE, FORGET_UPDATE_PASSWORD_ACTION_TYPE  } from "../../utils/constants"


const initialState = [];

function loginReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_ACTION_TYPE:
      return [...state, payload];
    case CHANGE_PASSWORD_ACTION_TYPE:
      return [...state, payload];
    case UPDATE_PASSWORD_ACTION_TYPE:
      return [...state, payload];
    case FORGET_CHECKED_EMAIL_ACTION_TYPE:
      return [...state, payload];
    case FORGET_GET_OTP_ACTION_TYPE:
      return [...state, payload];
    case FORGET_UPDATE_PASSWORD_ACTION_TYPE:
      return [...state, payload];
    default:
      return state;
  }
};

export default loginReducer;