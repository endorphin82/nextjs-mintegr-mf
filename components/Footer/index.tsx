import Link from "next/link"
import ScrollTopArrow from "../ScrollTopArrow"
import Olark  from '../../lib/react-olark-plugin';

export function Footer() {

  return (

    <footer className="footer">
      <Olark
        siteId={'9913-989-10-5485'}
      />
      <div className="footer__partner">
        <div className="footer__container container">
          <div className="footer__m-general-extension-partner">
            <Link href={"/extensions/"}>
              <a>
                <img src="/assets/imgs/2017/10/gen-ext-partner.png"
                     alt="Magento General Extension Partner" title="Magento General Extension Partner" />
              </a>
            </Link>
            <ScrollTopArrow />
          </div>
          <div className="footer__row">
            <div className="footer__text">
              <img src="/assets/imgs/2017/01/tech1.png" />
              <img src="/assets/imgs/2017/01/tech2.png" />
              <img src="/assets/imgs/2017/01/tech3.png" />
              <img src="/assets/imgs/2017/01/tech4.png" />
              <img src="/assets/imgs/2017/01/tech5.png" />
              <img src="/assets/imgs/2017/01/tech6.png" />
              <img src="/assets/imgs/2017/01/tech7.png" />
              <img src="/assets/imgs/2017/01/tech8.png" />
              <img src="/assets/imgs/2017/01/tech9.png" />
            </div>
          </div>

        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__bottom__container">
          <div className="footer__empty">
          </div>
          <div className="footer__copyright">
            <p>Copyright © 2014-2020. All Rights Reserved by M-integration.</p>
            <p>Magento development, Custom Web development, IT Security</p>
          </div>
          <ul className="footer__social-links">
            <li><a id="social-s" href="skype:sales@m-integration.com?chat"></a></li>
            <li><a id="social-in" target="_blank" href="https://www.linkedin.com/company/18011425/"></a></li>
            <li><a id="social-m" href="mailto:sales@m-integration.com"></a></li>
          </ul>
        </div>

      </div>
    </footer>
  )
}