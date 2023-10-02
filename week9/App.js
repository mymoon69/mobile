import React from "react";
import { StyleSheet } from "react-native";
// import คอมโพเนนต์ที่จำเป็น
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux'
import mealsReducer from "./store/reducers/mealsReducer";

import CategoriesScreen from "./screens/CategoriesScreen";
import CategoryMealsScreen from "./screens/CategoryMealsScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import MyNavigator from "./navigation/MyNavigator";

const rootReducer = combineReducers({
  meals: mealsReducer
})

const store = createStore(rootReducer);

export default function App() {

  return (
    <Provider store={store}><MyNavigator/></Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
});
