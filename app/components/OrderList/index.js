import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import List from 'components/List';
import MyList from 'components/MyList';
import OrderListItem from 'containers/OrderListItem';

function OrdersList({ loading, error, orders }) {
  if (loading){
    return '';
  }

  if (error !== false){
    return 'error';
  }

  if (orders !== false){
    return <MyList component={OrderListItem} items={orders}/>;
  }
  return null;
}

OrdersList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  orders: PropTypes.any,
};

export default OrdersList;
