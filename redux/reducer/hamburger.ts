import { ActionsTypes } from "../store"
import { IS_OPEN_HAMBURGER } from "../actions/types"

export type initialState = typeof initialState
const initialState = {
  isOpen: false
}

const hamburger = (state: initialState = initialState, { type, payload }: ActionsTypes): initialState => {
  switch (type) {
    case IS_OPEN_HAMBURGER:
      return {
        ...state,
        isOpen: payload
      }
    default:
      return state
  }
}

export default hamburger
