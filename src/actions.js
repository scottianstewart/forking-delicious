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
    recipes: {},
  };
}
