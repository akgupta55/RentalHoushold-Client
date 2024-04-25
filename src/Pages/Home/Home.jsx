import "./Home.css";
import Services from "../../Components/Services/Services";
import Categories from "../../Components/Categories/Categories";
import Collections from "../../Components/Collections/Collections";
import Banner from "../../Components/Banner/Banner";
import Layout from "../../Components/Layout/Layout";

function Home() {
  return (
    <Layout className="home">
      <Banner />
      <Categories />
      <Collections />
      <Services />
    </Layout>
  );
}

export default Home;
