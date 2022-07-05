import { combineReducers } from "redux";
import ListReducer from "./ListReducer";
import CardReducer from "./CardReducer";

export default combineReducers({
  lists: ListReducer,
  cards: CardReducer
})