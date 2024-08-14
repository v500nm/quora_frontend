import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducers';
const initialState = {};
const middleware = [thunk];

export default function configureStore() {
 return createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
 );
}