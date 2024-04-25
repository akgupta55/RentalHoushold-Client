import { useState } from "react";
import "./Registration.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Layout from "../../Components/Layout/Layout";

const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://rentalhousehold-server.onrender.com/api/v1/auth/register",
        {
          name,
          email,
          password,
          phone,
          address,
          answer,
        }
      );
      if (res && res.data.success) {
        toast.success(res.data && res.data.message, {
          position: "bottom-center",
          duration: 12000,
        });
        navigate("/login");
      } else {
        toast.error(res.data.message, {
          position: "bottom-center",
        });
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong", {
        position: "bottom-center",
      });
    }
  };

  return (
    <Layout className="main1">
      <form className="main" onSubmit={handleSubmit}>
        <div className="cn">
          <h1>CREATE AN ACCOUNT</h1>
          <div className="box">
            <input
              className="name"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              id="fname"
              name="fname"
              required
            />
          </div>
          <div className="box">
            <input
              className="name"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="fname"
              name="fname"
              required
            />
          </div>
          <div className="box">
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              name="password"
              required
            />
          </div>
          <div className="box">
            <input
              type="number"
              placeholder="Enter Phone no."
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              id="fname"
              name="fname"
              required
            />
          </div>
          <div className="box">
            <input
              className="name"
              placeholder="Enter Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              type="text"
              id="fname"
              name="fname"
              required
            />
          </div>
          <div className="box">
            <input
              className="name"
              placeholder="What is your best sport ?"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              type="text"
              id="fname"
              name="fname"
              required
            />
          </div>

          <button type="submit" className="button">
            Submit
          </button>
        </div>
      </form>
    </Layout>
  );
};

export default Registration;
