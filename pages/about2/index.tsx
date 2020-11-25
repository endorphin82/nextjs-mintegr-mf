import TitleOfAnyPage from "../../components/TitleOfAnyPage"
import RightSidebar from "../../components/RightSidebar"
import { MainLayout } from "../../components/MainLayout"
import Slider from "react-slick";

export default function About() {
  const settings = {
    dots: true
  };
  return (
    <MainLayout>
      <div id="about2" className="container">
        <Slider {...settings}>
          <div>
            <img src="http://placekitten.com/g/400/200" />
          </div>
          <div>
            <img src="http://placekitten.com/g/400/200" />
          </div>
          <div>
            <img src="http://placekitten.com/g/400/200" />
          </div>
          <div>
            <img src="http://placekitten.com/g/400/200" />
          </div>
        </Slider>
      </div>
    </MainLayout>
  )
}
