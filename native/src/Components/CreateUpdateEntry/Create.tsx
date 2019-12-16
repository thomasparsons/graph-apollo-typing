import React from "react"
import { StyleSheet, View } from "react-native"

import { Button, Footer, theme } from "../UI"
import CreateEntryForm from "./CreateEntry"

interface Props {
  showForm: boolean,
  setShowForm: (val: boolean) => void
}

const CreateEntry = ({ showForm, setShowForm }: Props) => (
  <Footer>
    <View style={styles.footer}>
      <Button
        onPress={() => setShowForm(true)}
        testID="createNew__item__button"
        text="create.entry.button.open"
      />
      {showForm && <CreateEntryForm close={() => setShowForm(false)} />}
    </View>
  </Footer>
)

const styles = StyleSheet.create({
  footer: {
    paddingHorizontal: theme.padding.general
  }
})

export default CreateEntry
