import React, { useState } from "react";
import ServiceDetailHeader from "../layout/header/serviceDetailHeader";
import Body from "../components/ServiceDetail/Body";
import Footer from "../layout/footer/footer";
const ServiceDetails = () => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div>
      <ServiceDetailHeader onSearch={setSearchQuery} />
      <div className="main-body2">
        <div className="max-width">
          <Body searchQuery={searchQuery} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ServiceDetails;
