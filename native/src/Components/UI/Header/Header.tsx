import React, { FC } from "react"
import { FormattedMessage } from "react-intl"
import {
  StyleSheet, Text, TouchableOpacity, View
} from "react-native"
import { NavigationDrawerProp } from "react-navigation-drawer"

import session from "../../../Data/session"
import theme from "../theme"

interface Props {
  navigation: NavigationDrawerProp,
  title?: string
}

const Header: FC<Props> = ({ navigation, title }) => {
  const user = session.getUser()

  return (
    <View style={user ? styles.view : styles.view2}>
      {user && (
      <TouchableOpacity
        onPress={() => navigation.openDrawer()}
        style={styles.menu}
      >
        <View style={styles.row} />
        <View style={styles.row} />
        <View style={styles.rowLast} />
      </TouchableOpacity>
      )}
      <Text style={styles.text}>
        {title && <FormattedMessage id={title} />}
        {!title && <FormattedMessage id="whatWentWell.title" />}
      </Text>
      {user && <View style={styles.menu2} />}
    </View>
  )
}

const menuStyling = {
  height: 20,
  margin: theme.padding.general,
  width: 22
}

const styles = StyleSheet.create({
  menu: {
    ...menuStyling
  },
  menu2: {
    ...menuStyling
  },
  row: {
    backgroundColor: theme.colors.primary.text,
    height: 3,
    marginBottom: 5,
    width: 22
  },
  rowLast: {
    backgroundColor: theme.colors.primary.text,
    height: 3,
    width: 22
  },
  text: {
    color: theme.colors.primary.text,
    fontFamily: theme.typeface.standard,
    fontSize: theme.text.appTitle,
    marginBottom: 5,
    marginTop: 10,
    textAlign: "center"
  },
  view: {
    backgroundColor: theme.colors.primary.background,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  view2: {
    backgroundColor: theme.colors.primary.background
  }
})

export default Header
