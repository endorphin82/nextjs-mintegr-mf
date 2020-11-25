import TitleOfAnyPage from "../../components/TitleOfAnyPage"
import RightSidebar from "../../components/RightSidebar"
import { MainLayout } from "../../components/MainLayout"
import Slider from "react-slick";

export default function About() {
  const settings = {
    slidesToShow: 3,
    dots: true
  };
  return (
    <MainLayout>
      <div id="about2" className="container">
        <Slider {...settings}>
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
    </MainLayout>
  )
}
