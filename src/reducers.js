import { combineReducers } from 'redux';
import { FETCH_RECIPES } from './actions';

function recipes(state = { test: 'hello' }, action) {
  switch (action.type) {
    case FETCH_RECIPES:
      return state;
    default:
      return state;
  }
}

const reducers = combineReducers({
  recipes,
});

export default reducers;
