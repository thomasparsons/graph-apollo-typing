import * as SecureStore from "expo-secure-store"
import { Dispatch } from "react-redux"

import { User } from "../types/generated"
import { ActionType, getState } from "./store"

const key = "WhatWentWell_jwtToken"

const storeJWT = async (jwtToken) => SecureStore.setItemAsync(key, jwtToken)

const removeJWT = async () => SecureStore.deleteItemAsync(key)

const getJWT = () => SecureStore.getItemAsync(key)

const setUser = (user) => (dispatch: Dispatch) => dispatch({
  type: ActionType.LOGIN,
  user
})

const unSetUser = () => (dispatch: Dispatch) => dispatch({
  type: ActionType.LOGOUT
})

const getUser = (): User => {
  const { user } = getState()
  return user
}

export default {
  getJWT,
  getUser,
  removeJWT,
  setUser,
  storeJWT,
  unSetUser
}
