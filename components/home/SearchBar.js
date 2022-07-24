import React from "react";
import { View, Text, TextInput } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function SearchBar({ cityHandler }) {
  const [searchValue, setSearchValue] = React.useState("");
  return (
    <View style={{ marginTop: 15, flexDirection: "row" }}>
      <View
        style={{
          backgroundColor: "#eee",
          borderRadius: 50,
          flexDirection: "row",
          alignItems: "center",
          marginRight: 10,
          flex: 1,
        }}
      >
        <TextInput
          style={{
            backgroundColor: "#eee",
            borderRadius: 50,
            fontWeight: "700",
            marginTop: 7,
            flex: 1,
            padding: 15,
            paddingLeft: 25,
            marginRight: 10,
            marginLeft: 10,
          }}
          placeholder="Search..."
          onChangeText={(e) => setSearchValue(e)}
          value={searchValue}
        />
        <View
          style={{
            marginLeft: 10,
            left: 0,
            position: "absolute",
            marginRight: 10,
          }}
        >
          <Ionicons name="location-sharp" size={24} />
        </View>
        <View
          style={{
            flexDirection: "row",
            marginRight: 8,
            backgroundColor: "white",
            padding: 9,
            borderRadius: 30,
            alignItems: "center",
          }}
        >
          <AntDesign name="clockcircle" size={11} style={{ marginRight: 6 }} />
          <Text
            onPress={() => {
              const searchValueNew = searchValue.split(' ')[0];
              cityHandler(searchValue);
            }}
          >
            Search
          </Text>
        </View>
      </View>

      {/* <GooglePlacesAutocomplete
        // query={{key: "AIzaSyAm0aOS0FNO5ot7UOTn0jtCMKKXL_JQs5U"}}
        query={{ key: "AIzaSyDaOulQACiJzBfqumbsqg_-vKha8fCnL-s" }}
        onPress ={(data, details =null) => {
          console.log(data.description);
          const city = data.description.split(',')[0];
          cityHandler(city);
        }}
        placeholder="Search"
        styles={{
          textInput: {
            backgroundColor: "#eee",
            borderRadius: 20,
            fontWeight: "700",
            marginTop: 7,
          },
          textInputContainer: {
            backgroundColor: "#eee",
            borderRadius: 50,
            flexDirection: "row",
            alignItems: "center",
            marginRight: 10,
          },
        }}
        renderLeftButton={() => (
          <View style={{ marginLeft: 10 }}>
            <Ionicons name="location-sharp" size={24} />
          </View>
        )}
        renderRightButton={() => (
          <View
            style={{
              flexDirection: "row",
              marginRight: 8,
              backgroundColor: "white",
              padding: 9,
              borderRadius: 30,
              alignItems: "center",
            }}
          >
            <AntDesign
              name="clockcircle"
              size={11}
              style={{ marginRight: 6 }}
            />
            <Text>Search</Text>
          </View>
        )}
      /> */}
    </View>
  );
}
