import React from "react";

const ItemStartOurWork = ({ hrefLink, imgSrc, title, description }) => {
  return (
    <>
      <a
        href={hrefLink}
        className="item_start_our_work col-sm-6 col-lg-4 text-decoration-none mb-md-5"
      >
        <div className="service-work overflow-hidden card mb-5 mx-5 m-sm-0">
          <img className="card-img-top" src={imgSrc} alt="" />
          <div className="card-body">
            <h5 className="card-title light-300 text-dark">{title}</h5>
            <p className="card-text light-300 text-dark">{description}</p>
            <span className="text-decoration-none text-primary light-300">
              Read more <i className="fa-solid fa-hand-point-right ms-1"></i>
            </span>
          </div>
        </div>
      </a>
    </>
  );
};

export default ItemStartOurWork;
