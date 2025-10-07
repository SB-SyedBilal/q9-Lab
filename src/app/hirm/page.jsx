import React from "react";

import RequestForm from "../../components/RequestForm/RequestForm";
import HirmHeroComp from "../../components/HirmPage/HirmHeroComp";
import HirmWorks from "../../components/HirmPage/HirmWorks";
import HirBanner from "../../components/HirmPage/HirBanner";
import HirmCases from "../../components/HirmPage/HirmCases";

const page = () => {
  return (
    <>
      <HirmHeroComp />
      <HirmWorks />
      <HirBanner />
      <HirmCases />
      <RequestForm />
    </>
  );
};

export default page;
