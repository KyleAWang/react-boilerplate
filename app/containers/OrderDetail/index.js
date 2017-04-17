import React from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
// import { makeSelectLoading, makeSelectError } from 'containers/App/selectors';
import { createStructuredSelector } from 'reselect';
import { browserHistory } from 'react-router';
import { makeSelectOrder } from './selectors';
import { loadOrderDetail } from './actions';

export class OrderDetail extends React.Component {

  componentDidMount() {
    if (this.props.params.order_id != null) {
      this.props.onLoadOrder(this.props.params.order_id);
    }
  }

  render() {
    let detailDiv = null;
    if (this.props.order) {
      detailDiv = <div>{this.props.order.orderId}, {this.props.order.totalCost}, {this.props.order.updated}</div>;
    }

    return (
      <div>
        <Helmet
          title="Order Detail"
          meta={[
            { name: 'description', content: 'Order Detail' },
          ]}
        />
        <div><button onClick={browserHistory.goBack}>Go Back</button></div>

        Order Detail: {this.props.params.order_id}
        {detailDiv}
      </div>
    );
  }

}

OrderDetail.propTypes = {
  // loading: React.PropTypes.bool,
  // error: React.PropTypes.oneOfType([
  //   React.PropTypes.object,
  //   React.PropTypes.bool,
  // ]),
  order: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]),
  params: React.PropTypes.object,
  onLoadOrder: React.PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  order: makeSelectOrder(),
  // loading: makeSelectLoading(),
  // error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onLoadOrder: (orderId) => dispatch(loadOrderDetail(orderId)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetail);
