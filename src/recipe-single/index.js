import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withStyles } from 'igravity-ui';
import pluralize from 'pluralize';

import Container from '../layout/Container';
import Hero from './Hero';

class RecipeSingle extends Component {
  renderDirection = (direction, i) => <div key={i}>{direction}</div>;

  renderIngredient = (ingredient, i) => (
    <div key={i}>
      {`${ingredient.qty} ${
        ingredient.measurement
          ? pluralize(ingredient.measurement, ingredient.qty)
          : ''
      } ${ingredient.name}`}
    </div>
  );

  render() {
    const { classes, history, recipe } = this.props;

    if (!recipe) {
      return <Container>{`loading`}</Container>;
    }

    return (
      <Fragment>
        <Hero
          name={recipe.name}
          images={recipe.images}
          ingredientsCount={recipe.ingredients.length}
          goBack={history.goBack}
        />
        <div className={classes.body}>
          <Container>
            <div className={classes.ingredients}>
              <div>ingredients</div>
              {recipe.ingredients.map(this.renderIngredient)}
            </div>
            <div className={classes.directions}>
              <div>directions</div>
              {recipe.directions.map(this.renderDirection)}
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
