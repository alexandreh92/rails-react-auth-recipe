import { call, put } from "redux-saga/effects";
import { actions as toastrActions } from "react-redux-toastr";
import { push } from "connected-react-router";

import api from "../../services/api";

import AuthActions from "../ducks/auth";

export function* signIn({ email, password }) {
  try {
    const response = yield call(api.post, "login", {
      user: { email, password }
    });

    localStorage.setItem("@Omni:token", response.data.token);

    yield put(AuthActions.signInSuccess(response.data.token));

    yield put(push("/"));
  } catch (error) {
    yield put(
      toastrActions.add({
        type: "error",
        title: "Falha no login",
        message: "Verifique seu e-mail/senha!"
      })
    );
  }
}

export function* signOut() {
  localStorage.removeItem("@Omni:token");
  yield put(push("/sign_in"));
}
