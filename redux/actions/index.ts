import { CLIENT_WIDTH, IS_OPEN_MENU } from "./types"

export const setIsOpenMenu = (isOpen: boolean) => ({
  type: IS_OPEN_MENU,
  payload: isOpen
} as const)

export const setClientWidth = (clientWidth: number) => ({
  type: CLIENT_WIDTH,
  payload: clientWidth
} as const)
