import dynamic from "next/dynamic"
import Link from "next/link"
import { MobileNavigation } from "../Navigation/MobileNavigation"
import React, { useEffect } from "react"
import { useSetClientWidth } from "../../redux/hooks"
import { useSelector } from "react-redux"

import { NoJsNavigation } from "../Navigation/NoJsNavigation"
import Olark from 'react-olark-plugin';

const HomeNavigationDynamicComponentWithNoSSR = dynamic(
  () => import("../Navigation/HomeNavigation").then((mod) => mod.HomeNavigation),
  { ssr: false, loading: () => <NoJsNavigation /> }
)

export function HomeHeader() {
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
      <Olark
        siteId={'9913-989-10-5485'}
      />
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
              <HomeNavigationDynamicComponentWithNoSSR />}
          </div>
        </div>
      </div>
    </>
  )
}
