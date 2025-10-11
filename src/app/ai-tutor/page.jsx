import React from "react";
import AtorHero from "../../components/AtorPage/AtorHero";
import AtorForm from "../../components/AtorPage/AtorForm";
import RequestForm from "../../components/RequestForm/RequestForm";
// import AtorWorks from "../../components/AtorPage/AtorWorks";
import AtoBanner from "../../components/AtorPage/AtoBanner";
import AtoCase from "../../components/AtorPage/AtoCase";
import SliderSectionAtor from "../../components/AtorPage/SliderSectionAtor";
import BannerAtor from "../../components/AtorPage/BannerAtor";
import CaseAtor from "@/components/AtorPage/CaseAtor";

const page = () => {
  return (
    <div>
      <AtorHero />
      <SliderSectionAtor />
      {/* <AtorNewSlider /> */}
      {/* <AtorWorks /> */}
      {/* <AtoBanner /> */}
      <BannerAtor />
      {/* <AtoCase /> */}
      <CaseAtor />
      {/* <AtorForm /> */}
      <RequestForm />
    </div>
  );
};

export default page;
