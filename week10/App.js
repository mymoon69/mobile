import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

// import page
import showlist from "./work/showlist";
import add from "./work/add";
import update from "./work/update";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Add Student" component={add}
          options={{
            headerStyle: {
              backgroundColor: '#1AA7EC',
            },
          }} />
        <Stack.Screen name="Student List" component={showlist}
          options={{
            headerStyle: {
              backgroundColor: '#1AA7EC',
            },
          }} />
        <Stack.Screen name="Student Info" component={update}
          options={{
            headerStyle: {
              backgroundColor: '#1AA7EC',
            },
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
