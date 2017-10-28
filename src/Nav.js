import React, { Component } from 'react';
import firebase, { auth, provider } from './firebase';

class Nav extends Component {
  render() {
    const { state, user, logout, login } = this.props;
    return (
      <div className="nav">
        <h1>Fun Food Friends</h1>
        {user ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <button onClick={login}>Log In</button>
        )}
      </div>
    );
  }
}
export default Nav;
