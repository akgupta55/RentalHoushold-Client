import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./Layout.css";
import { Toaster } from "react-hot-toast";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <main>
        <Toaster />
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
