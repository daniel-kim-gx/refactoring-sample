import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import counterReducer, { counterSaga } from "./reducers";

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer: counterReducer,
  middleware: [...getDefaultMiddleware(), sagaMiddleware],
});

sagaMiddleware.run(counterSaga);
