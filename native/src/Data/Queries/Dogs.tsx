import { gql } from "apollo-boost"
import React, { ReactNode } from "react"

import { getDogs } from "./generated/getDogs"
import QueryComponent from "./QueryComponent"

const DOGS_QUERY = gql`
  query getDogs {
    getDogs {
      dogs {
        dogInfo {
          age
          name
        }
      }
    }
  }
`

interface Props {
  children: (data: getDogs) => ReactNode,
  LoadingComponent?: ReactNode
}

function Dogs(props: Props) {
  return <QueryComponent query={DOGS_QUERY} {...props} />
}

export default Dogs
