import React from "react";
// images
import memberOne from "../../assets/images/about/team-01.jpg";
import memberTwo from "../../assets/images/about/team-02.jpg";
import memberThree from "../../assets/images/about/team-03.jpg";

const TeamMemberAbout = () => {
  return (
    <>
      <section className="team_member container py-5">
        <div className="pt-5 pb-3 d-lg-flex align-items-center gx-5">
          <div className="col-lg-3">
            <h2 className="h2 py-5 typo-space-line">Our Team</h2>
            <p className="text-muted light-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          <div className="col-lg-9 row">
            <div className="col-md-4">
              <img
                className="member-img img-fluid rounded-circle p-4"
                src={memberOne}
                alt="Card img"
              />
              <ul className="text-center pt-4 text-muted light-300">
                <li>John Doe</li>
                <li>Business Development</li>
              </ul>
            </div>
            <div className="member col-md-4">
              <img
                className="member-img img-fluid rounded-circle p-4"
                src={memberTwo}
                alt="Card img"
              />
              <ul className="text-center pt-4 text-muted light-300">
                <li>Jane Doe</li>
                <li>Media Development</li>
              </ul>
            </div>
            <div className="member col-md-4">
              <img
                className="member-img img-fluid rounded-circle p-4"
                src={memberThree}
                alt="Card img"
              />
              <ul className="text-center pt-4 text-muted light-300">
                <li>Sam</li>
                <li>Developer</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamMemberAbout;
