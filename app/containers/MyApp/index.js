import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import {FormattedMessage} from 'react-intl';
import {loadOrders} from './actions';
import {makeSelectLoading, makeSelectError} from 'containers/App/selectors';
import { createStructuredSelector } from 'reselect';
import { makeSelectOrders } from './selectors';


export class MyApp extends React.Component {


  renderOrders(){
    if (!this.props.orders){
      return;
    }
    console.log(this.props.orders);
    return this.props.orders.map(order => {
      return (
        <div key={order.orderId}>{order.orderId}, {order.totalCost}, {order.updated}</div>
      )
    })
  }

  render() {

    console.log('my app index');
    const {loading, error, orders} = this.props;

    return (
      <div>
        <Helmet title="Personal App"
                meta={[
                  {name: 'description', content: 'Pesonal Application'}
                ]}
        />
        <h1>Hello my app</h1>
        <button onClick={this.props.onLoadOrders}> hit me </button>
        <div>
          {this.renderOrders()}
        </div>
      </div>
    );
  }
}

MyApp.propType = {
  loading: React.PropTypes.bool,
  error: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool
  ]),
  orders: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.bool,
  ]),
  onLoadOrders: React.PropTypes.func
};

export function mapDispatchToProps(dispatch) {
  return {
    onLoadOrders: () => dispatch(loadOrders())
  }
}


const mapStateToProps = createStructuredSelector({
  orders: makeSelectOrders(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyApp);
