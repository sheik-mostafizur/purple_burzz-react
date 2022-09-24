import React from "react";
import PrimaryBtn from "../../../components/primary_btn";
import RecentItem from "./RecentItem";

// images here
import recentImgOne from "../../../assets/images/home/recent-work-01.jpg";
import recentImgTwo from "../../../assets/images/home/recent-work-02.jpg";
import recentImgThree from "../../../assets/images/home/recent-work-03.jpg";
import recentImgFour from "../../../assets/images/home/recent-work-04.jpg";
import recentImgFive from "../../../assets/images/home/recent-work-05.jpg";
import recentImgSix from "../../../assets/images/home/recent-work-06.jpg";

const RecentWork = () => {
  return (
    <section className="recent-work">
      <div className="header">
        <div className="container py-5">
          <div className="row d-flex justify-content-center text-center">
            <div className="col-lg-2 col-12 text-light align-items-center">
              <i className="display-1 fa-solid fa-box-archive"></i>
            </div>
            <div className="col-lg-7 col-12 text-light pt-2">
              <h3 className="h4 light-300">Great transformations successful</h3>
              <p className="light-300">
                Quis ipsum suspendisse ultrices gravida.
              </p>
            </div>
            <div className="col-lg-3 col-12 pt-4">
              <PrimaryBtn href="#" text="View Our Work" />
            </div>
          </div>
        </div>
      </div>
      <div className="container py-5 mb-5">
        <div className="row">
          <h2 className="text-center col-12 fs-1 py-5">Recent Works</h2>
        </div>
        <div className="row">
          <div className="row gy-5 g-lg-5 mb-4">
            <RecentItem
              hrefLink="#"
              imgLink={recentImgOne}
              imgAlt="Social Media"
              title="Social Media"
              description="Ullamco laboris nisi ut aliquip ex"
            />
            <RecentItem
              hrefLink="#"
              imgLink={recentImgTwo}
              imgAlt="Web Marketing"
              title="Web Marketing"
              description=""
            />
            <RecentItem
              hrefLink="#"
              imgLink={recentImgThree}
              imgAlt="R {'\u00A0'} D"
              title="R {'\u00A0'} D"
              description=""
            />
            <RecentItem
              hrefLink="#"
              imgLink={recentImgFour}
              imgAlt="Public Relation"
              title="Public Relation"
              description="Lorem ipsum dolor sit amet"
            />
            <RecentItem
              hrefLink="#"
              imgLink={recentImgFive}
              imgAlt="Branding"
              title="Branding"
              description="Put enim ad minim veniam"
            />
            <RecentItem
              hrefLink="#"
              imgLink={recentImgSix}
              imgAlt="Creative Design"
              title="Creative Design"
              description="Mollit anim id est laborum."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentWork;
