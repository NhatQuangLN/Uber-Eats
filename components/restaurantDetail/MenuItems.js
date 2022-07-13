import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { Divider } from "react-native-elements";
const foods = [
  {
    title: "Lasagna",
    description: "With butter lettuce, tomato and sauce bechmel",
    price: "$13.50",
    image:
      "https://cdn.tgdd.vn/Files/2021/08/18/1376134/lasagne-la-gi-cach-lam-mon-lasagne-chuan-y-202108181927294271.jpg",
  },
  {
    title: "Todori Chicken",
    description: "Amazing India dish with tenderloin chicken off the world",
    price: "$19.20",
    image:
      "https://static.onecms.io/wp-content/uploads/sites/9/2021/10/21/grilled-tandoori-chicken-FT-RECIPE1021.jpg",
  },
  {
    title: "Chilaquiles",
    description: "Chilaquile with cheese and sauce. A delicious mexican dish",
    price: "$14.50",
    image:
      "https://www.simplyrecipes.com/thmb/RPxc7ZM0TyEztssOZJay1mtlvCs=/3000x2000/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Chilaquiles-LEAD-2-4c72e13d2f924120a7f673ff4b4b1283.jpg",
  },
  {
    title: "Chilaquiles",
    description: "Chilaquile with cheese and sauce. A delicious mexican dish",
    price: "$14.50",
    image:
      "https://www.simplyrecipes.com/thmb/RPxc7ZM0TyEztssOZJay1mtlvCs=/3000x2000/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Chilaquiles-LEAD-2-4c72e13d2f924120a7f673ff4b4b1283.jpg",
  },
];

const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },
  titleStyle: {
    fontSize: 19,
    fontWeight: "600",
  },
});
export default function MenuItems(props) {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {foods.map((food, index) => (
        <View key={index}>
          <View style={styles.menuItemStyle}>
            <FoodInfo food={food} />
            <FoodImage food={food} />
          </View>
          <Divider width={0.5} orientation="vertical" style={{marginHorizontal: 20}} />
        </View>
      ))}
    </ScrollView>
  );
}

const FoodInfo = (props) => (
  <View style={{ width: 240, justifyContent: "space-evenly" }}>
    <Text style={styles.titleStyle}>{props.food.title}</Text>
    <Text>{props.food.description}</Text>
    <Text>{props.food.price}</Text>
  </View>
);
const FoodImage = (props) => (
  <View>
    <Image
      source={{ uri: props.food.image }}
      style={{ width: 100, height: 100, borderRadius: 8 }}
    />
  </View>
);
