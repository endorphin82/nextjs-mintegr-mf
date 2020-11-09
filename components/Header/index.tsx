import { Navigation } from "../Navigation/Navigation"
import { useMediaQuery } from "react-responsive"
import { MobileNavigation } from "../Navigation/MobileNavigation"
import Link from "next/link"

export function Header() {
  const isTabletOrMobileDevice = (typeof window !== "undefined") ? useMediaQuery({
    query: "(max-device-width: 768px)"
  }) : true

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
              <Navigation />}
          </div>
        </div>
      </div>
    </>
  )
}