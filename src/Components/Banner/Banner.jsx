import Slider from "react-slick";
import banner1 from "../assets/banner1.png";
import banner2 from "../assets/banner2.png";
import "./Banner.css";

function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="banner">
      <Slider {...settings}>
        <div>
          <img src={banner1} className="images" />
        </div>
        <div>
          <img src={banner2} className="images" />
        </div>
      </Slider>
    </div>
  );
}

export default Banner;
