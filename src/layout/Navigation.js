import React, { Component } from 'react';
import withStyles from 'react-jss';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

import { signIn, signOut } from '../account/actions';
import Container from './Container';

class Navigation extends Component {
  render() {
    const { classes, signIn, signOut, user } = this.props;

    return (
      <div className={classes.root}>
        <Container className={classes.container}>
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
            <button onClick={signOut}>Logout</button>
          ) : (
            <button onClick={signIn}>Log In</button>
          )}
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.account && state.account.user,
});

const mapDispatchToProps = dispatch => ({
  signIn: () => {
    dispatch(signIn());
  },
  signOut: () => {
    dispatch(signOut());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(theme => ({
    root: {
      display: 'flex',
      width: '100%',
      height: '64px',
      background: '#fff',
    },
    container: {
      display: 'flex',
      alignItems: 'center',
      maxWidth: '1280px',
    },
    logo: {
      padding: '16px',
      marginRight: '24px',
      marginLeft: '-16px',
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
  }))(Navigation)
);
