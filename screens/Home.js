import React, { useEffect } from "react";
import { View, Text, SafeAreaView, ScrollView} from "react-native";
import HeaderTabs from "../components/home/HeaderTabs";
import SearchBar from "../components/home/SearchBar";
import Categories from "../components/home/Categories";
import BottomTabs from "../components/home/BottomTabs";
import RestaurantItems, {
  localRestaurants,
} from "../components/home/RestaurantItems";
import { Divider } from "react-native-elements";

const YELP_API_KEY =
  "9WL0P5GNElwJDrgW0skOIdpzl3lAQuuW6ACnAk-8TWPebnlMAdOeDA1zKxlrYFAaRi9BLawJg4Nt8-Lo9Fabr6XP1tsYf5Dc8bMgxhghemlii6rrQhDrqqQSBKDGYnYx";

export default function Home({navigation}) {
  const [restaurantData, setRestaurantData] = React.useState(localRestaurants);
  const [city, setCity] = React.useState("Hawaii");
  const [activeTab, setActiveTab] = React.useState("Delivery");
  const getRestaurantsFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };
    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) =>
        setRestaurantData(
          json.businesses.filter((business) =>
            business.transactions.includes(activeTab.toLowerCase())
          )
        )
      );
  };
  useEffect(() => {
    getRestaurantsFromYelp();
  }, [city, activeTab]);

  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab}/>
        <SearchBar cityHandler={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems restaurantData={restaurantData} navigation={navigation}/>
      </ScrollView>
      <Divider width={1}/>
      <BottomTabs/>
    </SafeAreaView>
  );
}
