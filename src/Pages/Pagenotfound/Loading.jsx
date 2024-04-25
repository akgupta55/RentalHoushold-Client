import { Link } from "react-router-dom";
import Layout from "../../Components/Layout/Layout";
import "./Pagenotfound.css";
const Loading = () => {
  return (
    <Layout title={"go back- page not found"}>
      <div className="pnf">
        <h1 className="pnf-title">😎😍😎</h1>
        <h2 className="pnf-heading">
          You are on unauthorised 💀 page please🙏🏻 go back !!! 🚀
        </h2>
        <Link to="/" className="pnf-btn">
          Go Back
        </Link>
      </div>
    </Layout>
  );
};

export default Loading;
