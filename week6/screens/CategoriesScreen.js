import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Platform,
  FlatList,
} from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
// import MealItem from "../components/MealItem";
import MealList from "../components/MealList";

const CategoryMealsScreen = ({ route, navigation }) => {
  const { prev, id } = route.params;
  const catId = id

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  return (
    <View style={styles.screen}>
      <MealList
        listData={displayedMeals}
        navigation={navigation}>
      </MealList>
      {/* <FlatList
        style={{ width: "100%", height: "100%" }}
        data={displayedMeals}
        renderItem={renderMealItem}
      /> */}
    </View>

    // ส่วนนี้ <View>...</View>ใช้เพื่อการทดลอง และให้คอมเมนต์โค้ดส่วนนี้และเรียกใช้ <FlatList> ข้างบนแทน
    // <View>
    //   <Text>Category Meals Screen!!</Text>
    // </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryMealsScreen;
