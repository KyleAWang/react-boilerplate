import { take, call, put, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import request from 'utils/request';
import { LOAD_ORDERS } from './constants';
import { loadOrdersSuccess, loadOrdersError } from './actions';
// import { makeSelectOrders } from './selectors';


export function* getOrders() {
  const requestURL = 'http://localhost:3000/graphql?query={orders{orderId,totalCost,updated}}';

  try {
    const orders = yield call(request, requestURL);
    yield put(loadOrdersSuccess(orders.data.orders));
  } catch (err) {
    yield put(loadOrdersError(err));
  }
}

export function* ordersData() {
  const watcher = yield takeLatest(LOAD_ORDERS, getOrders);

  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export default [
  ordersData,
];

