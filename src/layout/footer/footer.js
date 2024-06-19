import React, { useEffect, useState } from "react";
import Arrow_up from "../../assets/img/Arrow-up.svg";
import "./footer.css";

const Footer = () => {
  const [showArrow, setShowArrow] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowArrow(true);
    } else {
      setShowArrow(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="footer">© Fixauto 2024</div>
      {showArrow && (
        <div className="arrow-up" onClick={scrollToTop}>
          <img src={Arrow_up} alt="Scroll to top" />
        </div>
      )}
    </div>
  );
};

export default Footer;
