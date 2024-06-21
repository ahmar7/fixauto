import Polygon from "../../assets/img/Polygon.svg";
import language from "../../assets/img/Vector.svg";
import logo_fixauto from "../../assets/img/logo-fixauto.png";
import sparkles from "../../assets/img/sparkles.png";
import React, { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";
const Header = () => {
  const [isDrop, setisDrop] = useState(false);
  let toggleDrop = () => {
    setisDrop(!isDrop);
  };
  return (
    <div className="main-header">
      <div className="top-banner">
        <div className="max-width for-desk  banner-data">
          <img src={sparkles} alt="" />
          <p className="plce">Place for custom text ads</p>
          <p className="plce2">
            <span>CTA</span> <span className="bn">→</span>
          </p>
        </div>
        <a
          href=""
          target="_blank"
          className="max-width for-mbl  fsw banner-data"
        >
          <p className="plce">Mannol.md - germany quality oil </p>
          <p className="plce2">→</p>
        </a>
      </div>
      <div className="nav-bar">
        <div className="max-width inner-bar ">
          <Link to="/" className="flexb">
            <img src={logo_fixauto} alt="" />
          </Link>
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
        </div>
      </div>
    </div>
  );
};

export default Header;
