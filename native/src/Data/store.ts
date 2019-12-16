import { applyMiddleware, createStore } from "redux"
import thunk from "redux-thunk"

import { User } from "../types/generated"

export enum ActionType {
  LOGOUT = "LOGOUT",
  LOGIN = "LOGIN"
}

interface Action {
  user?: User,
  type: ActionType
}

export interface SessionReduxState {
  user?: User
}

const initialState = {
  user: undefined
}

const addUserToState = (state: SessionReduxState, user?: User) => ({
  ...state,
  user
})

const removeUserFromState = (state: SessionReduxState) => ({
  ...state,
  user: undefined
})

function reducer(state: SessionReduxState = initialState, action: Action): SessionReduxState {
  switch (action.type) {
    case ActionType.LOGIN:
      return addUserToState(state, action.user)
    case ActionType.LOGOUT:
      return removeUserFromState(state)
    default:
      return state
  }
}

export const getState = (): SessionReduxState => store.getState()

export default reducer

export const store = createStore(
  reducer,
  applyMiddleware(thunk)
)
