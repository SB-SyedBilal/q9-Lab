import React from "react";

import RequestForm from "../../components/RequestForm/RequestForm";
import HirmHeroComp from "../../components/HirmPage/HirmHeroComp";
import HirmWorks from "../../components/HirmPage/HirmWorks";
import HirBanner from "../../components/HirmPage/HirBanner";
import HirmCases from "../../components/HirmPage/HirmCases";
import HirmNewSlider from "../../components/HirmPage/HirmNewSlider";
import SliderSectionHirm from "../../components/HirmPage/SliderSectionHirm";
import BannerHirm from "../../components/HirmPage/BannerHirm";
import CaseHirm from "@/components/HirmPage/CaseHirm";

const page = () => {
  return (
    <>
      <HirmHeroComp />
      {/* <HirmNewSlider /> */}
      <SliderSectionHirm />
      {/* <HirmWorks /> */}
      {/* <HirBanner /> */}
      <BannerHirm />
      {/* <HirmCases /> */}
      <CaseHirm />
      <RequestForm />
    </>
  );
};

export default page;
