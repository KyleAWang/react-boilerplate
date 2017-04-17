import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router';
import { makeSelectLoading, makeSelectError } from 'containers/App/selectors';
import { loadOrders } from './actions';
import { makeSelectOrders } from './selectors';
import OrdersList from 'components/OrderList';


export class MyApp extends React.Component {
  componentDidMount() {
    this.props.onLoadOrders();
  }

  // renderOrders() {
  //   if (this.props.orders) {
  //     return this.props.orders.map((order) => <div key={order.orderId}><Link to={`/order/${order.orderId}`}>
  //       {order.orderId}</Link>, {order.totalCost}, {order.updated}</div>);
  //   }
  //   return '';
  // }

  render() {
    const { loading, error, orders } = this.props;
    const orderListProps = {
      loading,
      orders,
      error,
    };

    return (
      <div>
        <Helmet
          title="Personal App"
          meta={[
            { name: 'description', content: 'Pesonal Application' },
          ]}
        />
        <h1>Hello my app</h1>
        <div>
          {/*{this.renderOrders()}*/}
          <OrdersList {...orderListProps} />
        </div>
      </div>
    );
  }
}

MyApp.propTypes = {
  loading: React.PropTypes.bool,
  error: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool
  ]),
  orders: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.bool,
  ]),
  onLoadOrders: React.PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onLoadOrders: () => dispatch(loadOrders()),
  };
}


const mapStateToProps = createStructuredSelector({
  orders: makeSelectOrders(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyApp);
