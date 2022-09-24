import React from "react";

const BannerWork = () => {
  return (
    <>
      <section className="banner_work">
        <div className="container">
          <div className="row align-items-center py-5">
            <div className="col-lg-8 col-12 m-lg-auto text-center text-white py-5">
              <h2 className="h2 display-3 pb-5 semi-bold-600 typo-space-line-center">
                Our Work
              </h2>
              <h3 className="pb-2">
                Elit, sed do eiusmod tempor incididunt
              </h3>
              <p className="banner-body pb-2 light-300">
                Vector illustration{" "}
                <a
                  className="text-white"
                  href="http://freepik.com/"
                  target="_freepik"
                >
                  Freepik
                </a>
                . Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus.
              </p>
              <button
                type="submit"
                className="btn rounded-pill btn-outline-light px-4 me-4 light-300"
              >
                Learn More
              </button>
              <button
                type="submit"
                className="btn rounded-pill btn-primary text-light px-4 light-300"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BannerWork;
