import React from "react";
import AboutUsHero from "../../components/AboutUsPage/AboutHero";
import OurStory from "../../components/AboutUsPage/OurStory";
import OurMission from "../../components/AboutUsPage/OurMission";
import RAProtocolSection from "../../components/AboutUsPage/RAProtocolSection";
import AbouBanner from "../../components/AboutUsPage/AbouBanner";

const page = () => {
  return (
    <div>
      <AboutUsHero />
      <OurStory />
      <OurMission />

      <RAProtocolSection />
      <AbouBanner />
    </div>
  );
};

export default page;
