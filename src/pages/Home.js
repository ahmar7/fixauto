import React from "react";
import Header from "../layout/header/header";
import "../assets/css/style.css";
import Banner from "../components/Home/Banner";
import Services from "../components/Home/Services";
import { useSearchParams } from "react-router-dom";
import Footer from "../layout/footer/footer";

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("query") || "";

  const handleSearch = (query) => {
    setSearchParams({ query });
  };

  return (
    <div>
      <Header />
      <div className="main-body">
        <div className="max-width">
          <Banner onSearch={handleSearch} searchQuery={searchQuery} />
          <Services searchQuery={searchQuery} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
