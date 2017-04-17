import React from 'react';
import { mount } from 'enzyme';
import { IntlProvider } from 'react-intl';

import { mapDispatchToProps, OrderDetail } from '../index';
import { loadOrderDetail } from '../actions';

describe('<OrderDetail />', () => {
  it('should render fetch the order on mount if orderId exists', () => {
    const submitSpy = jest.fn();
    const ps = {
      order_id: '333',
    };
    mount(
      <IntlProvider locale="en">
        <OrderDetail
          order={false}
          params={ps}
          onLoadOrder={submitSpy}
        />
      </IntlProvider>
    );
    expect(submitSpy).toHaveBeenCalled();
  });

  describe('mapDispatchToProps', () => {
    describe('onLoadOrder', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onLoadOrder).toBeDefined();
      });

      it('should dispatch onLoadOrder when called', () => {
        const dispatch = jest.fn();
        const orderId = '333';
        const result = mapDispatchToProps(dispatch);
        result.onLoadOrder(orderId);
        expect(dispatch).toHaveBeenCalledWith(loadOrderDetail(orderId));
      });
    });
  });
});
