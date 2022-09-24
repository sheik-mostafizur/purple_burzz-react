import React from "react";
import PrimaryBtn from "../../components/primary_btn";
import ItemStartOurWork from "./ItemStartOurWork";
import ServiceOne from "../../assets/images/work/our-work-01.jpg";
import ServiceTwo from "../../assets/images/work/our-work-02.jpg";
import ServiceThree from "../../assets/images/work/our-work-03.jpg";
import ServiceFour from "../../assets/images/work/our-work-04.jpg";
import ServiceFive from "../../assets/images/work/our-work-05.jpg";
import ServiceSix from "../../assets/images/work/our-work-06.jpg";

const StartOurWork = () => {
  return (
    <>
      <section className="container py-5 start_our_work">
        <div className="row justify-content-center my-5">
          <div className="shadow-md text-center col-auto">
            <ul>
              <li>
                <PrimaryBtn href="#" text="All" />
              </li>
              <li>
                <PrimaryBtn href="#" text="Business" />
              </li>
              <li>
                <PrimaryBtn href="#" text="Marketing" />
              </li>
              <li>
                <PrimaryBtn href="#" text="Social Media" />
              </li>
              <li>
                <PrimaryBtn href="#" text="Graphic" />
              </li>
            </ul>
          </div>
        </div>
        <div className="row projects gx-lg-5">
          <ItemStartOurWork
            hrefLink="#"
            imgSrc={ServiceOne}
            title=" Digital Marketing"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
    do eiusmod tempor incididunt ut labore et dolor."
          />
          <ItemStartOurWork
            hrefLink="#"
            imgSrc={ServiceTwo}
            title="Corporate Branding"
            description="Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat."
          />
          <ItemStartOurWork
            hrefLink="#"
            imgSrc={ServiceThree}
            title="Leading Digital Solution"
            description="Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiatdolore eu fugiat nulla pariatur. "
          />
          <ItemStartOurWork
            hrefLink="#"
            imgSrc={ServiceFour}
            title="Smart Applications"
            description="Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          />
          <ItemStartOurWork
            hrefLink="#"
            imgSrc={ServiceFive}
            title="Corporate Stationary"
            description="Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum."
          />
          <ItemStartOurWork
            hrefLink="#"
            imgSrc={ServiceSix}
            title="8 Financial Tips"
            description="Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat."
          />
        </div>
        <div className="row">
          <div
            className="btn-toolbar justify-content-center pb-4 mt-4"
            role="toolbar"
            aria-label="Toolbar with button groups"
          >
            <div
              className="btn-group me-2"
              role="group"
              aria-label="First group"
            >
              <button type="button" className="btn btn-secondary text-white">
                Previous
              </button>
            </div>
            <div
              className="btn-group me-2"
              role="group"
              aria-label="Second group"
            >
              <button type="button" className="btn btn-light">
                1
              </button>
            </div>
            <div
              className="btn-group me-2"
              role="group"
              aria-label="Second group"
            >
              <button type="button" className="btn btn-secondary text-white">
                2
              </button>
            </div>
            <div className="btn-group" role="group" aria-label="Third group">
              <button type="button" className="btn btn-secondary text-white">
                Next
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StartOurWork;
