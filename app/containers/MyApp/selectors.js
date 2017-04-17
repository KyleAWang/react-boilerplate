import { createSelector } from 'reselect';


const selectMyApp = (state) => state.get('orders');

const makeSelectOrders = () => createSelector(
  selectMyApp,
  (myappState) => myappState.get('orders'),
);

export {
  selectMyApp,
  makeSelectOrders,
};
