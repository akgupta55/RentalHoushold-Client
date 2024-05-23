import { Outlet } from "react-router-dom";
import Loading from "../../Pages/Pagenotfound/Loading";
import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "../../Context/Auth";

export default function Private() {
  const [ok, setOk] = useState(false);
  const [auth, setAuth] = useAuth();

  useEffect(() => {
    const authCheck = async () => {
      const res = await axios.get(
        "https://rentalhousehold-server.onrender.com/api/v1/auth/user-auth"
      );
      if (res.data.ok) {
        setOk(true);
      } else {
        setOk(false);
      }
    };
    if (auth?.token) authCheck();
  }, [auth?.token]);

  return ok ? <Outlet /> : <Loading />;
}
