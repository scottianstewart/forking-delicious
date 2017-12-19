import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from 'igravity-ui';
import { Link } from 'react-router-dom';

import Container from '../layout/Container';
import Recipe from './Recipe';

class RecipeList extends Component {
  renderRecipe = id => {
    const { recipes } = this.props;
    return <Recipe key={id} recipe={recipes[id]} />;
  };

  render() {
    const { classes, recipes } = this.props;

    if (!recipes) {
      return <Container>loading</Container>;
    }

    const recipeKeys = Object.keys(recipes);

    return (
      <Container>
        <div className={classes.grid}>
          <Link to="/recipes/add">Add</Link>
          {recipeKeys.map(this.renderRecipe)}
        </div>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  recipes: state.recipes,
});

export default connect(mapStateToProps)(
  withStyles(theme => ({
    grid: {
      display: 'flex',
    },
  }))(RecipeList)
);
