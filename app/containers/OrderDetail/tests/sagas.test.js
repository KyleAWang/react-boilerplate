import { cancel, take, put, takeLatest } from 'redux-saga/effects';
import { createMockTask } from 'redux-saga/lib/utils';
import { LOCATION_CHANGE } from 'react-router-redux';

import { LOAD_ORDER_DETAIL } from '../constants';
import { loadOrderDetailSuccess, loadOrderDetailError } from '../actions';
import { getOrder, orderData } from '../sagas';

describe('getOrder Saga', () => {
  let getOrderGenerator;
  const action = {
    orderId: '333',
  };

  beforeEach(() => {
    getOrderGenerator = getOrder(action);
    const callDescriptor = getOrderGenerator.next().value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it('should dispatch the loadOrderDetailSuccess action if it requests the data successfully', () => {
    const response = {
      data: {
        orderId: '333',
      },
    };
    const putDescriptor = getOrderGenerator.next(response).value;
    expect(putDescriptor).toEqual(put(loadOrderDetailSuccess(response.data.order)));
  });

  it('should call the loadOrderDetailError action if the response errors', () => {
    const response = new Error('Some error');
    const putDescriptor = getOrderGenerator.throw(response).value;
    expect(putDescriptor).toEqual(put(loadOrderDetailError(response)));
  });
});

describe('orderData Saga', () => {
  const orderDataSaga = orderData();
  const mockedTask = createMockTask();

  it('should start task to watch for LOAD_ORDER_DETAIL action', () => {
    const takeLatestDescriptor = orderDataSaga.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(LOAD_ORDER_DETAIL, getOrder));
  });

  it('should yield until LOCATION_CHANGE action', () => {
    const takeDesciptor = orderDataSaga.next(mockedTask).value;
    expect(takeDesciptor).toEqual(take(LOCATION_CHANGE));
  });

  it('should cancel the forked task when LOCATION_CHANGE happens', () => {
    const cancelDescriptor = orderDataSaga.next().value;
    expect(cancelDescriptor).toEqual(cancel(mockedTask));
  });
});
