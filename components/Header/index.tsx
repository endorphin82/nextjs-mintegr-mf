import { useSelector } from "react-redux"
import { MobileNavigation } from "../Navigation/MobileNavigation"
import Link from "next/link"
import { useSetClientWidth } from "../../redux/hooks"
import React, { useEffect } from "react"
import dynamic from "next/dynamic"
import { NoJsNavigation } from "../Navigation/NoJsNavigation"

const NavigationDynamicComponentWithNoSSR = dynamic(
  () => import("../Navigation/Navigation").then((mod) => mod.Navigation),
  { ssr: false, loading: () => <NoJsNavigation /> }
)

export function Header() {
  const clientWidth = useSelector(state => state.client_width.clientWidth)

  // TODO: check https://usehooks.com/useWindowSize/

  const setClientWidth = useSetClientWidth()

  useEffect(() => {
    function screenTest() {
      setClientWidth(window?.innerWidth)
    }

    screenTest()

    window?.addEventListener("resize", screenTest)

    return () => window?.removeEventListener("resize", screenTest)

  })

  return (
    <>
      {clientWidth < 768 && <MobileNavigation />}
      <div className="darker-effect">
        <div className="header">
          <div className="container">
            {clientWidth < 768
              ?
              <div className="header__logo">
                <Link href={"/"}>
                  <a>
                    <img src="/assets/imgs/header-logo.png" alt="Full Cycle Digital Agency" />
                  </a>
                </Link>
              </div>
              :
              <NavigationDynamicComponentWithNoSSR />}
          </div>
        </div>
      </div>
    </>
  )
}