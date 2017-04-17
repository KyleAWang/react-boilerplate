import { createSelector } from 'reselect';

const selectOrder = (state) => state.get('order');

const makeSelectOrder = () => createSelector(
  selectOrder,
  (orderState) => orderState.get('order'),
);

export {
  selectOrder,
  makeSelectOrder,
};

