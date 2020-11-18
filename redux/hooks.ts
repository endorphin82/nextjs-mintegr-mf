import { useDispatch } from "react-redux"
import { useCallback } from "react"
import { setClientWidth, setIsOpenMenu, setIsOpenForm } from "./actions"

export function useSetIsShowMenu() {
  const dispatch = useDispatch()
  return useCallback((isOpen: boolean) => {
    dispatch(setIsOpenMenu(isOpen))
  }, [dispatch])
}

export function useSetClientWidth() {
  const dispatch = useDispatch()
  return useCallback((clientWidth: number) => {
    dispatch(setClientWidth(clientWidth))
  }, [dispatch])
}