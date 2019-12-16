import React, { PureComponent, ReactNode } from "react"
import { SafeAreaView, StyleSheet, View } from "react-native"
import { NavigationDrawerProp } from "react-navigation-drawer"

import { Header } from "../Components/UI"
import Provider from "../Data/Provider"

interface Props {
  children: ReactNode,
  navigation?: NavigationDrawerProp,
  title?: string
}

class ScreenWrapper extends PureComponent<Props> {
  public render() {
    const { children, navigation, title } = this.props

    return (
      <SafeAreaView>
        <View style={styles.container}>
          <Header navigation={navigation} title={title} />
          <Provider>
            {children}
          </Provider>
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: "100%"
  }
})

export default ScreenWrapper
