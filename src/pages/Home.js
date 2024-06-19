import React, { useState } from "react";
import Header from "../layout/header/header";
import "../assets/css/style.css";
import Banner from "../components/Home/Banner";
import Services from "../components/Home/Services";
import Footer from "../layout/footer/footer";
const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div>
      <Header />
      <div className="main-body">
        <div className="max-width">
          <Banner onSearch={setSearchQuery} />
          <Services searchQuery={searchQuery} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
