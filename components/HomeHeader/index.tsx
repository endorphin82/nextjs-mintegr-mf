import dynamic from "next/dynamic"
import Link from "next/link"
import { useMediaQuery } from "react-responsive"
import { MobileNavigation } from "../Navigation/MobileNavigation"

const HomeNavigationDynamicComponentWithNoSSR = dynamic(
  () => import ("../Navigation/HomeNavigation"),
  { ssr: false }
)

function HomeHeader() {
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 768px)"
  })

  return (
    <>
      {isTabletOrMobileDevice && <MobileNavigation />}
      <div className="darker-effect">
        <div className="header">
          <div className="container">
            {isTabletOrMobileDevice
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

export default HomeHeader