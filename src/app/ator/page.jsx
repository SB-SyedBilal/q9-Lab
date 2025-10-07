import React from "react";
import AtorHero from "../../components/AtorPage/AtorHero";
import AtorSlider from "../../components/AtorPage/AtorSlider";
import AtorForm from "../../components/AtorPage/AtorForm";
import RequestForm from "../../components/RequestForm/RequestForm";
import AtorWorks from "../../components/AtorPage/AtorWorks";
import AtoBanner from "../../components/AtorPage/AtoBanner";
import AtoCase from "../../components/AtorPage/AtoCase";

const page = () => {
  return (
    <div>
      <AtorHero />
      {/* <AtorSlider /> */}
      <AtorWorks />
      <AtoBanner />
      <AtoCase />

      {/* <AtorForm /> */}
      <RequestForm />
    </div>
  );
};

export default page;
