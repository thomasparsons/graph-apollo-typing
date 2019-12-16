import React from "react"
import { ScrollView, View } from "react-native"

import ListDogs from "../Components/ListDogs"

const Screen = () => (
  <View>
    <ScrollView>
      <ListDogs />
    </ScrollView>
  </View>
)

export default Screen
