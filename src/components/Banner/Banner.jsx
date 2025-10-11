import Heading from "../Heading/Heading";
import Button from "../TransButton/TransButton";
import { ArrowUpRight } from "lucide-react";

export default function Banner() {
  return (
    <section className="max-w-[1700px] px-6 lg:px-8 mx-auto">
      <div className="">
        <div className=" rounded-lg h-auto  animated-border p-6 lg:p-0 overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between lg:px-8  gap-8 ">
            {/* Left Content */}
            <div className="flex flex-col md:gap-6 gap-4">
              {/* <Heading heading="Got a Business " highlight="Challenge?" /> */}
              <h2 className="text-3xl sm:text-[27px] md:text-[30px] lg:text-[32px] xl:text-[40px] 2xl:text-[52px] font-bold text-white md:text-start text-center">
                Got a Business{" "}
                <span className="text-[#06CBDE]">Challenge?</span>
              </h2>
              <p className="text-[#ffffffdc] text-base md:text-lg lg:text-xl mb-2 md:text-start text-center">
                From lead generation to customer support our AI agents are built
                to handle what humans can’t scale.
              </p>

              {/* Button */}
              <div className="flex justify-center md:justify-start">
                <a
                  href="#form"
                  className=" group flex items-center justify-between gap-6 2xl:gap-8 pl-8 pr-2 2xl:pr-3 pt-2 2xl:pt-2 pb-2 2xl:pb-2
             border-1 border-white rounded-full text-white
             hover:bg-white/10 transition-all duration-500 ease-out cursor-pointer 
             relative overflow-hidden"
                >
                  {/* Ripple/shine effect background */}
                  <span
                    className="absolute inset-0 bg-gradient-to-r from-[#06CBDE]/20 via-transparent to-[#06CBDE]/20 
               translate-x-[-100%] group-hover:translate-x-[100%] transition-transform 
               duration-700 ease-in-out"
                  ></span>

                  <span className=" text-base xl:text-lg 2xl:text-[24px] relative z-10 ">
                    Let's Talk
                  </span>

                  <span
                    className="flex items-center justify-center w-7 h-7 sm:w-9 sm:h-9 2xl:w-11 2xl:h-11 rounded-full bg-white 
               relative z-10 group-hover:scale-100 group-hover:rotate-45 
               transition-transform duration-500 ease-out"
                  >
                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 2xl:w-7 2xl:h-7 text-[#06CBDE]" />
                  </span>
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="hidden  lg:flex justify-right mr-12">
              <img
                src="/img/cta-banner-main.png" // Replace this with your image path
                alt="AI Illustration"
                className="w-[600px] lg:w-[600px] h-auto "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
