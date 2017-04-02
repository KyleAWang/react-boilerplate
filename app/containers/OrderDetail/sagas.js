import { take, put, call, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { LOAD_ORDER_DETAIL } from './constants';
import { loadOrderDetail, loadOrderDetailSuccess, loadOrderDetailError } from './actions';

import request from 'utils/request';

export function* getOrder () {
  const requestUrl = `http://localhost:3000/graphql?query={order(orderId:){orderId,totalCost,updated}}`;

  try{
    const order = yield call(request, requestUrl);
    yield put(loadOrderDetailSuccess(order));
  } catch (err) {
    yield put(loadOrderDetailError(err));
  }
}

export function* orderData() {
  const watcher = yield takeLatest(LOAD_ORDER_DETAIL, getOrder);

  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export default [
  orderData
]
