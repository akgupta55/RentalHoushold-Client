import { useState } from "react";
import "./Registration.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Layout from "../../Components/Layout/Layout";
import img from "../../Components/assets/image.webp";

const Forgot = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [answer, setAnswer] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://rentalhousehold-server.onrender.com/api/v1/auth/forgot-password",
        {
          email,
          newPassword,
          answer,
        }
      );
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
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
    <Layout>
      <form className="main" onSubmit={handleSubmit}>
        <div className="left-side gradient-custom-2">
          <img src={img} className="img-fluid" alt="Sample image" />
        </div>
        <div className="cn">
          <h1>RESET YOUR PASSWORD</h1>
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
          <div className="box">
            <input
              type="password"
              placeholder="Enter New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              id="password"
              name="password"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary btn-lg">
            Submit
          </button>

          <br />
          <br />
        </div>
      </form>
    </Layout>
  );
};

export default Forgot;
