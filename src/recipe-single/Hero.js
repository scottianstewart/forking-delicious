import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';

import Container from '../layout/Container';

const Hero = ({ classes, goBack, images, ingredientsCount, name }) => (
  <div
    className={classes.root}
    style={{ backgroundImage: `url('${images && images[2000]}')` }}
  >
    <Container className={classes.container}>
      <button className={classes.button} onClick={goBack}>
        Back
      </button>
      <h1 className={classes.name}>{name}</h1>
      <div className={classes.count}>{ingredientsCount} Ingredients</div>
    </Container>
  </div>
);

Hero.propTypes = {
  images: PropTypes.object,
  ingredientsCount: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default withStyles(theme => ({
  root: {
    position: 'relative',
    backgroundColor: '#eee',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',

    '&:before': {
      content: '""',
      position: 'absolute',
      top: '0',
      right: '0',
      bottom: '0',
      left: '0',
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },
  },
  container: {
    position: 'relative',
    zIndex: '1', // lift above root's :before
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    minHeight: '420px',
  },
  button: {},
  name: {
    fontSize: '32px',
    lineHeight: '48px',
    fontWeight: '500',
    color: '#fff',
    marginTop: 'auto',
  },
  count: {
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: '400',
    color: '#fff',
    marginTop: '8px',
    marginBottom: '', // temporary until we have shopping list button
    paddingLeft: '2px',
  },
}))(Hero);
