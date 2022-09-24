import React from "react";
import bannerRightImage from "../../assets/images/about/banner-img-02.svg";

const BannerAbout = () => {
  return (
    <>
      <section className="banner_about">
        <div className="container">
          <div className="row align-items-center py-5">
            <div className="col-lg-6 text-start">
              <h2 className="h2 py-5">About Us</h2>
              <p className="light-300">
                Vector illustration credit goes to{" "}
                <a rel="nofollow" href="http://freepik.com/" target="_blank">
                  FreePik
                </a>{" "}
                website. Purple Buzz is provided by TemplateMo. Lorem ipsum
                dolor sit amet, consectetur.
              </p>
            </div>
            <div className="col-lg-6">
              <img src={bannerRightImage} alt="Banner Left img" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BannerAbout;
