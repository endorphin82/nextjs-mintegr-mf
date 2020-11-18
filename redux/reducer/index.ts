import { combineReducers } from "redux"
import client_width from "./client_width"
import hamburger from "./hamburger"


export const rootReducer = combineReducers({
  hamburger,
  client_width
})

export type RootState = ReturnType<typeof rootReducer>
