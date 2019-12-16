import React, { PureComponent } from "react"
import { StyleSheet, View } from "react-native"
import { NavigationDrawerProp } from "react-navigation-drawer"

import LogOut from "../Components/Logout"
import Footer from "../Components/UI/Footer"
import theme from "../Components/UI/theme"
import YourProfile from "../Components/YourProfile"
import Wrapper from "./Wrapper"

interface Props {
  navigation: NavigationDrawerProp
}

class YourProfileScreen extends PureComponent<Props> {
  public render() {
    const { navigation } = this.props
    return (
      <Wrapper navigation={navigation} title="yourProfile.title">
        <View style={styles.view}>
          <YourProfile />
        </View>
        <Footer>
          <View style={styles.button}>
            <LogOut />
          </View>
        </Footer>
      </Wrapper>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: theme.padding.general
  },
  view: {
    padding: theme.padding.general
  }
})

export default YourProfileScreen
