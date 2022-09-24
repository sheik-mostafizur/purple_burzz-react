import React from "react";
import ServiceItem from "./ServiceItem";
// images
import serviceOne from "../../../assets/images/home/services-01.jpg";
import serviceTwo from "../../../assets/images/home/services-02.jpg";
import serviceThree from "../../../assets/images/home/services-03.jpg";
import serviceFour from "../../../assets/images/home/services-04.jpg";
import serviceFive from "../../../assets/images/home/services-05.jpg";
import serviceSix from "../../../assets/images/home/services-06.jpg";
import serviceSeven from "../../../assets/images/home/services-07.jpg";
import serviceEight from "../../../assets/images/home/services-08.jpg";
import PrimaryBtn from "../../../components/primary_btn";

const Services = () => {
  return (
    <div className="services">
      <div className="container-fluid py-3">
        <div className="row">
          <h2 className="text-center col-12 fs-1 py-5">Services</h2>
          <div className="col-2 col-lg-3 text-end">
            <i className="fas fa-gift fs-3"></i>
          </div>
          <div className="col-10 col-lg-9">
            <h2 className="fs-2 typo-space-line pb-4">
              Make Success for future
            </h2>
          </div>
        </div>
        <p className="footer col-10 offset-2 col-lg-9 offset-lg-3 text-start pb-3 text-muted px-2">
          You are free to use this template for your commercial or business
          websites. You are not allowed to re-distribute this template ZIP file
          on any template collection websites. It is too easy to illegally copy
          and repost this template.
        </p>
      </div>
      <div className="service-tag-nav">
        <div className="container">
          <div className="row">
            <div className="col-12 py-5">
              <nav>
                <ul>
                  <li>
                    <PrimaryBtn href="#" text="All" />
                  </li>
                  <li>
                    <PrimaryBtn href="#" text="Graphic" />
                  </li>
                  <li>
                    <PrimaryBtn href="#" text="UI/UX" />
                  </li>
                  <li>
                    <PrimaryBtn href="#" text="Branding" />
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="container py-5">
        <div className="row">
          <ServiceItem
            link="#"
            imgSrc={serviceOne}
            imgAlt={serviceOne}
            btnText="ui/ux design"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing"
          />
          <ServiceItem
            link="#"
            imgSrc={serviceTwo}
            imgAlt={serviceTwo}
            btnText="Social Media"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing"
          />
          <ServiceItem
            link="#"
            imgSrc={serviceThree}
            imgAlt={serviceThree}
            btnText="Marketing"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing"
          />
          <ServiceItem
            link="#"
            imgSrc={serviceFour}
            imgAlt={serviceFour}
            btnText="Graphic"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing"
          />
          <ServiceItem
            link="#"
            imgSrc={serviceFive}
            imgAlt={serviceFive}
            btnText="Digital Marketing"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing"
          />
          <ServiceItem
            link="#"
            imgSrc={serviceSix}
            imgAlt={serviceSix}
            btnText="Market Research "
            content="Lorem ipsum dolor sit amet, consectetur adipisicing"
          />
          <ServiceItem
            link="#"
            imgSrc={serviceSeven}
            imgAlt={serviceSeven}
            btnText="Business "
            content="Lorem ipsum dolor sit amet, consectetur adipisicing"
          />
          <ServiceItem
            link="#"
            imgSrc={serviceEight}
            imgAlt={serviceEight}
            btnText="Branding "
            content="Lorem ipsum dolor sit amet, consectetur adipisicing"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
