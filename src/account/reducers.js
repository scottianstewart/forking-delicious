import { combineReducers } from 'redux';
import { SIGN_IN, SIGN_OUT } from './actions';

function user(state = null, action) {
  switch (action.type) {
    case SIGN_IN:
      return action.user;
    case SIGN_OUT:
      return null;
    default:
      return state;
  }
}

const reducers = combineReducers({
  user,
});

export default reducers;
