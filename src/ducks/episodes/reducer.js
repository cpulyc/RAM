import { EPISODES_GET_SUCCESS } from "./types";
import { initialState } from "../../store/InitialState";

export function reducer(state = initialState.episodes, action) {
  switch (action.type) {
    case EPISODES_GET_SUCCESS:
      return action.episodes;
    default:
      return state;
  }
}