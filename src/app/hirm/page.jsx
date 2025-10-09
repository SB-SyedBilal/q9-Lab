import React from "react";

import RequestForm from "../../components/RequestForm/RequestForm";
import HirmHeroComp from "../../components/HirmPage/HirmHeroComp";
import HirmWorks from "../../components/HirmPage/HirmWorks";
import HirBanner from "../../components/HirmPage/HirBanner";
import HirmCases from "../../components/HirmPage/HirmCases";
import HirmNewSlider from "../../components/HirmPage/HirmNewSlider";

const page = () => {
  return (
    <>
      <HirmHeroComp />
      <HirmNewSlider />
      {/* <HirmWorks /> */}
      <HirBanner />
      <HirmCases />
      <RequestForm />
    </>
  );
};

export default page;
