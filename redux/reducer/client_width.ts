import {ActionsTypes} from "../store"
import {CLIENT_WIDTH} from "../actions/types";

export type initialState = typeof initialState
const initialState = {
  clientWidth: 0
}

const client_width =  (state: initialState = initialState, action: ActionsTypes): initialState => {
  switch (action.type) {
    case CLIENT_WIDTH:
      return {
        ...state,
        clientWidth: action.payload
      }
    default:
      return state
  }
}

export default client_width;