import React, { PureComponent } from "react"
import { Image, StyleSheet, View } from "react-native"
import { theme } from "../Components/UI"

import splash from "../../assets/splash.png"

class LoginLoadingScreen extends PureComponent {
  public render() {
    return (
      <View style={styles.view}>
        <View style={styles.horizontal}>
          <Image
            style={styles.image}
            source={splash}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  image: {
    height: 130,
    width: 130
  },
  view: {
    backgroundColor: theme.colors.secondary.background,
    display: "flex",
    flexDirection: "column",
    height: "100%",
    justifyContent: "center"
  }
})

export default LoginLoadingScreen
