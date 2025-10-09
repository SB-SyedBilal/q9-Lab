"use client";
import { Briefcase, Rocket } from "lucide-react";
import ContactBanner from "./ContactBanner";
const Intelligence = () => {
  return (
    <div className="bg-[#080808] py-8 xl:py-12 2xl:py-19 mb-8  ">
      <section className="w-full  text-white xl:mb-6">
        <div className="max-w-[1700px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between md:gap-12 gap-6">
          {/* LEFT SIDE */}
          <div className="flex-1 flex flex-col items-center  text-center space-y-4  xl:space-y-8">
            <div className=" w-fit">
              <img src="/img/locationico.png" className="w-16" alt="location icon" />
            </div>
            <h2 className="text-2xl xl:text-3xl font-bold">Dubai</h2>
            <h3 className="xl:text-2xl text-xl max-w-md leading-relaxed">
              Latifa Towers, Sheikh Zayed Road
            </h3>
          </div>

          {/* CENTER DIVIDER */}
          <div className="hidden md:block relative w-[2px] xl:h-[300px] h-[250px] bg-gradient-to-b from-transparent via-[#06CBDE] to-transparent rounded-full"></div>

          {/* MOBILE DIVIDER */}
          <div className="md:hidden w-full h-[2px] bg-gradient-to-r from-transparent via-[#06CBDE] to-transparent md:my-10"></div>

          {/* RIGHT SIDE */}
          <div className="flex-1 flex flex-col items-center  text-center  space-y-4  xl:space-y-8">
            <div className=" w-fit">
              <img src="/img/mailico.png" className="w-16" alt="mail icon" />
            </div>
            <h2 className="text-2xl xl:text-3xl font-bold">
              Email
            </h2>
            <h3 className="xl:text-2xl text-xl max-w-md leading-relaxed">
              hello@q9labs.ai
            </h3>
          </div>
        </div>
      </section>

      <ContactBanner />
    </div>
  );
};

export default Intelligence;
