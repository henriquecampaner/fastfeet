import { takeLatest, put, all, call } from 'redux-saga/effects';

import api from '~/services/api';

import { orderSuccess } from './actions';

export function* orderDetails(payload) {
  const { data: id } = payload;
  console.tron.log('id', id);
  const { data } = yield call(api.get, `/orders/${id}`);
  console.tron.log(data);

  yield put(orderSuccess(data));
}

export default all([takeLatest('@order/ORDER_REQUEST', orderDetails)]);
