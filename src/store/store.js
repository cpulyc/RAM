import { createStore, applyMiddleware } from "redux";
import createRootReducer from "./rootReducer";
import { initialState } from "./InitialState";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  createRootReducer(),
  initialState,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);