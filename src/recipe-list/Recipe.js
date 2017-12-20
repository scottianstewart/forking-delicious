import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'igravity-ui';
import { Link } from 'react-router-dom';

const Recipe = ({ classes, recipe }) => {
  const { images, ingredients } = recipe;

  return (
    <Link
      to={`/recipes/${recipe.id}`}
      className={classes.root}
      style={{ backgroundImage: `url('${images && images[500]}')` }}
    >
      <div className={classes.content}>
        <h2 className={classes.name}>{recipe.name}</h2>
        <div className={classes.count}>{ingredients.length} Ingredients</div>
      </div>
    </Link>
  );
};

Recipe.propTypes = {
  recipe: PropTypes.object.isRequired,
};

export default withStyles(theme => ({
  root: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    width: '340px',
    height: '260px',
    backgroundColor: '#eee',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    textDecoration: 'none',

    '&:before': {
      content: '""',
      position: 'absolute',
      width: '100%',
      height: '100%',
      backgroundImage:
        'linear-gradient(0deg, rgba(0,0,0,0.8), rgba(0,0,0,0.5) 30%)',
    },

    '&:hover': {
      '&:before': {
        backgroundImage:
          'linear-gradient(0deg, rgba(0,0,0,0.9), rgba(0,0,0,0.6) 30%)',
      },
    },
  },
  content: {
    position: 'relative',
    zIndex: '1', // lift above root's :before
    padding: '20px',
  },
  name: {
    fontSize: '22px',
    lineHeight: '1.4',
    fontWeight: '700',
    color: '#fff',
    letterSpacing: '1px',
    marginTop: 'auto',
  },
  count: {
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: '400',
    color: '#fff',
    // marginTop: '8px',
    paddingLeft: '2px',
  },
}))(Recipe);
