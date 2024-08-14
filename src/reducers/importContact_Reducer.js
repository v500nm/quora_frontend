import { CONTACT_BULK_UPDATE_ACTION_TYPE, IMPORT_CONTACT_ACTION_TYPE, IMPORT_CONTACT_LIST_ACTION_TYPE, IMPORT_FIELDS_ACTION_TYPE } from "../utils/constants";

const initialState = [];

function importContactReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case IMPORT_CONTACT_ACTION_TYPE:
      return [...state, payload];
    case IMPORT_FIELDS_ACTION_TYPE:
      return [...state, payload];
    case IMPORT_CONTACT_LIST_ACTION_TYPE:
      return [...state, payload];
    case CONTACT_BULK_UPDATE_ACTION_TYPE:
      return [...state, payload];
    default:
      return state; 
  }
}

export default importContactReducer;
