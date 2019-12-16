import React from "react"
import { Text } from "react-native"

import { getDogs_getDogs_dogs_dogInfo } from "../Data/Queries/generated/getDogs"

interface Props {
  dogInfo: getDogs_getDogs_dogs_dogInfo
}

const Dog = ({ dogInfo }: Props) => (
  <Text>{dogInfo.name}</Text>
)

export default Dog
