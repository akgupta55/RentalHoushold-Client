import { useSearch } from "../../Context/Search";
import Layout from "../../Components/Layout/Layout";
import "./SearchResult.css";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useCart } from "../../Context/cart";

const SearchResult = () => {
  const [values, setValues] = useSearch();
  const [cart, setCart] = useCart();
  const navigate = useNavigate();
  return (
    <Layout>
      <div className="container SearchResult">
        <div className="text-center">
          <h1
            style={{
              fontSize: "28px",
              fontWeight: "600",
              textDecoration: "underline",
            }}
          >
            Search Resuts
          </h1>
          <h6>
            {values?.results.length < 1
              ? "No Products Found"
              : `Found ${values?.results.length}`}
          </h6>
          <div className="d-flex flex-wrap">
            {values?.results.map((p) => (
              <div key={p._id} className="card m-3" style={{ width: "15rem" }}>
                <img
                  src={`http://localhost:8080/api/v1/product/product-photo/${p._id}`}
                  className="card-img-top"
                  alt={p.name}
                />
                <div className="card-body">
                  <div className="card-name-price">
                    <h5 className="card-title">{p.name.substring(0, 15)}...</h5>
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
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SearchResult;
