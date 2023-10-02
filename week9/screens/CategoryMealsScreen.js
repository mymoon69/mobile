import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Platform,
  FlatList,
} from "react-native";
// import { CATEGORIES, MEALS } from "../data/dummy-data";
import { useSelector } from 'react-redux';
import MealItem from "../components/MealItem";
import MealList from "../components/MealList";



const CategoryMealsScreen = ({route, navigation}) => {
  const renderMealItem = (itemData) => {
    return (
      
      // ส่วนนี้ <View>...</View> ใช้เพื่อการทดลอง และให้คอมเมนต์โค้ดส่วนนี้และเรียกใช้ <MealItem> ข้างบนแทน
      <View >
        <MealItem
          title={itemData.item.title}
          duration={itemData.item.duration}
          complexity={itemData.item.complexity}
          affordability={itemData.item.affordability}
          image={itemData.item.imageUrl}
          onSelectMeal={() => {
            // เขียนโค้ดเพิ่ม
           {navigation.navigate("MealDetail",  { name: itemData.item.title, step : itemData.item.steps });}

          }}
        />
       
      </View>
    );
  };

  const availableMeals = useSelector(state => state.meals.filteredMeals);

  // const catId = ...รับข้อมูล id ของประเภทอาหาร...
  const id = route.params.id;
  const catId = id
  // console.log(catId)
  const displayedMeals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  return (
    <View style={styles.screen}>
      {/* <FlatList
        style={{ width: "100%" }}
        data={displayedMeals}
        renderItem={renderMealItem}
      /> */}
      
      <MealList listData ={displayedMeals} navigation = {navigation}/>
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
