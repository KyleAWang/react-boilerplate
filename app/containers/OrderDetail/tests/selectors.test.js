import { fromJS } from 'immutable';

import {
  selectOrder,
  makeSelectOrder,
} from '../selectors';

describe('selectOrderDetail', () => {
  it('should select the order detail state', () => {
    const orderDetailState = fromJS({
      order: {},
    });
    const mockedState = fromJS({
      order: orderDetailState,
    });
    expect(selectOrder(mockedState)).toEqual(orderDetailState);
  });

  describe('makeSelectOrder', () => {
    const orderSelector = makeSelectOrder();
    it('should select the order', () => {
      const orderDetailState = fromJS({
        order: {},
      });
      const mockedState = fromJS({
        order: orderDetailState,
      });
      expect(orderSelector(mockedState)).toEqual(fromJS({}));
    });
  });
});
