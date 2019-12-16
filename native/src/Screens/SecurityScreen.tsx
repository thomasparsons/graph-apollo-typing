import React, { PureComponent } from "react"
import { StyleSheet, View } from "react-native"
import { NavigationDrawerProp } from "react-navigation-drawer"

import Security from "../Components/Security"
import { theme } from "../Components/UI"
import Wrapper from "./Wrapper"

interface Props {
  navigation: NavigationDrawerProp
}

class SecurityScreen extends PureComponent<Props> {
  public render() {
    const { navigation } = this.props
    return (
      <Wrapper navigation={navigation} title="security.title">
        <View style={styles.view}>
          <Security />
        </View>
      </Wrapper>
    )
  }
}

const styles = StyleSheet.create({
  view: {
    padding: theme.padding.general
  }
})

export default SecurityScreen
