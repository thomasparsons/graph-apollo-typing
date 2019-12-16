import React, { PureComponent } from "react"
import { ScrollView, StyleSheet } from "react-native"
import { NavigationDrawerProp } from "react-navigation-drawer"

import Analytics from "../Components/Analytics"
import { theme } from "../Components/UI"
import Wrapper from "./Wrapper"

interface Props {
  navigation: NavigationDrawerProp
}

class AnalyticsScreen extends PureComponent<Props> {
  public render() {
    const { navigation } = this.props
    return (
      <Wrapper navigation={navigation} title="analytics.title">
        <ScrollView style={styles.view}>
          <Analytics />
        </ScrollView>
      </Wrapper>
    )
  }
}

const styles = StyleSheet.create({
  view: {
    padding: theme.padding.general
  }
})

export default AnalyticsScreen
