import {
  applyMiddleware,
  legacy_createStore as createStore,
  combineReducers,
} from "redux";
import thunk from "redux-thunk";
import cartReducer from "./modules/reducers";

const reducer = combineReducers({ cart: cartReducer });
const store = createStore(reducer, applyMiddleware(thunk));

export default store;
