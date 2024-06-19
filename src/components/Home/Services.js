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
import React from "react";
import "./Services.css";
import { Link } from "react-router-dom";
import services from "../Data/Services";
const Services = ({ searchQuery }) => {
  const filteredServices = services.filter(
    (service) =>
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="main-services  ">
      <div className="blocks">
        {filteredServices.map((service) => (
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
                  <p>
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
                  <p className="alert ssa">
                    <img src={alert} alt="" />
                    {service.alert}
                  </p>
                  <p className="lighter">{service.description}</p>
                  <p className="mail-ph">
                    <img src={call} alt="" />
                    <a href={`tel:${service.phone}`}>{service.phone}</a>
                  </p>
                  <span className="for-mbl divider"></span>
                  <p className="mail-ph">
                    <img src={elements} alt="" />
                    <a href="javascript:void(0)">
                      <span className="for-desk">{service.address}</span>
                      <span className="for-mbl">{service.address}</span>
                    </a>
                  </p>
                </div>
                <div className="counter for-desk">
                  <img src={view} alt="" />
                  {service.views}
                </div>
              </div>
            </div>
          </Link>
        ))}

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
        <img className="pga" src={place} alt="" />
        <p className="fixauto">
          *FixAuto only informs about the current list of existing car services
          and is not responsible for the cases that happened during the car
          repair.
        </p>
      </div>
      <div className="ads-area">
        <img src={custom_ad} alt="" />
        <img src={One_Ad} alt="" />
      </div>
    </div>
  );
};

export default Services;
