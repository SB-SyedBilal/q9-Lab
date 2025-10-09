import React from "react";
import AtorHero from "../../components/AtorPage/AtorHero";
import AtorForm from "../../components/AtorPage/AtorForm";
import RequestForm from "../../components/RequestForm/RequestForm";
// import AtorWorks from "../../components/AtorPage/AtorWorks";
import AtoBanner from "../../components/AtorPage/AtoBanner";
import AtoCase from "../../components/AtorPage/AtoCase";
import AtorNewSlider from "../../components/AtorPage/AtorNewSlider";

const page = () => {
  return (
    <div>
      <AtorHero />
      <AtorNewSlider />
      {/* <AtorWorks /> */}
      <AtoBanner />
      <AtoCase />

      {/* <AtorForm /> */}
      <RequestForm />
    </div>
  );
};

export default page;
