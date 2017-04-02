import { createSelector } from 'reselect';


console.log('start selectors');

const selectMyApp = (state) => state.get('orders');


const makeSelectOrders = () => createSelector(
  selectMyApp,
  (myappState) => myappState.get('orders')
);

export {
  selectMyApp,
  makeSelectOrders
};
