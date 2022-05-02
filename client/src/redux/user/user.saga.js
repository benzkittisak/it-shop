import { takeLatest, put, all, call } from "redux-saga/effects";
import axios from "axios";

import { signInFailure, signInSuccess } from "./user.actions";
import userActionTypes from "./user.types";

export function* signIn({payload:{username , password}}) {

  try {
    var data;
    yield axios
      .get(`http://localhost:4000/api/member/login/${username}/${password}`)
      .then((res) => (data = res.data));
      console.log(username , password);
    yield put(signInSuccess(data));
  } catch (e) {
    yield put(signInFailure(e));
  }
}

export function* onSignInStart() {
  yield takeLatest(userActionTypes.SIGN_IN_START, signIn);
}

export function* userSaga() {
  yield all([call(onSignInStart)]);
}
