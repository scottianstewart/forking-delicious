/*
 * action types
 */

export const FETCH_RECIPES = 'FETCH_RECIPES';

/*
 * action creators
 */

export function fetchRecipes() {
  return {
    type: FETCH_RECIPES,
    recipes: {
      1: {
        id: 1,
        name: 'Butternut Squash Soup',
        time: {
          prep: 25,
          cook: 45,
          rest: 0,
        },
        ingredients: ['', ''],
        directions: {
          1: 'Test 1',
          2: 'Test 2',
          3: 'Test 3',
        },
      },
    },
  };
}
