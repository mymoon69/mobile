import React from "react";
// import library ที่จำเป็น

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer"
import { Ionicons } from '@expo/vector-icons';
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useDispatch } from 'react-redux'
import { toggleFavorite } from "../store/actions/mealsAction";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import FiltersScreen from "../screens/FiltersScreen";
import CustomHeaderButton from "../components/CustomHeaderButton";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const MealsNavigator = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function MealNavigator() {
  const dispatch = useDispatch()
  const toggleFavoriteHandler = (mealId) => {
    dispatch(toggleFavorite(mealId));
  };

  return (
    // กำหนดรายละเอียดของ navigator
    <MealsNavigator.Navigator initialRouteName="Categories"
      screenOptions={{
        headerStyle: { backgroundColor: '#4a148c' },
        headerTintColor: 'white'
      }}>
      <MealsNavigator.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "Meal Categories",
        }} />
      <MealsNavigator.Screen 
      name="CategoryMeals" 
      component={CategoryMealsScreen} 
      options={({ route }) => ({
        title: route.params.name.toString()
      })} />
      <MealsNavigator.Screen 
      name="MealDetail" 
      component={MealDetailScreen} 
      options={({ route }) => ({
        title: route.params.name.toString(),
        headerRight: () => (
          <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item title="Tab_1" iconName="ios-star" onPress={() => toggleFavoriteHandler(route.params.mealid)} />
          </HeaderButtons>),
      })
      } />
    </MealsNavigator.Navigator>
  );
}

// อาจกำหนด Navigator เพิ่มได้
function FavNavigator() {
  return (
    // กำหนดรายละเอียดของ navigator
    <MealsNavigator.Navigator >
      <MealsNavigator.Screen name="Favorites" component={FavoritesScreen} />
    </MealsNavigator.Navigator>
  );
}

function MealsFavTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="MealNavigator" component={MealNavigator} options={{
        headerShown: false, tabBarIcon: ({ color, size }) => {
          return <Ionicons name="ios-restaurant" size={24} color="black" />;
        },
      }}
      />
      <Tab.Screen name="FavNavigator" component={FavNavigator} options={{
        headerShown: false, tabBarIcon: ({ color, size }) => {
          return <Ionicons name="ios-star" size={24} color="orange" />;
        },
      }} />

    </Tab.Navigator>

  )
}

function FiltersNavigator() {
  return (
    <Stack.Navigator >
      <Stack.Screen name="Filters" component={FiltersScreen} />

    </Stack.Navigator>
  )
}

function MainNavigator() {
  return (
    <Drawer.Navigator >
      <Drawer.Screen name="MealsFav" component={MealsFavTabNavigator} options={{ headerShown: false, title: "Meals" }} />
      <Drawer.Screen name="Filters" component={FiltersNavigator} options={{ title: "Filters" }} />
    </Drawer.Navigator>

  )

}

// สร้าง Navigator หลัก
export default function MyNavigator() {
  return (
    <NavigationContainer>
      {/* รายละเอียดของ Navigator หลัก (MainNavigator) */}
      <MainNavigator />
    </NavigationContainer>
  );
}
