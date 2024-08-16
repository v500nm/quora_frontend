import { LOGIN_ACTION_TYPE, REGISTER_ACTION_TYPE  } from "../../utils/constants"


const initialState = [];

function loginReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_ACTION_TYPE:
      return [...state, payload];
      case REGISTER_ACTION_TYPE:
        return [...state, payload];
    default:
      return state;
  }
};

export default loginReducer;