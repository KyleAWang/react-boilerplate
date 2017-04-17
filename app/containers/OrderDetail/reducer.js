import { fromJS } from 'immutable';
import { LOAD_ORDER_DETAIL, LOAD_ORDER_DETAIL_SUCCESS, LOAD_ORDER_DETAIL_ERROR } from './constants';

const intialState = fromJS({
  loading: false,
  error: false,
  order: false,
});

function orderReducer(state = intialState, action) {
  switch (action.type) {
    case LOAD_ORDER_DETAIL:
      return state
        .set('loading', true)
        .set('error', false)
        .set('order', false);
    case LOAD_ORDER_DETAIL_SUCCESS:
      return state
        .set('loading', false)
        .set('error', false)
        .set('order', action.order);
    case LOAD_ORDER_DETAIL_ERROR:
      return state
        .set('loading', false)
        .set('error', action.error);
    default:
      return state;
  }
}

export default orderReducer;
