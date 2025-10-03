import Advance from "@/components/Advance/Advance";
import Footer from "@/components/Footer/Footer";

import JoinUs from "@/components/JoinUs/JoinUs";
import Magic from "@/components/Magic/Magic";
import Navbar from "@/components/NavBar/Navbar";
import Products from "@/components/Products/Products";
import Trusted from "@/components/Trusted/Trusted";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import WhyQ9 from "../components/whyQ9/WhyQ9";
import RequestForm from "../components/RequestForm/RequestForm";
import Hero from "@/components/Hero/Hero";
import IndustriesSection from "@/components/industries-section/industries-section";

export default function Page() {
  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      {/* <Trusted /> */}
      {/* <Magic /> */}
      <Products />
      <IndustriesSection />
      {/* <Advance /> */}
      <HowItWorks />
      {/* <WhyQ9 /> */}
      <RequestForm />
      {/* <Footer /> */}
    </>
  );
}
