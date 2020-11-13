import { CLIENT_WIDTH, IS_OPEN_HAMBURGER } from "./types"

export const setIsOpenHamburger = (isOpen: boolean) => ({
  type: IS_OPEN_HAMBURGER,
  payload: isOpen
} as const)

export const setClientWidth = (clientWidth: number) => ({
  type: CLIENT_WIDTH,
  payload: clientWidth
} as const)
