import React, { FC } from "react"
import { Text, View } from "react-native"

import Logout from "../../Logout"

const SideBar: FC = () => (
  <View>
    <Text>sidebar</Text>
    <Logout />
  </View>
)

export default SideBar
