import { ActionsTypes } from "../store"
import { IS_OPEN_FORM } from "../actions/types"

export type initialState = typeof initialState
const initialState = {
  isOpen: false
}

const is_open_form = (state: initialState = initialState, action: ActionsTypes): initialState => {
  switch (action.type) {
    case IS_OPEN_FORM:
      return {
        ...state,
        isOpen: action.payload
      }
    default:
      return state
  }
}

export default is_open_form
