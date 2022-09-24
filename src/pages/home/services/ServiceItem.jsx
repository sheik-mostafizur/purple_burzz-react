import React from "react";
const ServiceItem = ({ link, imgSrc, imgAlt, btnText, content }) => {
  return (
    <div className="col-xl-3 mb-3 mb-md-5 col-md-4 col-sm-6 service-card">
      <a
        href={link}
        className="card border-0 text-white shadow-sm overflow-hidden mx-5 m-sm-0"
      >
        <img className="service card-img" src={imgSrc} alt={imgAlt} />
        <div className="service-work-vertical card-img-overlay d-flex align-items-end">
          <div className="service-work-content text-left text-light">
            <span className="btn btn-outline-light mb-2 rounded-pill mb-lg-3 px-lg-4">
              {btnText}
            </span>
            <p className="card-text">{content}</p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ServiceItem;
