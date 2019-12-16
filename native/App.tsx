import React, { Component } from "react"
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Screen from "./src/Screens/Screen"
import Provider from "./src/Data/Provider"

const AppNavigator = createStackNavigator({
  Screen: {
    screen: Screen
  }
})

const AppContainer = createAppContainer(AppNavigator)

class App extends Component {
  public render() {
    return (
      <Provider>
        <AppContainer />
      </Provider>
    )
  }
}

export default App
