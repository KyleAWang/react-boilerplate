import { cancel, take, put, takeLatest } from 'redux-saga/effects';
import { createMockTask } from 'redux-saga/lib/utils';
import { LOCATION_CHANGE } from 'react-router-redux';

import { LOAD_ORDERS } from '../constants';
import { loadOrdersSuccess, loadOrdersError } from '../actions';
import { getOrders, ordersData } from '../sagas';

describe('getOrders Saga', () => {
  let getOrdersGenerator;

  beforeEach(() => {
    getOrdersGenerator = getOrders();

    const callDescriptor = getOrdersGenerator.next().value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it('should dispatch the loadOrdersSuccess action if it requests the data successfully', () => {
    const response = {
      data: {
        orders: [{
          orderId: '333',
        }, {
          orderId: '444',
        }],
      },
    };
    const putDescriptor = getOrdersGenerator.next(response).value;
    expect(putDescriptor).toEqual(put(loadOrdersSuccess(response.data.orders)));
  });

  it('should call the loadOrdersError action if the response errors', () => {
    const response = new Error('Some error');
    const putDescriptor = getOrdersGenerator.throw(response).value;
    expect(putDescriptor).toEqual(put(loadOrdersError(response)));
  });
});

describe('ordersData Saga', () => {
  const ordersDataSaga = ordersData();
  const mockedTask = createMockTask();

  it('should start task to watch for LOAD_ORDERS action', () => {
    const takeLatestDescriptor = ordersDataSaga.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(LOAD_ORDERS, getOrders));
  });

  it('should yield until loaction change action', () => {
    const takeDescriptior = ordersDataSaga.next(mockedTask).value;
    expect(takeDescriptior).toEqual(take(LOCATION_CHANGE));
  });

  it('should cancel the forked task when LOCATION_CHANGE happens', () => {
    const cancelDescriptor = ordersDataSaga.next().value;
    expect(cancelDescriptor).toEqual(cancel(mockedTask));
  });
});
