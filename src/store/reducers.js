import { createSlice } from "@reduxjs/toolkit";
import { takeLatest, put, call } from "redux-saga/effects";
import * as API from "../apis/counter";

const initialState = {
  value: 0,
  isLoading: false,
  error: null,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increase(state) {
      state.value++;
    },
    decrease(state) {
      state.value--;
    },

    asyncRequest(state) {
      state.isLoading = true;
    },
    asyncSuccess(state, action) {
      state.isLoading = false;
      state.value = action.payload;
    },
    asyncFail(state, action) {
      state.error = action.payload;
    },
  },
});

export const {
  increase,
  decrease,
  asyncRequest,
  asyncFail,
  asyncSuccess,
} = counterSlice.actions;

export default counterSlice.reducer;

export function* counterSaga() {
  yield takeLatest(asyncRequest, function* saga(action) {
    try {
      const response = yield call(API.call, action.payload);
      yield put(asyncSuccess(response.data));
    } catch (e) {
      yield put(asyncFail(e));
    }
  });
}
