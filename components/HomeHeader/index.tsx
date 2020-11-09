import { HomeNavigation } from "../Navigation/HomeNavigation"
import { useMediaQuery } from "react-responsive"
import { MobileNavigation } from "../Navigation/MobileNavigation"

export function HomeHeader() {
  const isTabletOrMobileDevice = (typeof window !== "undefined") ? useMediaQuery({
    query: "(max-device-width: 768px)"
  }) : true

  return (
    <div className="darker-effect">
      <div className="header">
        <div className="container">
          {isTabletOrMobileDevice ? <MobileNavigation /> : <HomeNavigation />}
        </div>
      </div>
    </div>
  )
}
