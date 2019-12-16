import React, { FC } from "react"
import { View } from "react-native"

import YourProfileQuery from "../../Data/Queries/UserById"
import session from "../../Data/session"
import LoadingText from "../UI/LoadingText"
import { Para } from "../UI/Text"

import Form from "./Form"

const YourProfile: FC = () => {
  const { userId } = session.getUser()

  return (
    <View>
      <YourProfileQuery
        LoadingComponent={
          <LoadingText text="yourProfile.loading" />
       }
        variables={{
          userId
        }}
      >
        {(({ get_users__userId: user }) => (
          <>
            {user.displayName && <Para>{user.displayName}</Para>}
            <Para>{user.email}</Para>
            <Form />
          </>
        ))}
      </YourProfileQuery>
    </View>
  )
}

export default YourProfile
