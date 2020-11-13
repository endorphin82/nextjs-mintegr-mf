import { combineReducers } from "redux"
import hamburger from "./hamburger"
import client_width from "./client_width"

export const rootReducer = combineReducers({
  hamburger,
  client_width
})

export type RootState = ReturnType<typeof rootReducer>
