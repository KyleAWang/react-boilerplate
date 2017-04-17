import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { FormattedNumber, FormattedDate, FormattedTime } from 'react-intl';
import { Link } from 'react-router';

import MyListItem from 'components/MyListItem';

export class OrderListItem extends React.PureComponent{
  render() {
    const item = this.props.item;

    const content = (
      <div key={item.orderId}>
        <Link
          to={`/order/${item.orderId}`}>
          {item.orderId}
        </Link>&nbsp;
        <FormattedNumber value={item.totalCost}
                         style='currency'
                         currency='USD'/>&nbsp;
        <FormattedTime
          value={item.updated}/>&nbsp;
        <FormattedDate
          value={item.updated}
          year='numeric'
          month='long'
          day='2-digit'/>
      </div>
    );

    return (<MyListItem key={`list-item-${item.orderId}`}  item={content} />);
  };
}

OrderListItem.propTypes = {
  item: React.PropTypes.object,
};

export default OrderListItem;
