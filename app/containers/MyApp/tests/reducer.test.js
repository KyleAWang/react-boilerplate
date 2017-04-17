import { fromJS } from 'immutable';
import myappReducer from '../reducer';
import { loadOrders, loadOrdersError, loadOrdersSuccess } from '../actions';

describe('myappReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      loading: false,
      error: false,
      orders: false,
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(myappReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the loadOrders action correctly', () => {
    const expectedResult = state.set('loading', true);
    expect(myappReducer(state, loadOrders())).toEqual(expectedResult);
  });

  it('should handle the loadOrdersSuccess action correctly', () => {
    const orders = { orderId: '333' };
    const expectedResult = state
      .set('loading', false)
      .set('orders', orders);

    expect(myappReducer(state, loadOrdersSuccess(orders))).toEqual(expectedResult);
  });

  it('should handle the loadOrderError action correctly', () => {
    const fixture = {
      msg: 'Not found',
    };
    const expectedResult = state
      .set('error', fixture)
      .set('loading', false);
    expect(myappReducer(state, loadOrdersError(fixture))).toEqual(expectedResult);
  });
});
