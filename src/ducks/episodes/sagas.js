import { call, put, takeLatest } from "redux-saga/effects";
import { EPISODES_GET_REQUEST } from "./types";
import * as services from "./services";
import { getEpisodesSuccess } from "./actions";
import { apiParameters } from "../../constants/apiParameters";

export function* getEpisodesSaga() {
  try {
    let episodesAcc = [];

    let episodes = yield call(services.getEpisodes, apiParameters.PAGE1);
    episodesAcc.push(...episodes.results);

    episodes = yield call(services.getEpisodes, apiParameters.PAGE2);
    episodesAcc.push(...episodes.results);

    episodes = yield call(services.getEpisodes, apiParameters.PAGE3);
    episodesAcc.push(...episodes.results);

    episodes.results = episodesAcc;
    yield put(getEpisodesSuccess(episodes));
  } catch (error) {
    return { error };
  }
}

export function* getEpisodes(parameters) {
  yield takeLatest(EPISODES_GET_REQUEST, getEpisodesSaga);
}
