import React from "react";

const RecentItem = ({ hrefLink, imgLink, imgAlt, title, description }) => {
  return (
    <>
      <div className="col-md-4 mb-3">
        <a
          href={hrefLink}
          className="recent-item card border-0 shadow-lg overflow-hidden"
        >
          <img
            className="recent-item-img card-img"
            src={imgLink}
            alt={imgAlt}
          />
          <div className="recent-item-vertical card-img-overlay d-flex align-items-end">
            <div className="recent-item-content text-start mb-3 ml-3 text-dark">
              <h3 className="card-title light-300">{title}</h3>
              <p className="card-text">{description}</p>
            </div>
          </div>
        </a>
      </div>
    </>
  );
};

export default RecentItem;
