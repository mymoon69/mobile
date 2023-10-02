import { MEALS } from "../../data/dummy-data";
import { TOGGLE_FAVORITE } from "../actions/mealsAction";

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingIndex = state.favoriteMeals.findIndex(
        (meal) => meal.id === action.mealId
      );
      if (existingIndex !== -1) {
       
        const updatedFavoriteMeals = [...state.favoriteMeals];
        updatedFavoriteMeals.splice(existingIndex, 1);
        return {
          ...state,
          favoriteMeals: updatedFavoriteMeals,
        };
      } else {
       
        const mealToAdd = state.meals.find((meal) => meal.id === action.mealId);
        if (mealToAdd) {
          return {
            ...state,
            favoriteMeals: state.favoriteMeals.concat(mealToAdd),
          };
        }
      }
    default:
      return state;
  }
};

export default mealsReducer;