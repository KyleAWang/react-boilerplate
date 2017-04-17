import { take, put, call, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import request from 'utils/request';
import { LOAD_ORDER_DETAIL } from './constants';
import { loadOrderDetailSuccess, loadOrderDetailError } from './actions';


export function* getOrder(action) {
  const requestUrl = `http://localhost:3000/graphql?query={order(orderId:"${action.orderId}"){orderId,totalCost,updated}}`;

  try {
    const order = yield call(request, requestUrl);
    yield put(loadOrderDetailSuccess(order.data.order));
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
  orderData,
];
