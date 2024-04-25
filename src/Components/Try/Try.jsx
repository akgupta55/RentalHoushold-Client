import { useState, useEffect } from "react";
import axios from "axios";
import "./Try.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import NextArrow from "../NextArrow/NextArrow";
import PrevArrow from "../PrevArrow/PrevArrow";
// import Item from "../Item/Item";

const Try = () => {
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:8080/api/v1/product/get-product"
      );
      setProducts(data.products);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllProducts();
  }, []);

  const settings = {
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="collections">
      <h1>Our Tranding Collections</h1>
      <div className="card">
        <Slider {...settings}>
          {products?.map((p) => (
            <div key={p._id} className="card" style={{ width: "26rem" }}>
              <img
                src={`http://localhost:8080/api/v1/product/product-photo/${p._id}`}
                className="card-img-top"
                alt={p.name}
              />
              <div
                className="card-body"
                style={{
                  height: "15rem",
                }}
              >
                <h5 className="card-title">{p.name.substring(0, 40)}...</h5>
                <p className="card-text">{p.description.substring(0, 29)}...</p>
                <p className="card-text"> $ {p.price}</p>
                <div className="btn-f">
                  <button
                    className="btn btn-primary "
                    style={{
                      width: "8rem",
                      height: "4rem",
                    }}
                    // onClick={() => navigate(`/product/${p.slug}`)}
                  >
                    More Details
                  </button>
                  <button
                    className="btn btn-secondary "
                    style={{
                      width: "8rem",
                      height: "4rem",
                      marginLeft: "2px",
                    }}
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Try;
