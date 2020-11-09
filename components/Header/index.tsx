import { Navigation } from "../Navigation/Navigation"
import { useMediaQuery } from "react-responsive"
import { MobileNavigation } from "../Navigation/MobileNavigation"

export function Header() {
  const isTabletOrMobileDevice = (typeof window !== "undefined") ? useMediaQuery({
    query: "(max-device-width: 768px)"
  }) : true

  return (
    <div className="darker-effect">
      <div className="header">
        {isTabletOrMobileDevice ? <MobileNavigation /> : <div className="container"><Navigation /></div>}
      </div>
    </div>
  )
}