import Heading from "../Heading/Heading";
import Button from "../TransButton/TransButton";
import { ArrowUpRight } from "lucide-react";


export default function Banner() {
  return (
    <section className="py-6 px-6 ">
      <div className="md:max-w-[700px] lg:max-w-[950px] xl:max-w-[1150px] 2xl:max-w-[1400px] mx-auto">
        <div className="bg-gradient-to-r from-[#03020A] via-[#030306] to-[#04060A] rounded-2xl h-auto border border-gray-700 md:p-7 lg:p-0 overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between px-8  gap-8 ">
            {/* Left Content */}
            <div className=" text-center pt-5 sm:pt-0  md:text-left lg:ml-12 ">
              <Heading heading="Have A" highlight="Problem?" />
              <p className="text-gray-400 mb-4 lg:text-lg">
                Let us build an AI Agent that works for your business.
              </p>

              {/* Button */}
              <div className="flex justify-center md:justify-start mb-6 md:mb-0">
                <button
                  className=" group flex items-center justify-between gap-6 pl-8 pr-2 pt-2 pb-2 
             border-1 border-white rounded-full text-white
             hover:bg-white/10 transition-all duration-500 ease-out cursor-pointer 
             relative overflow-hidden"
                >
                  {/* Ripple/shine effect background */}
                  <span
                    className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-transparent to-cyan-400/20 
               translate-x-[-100%] group-hover:translate-x-[100%] transition-transform 
               duration-700 ease-in-out"
                  ></span>

                  <span className=" text-xs sm:text-[16px] relative z-10 ">
                    Lern More
                  </span>

                  <span
                    className="flex items-center justify-center w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-white 
               relative z-10 group-hover:scale-100 group-hover:rotate-45 
               transition-transform duration-500 ease-out"
                  >
                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
                  </span>
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="hidden md:w-1/2 md:flex justify-right ">
              <img
                src="/img/banner.png" // Replace this with your image path
                alt="AI Illustration"
                className="w-full md:ml-15 lg:ml-30 h-full "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
