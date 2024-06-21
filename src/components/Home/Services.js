import React from "react";
import n from "../../assets/img/n.png";
import place from "../../assets/img/place.png";
import right from "../../assets/img/right.svg";
import left from "../../assets/img/left.svg";
import One_Ad from "../../assets/img/One Ad.png";
import custom_ad from "../../assets/img/custom-ad.png";
import comfort2 from "../../assets/img/comfort2.svg";
import ser2 from "../../assets/img/ser2.svg";
import alert from "../../assets/img/alert.svg";
import view from "../../assets/img/view.svg";
import elements from "../../assets/img/elements.svg";
import call from "../../assets/img/call.png";
import comfort from "../../assets/img/comfort.png";
import verified from "../../assets/img/verified.svg";
import { Link } from "react-router-dom";
import services from "../Data/Services";
import "./Services.css";

const Services = ({ searchQuery }) => {
  const filteredServices = services.filter((service) => {
    const lowercasedQuery = searchQuery.toLowerCase();

    const matchesNameOrDescription =
      service.name.toLowerCase().includes(lowercasedQuery) ||
      service.description.toLowerCase().includes(lowercasedQuery);

    const matchesServiceTypes = service.serviceTypes?.some((type) =>
      Object.values(type).some((val) =>
        val.toLowerCase().includes(lowercasedQuery)
      )
    );

    return matchesNameOrDescription || matchesServiceTypes;
  });
  return (
    <div className="main-services">
      <div className="blocks">
        {filteredServices.length > 0 ? (
          filteredServices.map((service) => (
            <Link
              to="/ServiceDetail"
              className="single-service ss"
              key={service.id}
            >
              <div className="inner-data">
                <div className="service-img for-desk">
                  <img src={service.image} alt={service.name} />
                </div>
                <div className="service-detail">
                  <div className="col-det">
                    <p className="headf">
                      {service.name} <img src={verified} alt="" />
                    </p>
                    <p className="comfort">
                      <img src={comfort} alt="" />
                      <div className="counter for-mbl">
                        <img src={view} alt="" />
                        {service.views}
                      </div>
                    </p>
                    <div className="service-img for-mbl">
                      <img src={service.image} alt={service.name} />
                    </div>
                    {service.alert ? (
                      <p className="alert ssa">
                        <img src={alert} alt="" />
                        {service.alert}
                      </p>
                    ) : (
                      ""
                    )}
                    <p className="lighter">{service.description}</p>
                    <p className="mail-ph">
                      <img src={call} alt="" />
                      <a href={`tel:${service.phone}`}>{service.phone}</a>
                    </p>
                    <span className="for-mbl divider"></span>
                    <a
                      href="https://maps.app.goo.gl/JxVVbSEqxVrQ5w5w9"
                      target="_blank"
                      className="mail-ph bllo m7"
                    >
                      <img src={elements} alt="" />
                      <span>
                        <span className="for-desk">{service.address}</span>
                        <span className="for-mbl">{service.address}</span>
                      </span>
                    </a>
                  </div>
                  <div className="counter for-desk">
                    <img src={view} alt="" />
                    {service.views}
                  </div>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div className="no-service-found">
            <p>No service found</p>
          </div>
        )}
        {filteredServices.length > 0 && (
          <div className="pagination">
            <div className="single-pg">
              <img src={left} alt="" />
            </div>
            <div className="single-pg actvie-pg">1</div>
            <div className="single-pg">2</div>
            <div className="single-pg">3</div>
            <div className="single-pg">
              <img src={right} alt="" />
            </div>
          </div>
        )}
        <img className="pga" src={place} alt="" />
        <p className="fixauto">
          *FixAuto only informs about the current list of existing car services
          and is not responsible for the cases that happened during the car
          repair.
        </p>
      </div>
      <div className="ads-area">
        <a
          href="https://www.figma.com/design/JbujnSnH5oJupnKX8DUcSF/Fixauto.md---for-DEV?node-id=99-1914&t=gsCdoz3CPfCusMiP-0"
          target="_blank"
        >
          <img src={custom_ad} alt="" />
        </a>
        <img src={One_Ad} alt="" />
      </div>
    </div>
  );
};

export default Services;
