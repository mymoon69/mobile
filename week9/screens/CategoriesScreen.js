import React from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

const CategoriesScreen = ({navigation}) => {
  const renderGridItem = (itemData) => {
    return (

      // ส่วนนี้ <View>...</View>ใช้เพื่อการทดลอง และให้คอมเมนต์โค้ดส่วนนี้และเรียกใช้ <CategoryGridTile> ข้างต้นแทน
      <View style={{ height: 200, width: "50%" }}>
           <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          // เขียนโค้ดเพิ่ม
           {navigation.navigate("CategoryMeals",  { name: itemData.item.title, id : itemData.item.id });}
        }}
      />
        {/* <Text>{itemData.item.title}</Text> */}
      </View>
    );
  };

  return (
    
    // ส่วนนี้ <View>...</View>ใช้เพื่อการทดลอง และให้คอมเมนต์โค้ดส่วนนี้และเรียกใช้ <FlatList> ข้างต้นแทน
    <View>
      <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
      <Text>Categories Screen</Text>
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

export default CategoriesScreen;
