import Image from "next/image";
import BlueBgButton from "../BlueBgButton/BlueBgButton";

export default function CaseStudiesSection() {
    return (
        <section className="relative bg-[#080808]  px-4 overflow-hidden h-[990.93px]">
            <img src="/img/Ava/CaseStudies.png" alt="" className="absolute" />
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
                <div className="absolute top-20 right-1/4 w-80 h-80 bg-cyan-400/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-0 w-80 h-80 bg-cyan-400/5 rounded-full blur-3xl" />
                {/* Decorative line patterns */}
                <div className="absolute top-10 left-10 w-32 h-32 opacity-10">
                    <div
                        className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-transparent"
                        style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
                    />
                </div>
            </div>

            <div className="relative m-auto">
                <div className="py-20">
                    <h2 className="text-5xl font-bold text-center ">
                        <span className="text-white">Real-World </span>
                        <span className="text-cyan-400">Case Studies</span>
                    </h2>
                </div>

                <div className="flex justify-center gap-16 mb-16">
                    {/* Card 1: Real Estate Lead Qualification */}
                    <div className="relative flex justify-between   rounded-3xl p-8 backdrop-blur-sm w-[1032px] animated-border shadow-lg bg-[#0C0C0C] 
  [background-image:radial-gradient(circle_at_bottom_right,_rgba(6,203,222,0.7)_0%,_rgba(6,203,222,0.3)_5%,_transparent_50%)]">
                        <div className="space-y-6 flex flex-col justify-center">
                            <h3 className="text-2xl font-semibold text-white">
                                Real Estate Lead
                                <br />
                                Qualification
                            </h3>

                            <p className="text-gray-400 text-sm leading-relaxed">
                                Ana connects with prospects the moment they inquire,
                                <br />
                                qualifying leads through natural conversations and
                                <br />
                                passing only hot leads to agents reducing response time
                                <br />
                                and increasing conversions.
                            </p>



                            <button className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors group">
                                <span className="font-medium">Let's Connect</span>
                                <svg
                                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>
                        </div>
                        <div className=" translate-y-7">
                            <Image
                                src="/img/Ava/mockup.png"
                                width={400}
                                height={600}
                            />
                        </div>
                    </div>

                    {/* Card 2: Retail & Travel Support */}
                    <div className="bg-gradient-to-br flex items-center  border border-gray-700/30 rounded-3xl p-8 backdrop-blur-sm w-[643px] animated-border h-[568px] bg-[#0C0C0C] 
  [background-image:radial-gradient(circle_at_bottom_right,_rgba(6,203,222,0.7)_0%,_rgba(6,203,222,0.3)_5%,_transparent_50%)]">
                        <div className="space-y-6 flex flex-col ">
                            <h3 className="text-2xl font-semibold text-white">
                                Retail & Travel
                                <br />
                                Support
                            </h3>

                            <p className="text-gray-400 text-sm leading-relaxed">
                                From order updates to booking assistance, Ana delivers
                                <br />
                                instant answers around the clock. Businesses cut call
                                <br />
                                center costs while customers enjoy faster, friction-free
                                <br />
                                service.
                            </p>

                            <div className="flex-grow" />

                            <button className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors group mt-auto">
                                <span className="font-medium">Let's Connect</span>
                                <svg
                                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center">
                    <BlueBgButton text="See It In Action" />
                </div>
            </div>
        </section>
    )
}
