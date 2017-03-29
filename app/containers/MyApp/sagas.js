import { take, call, put, select, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { LOAD_ORDERS } from './constants';
import { loadOrders, loadOrdersSuccess, loadOrdersError } from './actions';

import request from 'utils/request';

export function* getOrders() {
  const requestURL = `http://localhost:3000/graphql?query={viewer{orderId,totalCost,updated}}`;

  try{
    const orders = yield call(request, requestURL);
    yield put(loadOrdersSuccess(orders))
  }catch (err){
    yield put(loadOrdersError(err));
  }
}

export function* ordersData() {
  const watcher = yield takeLatest(LOAD_ORDERS, getOrders);

  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export default {
  ordersData
}

