import Link from "next/link"
// import { useSelector } from "react-redux"
// import { useSetIsShowMenu } from "../../redux/hooks"

export function NoJsNavigation() {
  return (
    <nav className="header-nojs__menu">
      <div className="header-nojs__logo">
        <Link href={"/"}>
          <a>
            <img src="/assets/imgs/header-logo.png" alt="Full Cycle Digital Agency" />
          </a>
        </Link>
      </div>

      <ul className="header-nojs__nav active">
        <li id="services">
          <a href="#">services</a>
          <ul>
            <li>
              <Link href={"/magento-development"}>
                <a>magento development</a>
              </Link>
            </li>
            <li>
              <Link href={"/custom-web-development"}>
                <a>custom web development</a>
              </Link>
            </li>
            <li>
              <Link href={"/security-services"}>
                <a>security services</a>
              </Link>
            </li>
          </ul>
        </li>

        <li id="partnerships">
          <a href="#">partnerships</a>
          <ul>
            <li>
              <Link href={"/outsourcing"}>
                <a>outsourcing</a>
              </Link>
            </li>
            <li>
              <Link href={"/outstaffing"}>
                <a>outstaffing</a>
              </Link>
            </li>
          </ul>
        </li>

        <li id="company">
          <a href="#">company</a>
          <ul>
            <li>
              <Link href={"/about"}>
                <a>about</a>
              </Link>
            </li>
            <li>
              <Link href={"/contacts"}>
                <a>contacts</a>
              </Link>
            </li>
            <li>
              <Link href={"/about/testi"}>
                <a>testimonials</a>
              </Link>
            </li>
          </ul>
        </li>

        <li id="faq">
          <a href="#">faq</a>
          <ul>
            <li>
              <Link href={"/general"}>
                <a>general</a>
              </Link>
            </li>
            <li>
              <Link href={"/magento-2"}>
                <a>magento 2</a>
              </Link>
            </li>
          </ul>
        </li>

        <li id="portfolio">
          <Link href={"/portfolio"}>
            <a>portfolio</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}