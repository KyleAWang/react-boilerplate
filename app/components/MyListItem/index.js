import React from 'react';

function MyListItem(props) {
  const liStyle = {
    width: '100%',
    height: '3em',
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    borderTop: '1px solid #eee',
  };
  const divStyle = {
    display: 'flex',
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
  return (
    <li style={liStyle}>
      <div style={divStyle}>
        {props.item}
      </div>
    </li>
  )
}

MyListItem.propTypes = {
  item: React.PropTypes.any,
};

export default MyListItem;
