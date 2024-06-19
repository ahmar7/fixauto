import React, { useState } from "react";
import search_01 from "../../assets/img/search-01.svg";
import logo_white from "../../assets/img/logo-white.png";
import "./Banner.css";
import services from "../Data/Services";
import { Link } from "react-router-dom";

const Banner = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch(value);

    if (value.length > 0) {
      const filteredSuggestions = services.filter(
        (service) =>
          service.name.toLowerCase().includes(value.toLowerCase()) ||
          (service.serviceTypes &&
            service.serviceTypes.some(
              (type) =>
                type.title.toLowerCase().includes(value.toLowerCase()) ||
                type.service1.toLowerCase().includes(value.toLowerCase()) ||
                type.service2.toLowerCase().includes(value.toLowerCase()) ||
                type.service3.toLowerCase().includes(value.toLowerCase()) ||
                type.service4.toLowerCase().includes(value.toLowerCase())
            ))
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion.name);
    onSearch(suggestion.name);
    setSuggestions([]);
  };

  return (
    <div className="main-banner">
      <div className="main-cont">
        <img src={logo_white} alt="" />
        <p>Right car service for you and your car just in a few clicks</p>
        <div className="search-input">
          <img src={search_01} alt="" />
          <input
            value={searchTerm}
            onChange={handleSearchChange}
            type="text"
            placeholder="Name of a service or car service"
          />
          <button className="search-btn">Search</button>
          {suggestions.length > 0 && (
            <div className="suggestions">
              {suggestions.map((suggestion, index) => (
                <Link
                  to="/ServiceDetail"
                  key={index}
                  className="suggestion"
                  onClick={() => handleSuggestionClick(suggestion)}
                >
                  {suggestion.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Banner;
