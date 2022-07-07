import React, { useEffect } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import HeaderTabs from "../components/HeaderTabs";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import RestaurantItems, { localRestaurants } from "../components/RestaurantItems";

const YELP_API_KEY = "9WL0P5GNElwJDrgW0skOIdpzl3lAQuuW6ACnAk-8TWPebnlMAdOeDA1zKxlrYFAaRi9BLawJg4Nt8-Lo9Fabr6XP1tsYf5Dc8bMgxhghemlii6rrQhDrqqQSBKDGYnYx"

export default function Home() {
  const [restaurantData,setRestaurantData] = React.useState(localRestaurants)
  
  const getRestaurantsFromYelp = () => {
    const yelpUrl = "https://api.yelp.com/v3/businesses/search?term=restaurants&location=SanDiego";

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };
    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) => setRestaurantData(json.businesses));
  };
  useEffect(() => {
    getRestaurantsFromYelp();
  }, []);

  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems restaurantData={restaurantData}/>
        

      </ScrollView>
    </SafeAreaView>
  );
}
