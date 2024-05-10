import toast from "react-hot-toast";
import AdminMenu from "../../Components/Layout/AdminMenu";
import Layout from "../../Components/Layout/Layout";
import "./AdminDashboard.css";
import { useEffect, useState } from "react";
import axios from "axios";

const Users = () => {
  const [allUsers, setAllUsers] = useState([]);

  //getall products
  const getAllUsers = async () => {
    try {
      const { data } = await axios.get(
        "https://rentalhousehold-server.onrender.com/api/v1/auth/all-users"
      );
      setAllUsers(data.allUsers);
    } catch (error) {
      console.log(error);
      toast.error("Someething Went Wrong");
    }
  };

  //lifecycle method
  useEffect(() => {
    getAllUsers();
  }, []);
  return (
    <Layout>
      <div className="row-all adminDashboard">
        <div className="col-md-3">
          <AdminMenu />
        </div>
        <div className="col-md-8 ">
          <h1 className="text-center">All Users List</h1>
          <div className="card">
            {allUsers?.map((u, i) => {
              return (
                <div key={i} className="border shadow">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Address</th>
                        <th scope="col">Phone Number</th>
                        <th scope="col">Email id</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{i + 1}</td>

                        <td>{u?.name}</td>
                        <td>{u?.address}</td>
                        <td>{u?.phone}</td>
                        <td>{u?.email}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Users;
