import React from 'react';

function MyList(props) {
  const ComponentToRender = props.component;
  let content = (<div></div>);

  if(props.items){
    content = props.items.map((item, index) => (
      <ComponentToRender key={`item-${index}`} item={item}/>
    ));
  }else {
    content = (<ComponentToRender />);
  }
  return (
    <div>
      <ul>
        {content}
      </ul>
    </div>
  );
}

MyList.propTypes = {
  component: React.PropTypes.func.isRequired,
  items: React.PropTypes.array,
};

export default MyList;
