import React from "react";
import Hero from "../../components/HirmPage/Hero";
import DualSlider from "../../components/HirmPage/DualsSlider";
import HowWorks from "../../components/HirmPage/HowWorks";
import HirmBanner from "../../components/HirmPage/HirmBanner";
import CaseStudies from "../../components/HirmPage/CaseStudies";
import HirmForm from "../../components/HirmPage/HirmForm";
import HirmCarouselPage from "../../components/HirmPage/DualsSlider";
import RequestForm from "../../components/RequestForm/RequestForm";

const page = () => {
  return (
    <>
      <Hero />
      {/* <DualSlider /> */}
      {/* <HirmCarouselPage /> */}
      <HowWorks />
      <HirmBanner />
      <CaseStudies />
      {/* <HirmForm /> */}
      <RequestForm />
    </>
  );
};

export default page;
