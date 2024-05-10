import { useState, useEffect } from "react";
import axios from "axios";
import "./Collections.css";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../Context/cart";
import toast from "react-hot-toast";
// import Item from "../Item/Item";

const Try = () => {
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    try {
      const { data } = await axios.get(
        "https://rentalhousehold-server.onrender.com/api/v1/product/get-product"
      );
      setProducts(data.products);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllProducts();
  }, []);

  const navigate = useNavigate();
  const [cart, setCart] = useCart();

  return (
    <div className="collections">
      <h1>Our Tranding Collections</h1>
      <div className="cards">
        {products?.map((p, idx) =>
          idx === 10 || idx === 6 || idx === 4 || idx === 8 ? (
            <div key={p._id} className="card m-3" style={{ width: "16rem" }}>
              <img
                src={`https://rentalhousehold-server.onrender.com/api/v1/product/product-photo/${p._id}`}
                className="card-img-top"
                alt={p.name}
              />
              <div className="card-body">
                <div className="card-name-price">
                  <h5 className="card-title">{p.name.substring(0, 18)}...</h5>
                  <h5 className="card-title card-price">
                    {p.price.toLocaleString("en-US", {
                      style: "currency",
                      currency: "INR",
                    })}
                    /m
                  </h5>
                </div>
                <p className="card-text ">
                  {p.description.substring(0, 60)}...
                </p>
                <div className="card-name-price">
                  <button
                    className="btn btn-info "
                    style={{
                      width: "8rem",
                      height: "4rem",
                    }}
                    onClick={() => {
                      navigate(`/product/${p.slug}`);
                      window.scrollTo(0, 0);
                    }}
                  >
                    More Details
                  </button>
                  <button
                    className="btn btn-secondary ms-1"
                    onClick={() => {
                      setCart([...cart, p]);
                      localStorage.setItem(
                        "cart",
                        JSON.stringify([...cart, p])
                      );
                      toast.success("Item Added to cart");
                    }}
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
          ) : (
            <></>
          )
        )}
      </div>
    </div>
  );
};

export default Try;
