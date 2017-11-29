import React, { Component } from 'react';
import withStyles from 'react-jss';
import { Link, NavLink } from 'react-router-dom';

class Navigation extends Component {
  render() {
    const { classes, user, logout, login } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <div className={classes.logo}>
            <Link to="/">Forking Delicious</Link>
          </div>
          <nav className={classes.nav}>
            <NavLink
              exact
              to="/recipes"
              className={classes.link}
              activeClassName={classes.linkActive}
            >
              My Recipes
            </NavLink>
            <NavLink
              exact
              to="/recipes/all"
              className={classes.link}
              activeClassName={classes.linkActive}
            >
              Recipe Catalog
            </NavLink>
            <NavLink
              exact
              to="/recipes/8"
              className={classes.link}
              activeClassName={classes.linkActive}
            >
              Recipe #8
            </NavLink>
          </nav>
          {user ? (
            <button onClick={logout}>Logout</button>
          ) : (
            <button onClick={login}>Log In</button>
          )}
        </div>
      </div>
    );
  }
}

export default withStyles(theme => ({
  root: {
    display: 'flex',
    width: '100%',
    height: '64px',
    background: '#fff',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    maxWidth: '1240px',
    margin: '0 auto',
  },
  logo: {
    padding: '16px',
    marginRight: '24px',
  },
  nav: {
    marginRight: 'auto',
  },
  link: {
    fontSize: '16px',
    lineHeight: '20px',
    fontWeight: '700',
    textDecoration: 'none',
    color: '#9b9b9b',
    padding: '16px',
    margin: '0 8px',

    '&:hover': {
      color: '#242424',
    },
  },
  linkActive: {
    color: '#242424',
  },
}))(Navigation);
