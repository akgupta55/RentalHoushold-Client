import "./Item.css";

const Item = ({ image, name, quantity, new_price }) => {
  return (
    <div className="item">
      <img src={image} alt="" />
      <p>{name}</p>
      <div className="item-prices">
        <div className="item-price-new">${new_price}</div>
        <div className="item-price-old">${quantity} Qty</div>
      </div>
    </div>
  );
};

export default Item;
