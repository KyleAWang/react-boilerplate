import React from 'react';
import { render } from 'enzyme';

import MyList from '../index';
import MyListItem from 'components/MyListItem';

describe('<MyList />', () => {
  it('should render the component if no items are passed', () => {
    const renderedComponent = render(
      <MyList component={MyListItem}/>
    );
    expect(renderedComponent.find(MyListItem)).toBeDefined();
  });

  it('should render the items', () => {
    const items = [
      '333',
      '444',
    ];
    const renderedComponent = render(
      <MyList component={MyListItem} items={items}/>
    );
    expect(renderedComponent.find(items)).toBeDefined();
  })
});
