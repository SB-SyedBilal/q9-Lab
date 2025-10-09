"use client";
import { Briefcase, Rocket } from "lucide-react";
import ContactBanner from "./ContactBanner";
const Intelligence = () => {
  return (
    <div className="bg-[#080808] py-6 xl:py-14 mb-16  ">
      <section className="w-full  text-white xl:mb-12">
        <div className="max-w-[1700px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-12">
          {/* LEFT SIDE */}
          <div className="flex-1 flex flex-col items-center  text-center space-y-4  md:space-y-8">
            <div className=" w-fit">
              <img src="/img/locationico.png" className="w-[63px] md:w-[80px] h-auto" alt="location icon" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">Dubai</h2>
            <h3 className="md:text-2xl max-w-md leading-relaxed">
              Latifa Towers, Sheikh Zayed Road
            </h3>
          </div>

          {/* CENTER DIVIDER */}
          <div className="hidden md:block relative w-[2px] h-[300px] bg-gradient-to-b from-transparent via-cyan-400 to-transparent rounded-full"></div>

          {/* MOBILE DIVIDER */}
          <div className="md:hidden w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent md:my-10"></div>

          {/* RIGHT SIDE */}
          <div className="flex-1 flex flex-col items-center  text-center  space-y-4  md:space-y-8">
            <div className=" w-fit">
              <img src="/img/mailico.png" className="w-[63px] md:w-[80px] h-auto" alt="mail icon" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">
              Email
            </h2>
            <h3 className="md:text-2xl max-w-md leading-relaxed">
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
