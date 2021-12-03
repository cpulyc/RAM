import { EPISODES_GET_REQUEST, EPISODES_GET_SUCCESS } from "./types";

export function getEpisodesRequest() {
  return {
    type: EPISODES_GET_REQUEST
  };
}

export function getEpisodesSuccess(episodes) {
  return {
    type: EPISODES_GET_SUCCESS,
    episodes
  };
}