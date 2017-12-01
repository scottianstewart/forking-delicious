import { combineReducers } from 'redux';
import { FETCH_RECIPES } from './actions';
import account from './account/reducers';

function recipes(state = {}, action) {
  switch (action.type) {
    case FETCH_RECIPES:
      return state;
    default:
      return state;
  }
}

const reducers = combineReducers({
  recipes,
  account,
});

export default reducers;
