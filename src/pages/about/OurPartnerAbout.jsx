import React from "react";

const OurPartner = () => {
  return (
    <>
      <section className="our_partner py-3">
        <div className="container py-5">
          <h2 className="text-white text-center py-5">Our Partner</h2>
          <div className="row text-center">
            <div className="col-md-3 mb-3">
              <div className="card partner-wap py-5">
                <a href="#">
                  <i className="display-1 text-white fa-regular fa-building"></i>
                </a>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="card partner-wap py-5">
                <a href="#">
                  <i className="display-1 text-white fa-solid fa-check-to-slot"></i>
                </a>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="card partner-wap py-5">
                <a href="#">
                <i className="display-1 text-white fa-solid fa-box"></i>
                </a>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="card partner-wap py-5">
                <a href="#">
                  <i className="display-1 text-white fa-solid fa-box-open"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurPartner;
