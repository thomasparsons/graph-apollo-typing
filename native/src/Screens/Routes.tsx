import React, { Component } from "react"
import { IntlProvider } from "react-intl"
import { createAppContainer, createSwitchNavigator } from "react-navigation"
import { createDrawerNavigator } from "react-navigation-drawer"
import { connect, Dispatch } from "react-redux"

import loginWithJWT from "../Data/Mutations/LoginWithJWT"
import session from "../Data/session"

import language from "../Lang"
// import SideBar from "../Components/UI/SideBar"
import { User } from "../types/generated"
import {
  AnalyticsScreen, HomeScreen, LoginLoadingScreen, LoginScreen, SecurityScreen, YourProfileScreen
} from "."

const AppNavigator = createDrawerNavigator({
  Analytics: {
    screen: AnalyticsScreen
  },
  Home: {
    screen: HomeScreen
  },
  Security: {
    screen: SecurityScreen
  },
  YourProfile: {
    screen: YourProfileScreen
  }
}, {
  // contentComponent: () => <SideBar />,
  drawerType: "slide",
  drawerWidth: 275,
  initialRouteName: "Home"
})

const LoginNavigator = createSwitchNavigator({
  Login: {
    screen: LoginScreen
  }
}, {
  initialRouteName: "Login"
})

const AppContainer = createAppContainer(AppNavigator)
const LoginContainer = createAppContainer(LoginNavigator)

interface Props {
  dispatch: Dispatch,
  user: User
}

interface State {
  loading: boolean
}

class Routes extends Component<Props, State> {
  public state: State = { loading: true }

  constructor(props: Props) {
    super(props)

    if (!props.user) {
      session.getJWT().then((jwtToken) => {
        if (jwtToken) {
          loginWithJWT(jwtToken).then((u) => {
            props.dispatch(session.setUser(u))
            this.setState({ loading: false })
          })
        } else {
          this.setState({ loading: false })
        }
      })
    }
  }

  public render() {
    const { user } = this.props
    const { loading } = this.state

    if (loading && !user) {
      return <LoginLoadingScreen />
    }

    const locale = user ? user.language : "en-gb"
    const messages = language(locale)

    if (!user) {
      return (
        <IntlProvider locale={locale} messages={messages.default}>
          <LoginContainer />
        </IntlProvider>
      )
    }

    return (
      <IntlProvider locale={locale} messages={messages.default}>
        <AppContainer />
      </IntlProvider>
    )
  }
}

const mapStateToProps = ({ user }) => ({
  user
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(Routes)
