import TitleOfAnyPage from "../../components/TitleOfAnyPage"
import { MainLayout } from "../../components/MainLayout"
import Slider from "react-slick"

export default function About() {

  const settingsResp = {
    dots: true,
    className: "customers-slider",
    autoplay: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "customers-slider"
  }

  return (
    <MainLayout>
      <TitleOfAnyPage />
      <div className="row">
        <div className="left-sidebar">
          <div id="post-1797">
            <div className="row__offer">
              <div className="col__about">
                <h4 className="custom-h4">About M-integration</h4>
                <p className="custom-text-os first-p">
                  <div className="col__about--logo"><img src="/assets/imgs/about/m-integration.svg" alt="" /></div>
                  M-integration is a well-known, trusted and experienced company with branches in Europe and Ukraine.
                  The
                  CEO and founder Denis Bolkovenko founded M-Integration in 2014, after identifying the increased market
                  demand for high-quality development professional services with an end-to-end model and shorter
                  delivery
                  times.
                </p>

                <p className="custom-text-os">
                  M-Integration is a key player in two main
                  areas: <strong>Magento Ecommerce solutions</strong> and Full lifecycle development (<strong>Custom
                  Solutions, FinTech, Start-ups</strong>). The company has embraced the better, faster, cheaper tenets
                  and leadership principles that are well known within the cloud world.
                </p>
                <p className="custom-text-os">Denis is a <a
                  href="https://u.magento.com/certification/directory/dev/1557361/" target="_blank"> certified</a> and
                  very experienced Magento developer, and as such he understands the complete end-to-end business
                  processes in-depth. This knowledge, experience and high standards have allowed him to lead his teams
                  to
                  provide a consistent world-class service with shorter turn-around times at a lower cost.
                </p>
                <p className="custom-text-os">M-Integration delivers value for businesses through technology, as an
                  integrated solution in a partner model: this makes M-Integration stand out from many other companies
                  that mostly focus on a single set of technologies independent from consumption model, integration,
                  processes or delivery model.
                </p>
                <p className="custom-text-os">In 2018 M-Integration gained the much coveted status of Magento General
                  Extension Partner - more about this <a href="https://marketplace.magento.com/partner/Mintegration"
                                                         target="_blank">here</a>, which independenly validates the
                  company's expertise, high standards, dedication, and reputation in the Magento community.</p>
              </div>

              <div className="col__offer">

                <h4 className="custom-h4">What We Offer</h4>
                <span className="dropcap">1</span>
                <div className="extra-wrap">
                  <p className="custom-text-os-small">Magento 2 - Full Sales Solutions<br />
                    Full cycle development, design, upgrade and support services for your e-commerce business.</p>
                </div>
                <span className="dropcap">2</span>
                <div className="extra-wrap">
                  <p className="custom-text-os-small">Custom Development<br />
                    The team is ready to deliver any technical solutions for implementing business ideas regardless of
                    the technology and requirements.<br />
                    We will assist you with any stage of your business to achieve the result.</p>
                </div>
                <span className="dropcap">3</span>
                <div className="extra-wrap">
                  <p className="custom-text-os-small">Outstaffing Services<br />
                    As a customer, you will have complete control of project deadlines, via a dedicated management<br />
                    dashboard and direct access to our experienced developers.
                  </p>
                </div>


              </div>
            </div>
            <hr />
            <div className="row__team">
              <div className="col__offer-big">
                <h4 className="custom-h4">The M-Integration Team</h4>
                <div className="col__offer-big-img">
                  <img className="size-fulll wp-image-2483"
                       src="https://m-integration.com/wp-content/uploads/2019/04/IMG_6249_new.jpg" alt="about-us" />

                </div>
              </div>
              <div className="col__offer-thumb">
                <ul className="ceo_icons">
                  <li className="first_ceo_icon"><img
                    className="size-full wp-image-2483 avatar_image"
                    src="https://m-integration.com/wp-content/uploads/2019/04/IMG_6283-Edit.jpg" alt="about-us" />
                    <div className="avatar_image_text">Chief Executive Officer &nbsp;</div>
                  </li>
                  <li className="second_ceo_icon"><img
                    className="size-full wp-image-2483 avatar_image"
                    src="https://m-integration.com/wp-content/uploads/2019/04/jan.jpg" alt="about-us" />
                    <div className="avatar_image_text">Vice President (London) &nbsp;</div>
                  </li>
                  <li className="third_ceo_icon"><img
                    className="size-full wp-image-2483 avatar_image"
                    src="https://m-integration.com/wp-content/uploads/2019/04/max_new.jpg" alt="about-us" />
                    <div className="avatar_image_text">Chief Operating
                      Officer &nbsp;
                    </div>
                  </li>
                </ul>
              </div>

            </div>
            <div className="spacer"></div>
            <hr />
            <h4 className="custom-h4">How We Work</h4>
            <div className="row__we-work">
              <div className="col__we-work_left">

                <ul id="dropcap-ww" className="fa-ul custom-icon-ul">
                  <li><span className="dropcap-ww">&gt;</span>
                    <div className="extra-wrap">
                      <p className="custom-text-os">M-Integration provides a very level of quality with a very short
                        delivery time, through the use of modern approaches such as project sprints, agile/scrum
                        methodology, and integrated testing.</p>
                    </div>
                  </li>
                  <li><span className="dropcap-ww">&gt;</span>
                    <div className="extra-wrap">
                      <p className="custom-text-os">Projects are managed with sprints and a backlog, lead to
                        predictable results and timelines and avoid surprises for the application owner, and delivery
                        teams.</p>
                    </div>
                  </li>
                  <li><span className="dropcap-ww">&gt;</span>
                    <div className="extra-wrap">
                      <p className="custom-text-os">Customers are given access to real-time Sprints and Backlogs and
                        the development is managed through a ticketing system with STAR methodology, empowering
                        agile/scrum ways of working, while maintaining a high level of stability and control over the
                        project.</p>
                    </div>
                  </li>
                  <li><span className="dropcap-ww">&gt;</span>
                    <div className="extra-wrap">
                      <p className="custom-text-os">M-Integration team members are contactable directly via Slack,
                        allowing direct communication with the teams for improved agility and shorter delivery cycles
                        with increased value.</p>
                    </div>
                  </li>

                </ul>
              </div>

              <div className="col__we-work_right">
                <a
                  className="grouped_elements"
                  href="https://m-integration.com/wp-content/uploads/2019/04/devices.png"><img
                  src="https://m-integration.com/wp-content/uploads/2019/05/slack_small.png" alt="" /></a><a
                className="grouped_elements-second"
                href="https://m-integration.com/wp-content/uploads/2019/04/jira.png"><img
                src="https://m-integration.com/wp-content/uploads/2019/05/jira-small.png" alt="" /></a><p></p>
              </div>
            </div>
            <div className="spacer"></div>
            <hr />
            <div className="row__values">
              <h4 className="custom-h4">Our Core Values</h4>
              <div className="col__values-left">
                <ul id="ul-li-arrow" className="fa-ul custom-icon-ul ul-li-arrow">
                  <li>
                    <p className="custom-text-os"><strong>Customer Obsession.</strong> The team obsesses over customers,
                      their needs and how to add value; the customer value is our first priority.</p>
                  </li>
                  <li>
                    <p className="custom-text-os"><strong>We are different, because every client is
                      different.</strong> For each client we provide an individual suitable approach and solutions.</p>
                  </li>
                  <li>
                    <p className="custom-text-os"><strong>Creating a strategy.</strong> Regardless of the business stage
                      you can rely on us as we understand the final result, its place and its value.</p>
                  </li>
                  <li>
                    <p className="custom-text-os"><strong>Transparency.</strong> We created all the tools to show the
                      transparent processes and provide you with an accurate deadline.</p>
                  </li>
                </ul>
              </div>
              <div className="col__values-right">
                <ul id="ul-li-arrow" className="fa-ul custom-icon-ul ul-li-arrow">
                  <li>
                    <p className="custom-text-os"><strong>Long-term relationships.</strong> We work in a partnership,
                      remain available and strive to build a long-term relationship based on value and a deep
                      understanding or your business model.</p>
                  </li>
                  <li>
                    <p className="custom-text-os"><strong>Reputation.</strong> We always greatly value our customers and
                      our reputation. Excellent work allows us to extend our customer base.</p>
                  </li>
                  <li>
                    <p className="custom-text-os"><strong>Fair price.</strong> Our location advantages, make us stand
                      out among others, as we are able to deliver world-class level of services at (often below or very)
                      fair market prices.</p>
                  </li>
                  <li>
                    <p className="custom-text-os"><strong>Dedication.</strong> As a team we will give all the required
                      staff to solve any problem you might have regardless of the project stage or level of complexity:
                      we are a one-stop-shop delivering business value better, faster and cheaper.</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="spacer"></div>
            <hr />
            <div className="row__customers">
              <h4 className="custom-h4">Some Of Our Customers</h4>
              <Slider  {...settingsResp}>
                <div className="company-img"><img
                  src="https://m-integration.com/wp-content/uploads/2019/05/mariablackpng1.png" /></div>
                <div className="company-img"><img
                  src="https://m-integration.com/wp-content/uploads/2019/05/olivellaline1.png" /></div>
                <div className="company-img"><img
                  src="https://m-integration.com/wp-content/uploads/2019/05/Pagination1.png" /></div>
                <div className="company-img"><img
                  src="https://m-integration.com/wp-content/uploads/2019/05/myfitaihi1.png" /></div>
                <div className="company-img"><img
                  src="https://m-integration.com/wp-content/uploads/2019/05/wallebroek1.png" /></div>
                <div className="company-img"><img
                  src="https://m-integration.com/wp-content/uploads/2019/05/beautifulonraw1.png" /></div>
                <div className="company-img"><img
                  src="https://m-integration.com/wp-content/uploads/2019/05/restockchicago1.png" /></div>
                <div className="company-img"><img
                  src="https://m-integration.com/wp-content/uploads/2019/05/kerluxe1.png" /></div>
                <div className="company-img"><img
                  src="https://m-integration.com/wp-content/uploads/2019/05/bemaad1.png" /></div>

              </Slider>
            </div>
            <div className="spacer"></div>
            <hr />
            <p className="custom-text-os">
              Working with M-Integration will allow you to focus on your desired outcome and the value it will add to
              your business.</p>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}
