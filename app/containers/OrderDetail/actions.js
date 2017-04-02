import {LOAD_ORDER_DETAIL, LOAD_ORDER_DETAIL_ERROR, LOAD_ORDER_DETAIL_SUCCESS} from './constants';

export function loadOrderDetail() {
  return {
    type: LOAD_ORDER_DETAIL
  };
};

export function loadOrderDetailSuccess(order) {
  return {
    type: LOAD_ORDER_DETAIL_SUCCESS,
    order
  };
}

export function loadOrderDetailError(error) {
  return {
    type: LOAD_ORDER_DETAIL_ERROR,
    error
  };
};
