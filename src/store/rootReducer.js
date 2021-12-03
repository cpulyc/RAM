import { combineReducers } from "redux";
import { reducer as episodesReducer } from "../ducks/episodes/reducer";

export default () =>
  combineReducers({
    episodes: episodesReducer
  });