import { View, Text, ScrollView } from 'react-native'
import React from 'react-native'
import About from '../components/restaurantDetail/About'
import { Divider } from 'react-native-elements'
import MenuItems from '../components/restaurantDetail/MenuItems'

export default function RestaurantDetail() {
  return (
    <ScrollView>
      <About/>
      <Divider width={1.8} style={{marginVertical:20}}/>
      <MenuItems />
    </ScrollView>
  )
}