/**
 * Homepage selectors
 */

import {createSelector} from 'reselect';

const selectHome = (state) => {
  return state.get('home');
}

const makeSelectUsername = () => createSelector(
  selectHome,
  (homeState) => homeState.get('username')
);

export {
  selectHome,
  makeSelectUsername,
};
