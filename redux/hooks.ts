import { useDispatch } from "react-redux"
import { useCallback } from "react"
import { setClientWidth, setIsOpenHamburger } from "./actions"

export function useSetIsShowMenu() {
  const dispatch = useDispatch()
  return useCallback((isOpen: boolean) => {
    dispatch(setIsOpenHamburger(isOpen))
  }, [dispatch])
}
export function useSetClientWidth() {
  const dispatch = useDispatch();
  return useCallback((clientWidth: number) => {
    dispatch(setClientWidth(clientWidth));
  }, [dispatch]);
}