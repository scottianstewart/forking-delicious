import { auth, provider } from '../firebase';

/*
 * action types
 */

export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';

/*
 * action creators
 */

function signInSuccess(user) {
  return {
    type: SIGN_IN,
    user,
  };
}

export function signIn() {
  return function(dispatch) {
    auth.signInWithPopup(provider).then(result => {
      const user = result.user;
      dispatch(signInSuccess(user));
    });
  };
}

function signOutSuccess() {
  return {
    type: SIGN_OUT,
  };
}

export function signOut() {
  return function(dispatch) {
    auth.signOut().then(() => {
      dispatch(signOutSuccess());
    });
  };
}
