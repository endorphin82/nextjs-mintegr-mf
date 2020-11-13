import dynamic from "next/dynamic"
import Link from "next/link"
import { useMediaQuery } from "react-responsive"
import { MobileNavigation } from "../Navigation/MobileNavigation"
import { useEffect } from "react"
import { useSetClientWidth } from "../../redux/hooks"
import { useSelector } from "react-redux"

const HomeNavigationDynamicComponentWithNoSSR = dynamic(
  () => import ("../Navigation/HomeNavigation"),
  { ssr: false }
)

export default function HomeHeader() {
  const clientWidth = useSelector(state => state.client_width.clientWidth)

  // TODO: check https://usehooks.com/useWindowSize/

  const setClientWidth = useSetClientWidth()

  useEffect(() => {
    function screenTest() {
      setClientWidth(window?.innerWidth)
      // console.log("useEffect", {
      //   clientWidth: window?.innerWidth
      // })
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
              <HomeNavigationDynamicComponentWithNoSSR />}
          </div>
        </div>
      </div>
    </>
  )
}
