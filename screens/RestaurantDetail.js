import { View, Text, ScrollView } from "react-native";
import React from "react-native";
import About from "../components/restaurantDetail/About";
import { Divider } from "react-native-elements";
import MenuItems from "../components/restaurantDetail/MenuItems";
import ViewCart from "../components/restaurantDetail/ViewCart";
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
    title: "BBQ American",
    description: "BBQ with chicken and good. Much be best dish in the year",
    price: "$11.62",
    image:
      "https://cdn.tgdd.vn/2021/03/CookProduct/Bbq-la-gi-nguon-goc-va-cac-cach-tu-lam-bbq-tai-nha-vo-cung-don-gian-0-1200x676.jpg",
  },
];
export default function RestaurantDetail({ route, navigation }) {
  return (
    <View style={{flex:1}}>
      <About route={route} />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <MenuItems restaurantName={route.params.name} foods={foods}/>
      <ViewCart navigation={navigation} />
    </View>
  );
}
