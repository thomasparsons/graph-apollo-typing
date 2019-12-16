import * as Font from "expo-font"
import React, { Component } from "react"
import {Provider} from "react-redux"

import {store} from "./src/Data/store"
import {LoginLoadingScreen} from "./src/Screens"
import Routes from "./src/Screens/Routes"

interface State {
  fontLoaded: boolean,
  loggingIn: boolean
}

class App extends Component<{}, State> {
  public state: State = {
    fontLoaded: false,
    loggingIn: false
  }

  public async componentDidMount () {
    await Font.loadAsync({
      overpass: require("./assets/fonts/Overpass/Overpass-Regular.ttf")
    })
    this.setState({ fontLoaded: true })
  }

  public render() {
    const {fontLoaded} = this.state

    return (
      <Provider store={store}>
        {fontLoaded ? <Routes /> : <LoginLoadingScreen />}
      </Provider>
    )
  }
}

export default App
