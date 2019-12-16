import React, { FC } from "react"

import LogOutMutation from "../../Data/Mutations/Logout"
import { Button, LoadingText } from "../UI"

const LogOut: FC = () => (
  <LogOutMutation
    LoadingComponent={
      <LoadingText text="logout.loading" />
     }
  >
    {(({ mutate }) => (
      <Button
        onPress={mutate}
        testID="logout__form__button"
        text="logout.form.button"
      />
    ))}
  </LogOutMutation>
)

export default LogOut
