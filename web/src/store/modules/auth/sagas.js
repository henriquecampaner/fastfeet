import { toast } from 'react-toastify';

import { all, takeLatest, call, put } from 'redux-saga/effects';

import api from '~/services/api';
import history from '~/services/history';

import { SignInFailure, SignInSuccess } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(SignInSuccess(token, user));

    history.push('/orders');
  } catch (error) {
    toast.error('User does not exist, check your information');
    yield put(SignInFailure());
  }
}

// export function* signIn({ payload }) {
//   const { email, password } = payload;

//   const response = yield call(api.post, 'sessions', {
//     email,
//     password,
//   });

//   const { token, user } = response.data;
//   console.tron.log(token);

//   api.defaults.headers.Authorization = `Bearer ${token}`;

//   yield put(SignInSuccess(token, user));

//   history.push('/orders');
// }

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function signOut() {
  history.push('/');
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
