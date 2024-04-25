import Layout from "../../Components/Layout/Layout";
import UserMenu from "../../Components/Layout/UserMenu";
import { useAuth } from "../../Context/Auth";
import "./Dashboard.css";

const Dashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout>
      <div className="container-flui dashboard">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <div className="card w-75 p-3">
              <h3>{auth?.user?.name}</h3>
              <h3>{auth?.user?.email}</h3>
              <h3>{auth?.user?.address}</h3>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
