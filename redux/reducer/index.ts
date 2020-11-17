import { combineReducers } from "redux"
import client_width from "./client_width"
import hamburger from "./hamburger"
import is_open_form from "./is_open_form"

export const rootReducer = combineReducers({
  is_open_form,
  hamburger,
  client_width
})

export type RootState = ReturnType<typeof rootReducer>
