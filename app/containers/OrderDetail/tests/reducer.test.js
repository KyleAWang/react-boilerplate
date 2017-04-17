import { fromJS } from 'immutable';

import orderDetailReducer from '../reducer';
import {
  loadOrderDetail,
  loadOrderDetailSuccess,
  loadOrderDetailError,
} from '../actions';

describe('orderDetailReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      loading: false,
      error: false,
      order: false,
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(expectedResult).toEqual(orderDetailReducer(undefined, {}));
  });

  it('should handle the loadOrderDetail action correctly', () => {
    const expectedResult = state.set('loading', true);
    expect(orderDetailReducer(state, loadOrderDetail())).toEqual(expectedResult);
  });

  it('should handle the loadOrderDetailSuccess action correctly', () => {
    const order = {
      order_id: '333',
    };
    const expectedResult = state
      .set('order', order);
    expect(orderDetailReducer(state, loadOrderDetailSuccess(order))).toEqual(expectedResult);
  });

  it('should handle the loadOrderDetailError action correctly', () => {
    const fixture = {
      msg: 'Not found',
    };
    const expectedResult = state
      .set('loading', false)
      .set('error', fixture);
    expect(orderDetailReducer(state, loadOrderDetailError(fixture))).toEqual(expectedResult);
  });
});
