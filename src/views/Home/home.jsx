import React from "react";
import banner from "../../assets/images/banner.png";
import dot from "../../assets/images/baner_dot.png";
import streamDot from "../../assets/images/stream-dot.png";
import homeIcon from "../../assets/images/home-2.png";
import checkcircle from "../../assets/images/check-circle.png";
import steamprop from "../../assets/images/StreamPROP.png";
import path from "../../assets/images/Path.png";
import shap from "../../assets/images/Shape.png";
import fb from "../../assets/images/facebook.png";
import people from "../../assets/images/people.png";
import image6 from "../../assets/images/image 6.png";
import image7 from "../../assets/images/image 7.png";
import itNetwork from "../../assets/images/it-network.png";
import image8 from "../../assets/images/image 8.png";
import image9 from "../../assets/images/image 9.png";

const Home = () => {
  const clientList = [0, 1, 2, 3];
  const planList = [
    {
      type: "Starter",
      detail: "optimal for small landlords",
      price: "FREE",
      propDetails: "Up to 2 properties",
    },
    {
      type: "Professional",
      detail: "optimal for 100+ team size and company",
      price: "$ 36",
      propDetails: "Up to 10 properties",
    },
    {
      type: "Tycoon",
      detail: "optimal for 1000+ team and enterprise",
      price: "$ 150",
      propDetails: "Unlimited properties",
    },
  ];
  return (
    <div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-8 ">
            <div className="text-center mt-5">
              <p className="fs-1 fw-bold "> Property Management System</p>
              <p className="grayish-color pt-2 fs-5 pb-3 fw-normal fw-semibold">
                Seamlessly track maintenance, and generate insightful reports,
                manage certificate – all in one powerful platform
              </p>
              <button className="btn btn-primary buton-style  px-3 py-2">
                Join us
              </button>
            </div>
          </div>
          <div className="col-12 banner-container mt-3 mt-md-0">
            <div className="dot-banner">
              <img src={dot} alt="" />
            </div>
            <div className="col-9 banner-img mt-4">
              <img src={banner} alt="" />
            </div>
            <div className="dot-banner-bottom">
              <img src={dot} alt="" />
            </div>
          </div>
          <div className=" mt-5 outer-container">
            <p className="fs-1 fw-bold text-center ">
              What you can do with Stream Prop
            </p>
            <div className="row pt-5  manage-properties justify-content-between">
              <div className="col-8 g-1 col-sm-5 height-450 manage-container">
                <div className="mb-4">
                  <img src={homeIcon} alt="" />
                </div>
                <div className="fs-3 fw-bold">Manage Properties</div>
                <div className="fw-semibold grayish-color">
                  Easily manage unit details, track certificates, and stay
                  organized with our streamlined system.{" "}
                </div>
              </div>
              <div className="col-5 col-md-6 col-sm-7 g-1 parent-emty">
                <div className="empty-container height-450">
                  <div className="stream-dot">
                    <img src={streamDot} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" mt-5 outer-container">
            <div className="row  manage-properties justify-content-between">
              <div className="col-8 col-md-6 col-sm-7 g-1 parent-emty">
                <div className="tenant-container container-height py-4 px-2">
                  <div className="first-image">
                    <img src={image6} alt="" />
                  </div>
                  <div className="second-image">
                    <img src={image7} alt="" />
                  </div>
                  <div className="manage-dot">
                    <img src={streamDot} alt="" />
                  </div>
                </div>
              </div>
              <div className="align-items-center col-8 col-md-5 col-sm-5 mt-5 mt-sm-0 g-1  manage-container">
                <div className="col-md-9 ">
                  <div className="mb-4">
                    <img src={people} alt="" />
                  </div>
                  <div className="fs-3 fw-bold">Manage Tenants</div>
                  <div className="fw-semibold grayish-color">
                    Manage tenants, track tenancies, and stay compliant with our
                    intuitive platform.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" mt-5 outer-container">
            <div className="row  manage-properties justify-content-between">
              <div className="align-items-center col-8 col-md-5 col-sm-5 mt-5 mt-sm-0 g-1  manage-container">
                <div className="col-md-9 ">
                  <div className="mb-4">
                    <img src={itNetwork} alt="" />
                  </div>
                  <div className="fs-3 fw-bold">Manage Jobs</div>
                  <div className="fw-semibold grayish-color">
                    Organize, track, and stay updated on all maintenance jobs
                    with our user-friendly platform.
                  </div>
                </div>
              </div>
              <div className="col-8 col-md-6 col-sm-7 g-1 parent-emty">
                <div className="tenant-container container-height py-4 px-2">
                  <div className="fourth-image">
                    <img src={image8} alt="" />
                  </div>
                  <div className="third-image">
                    <img src={image9} alt="" />
                  </div>
                  <div className="job-dot">
                    <img src={streamDot} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="spacing pb-5">
        <div className=" mt-5 client-container pt-5 pb-5 row justify-content-center">
          <div className="col-9 ">
            <div className="client-dot">
              <img src={dot} alt="" />
            </div>
            <p className="fs-1 fw-bold text-center pt-3 pb-4 ">
              What our Customers say...
            </p>
            <div className="row g-3 gx-4 client-row row-cols-s">
              {clientList.map((item) => {
                return (
                  <div className="col-6 ">
                    <div className=" client-container-inner px-4 py-3">
                      <p className="message-para">
                        This property management system is a game-changer for
                        me. I can now focus on the strategic aspects of my
                        business and provide better service to my clients.
                      </p>
                      <p className="mb-0 message-para text-dark pt-3 name-font-size">
                        Sam Logan
                      </p>
                      <p className="message-para company-name">
                        CEO of ABC Company
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="  plan-container pt-5 pb-5 row justify-content-center">
        <div className="col-9 ">
          <div className="plan-dot">
            <img src={dot} alt="" />
          </div>
          <p className="fs-1 fw-bold text-center pt-3 pb-4 text-light">
            See our plans
          </p>
          <div className="row g-3 gx-4 client-row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-smal">
            {planList.map((item) => {
              return (
                <div className="col-4 ">
                  <div className=" client-container-inner px-3 px-sm-5 px-lg-5 py-3 text-center">
                    <h3 className="plan-head pb-3 pt-4">{item.type}</h3>
                    <p className="plan-mid pb-3">optimal for small landlords</p>
                    <h2 className="plan-free pb-4">{item.price}</h2>
                    <div className="d-flex pb-5 justify-content-between">
                      <div>{item.propDetails}</div>
                      <div>
                        <img src={checkcircle} alt="" />
                      </div>
                    </div>
                    <div className="pb-4">
                      <button className="btn btn-primary buton-style   px-3 py-2 ">
                        Join us
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="row footer justify-content-center pt-5 pb-5 ">
        <div className="col-9 align-content-center">
          <div className=" footer-inner">
            <div className="col-8 col-md-4">
              <img src={steamprop} alt="" />
            </div>
            <div className="col-8 col-md-4 text-light">&copy; | All Rights Reserved</div>
            <div className="col-8 col-md-4 text-light">
              Terms & Conditions | <img src={fb} alt="fb" />
              <img className="ms-1 text-center" src={path} alt="x" />
              <img className="ms-2 text-end" src={shap} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
