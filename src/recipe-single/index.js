import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import withStyles from 'react-jss';
import pluralize from 'pluralize';

import Container from '../layout/Container';
import Hero from './Hero';

class RecipeSingle extends Component {
  renderDirections = step => {
    const { recipe } = this.props;
    return <div key={step}>{recipe.directions[step]}</div>;
  };

  renderIngredients = id => {
    const { recipe } = this.props;
    return (
      <div key={id}>
        {recipe.ingredients[id].qty}{' '}
        {recipe.ingredients[id].measurement &&
          pluralize(
            recipe.ingredients[id].measurement,
            recipe.ingredients[id].qty
          )}{' '}
        {recipe.ingredients[id].name}
      </div>
    );
  };

  render() {
    const { classes, history, recipe } = this.props;

    if (!recipe) {
      return <Container>{`loading`}</Container>;
    }

    const ingredientsKeys = Object.keys(recipe.ingredients) || [];
    const directionsKeys = Object.keys(recipe.directions) || [];

    return (
      <Fragment>
        <Hero
          name={recipe.name}
          images={recipe.images}
          ingredientsCount={ingredientsKeys.length}
          goBack={history.goBack}
        />
        <div className={classes.body}>
          <Container>
            <div className={classes.ingredients}>
              <div>ingredients</div>
              {ingredientsKeys.map(this.renderIngredients)}
            </div>
            <div className={classes.directions}>
              <div>directions</div>
              {directionsKeys.map(this.renderDirections)}
            </div>
          </Container>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  recipe: state.recipes[ownProps.match.params.recipeId],
});

export default connect(mapStateToProps)(
  withStyles(theme => ({
    body: {},
    ingredients: {},
    directions: {},
  }))(RecipeSingle)
);
