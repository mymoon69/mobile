import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, FontAwesome5, FontAwesome } from '@expo/vector-icons';

// import screen ที่เกี่ยวข้อง
import MainScreen from "./Screens/Spring"
import MainScreen1 from "./Screens/Sequence"
import MainScreen2 from "./Screens/Parallel"

// สร้าง navigator ตามโจทย์กำหนด
const MainNavigator = createBottomTabNavigator();

// สร้าง Navigator หลัก
export default function App() {
  return (
    <NavigationContainer>
      <MainNavigator.Navigator
        screenOptions={{
          headerShown: false,
          drawerActiveTintColor: "orange",
          drawerInactiveTintColor: "gray",
        }}
      >
        <MainNavigator.Screen
          name="Spring"
          component={MainScreen}
          options={{
            tabBarIcon: ({ color, size }) => {
              return <FontAwesome5 name="baseball-ball" size={size} color={color} />
            }
          }}
        />
        <MainNavigator.Screen
          name="Sequence"
          component={MainScreen1}
          options={{
            tabBarIcon: ({ color, size }) => {
              return <FontAwesome5 name="star" size={24} color="black" />
            }
          }}
        />
        <MainNavigator.Screen
          name="Parallel"
          component={MainScreen2}
          options={{
            tabBarIcon: ({ color, size }) => {
              return <FontAwesome5 name="snowflake" size={24} color="black" />
            }
          }}
        />
      </MainNavigator.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});