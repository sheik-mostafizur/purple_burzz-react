import React from "react";
import bannerRightImage from "../../assets/images/contact/banner-img-01.svg";

const BannerContact = () => {
  return (
    <>
      <section className="banner_contact">
        <div className="container">
          <div className="row align-items-center justify-content-between py-5">
            <div className="contact-header col-lg-4">
              <h1 className="h2 pb-3">Contact</h1>
              <h3 className="h4 regular-400">Elit, sed do eiusmod tempor</h3>
              <p className="light-300">
                Vector illustration is from{" "}
                <a rel="nofollow" href="https://storyset.com/" target="_blank">
                  StorySet
                </a>
                . Incididunt ut labore et dolore magna aliqua. Quis ipsum
                suspendisse ultrices gravida.
              </p>
            </div>
            <div className="col-lg-5 align-items-end col-md-4">
              <img src={bannerRightImage} alt="banner right img" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BannerContact;
