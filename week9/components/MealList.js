import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import MealItem from "./MealItem";

const MealList = (props) => {
  const renderMealItem = (itemData) => {
    return (
      //เขียนโค้ดเพิ่ม
      <View >
      <MealItem
        title={itemData.item.title}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        image={itemData.item.imageUrl}
        onSelectMeal={() => {
          // เขียนโค้ดเพิ่ม
         {props.navigation.navigate("MealDetail",  { name: itemData.item.title, step : itemData.item.steps, mealid : itemData.item.id });}

        }}
      />
     
    </View>
    );
  };

  return (
    <View style={styles.list}>
      <FlatList
    data={props.listData} renderItem={renderMealItem}
      //เขียนโค้ดเพิ่ม
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MealList;
