import { fromJS } from 'immutable';
import {
  LOAD_ORDER_DETAIL,
  LOAD_ORDER_DETAIL_SUCCESS,
} from '../constants';

import {
  loadOrderDetail,
  loadOrderDetailSuccess,
} from '../actions';


describe('OrderDetail Action', () => {
  describe('loadOrders', () => {
    it('should return the correct type and passed orderId', () => {
      const orderId = '333';
      const expectedResult = {
        type: LOAD_ORDER_DETAIL,
        orderId,
      };
      expect(expectedResult).toEqual(loadOrderDetail(orderId));
    });
  });

  describe('loadOrdersSuccess', () => {
    it('should return the correct type and passed order detail', () => {
      const order = fromJS({
        orderId: '333',
      });
      const expectedResult = {
        type: LOAD_ORDER_DETAIL_SUCCESS,
        order,
      };
      expect(expectedResult).toEqual(loadOrderDetailSuccess(order));
    });
  });
});

