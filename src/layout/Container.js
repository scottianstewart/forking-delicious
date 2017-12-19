import React from 'react';
import classNames from 'classnames';
import { withStyles } from 'igravity-ui';

const Container = ({ children, classes, className }) => (
  <div className={classNames(classes.root, className)}>{children}</div>
);

export default withStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: theme.containerWidth || '1200px',
    margin: '0 auto',
    padding: '8px',
  },
}))(Container);
