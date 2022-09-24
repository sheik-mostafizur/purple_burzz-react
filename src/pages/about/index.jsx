import React from "react";
import BannerAbout from "./BannerAbout";
import ChoiceAbout from "./ChoiceAbout";
import ContactAbout from "./ContactAbout";
import OurPartnerAbout from "./OurPartnerAbout";
import ProgressAbout from "./ProgressAbout";
import StartAimAbout from "./StartAimAbout";

import TeamMemberAbout from "./TeamMemberAbout";

const About = () => {
  return (
    <>
      <header>
        <BannerAbout />
      </header>
      <TeamMemberAbout />
      <OurPartnerAbout/>
      <ProgressAbout/>
      <ChoiceAbout/>
      <StartAimAbout/>
      <ContactAbout/>
    </>
  );
};

export default About;
