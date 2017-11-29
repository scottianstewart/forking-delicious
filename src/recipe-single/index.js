import React, { Component } from 'react';

class RecipeSingle extends Component {
  render() {
    const { recipe, match } = this.props;

    console.log(match.params.recipeId);

    if (!recipe) {
      return <div>loading (recipe #{match.params.recipeId})</div>;
    }

    return <div>recipe</div>;
  }
}
export default RecipeSingle;
