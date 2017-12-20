import { combineReducers } from 'redux';
import { FETCH_RECIPES } from './actions';
import account from './account/reducers';

function recipes(
  state = {
    69: {
      id: 69,
      name: 'Thai Green Curry',
      images: {
        500: 'https://imgur.com/hwP6rg2.jpg',
        1000: 'https://imgur.com/hiOqLI5.jpg',
        2000: 'https://imgur.com/SshkEsP.jpg',
      },
      ingredients: [
        {
          name: 'canned coconut milk (do not shake)',
          qty: 13.5,
          measurement: 'oz',
        },
        {
          name: 'vegetable stock (or chicken)',
          qty: 0.5,
          measurement: 'cup',
        },
        {
          name: 'soy sauce',
          qty: 4,
          measurement: 'teaspoon',
        },
        {
          name: 'sugar (or brown sugar)',
          qty: 4,
          measurement: 'teaspoon',
        },
        {
          name: 'Thai green curry paste,',
          qty: 6,
          measurement: 'tablespoons',
        },
        {
          name: 'onion',
          qty: 0.5,
          measurement: null,
        },
        {
          name: 'bell pepper',
          qty: 0.5,
          measurement: null,
        },
        {
          name: 'potato',
          qty: 1,
          measurement: null,
        },
        {
          name: 'lime',
          qty: 1,
          measurement: null,
        },
      ],
      directions: [
        'Open the can of coconut milk without shaking it. Spoon 6 tablespoons of the coconut cream from the top of the can into a medium saucepan. Pour remaining contents of can into a medium bowl, and mix well. In a medium bowl, combine vegetable stock, soy sauce, and palm or brown sugar. Stir until the sugar is dissolved.        ',
        'Place saucepan of coconut cream over medium-high heat until it begins to bubble. Add curry paste and reduce heat to medium-low. Stir constantly until very fragrant, about 3 minutes; adjust heat as needed to prevent burning. Add onion, red pepper, zucchini, sweet potato, bamboo shoots, green beans, and eggplant. Stir until vegetables are hot, 2-3 minutes. Stir in coconut milk, bring the mixture to a boil, and reduce heat to low. Simmer, uncovered, until the vegetables are tender, about 10 minutes.',
        'Add the soy sauce mixture and a generous squeeze of fresh lime juice to taste; you may use the juice of an entire lime. Stir and mix well. Add up to 1/4 cup water if the curry seems too thick.',
        'To serve, place the curry in a warm serving bowl over jasmine rice.',
      ],
    },
    8: {
      id: 8,
      name: 'Dutch Baby',
      images: {
        500: 'https://imgur.com/xIsAGAD.jpg',
        1000: 'https://imgur.com/Qv49NaF.jpg',
        2000: 'https://imgur.com/SdJsV7m.jpg',
      },
      ingredients: [
        {
          name: 'egg',
          qty: 3,
          measurement: null,
        },
        {
          name: 'flour',
          qty: 0.5,
          measurement: 'cup',
        },
        {
          name: 'milk',
          qty: 0.5,
          measurement: 'cup',
        },
        {
          name: 'sugar',
          qty: 1,
          measurement: 'tablespoon',
        },
        {
          name: 'nutmeg',
          qty: 1,
          measurement: 'pinch',
        },
        {
          name: 'butter',
          qty: 4,
          measurement: 'tablespoon',
        },
      ],
      directions: [
        'Preheat oven to 425 degrees with cast iron pan.',
        'Combine eggs, flour, milk, sugar and nutmeg in a bowl and mix well with a wire whisk (a blender or hand mixer works too).',
        'Remove cast iron from oven. Use butter to coat entire pan– then add the mixed batter to the pan.',
        'Return pan to the oven and bake for 18 minutes, until the pancake is puffed and golden. Lower oven temperature to 300 degrees and bake five minutes longer if necessary.',
        'Remove pancake from oven, cut into wedges and serve at once topped with syrup, preserves, confectioners sugar or cinnamon sugar.',
      ],
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
