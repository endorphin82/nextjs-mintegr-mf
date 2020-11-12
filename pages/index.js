import Link from "next/link"
import { HomeLayout } from "../components/HomeLayout"

export default function Home() {
  return (
    <HomeLayout>
      <div className="home">
        <div className="content_plane">
          <div>Get in touch <Link href={"/contacts/"}><a
            title="contact us" className="btn-inline"
            target="_self">contact us</a></Link>
          </div>
        </div>
        <div className="container">
          <h3 className="home__service-title">need our services?</h3>
        </div>
        <div className="home__cards">
          <div className="home__card-list">
            <figure className="home__card">
              <img src="/assets/imgs/home/hp-1.png" alt="Contact us" />
              <figcaption className="home__card-text-list">
                <p className="home__list-card-title"> 1. <span className="home__span-bold">Contact</span> us:</p>
                <p className="envelope-i">
                  <i className="fa-li fa fa-envelope" aria-hidden="true"></i><a
                  href="mailto:sales@m-integration.com">Send email</a></p>

                <p className="skype-i">
                  <i className="fab fa-skype" aria-hidden="true"></i><a
                  href="skype:sales@m-integration.com?chat">Chat in Skype</a></p>

              </figcaption>
            </figure>


            <figure className="home__card">
              <img src="/assets/imgs/home/hp-2.png" alt="Contact us" />
              <figcaption className="home__card-text-list">
                <p className="home__list-card-title"> 2. We will <span className="home__span-bold">respond</span> you
                  <span className="home__span-bold"> ASAP</span> to clarify all details and requirements.
                </p>
              </figcaption>
            </figure>


            <figure className="home__card">
              <img src="/assets/imgs/home/hp-3.png" alt="Contact us" />
              <figcaption className="home__card-text-list">
                <p className="home__list-card-title"> 3. We will <span className="home__span-bold">provide</span> an
                  <span className="home__span-bold">estimate</span> and approximate costs.
                </p>
              </figcaption>
            </figure>


            <div className="home__card">
              <img src="/assets/imgs/home/hp-4.png" alt="Contact us" />
              <div className="home__card-text-list">
                <p className="home__list-card-title"> 4. After approval we <span className="home__span-bold">start working immediately</span>.
                </p>
              </div>
            </div>


            <figure className="home__card">
              <img src="/assets/imgs/home/hp-5.png" alt="Contact us" />
              <figcaption className="home__card-text-list">
                <p className="home__list-card-title"> 5. We <span className="home__span-bold">do</span> our
                  <span className="home__span-bold">best</span> and make <span
                    className="home__span-bold">you happy</span>.
                </p>
              </figcaption>
            </figure>

            <figure className="home__card">
              <img src="/assets/imgs/home/hp-6.png" alt="Contact us" />
              <figcaption className="home__card-text-list">
                <p className="home__list-card-title"> 6. We become a <span className="home__span-bold">long-term partners</span>.
                </p>
              </figcaption>
            </figure>
          </div>
          <div className="home__popular">
            <h3 className="home__popular-title">Popular:</h3>
            <ul className="home__popular-nav">
              <li><Link href={"/contacts/"}><a>Contacts</a></Link></li>
              <li><Link href={"/outsoursing/"}><a>Outsoursing</a></Link></li>
              <li><Link href={"/magento-2/"}><a>Magento 2</a></Link></li>
              <li><Link href={"/general/"}><a>General</a></Link></li>
              <li><Link href={"/outstaffing/"}><a>Outstaffing</a></Link></li>
              <li><Link href={"/migration/"}><a>Migration</a></Link></li>
            </ul>
          </div>
        </div>

        <h3 className="home__after-cards-title">Grow your business with us!</h3>

      </div>
    </HomeLayout>
  )
}
