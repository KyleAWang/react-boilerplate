import React from 'react';
import { mount, shallow } from 'enzyme';
import { IntlProvider } from 'react-intl';

import { MyApp, mapDispatchToProps } from '../index';
import { loadOrders } from '../actions';

describe('<MyApp />', () => {
  it('should render hello', () => {
    const renderedComponent = shallow(
      <MyApp loading error={false} />
    );
    expect(renderedComponent.contains(<h1>Hello my app</h1>)).toEqual(true);
  });

  it('should render orders correctly', () => {
    const orders = [
      {
        orderId: '333',
        totalCost: 33,
        updated: '2018-12-12',
      },
    ];
    const renderedComponent = shallow(
      <MyApp orders={orders} onLoadOrders={() => {}} />
    );

    expect(renderedComponent.contains(`
      <div key={333}><Link to={'/order/333'}>{333}</Link>, {33}, {2018-12-12}
      </div>`
    )).toEqual(true);
  });

  it('should render empty order correctly', () => {
    const loadSpy = jest.fn();
    const renderedComponent = shallow(
      <MyApp orders={false} onLoadOrders={loadSpy} />
    );
    expect(renderedComponent.instance().renderOrders()).toEqual('');
  });

  it('should render fetch orders on mount', () => {
    const loadSpy = jest.fn();
    mount(
      <IntlProvider locale="en">
        <MyApp
          orders={false}
          onLoadOrders={loadSpy}
        />
      </IntlProvider>
    );
    expect(loadSpy).toHaveBeenCalled();
  });

  describe('mapDispatchToProps', () => {
    describe('onLoadOrders', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onLoadOrders).toBeDefined();
      });

      it('should dispatch loadOrders when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.onLoadOrders();
        expect(dispatch).toHaveBeenCalledWith(loadOrders());
      });
    });
  });
});
