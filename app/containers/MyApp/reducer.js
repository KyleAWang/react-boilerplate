import { fromJS } from 'immutable';
import { LOAD_ORDERS, LOAD_ORDERS_SUCCESS, LOAD_ORDERS_ERROR } from './constants';

const initialState = fromJS({
  loading: false,
  error: false,
  orders: false,
});

function orderReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_ORDERS:
      return state
        .set('loading', true)
        .set('error', false)
        .set('orders', false);
    case LOAD_ORDERS_SUCCESS:
      return state
        .set('orders', action.orders)
        .set('loading', false);
    case LOAD_ORDERS_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default orderReducer;
