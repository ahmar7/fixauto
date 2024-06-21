import Call from "../../assets/img/call.png";
import engine_ico from "../../assets/img/engine-ico.png";
import Btn from "../../assets/img/BTN.svg";
import paint_ico from "../../assets/img/paint-ico.svg";
import suspension_ico from "../../assets/img/suspension-ico.svg";
import tick from "../../assets/img/tick.svg";
import detailing_ico from "../../assets/img/detailing-ico.svg";
import gallery from "../../assets/img/gallery.png";
import clock from "../../assets/img/clock.svg";
import down from "../../assets/img/down.svg";
import about from "../../assets/img/about.png";
import lefty from "../../assets/img/lefty.svg";
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
import shock from "../../assets/img/shock.png";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import services from "../Data/Services";
import "./Body.css";
const Body = ({ searchQuery }) => {
  const [isShowMore, setisShowMore] = useState(false);
  let setShow = () => {
    setisShowMore(!isShowMore);
  };

  return (
    <>
      <Link to="/" className="other-service">
        <img src={lefty} alt="" /> Other car services
      </Link>
      <div className="main-services sm-p ">
        <div className="blocks">
          <img src={about} alt="" />
          <div className="single-service">
            <div className="inner-data">
              <div className="service-detail">
                <div className="col-det">
                  <p>
                    Amort.md <img src={verified} alt="" />
                  </p>

                  <p className="alert no-border">
                    <img src={alert} alt="" />
                    Only serves BMW
                  </p>
                  <p className="lighter">
                    AutoShock - your professional service partner, specializing
                    in the repair of shock absorbers. We understand that the
                    effective operation of the depreciation system plays a key
                    role in the comfort and safety of your car. Therefore, our
                    command team here some text because we need to have three
                    text rows...
                  </p>
                  <button className="show-more">
                    Show more <img src={down} alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-cards">
            <div className="card-inner">
              <h2>Contacts</h2>
              <p className="pees">
                ** When you call, inform that you have found this car service on
                the fixauto.md.
              </p>
              <p className="mail-ph">
                <img src={call} alt="" />{" "}
                <a href="tel:+373 68 584 828">+373 68 584 828</a>
              </p>
              <p className="mail-ph">
                <img src={elements} alt="" />{" "}
                <a href="javascript:void(0)">
                  <span className="for-desk">
                    Chisinau municipality, Muncesti str. 255A
                  </span>
                  <span className="for-mbl">
                    mun. Chișinău, str. Muncești 255A
                  </span>{" "}
                </a>
              </p>
              <p className="mail-ph">
                <img src={clock} alt="" /> Mon-Fri: 08.00 — 17.00 <br /> Sat:
                09.00 — 14.00
              </p>
            </div>
            <div className="card-inner">
              <h2>Contacts</h2>
              <img className="gallery" src={gallery} alt="" />
            </div>
          </div>
          <div className="single-service">
            <div className="inner-data">
              <div className="service-detail">
                <div className="col-det">
                  <p>Type of services</p>
                  <div className="flex-detail">
                    <div className="col-one">
                      <img src={detailing_ico} alt="" />
                      <div>
                        <h2 className="col-head">Detailing</h2>
                        <ul className="unlist">
                          <li>
                            <img src={tick} alt="" /> Washing and degreasing of
                            the body
                          </li>
                          <li>
                            <img src={tick} alt="" /> Body polishing
                          </li>
                          <li>
                            <img src={tick} alt="" /> Covering the body with
                            protective film
                          </li>
                          <li>
                            <img src={tick} alt="" /> Optics polishing
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-one">
                      <img src={suspension_ico} alt="" />
                      <div>
                        <h2 className="col-head">Chassis</h2>
                        <ul className="unlist">
                          <li>
                            <img src={tick} alt="" /> Diagnostics/check
                          </li>
                          <li>
                            <img src={tick} alt="" /> Replacing silent blocks
                          </li>
                          <li>
                            <img src={tick} alt="" /> Replacement of ball, rods,
                            bushings
                          </li>
                          <li>
                            <img src={tick} alt="" /> Camber/toe
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {isShowMore && (
                    <>
                      <div className="flex-detail">
                        <div className="col-one">
                          <img src={paint_ico} alt="" />
                          <div>
                            <h2 className="col-head">Motor</h2>
                            <ul className="unlist">
                              <li>
                                <img src={tick} alt="" /> Diagnostica
                                amortizoarelor
                              </li>
                              <li>
                                <img src={tick} alt="" /> Diagnostica
                                amortizoarelor
                              </li>
                              <li>
                                <img src={tick} alt="" /> Diagnostica
                                amortizoarelor
                              </li>
                              <li>
                                <img src={tick} alt="" /> Diagnostica
                                amortizoarelor
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-one">
                          <img src={engine_ico} alt="" />
                          <div>
                            <h2 className="col-head">Vopsire</h2>
                            <ul className="unlist">
                              <li>
                                <img src={tick} alt="" /> Diagnostica
                                amortizoarelor
                              </li>
                              <li>
                                <img src={tick} alt="" /> Diagnostica
                                amortizoarelor
                              </li>
                              <li>
                                <img src={tick} alt="" /> Diagnostica
                                amortizoarelor
                              </li>
                              <li>
                                <img src={tick} alt="" /> Diagnostica
                                amortizoarelor
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="flex-detail">
                        <div className="col-one">
                          <img src={paint_ico} alt="" />
                          <div>
                            <h2 className="col-head">Motor</h2>
                            <ul className="unlist">
                              <li>
                                <img src={tick} alt="" /> Diagnostica
                                amortizoarelor
                              </li>
                              <li>
                                <img src={tick} alt="" /> Diagnostica
                                amortizoarelor
                              </li>
                              <li>
                                <img src={tick} alt="" /> Diagnostica
                                amortizoarelor
                              </li>
                              <li>
                                <img src={tick} alt="" /> Diagnostica
                                amortizoarelor
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-one">
                          <img src={engine_ico} alt="" />
                          <div>
                            <h2 className="col-head">Vopsire</h2>
                            <ul className="unlist">
                              <li>
                                <img src={tick} alt="" /> Diagnostica
                                amortizoarelor
                              </li>
                              <li>
                                <img src={tick} alt="" /> Diagnostica
                                amortizoarelor
                              </li>
                              <li>
                                <img src={tick} alt="" /> Diagnostica
                                amortizoarelor
                              </li>
                              <li>
                                <img src={tick} alt="" /> Diagnostica
                                amortizoarelor
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                  {isShowMore ? (
                    <button className="show-more" onClick={setShow}>
                      Show less{" "}
                      <img style={{ rotate: "180deg" }} src={down} alt="" />
                    </button>
                  ) : (
                    <button className="show-more" onClick={setShow}>
                      Show more <img src={down} alt="" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div to="/ServiceDetail" className="single-service">
            <div className="inner-data">
              <div className="service-detail">
                <div className="col-det w-100">
                  <p>Map</p>

                  <p className="get-d">Get directions to this car service.</p>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2721.5485685112585!2d28.88096387908463!3d46.99020076656875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c9798cc7c3e6e1%3A0x994616950c14a497!2sArnaut%20Detailing!5e0!3m2!1sro!2s!4v1718798860495!5m2!1sro!2s"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="ads-ara">
            {" "}
            <a
              href="https://www.figma.com/design/JbujnSnH5oJupnKX8DUcSF/Fixauto.md---for-DEV?node-id=99-1914&t=gsCdoz3CPfCusMiP-0"
              target="_blank"
            >
              <img src={custom_ad} alt="" />
            </a>
          </div>
          <img className="pga" src={place} alt="" />
          <p className="fixauto">
            *FixAuto only informs about the current list of existing car
            services and is not responsible for the cases that happened during
            the car repair.
          </p>
        </div>
        <div className="ads-area">
          {" "}
          <a
            href="https://www.figma.com/design/JbujnSnH5oJupnKX8DUcSF/Fixauto.md---for-DEV?node-id=99-1914&t=gsCdoz3CPfCusMiP-0"
            target="_blank"
          >
            <img src={custom_ad} alt="" />
          </a>
          <img src={One_Ad} alt="" />
        </div>
      </div>
      <div className="mbl-foot mbl-only">
        <img src={Btn} alt="" />
        <button>
          <img src={Call} alt="" /> Call this service
        </button>
      </div>
    </>
  );
};

export default Body;
