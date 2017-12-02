import React from 'react';
import classNames from 'classnames';
import withStyles from 'react-jss';

const Container = ({ children, classes, className }) => (
  <div class={classNames(classes.root, className)}>{children}</div>
);

export default withStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: theme.containerWidth || '1200px',
    margin: '0 auto',
    padding: '8px',
  },
}))(Container);
