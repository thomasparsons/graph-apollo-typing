import React, { FC, useState } from "react"
import { ScrollView, StyleSheet, View } from "react-native"

import CreateProfileMutation from "../../Data/Mutations/CreateProfile"
import { EmailInput, PasswordInput } from "../Form"
import Loading from "../ListEntries/Loading"
import {
  Button, Error, Footer, theme
} from "../UI"

const validate = (email, password, mutate, setError) => {
  if (email.trim().length === 0) {
    setError("no email address added")
    return null
  }

  if (password.trim().length === 0) {
    setError("no password added")
    return null
  }

  mutate()
}

const CreateProfileForm: FC = () => {
  const [email, setEmailAddress] = useState("")
  const [password, setPassword] = useState("")
  const [validationError, setError] = useState(undefined)

  return (
    <CreateProfileMutation
      LoadingComponent={(
        <>
          <Loading />
          <Loading isOdd />
          <Loading />
        </>
      )}
      variables={{
        email,
        password
      }}
    >
      {(({ errorMessage, mutate }) => (
        <>
          <ScrollView>
            <View style={styles.wrapper}>
              <EmailInput
                label="signup.form.email"
                onChange={(val: string) => {
                  setError(undefined)
                  setEmailAddress(val)
                }}
                placeholder="hello@world.com"
                testID="createProfile__form__email"
                value={email}
              />
            </View>
            <View style={styles.wrapper}>
              <PasswordInput
                label="signup.form.password"
                onChange={(val: string) => {
                  setError(undefined)
                  setPassword(val)
                }}
                testID="createProfile__form__password"
                value={password}
              />
            </View>
            {validationError && <Error text={validationError} />}
            {errorMessage && <Error text={errorMessage} />}
          </ScrollView>

          <Footer>
            <View style={styles.footer}>
              <Button
                onPress={() => validate(email, password, mutate, setError)}
                testID="createProfile__form__button"
                text="signup.form.button"
              />
            </View>
          </Footer>
        </>
      ))}
    </CreateProfileMutation>
  )
}

const styles = StyleSheet.create({
  footer: {
    paddingBottom: theme.padding.general
  },
  wrapper: {
    marginBottom: theme.padding.general
  }
})

export default CreateProfileForm
