// import library ที่จำเป็น
import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from '@expo/vector-icons';

// import screen ที่เกี่ยวข้อง
import CategoriesScreen from "../screens/CategoriesScreen"
import CategoryMealsScreen from "../screens/CategoryMealsScreen"
import MealDetailScreen from "../screens/MealDetailScreen"
import FavoritesScreen from "../screens/FavoritesScreen"
import FiltersScreen from "../screens/FiltersScreen"


// สร้าง navigator ตามโจทย์กำหนด
const MealsFavTabNavigator = createBottomTabNavigator();
const MealNavigator = createNativeStackNavigator();
const FavNavigator = createNativeStackNavigator();
const FiltersNavigator = createNativeStackNavigator();
const MainNavigator = createDrawerNavigator();

// สร้าง function สำหรับการกำหนด Navigator แต่ละตัว เช่น
function MealNavigation() {
  return (
    <MealNavigator.Navigator
      initialRouteName="Categories"
      screenOptions={{
        headerStyle: { backgroundColor: "#4a148c" },
        headerTintColor: "white",
      }}
    >
      <MealNavigator.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "Meal Categories",
        }}
      />
      <MealNavigator.Screen
        name="CategoryMeals"
        component={CategoryMealsScreen}
        options={({ route }) => ({
          title: route.params.title,
        })}
      />
      <MealNavigator.Screen
        name="MealDetail"
        component={MealDetailScreen}
        options={({ route }) => ({
          title: route.params.title
        })}
      />
    </MealNavigator.Navigator>
  );
}

function FavNavigation() {
  return (
    <FavNavigator.Navigator
      initialRouteName="Favorites"
      screenOptions={{
        headerStyle: { backgroundColor: "#4a148c" },
        headerTintColor: "white",
      }}
    >
      <FavNavigator.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          title: "Your Favorites",
        }}
      />
      <FavNavigator.Screen
        name="MealDetail"
        component={MealDetailScreen}
        options={({ route }) => ({
          title: route.params.title,
        })}
      />
    </FavNavigator.Navigator>
  );
}

// อาจกำหนด Navigator เพิ่มได้
function MealsFavTabNavigation() {
  return (
    <MealsFavTabNavigator.Navigator
    screenOptions={{
      tabBarActiveTintColor: "darkblue",
      tabBarStyle: { backgroundColor: "lightblue" },
      tabBarLabelStyle: { fontSize: 15 },
      headerShown: false,
    }}>
      <MealsFavTabNavigator.Screen
      name="Meals"
      component={MealNavigation}
      options={{
        tabBarIcon: ({ color, size }) => {
          return <Ionicons name="ios-restaurant" size={size} color={color} />
        }
      }}/>
      <MealsFavTabNavigator.Screen
        name="Favorites"
        component={FavNavigation}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="ios-star" size={size} color={color} />
          }
        }}
      />
    </MealsFavTabNavigator.Navigator>
  );
}

// สร้าง Navigator หลัก
export default function MyNavigator() {
  return (
    <NavigationContainer>
      <MealsFavTabNavigation/>
      {/* รายละเอียดของ Navigator หลัก (MainNavigator) */}
    </NavigationContainer>
  );
}
