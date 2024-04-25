import "./Services.css";
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";

function Services() {
  return (
    <div className="services">
      <h1>Our Services</h1>
      <div className="d-flex flex-wrap crd">
        <div className=" card-1">
          <TbTruckDelivery className="icon" />
          <h3>Super Fast and Free Delivery</h3>
        </div>
        <div className=" card-1">
          <MdSecurity className="icon" />
          <h3>Non-contact Shipping</h3>
        </div>
        <div className=" card-1">
          <GiReceiveMoney className="icon" />
          <h3>Money-back Guaranteed</h3>
        </div>
        <div className=" card-1">
          <RiSecurePaymentLine className="icon" />
          <h3>Super Secure Payment System</h3>
        </div>
      </div>
    </div>
  );
}

export default Services;
