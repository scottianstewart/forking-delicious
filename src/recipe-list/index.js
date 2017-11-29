import React, { Component } from 'react';

class RecipeList extends Component {
  render() {
    const { recipes } = this.props;

    if (!recipes) {
      return <div>loading</div>;
    }

    return <div>recipes</div>;
  }
}
export default RecipeList;
