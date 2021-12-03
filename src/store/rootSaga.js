import { call, all } from "redux-saga/effects";
import { getEpisodes } from "../ducks/episodes/sagas";

export default function* () {
  yield all([call(getEpisodes)]);
}