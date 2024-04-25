import "./PrevArrow.css";
import { BsChevronLeft } from "react-icons/bs";

function PrevArrow({ onClick }) {
  return (
    <div className="prevArrow" onClick={onClick}>
      <div className="btn">
        <BsChevronLeft />
      </div>
    </div>
  );
}

export default PrevArrow;
