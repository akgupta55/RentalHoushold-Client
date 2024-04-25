import Layout from "../../Components/Layout/Layout";
import "./ProductDetails.css";
import { useState, useEffect } from "react";

import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../../Context/cart";
import toast from "react-hot-toast";

const ProductDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [cart, setCart] = useCart();

  //initalp details
  useEffect(() => {
    if (params?.slug) getProduct();
  }, [params?.slug]);
  //getProduct
  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `https://rentalhousehold-server.onrender.com/api/v1/product/get-product/${params.slug}`
      );
      setProduct(data?.product);
      getSimilarProduct(data?.product._id, data?.product.category._id);
    } catch (error) {
      console.log(error);
    }
  };
  //get similar product
  const getSimilarProduct = async (pid, cid) => {
    try {
      const { data } = await axios.get(
        `https://rentalhousehold-server.onrender.com/api/v1/product/related-product/${pid}/${cid}`
      );
      setRelatedProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
      <div className="row product-details">
        <div className="col">
          <img
            src={`https://rentalhousehold-server.onrender.com/api/v1/product/product-photo/${product._id}`}
            className="card-img-top"
            alt={product.name}
          />
        </div>
        <div className="col-md-6 product-details-info">
          <h1 className="text-center datails">Product Details</h1>
          <h6>
            <span className="datails">Name</span> : {product.name}
          </h6>
          <h6>
            <span className="datails">Description</span> : {product.description}
          </h6>
          <h6>
            <span className="datails">Price</span> :{" "}
            {product?.price?.toLocaleString("en-US", {
              style: "currency",
              currency: "INR",
            })}
            /m
          </h6>
          <h6>
            <span className="datails">Category</span> :{" "}
            {product?.category?.name}
          </h6>
          <button
            className="btn btn-secondary ms-1"
            onClick={() => {
              setCart([...cart, product]);
              localStorage.setItem("cart", JSON.stringify([...cart, product]));
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
      <hr />
      <div className="row container similar-products">
        <h2>Similar Products ➡️</h2>
        {relatedProducts.length < 1 && (
          <p className="text-center">No Similar Products found</p>
        )}
        <div className="d-flex flex-wrap sm">
          {relatedProducts?.map((p) => (
            <div key={p._id} className="card m-2">
              <img
                src={`https://rentalhousehold-server.onrender.com/api/v1/product/product-photo/${p?._id}`}
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
                    className="btn btn-info ms-1"
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
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
