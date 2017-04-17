import { fromJS } from 'immutable';

import {
  selectMyApp,
  makeSelectOrders,
} from '../selectors';

describe('selectMyApp', () => {
  it('should select the orders state', () => {
    const orderState = fromJS({
      orders: {},
    });
    const mockedState = fromJS({
      orders: orderState,
    });
    expect(selectMyApp(mockedState)).toEqual(orderState);
  });
});

describe('makeSelectOrders', () => {
  const orderSelector = makeSelectOrders();
  it('should select orders', () => {
    const orderState = fromJS({
      orders: {},
    });
    const mockedState = fromJS({
      orders: orderState,
    });
    expect(orderSelector(mockedState)).toEqual(fromJS({}));
  });
});
