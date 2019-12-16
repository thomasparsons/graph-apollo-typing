import React, { useState } from "react"
import { ScrollView, StyleSheet, View } from "react-native"

import ResetPasswordMutation from "../../Data/Mutations/ResetPassword"
import session from "../../Data/session"
import { TextInput } from "../Form"
import {
  Button, Error, LoadingText, theme
} from "../UI"

const validate = (newPassword, newPasswordRepeat, mutate, setError) => {
  if (newPassword.trim().length === 0) {
    setError("no password added")
    return null
  }

  if (newPasswordRepeat.trim().length === 0) {
    setError("no repeat password added")
    return null
  }

  if (newPassword !== newPasswordRepeat) {
    setError("passwords don't match")
    return null
  }

  mutate()
}

const ResetPasswordForm = () => {
  const { userId } = session.getUser()
  const [newPassword, setNewPassword] = useState("")
  const [newRepeatPassword, setNewRepeatPassword] = useState("")
  const [error, setError] = useState(undefined)

  return (
    <ResetPasswordMutation
      LoadingComponent={
        <LoadingText text="resetPassword.form.loading" />
        }
      onCompleted={() => {}}
      variables={{
        newPassword,
        userId
      }}
    >
      {(({ mutate }) => (
        <>
          <ScrollView style={styles.container}>
            <View>
              <View style={styles.wrapper}>
                <TextInput
                  label="resetPassword.form.password"
                  onChange={(val: string) => {
                    setError(undefined)
                    setNewPassword(val)
                  }}
                  placeholder="New Password"
                  testID="resetPassword__new_password"
                  value={newPassword}
                />
              </View>
              <View style={styles.wrapper}>
                <TextInput
                  label="resetPassword.form.password"
                  onChange={(val: string) => {
                    setError(undefined)
                    setNewRepeatPassword(val)
                  }}
                  placeholder="New Password"
                  testID="resetPassword__new_password"
                  value={newRepeatPassword}
                />
              </View>
              {error && <Error text={error} />}
            </View>
          </ScrollView>
          <View style={styles.footer}>
            <Button
              onPress={() => validate(newPassword, newRepeatPassword, mutate, setError)}
              testID="resetPassword__button"
              text="resetPassword.form.button"
            />
          </View>
        </>
      ))}
    </ResetPasswordMutation>
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

export default ResetPasswordForm
