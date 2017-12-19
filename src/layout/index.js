import React from 'react';
import { withStyles } from 'igravity-ui';
import Navigation from './Navigation';

const Layout = ({ children, classes }) => (
  <div className={classes.root}>
    <Navigation />
    <div className={classes.children}>{children}</div>
  </div>
);

export default withStyles(theme => ({
  root: {},
  children: {},
}))(Layout);
