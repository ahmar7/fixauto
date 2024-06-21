import search_01__1 from "../../assets/img/search-01 (1).svg";
import { Link, useNavigate } from "react-router-dom";
import Polygon from "../../assets/img/Polygon.svg";
import language from "../../assets/img/Vector.svg";
import logo_fixauto from "../../assets/img/logo-fixauto.png";
import sparkles from "../../assets/img/sparkles.png";
import React, { useState } from "react";
import search_01 from "../../assets/img/search-01.svg";
import Cancel from "../../assets/img/cancel.svg";
import services from "../../components/Data/Services";
import "./header.css";
const ServiceDetailHeader = ({ onSearch }) => {
  const [isDrop, setIsDrop] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearch, setisSearch] = useState(false);
  const history = useNavigate();
  let toggleSearch = () => {
    setisSearch(!isSearch);
  };
  const toggleDrop = () => {
    setIsDrop(!isDrop);
  };

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
  };

  const handleSearchClick = () => {
    if (searchTerm) {
      onSearch(searchTerm);
      history({
        pathname: "/",
        search: `?query=${searchTerm}`,
      });
    }
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearchClick();
    }
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
        <a
          href=""
          target="_blank"
          className="max-width for-mbl fsw banner-data"
        >
          <p className="plce">Mannol.md - germany quality oil </p>
          <p className="plce2">→</p>
        </a>
      </div>
      <div className="nav-bar">
        <div className="max-width for-service inner-bar">
          {isSearch ? (
            ""
          ) : (
            <>
              <div onClick={toggleSearch} className="for-mbl">
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
                  <button className="search-btn" onClick={handleSearchClick}>
                    Search
                  </button>
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
                  <div className="actvie-drop">
                    <div className="selector">RO</div>
                    <div className="selector">EN</div>
                  </div>
                )}
              </div>
            </>
          )}
          {isSearch ? (
            <div className="search-input ad-in search-hm">
              <img src={search_01} alt="" />
              <input
                value={searchTerm}
                onChange={handleSearchChange}
                type="text"
                onKeyDown={handleKeyDown}
                placeholder="Name of a service or car service"
              />
              <img
                onClick={toggleSearch}
                className="cancel"
                src={Cancel}
                alt=""
              />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailHeader;
