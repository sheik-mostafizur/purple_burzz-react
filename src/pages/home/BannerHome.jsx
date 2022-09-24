import React from "react";

const BannerHome = () => {
  return (
    <>
      <section className="banner">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <h1 className="banner-heading h1 display-3 mb-0 pb-5 mx-0 px-0 light-300 typo-space-line">
                      Develop <strong>Strategies</strong> for
                      <br />
                      your business
                    </h1>
                    <p className="banner-body text-muted py-3 mx-0 px-0">
                      Purple Buzz is a corporate HTML template with Bootstrap 5
                      Beta 1. This CSS template is 100% free to download
                      provided by{" "}
                      <a
                        rel="nofollow"
                        href="https://templatemo.com/page/1"
                        target="_parent"
                      >
                        TemplateMo
                      </a>
                      . Total 6 HTML pages included in this template. Icon fonts
                      by{" "}
                      <a rel="nofollow" href="https://boxicons.com/">
                        Boxicons
                      </a>
                      . Photos are from{" "}
                      <a rel="nofollow" href="https://unsplash.com/">
                        Unsplash
                      </a>{" "}
                      and{" "}
                      <a rel="nofollow" href="https://icons8.com/">
                        Icons 8
                      </a>
                      .
                    </p>
                    <a
                      className="banner-button btn rounded-pill btn-outline-primary btn-lg px-4"
                      href="#"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <h1 className="banner-heading h1 display-3 mb-0 pb-3 mx-0 px-0 light-300">
                      HTML CSS Template with Bootstrap 5 Beta 1
                    </h1>
                    <p className="banner-body text-muted py-3">
                      You are not allowed to re-distribute this Purple Buzz HTML
                      template as a downloadable ZIP file on any kind of Free
                      CSS collection websites. This is strongly prohibited.
                      Please contact TemplateMo for more information.
                    </p>
                    <a
                      className="banner-button btn rounded-pill btn-outline-primary btn-lg px-4"
                      href="#"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <h1 className="banner-heading h1 display-3 mb-0 pb-3 mx-0 px-0 light-300">
                      Cupidatat non proident, sunt in culpa qui officia
                    </h1>
                    <p className="banner-body text-muted py-3">
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                      irure dolor in reprehenderit in voluptate velit esse
                      cillum dolore eu fugiat nulla pariatur. Excepteur sint
                      occaecat.
                    </p>
                    <a
                      className="banner-button btn rounded-pill btn-outline-primary btn-lg px-4"
                      href="#"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span className="prevBtn">
              <i className="fa fa-angle-left" aria-hidden="true"></i>
            </span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span className="nextBtn">
              <i className="fa fa-angle-right" aria-hidden="true"></i>
            </span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
    </>
  );
};

export default BannerHome;
