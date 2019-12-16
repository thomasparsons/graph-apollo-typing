import React from "react"
import { Text, View } from "react-native"

import DogsQuery from "../Data/Queries/Dogs"
import Dog from "./Dog"

const ListDogs = () => (
  <>
    <Text>Dogs!</Text>
    <DogsQuery>
      {(({ getDogs }) => (
        <View>
          {getDogs.dogs.map((dog) => (
            <View key={dog.someData}>
              <Dog dogInfo={dog.dogInfo} />
            </View>
          ))}
        </View>
      ))}
    </DogsQuery>
  </>
)

export default ListDogs
