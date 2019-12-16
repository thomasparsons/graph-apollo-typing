import React, { FC, useState } from "react"
import { FormattedMessage } from "react-intl"
import {
  StyleSheet, Text, TouchableOpacity, View
} from "react-native"

import LogInMutation from "../../Data/Mutations/LogIn"
import { EmailInput, PasswordInput } from "../Form"
import {
  Button, Error, Footer, theme
} from "../UI"

import CreateProfile from "../CreateProfile"
import Loading from "../ListEntries/Loading"

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

const LoginForm: FC = () => {
  const [email, setEmailAddress] = useState("thomaspatrickparsons@gmail.com")
  const [password, setPassword] = useState("password")
  const [validationError, setError] = useState(undefined)
  const [showSignUp, setShowSignUpForm] = useState(false)

  return (
    <>
      <LogInMutation
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
            <View style={styles.parentWrapper}>
              <View style={styles.scrollView}>
                <View style={styles.wrapper}>
                  <EmailInput
                    label="login.form.email"
                    onChange={(val: string) => {
                      setError(undefined)
                      setEmailAddress(val)
                    }}
                    placeholder="hello@world.com"
                    testID="login__form__email"
                    value={email}
                  />
                </View>
                <View style={styles.wrapper}>
                  <PasswordInput
                    label="login.form.password"
                    onChange={(val: string) => {
                      setError(undefined)
                      setPassword(val)
                    }}
                    testID="login__form__password"
                    value={password}
                  />
                </View>
                {validationError && <Error text={validationError} />}
                {errorMessage && <Error text={errorMessage} />}
              </View>
            </View>
            <Footer>
              <TouchableOpacity onPress={() => setShowSignUpForm(true)}>
                <Text style={styles.signUp}>
                  <FormattedMessage id="signup.form.start" />
                </Text>
              </TouchableOpacity>
              <View style={styles.footer}>
                <Button
                  onPress={() => validate(email, password, mutate, setError)}
                  testID="login__form__button"
                  text="login.form.button"
                />
              </View>
            </Footer>
          </>
        ))}
      </LogInMutation>
      {showSignUp && <CreateProfile onClose={() => setShowSignUpForm(false)} />}
    </>
  )
}

const styles = StyleSheet.create({
  footer: {
    paddingHorizontal: theme.padding.general
  },
  parentWrapper: {
    padding: theme.padding.general
  },
  scrollView: {
    marginBottom: theme.padding.general
  },
  signUp: {
    marginBottom: theme.padding.large,
    textAlign: "center"
  },
  wrapper: {
    marginBottom: theme.padding.general
  }
})

export default LoginForm
