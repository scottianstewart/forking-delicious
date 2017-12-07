import { combineReducers } from 'redux';
import { FETCH_RECIPES } from './actions';
import account from './account/reducers';

function recipes(
  state = {
    8: {
      id: 8,
      name: 'Dutch Baby',
      images: {
        500: 'https://imgur.com/xIsAGAD.jpg',
        1000: 'https://imgur.com/Qv49NaF.jpg',
        2000: 'https://imgur.com/SdJsV7m.jpg',
      },
      ingredients: {
        1: {
          name: 'egg',
          qty: 3,
          measurement: null,
        },
        2: {
          name: 'flour',
          qty: 0.5,
          measurement: 'cup',
        },
        3: {
          name: 'milk',
          qty: 0.5,
          measurement: 'cup',
        },
        4: {
          name: 'sugar',
          qty: 1,
          measurement: 'tablespoon',
        },
        5: {
          name: 'nutmeg',
          qty: 1,
          measurement: 'pinch',
        },
        6: {
          name: 'butter',
          qty: 4,
          measurement: 'tablespoon',
        },
      },
      directions: {
        1: 'Preheat oven to 425 degrees with cast iron pan.',
        2: 'Combine eggs, flour, milk, sugar and nutmeg in a bowl and mix well with a wire whisk (a blender or hand mixer works too).',
        3: 'Remove cast iron from oven. Use butter to coat entire pan– then add the mixed batter to the pan.',
        4: 'Return pan to the oven and bake for 18 minutes, until the pancake is puffed and golden. Lower oven temperature to 300 degrees and bake five minutes longer if necessary.',
        5: 'Remove pancake from oven, cut into wedges and serve at once topped with syrup, preserves, confectioners sugar or cinnamon sugar.',
      },
    },
  },
  action
) {
  switch (action.type) {
    case FETCH_RECIPES:
      return state;
    default:
      return state;
  }
}

const reducers = combineReducers({
  recipes,
  account,
});

export default reducers;
