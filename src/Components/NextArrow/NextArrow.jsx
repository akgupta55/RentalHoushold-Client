import "./NextArrow.css";
import { BsChevronRight } from "react-icons/bs";

function NextArrow({ onClick }) {
  return (
    <div className="nextArrow" onClick={onClick}>
      <div className="btn">
        <BsChevronRight />
      </div>
    </div>
  );
}

export default NextArrow;
