import search_01__1 from "../../assets/img/search-01 (1).svg";
import { Link } from "react-router-dom";
import Polygon from "../../assets/img/Polygon.svg";
import language from "../../assets/img/Vector.svg";
import logo_fixauto from "../../assets/img/logo-fixauto.png";
import sparkles from "../../assets/img/sparkles.png";
import React, { useState } from "react";
import search_01 from "../../assets/img/search-01.svg";
import services from "../../components/Data/Services";

const ServiceDetailHeader = ({ onSearch }) => {
  const [isDrop, setIsDrop] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const toggleDrop = () => {
    setIsDrop(!isDrop);
  };

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch(value);

    if (value.length > 0) {
      const filteredSuggestions = services.filter(
        (service) =>
          service.name?.toLowerCase().includes(value.toLowerCase()) ||
          (service.serviceTypes &&
            service.serviceTypes.some(
              (type) =>
                type.title?.toLowerCase().includes(value.toLowerCase()) ||
                type.service1?.toLowerCase().includes(value.toLowerCase()) ||
                type.service2?.toLowerCase().includes(value.toLowerCase()) ||
                type.service3?.toLowerCase().includes(value.toLowerCase()) ||
                type.service4?.toLowerCase().includes(value.toLowerCase())
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
    <div className="main-header">
      <div className="top-banner">
        <div className="max-width for-desk banner-data">
          <img src={sparkles} alt="" />
          <p className="plce">Place for custom text ads</p>
          <p className="plce2">
            <span>CTA</span> <span className="bn">→</span>
          </p>
        </div>
        <div className="max-width for-mbl fsw banner-data">
          <p className="plce">Mannol.md - germany quality oil </p>
          <p className="plce2">→</p>
        </div>
      </div>
      <div className="nav-bar">
        <div className="max-width for-service inner-bar">
          <div className="for-mbl">
            <img src={search_01__1} alt="" />
          </div>
          <div className="fix-br">
            <Link className="flexb" to="/">
              <img src={logo_fixauto} alt="" />
            </Link>
            <div className="search-input for-desk bar-input">
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
          <div className="drop-down">
            <div onClick={toggleDrop} className="lang-drop">
              <img src={language} alt="" />
              <span className="flex">
                PY <img src={Polygon} alt="" />
              </span>
            </div>
            {isDrop && (
              <div className="active-drop">
                <div className="selector">RO</div>
                <div className="selector">EN</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailHeader;
