import React, { Component } from 'react';

import Container from '../layout/Container';

class RecipeSingle extends Component {
  render() {
    const { recipe, match } = this.props;

    console.log(match.params.recipeId);

    if (!recipe) {
      return (
        <Container>{`loading (recipe #${match.params.recipeId})`}</Container>
      );
    }

    return <Container>recipe</Container>;
  }
}
export default RecipeSingle;
