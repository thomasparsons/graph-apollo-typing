import React, { useState } from "react"
import { ScrollView, StyleSheet, View } from "react-native"

import UpdateProfileMutation from "../../Data/Mutations/UpdateProfile"
import session from "../../Data/session"
import { TextInput } from "../Form"
import {
  Button, Error, LoadingText, theme
} from "../UI"

const validate = (displayName, mutate, setError) => {
  if (displayName.trim().length === 0) {
    setError("no display name added")
    return null
  }

  mutate()
}

const YourProfileForm = () => {
  const { displayName, userId } = session.getUser()
  const [name, setDisplayName] = useState(displayName || "")
  const [error, setError] = useState(undefined)

  return (
    <UpdateProfileMutation
      LoadingComponent={
        <LoadingText text="yourProfile.form.loading" />
        }
      variables={{
        displayName: name,
        userId
      }}
    >
      {(({ mutate }) => (
        <>
          <ScrollView style={styles.container}>
            <View>
              <View style={styles.wrapper}>
                <TextInput
                  label="yourProfile.form.displayName"
                  onChange={(val: string) => {
                    setError(undefined)
                    setDisplayName(val)
                  }}
                  placeholder="Display name (full)"
                  testID="updateProfile__display_name"
                  value={name}
                />
              </View>
              {error && <Error text={error} />}
            </View>
          </ScrollView>
          <View style={styles.footer}>
            <Button
              onPress={() => validate(name, mutate, setError)}
              testID="updateProfile__button"
              text="yourProfile.form.button"
            />
          </View>
        </>
      ))}
    </UpdateProfileMutation>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: theme.padding.general
  },
  footer: {
    paddingBottom: theme.padding.general
  },
  wrapper: {
    marginBottom: theme.padding.general
  }
})

export default YourProfileForm
