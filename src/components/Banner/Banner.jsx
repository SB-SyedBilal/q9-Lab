import Heading from "../Heading/Heading";
import Button from "../TransButton/TransButton";
import { ArrowUpRight } from "lucide-react";


export default function Banner() {
  return (
    <section className="max-w-[1700px] px-6 lg:px-8 mx-auto">
      <div className="">
        <div className=" rounded-2xl h-auto  animated-border md:p-7 lg:p-0 overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between px-8  gap-8 ">
            {/* Left Content */}
            <div className=" text-center pt-5 sm:pt-0  md:text-left lg:ml-12 ">
              <Heading heading="Have A" highlight="Problem?" />
              <p className="text-gray-400 mb-4 lg:text-lg">
                Let us build an AI Agent that works for your business.
              </p>

              {/* Button */}
              <div className="flex justify-center md:justify-start mb-6 md:mb-0">
                <a href='#form'
                  className=" group flex items-center justify-between gap-6 2xl:gap-8 pl-8 pr-2 2xl:pr-3 pt-2 2xl:pt-2 pb-2 2xl:pb-2
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

                  <span className=" text-xs sm:text-[16px] 2xl:text-[24px] relative z-10 ">
                    Let's Talk
                  </span>

                  <span
                    className="flex items-center justify-center w-7 h-7 sm:w-9 sm:h-9 2xl:w-11 2xl:h-11 rounded-full bg-white 
               relative z-10 group-hover:scale-100 group-hover:rotate-45 
               transition-transform duration-500 ease-out"
                  >
                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 2xl:w-7 2xl:h-7 text-cyan-400" />
                  </span>
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="hidden  md:flex justify-right ">
              <img
                src="/img/banner-cta.png" // Replace this with your image path
                alt="AI Illustration"
                className="md:w-[200px] lg:w-[300px] xl:w-[350px] 2xl:w-[450px] md:ml-15 lg:ml-30 h-auto "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
