import React, { useState } from "react"
import { ScrollView, StyleSheet, View } from "react-native"
import { NavigationDrawerProp } from "react-navigation-drawer"

import CreateUpdateEntry from "../Components/CreateUpdateEntry"
import ListEntries from "../Components/ListEntries"
import { Footer } from "../Components/UI"
import Wrapper from "./Wrapper"

interface Props {
  navigation: NavigationDrawerProp
}

const HomeScreen = ({ navigation }: Props) => {
  const [showForm, setShowForm] = useState(false)

  return (
    <Wrapper navigation={navigation}>
      <View style={styles.container}>
        <ScrollView style={styles.view}>
          <ListEntries
            openCreateEntryModal={() => setShowForm(true)}
          />
        </ScrollView>
        <Footer>
          <CreateUpdateEntry
            setShowForm={setShowForm}
            showForm={showForm}
          />
        </Footer>
      </View>
    </Wrapper>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  view: {
    marginBottom: 70
  }
})

export default HomeScreen
