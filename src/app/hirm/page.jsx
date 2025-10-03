import React from "react";
import Hero from "../../components/HirmPage/Hero";
import DualSlider from "../../components/HirmPage/DualsSlider";
import HowWorks from "../../components/HirmPage/HowWorks";
import HirmBanner from "../../components/HirmPage/HirmBanner";
import CaseStudies from "../../components/HirmPage/CaseStudies";
import HirmForm from "../../components/HirmPage/HirmForm";

const page = () => {
  return (
    <>
      <Hero />
      <DualSlider />
      <HowWorks />
      <HirmBanner />
      <CaseStudies /> 
      <HirmForm />
    </>
  );
};

export default page;
