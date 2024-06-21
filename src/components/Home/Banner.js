import React, { useState, useEffect } from "react";
import search_01 from "../../assets/img/search-01.svg";
import logo_white from "../../assets/img/logo-white.png";
import "./Banner.css";

const Banner = ({ onSearch, searchQuery }) => {
  const [searchTerm, setSearchTerm] = useState(searchQuery || "");

  useEffect(() => {
    setSearchTerm(searchQuery || "");
  }, [searchQuery]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchClick = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="main-banner">
      <div className="main-cont">
        <img src={logo_white} alt="" />
        <p>Right car service for you and your car just in a few clicks</p>
        <div className="search-input search-hm">
          <img src={search_01} alt="" />
          <input
            value={searchTerm}
            onChange={handleSearchChange}
            type="text"
            placeholder="Name of a service or car service"
          />
          <button className="search-btn" onClick={handleSearchClick}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
