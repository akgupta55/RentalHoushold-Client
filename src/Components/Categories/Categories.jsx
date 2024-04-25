import "./Categories.css";
import { Link } from "react-router-dom";
import useCategory from "../../Hook/useCategory";

function Categories() {
  const handleClick = () => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  };
  const categories = useCategory();

  return (
    <div className="categories d-flex flex-wrap">
      {categories?.map((c) => (
        <Link key={c._id} to={`/category/${c.slug}`} onClick={handleClick}>
          <div className="card">
            <h3>{c.name}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Categories;
