import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";

const MealDetailScreen = ({navigation, route}) => {
  // เขียนโค้ดเพิ่ม เพื่อดึงข้อมูลเกี่ยวกับเมนูอาหารที่ผู้ใช้เลือกเอาไว้
  const title = route.params.title
  const step = route.params.step

  return (
    <View style={styles.screen}>
      <Text>{title}</Text>
      <Text>{step}</Text>
      <Button
        title="Go Back to Categories"
        onPress={() => {
          // เขียนโค้ดเพิ่ม
          navigation.navigate("Categories");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MealDetailScreen;
