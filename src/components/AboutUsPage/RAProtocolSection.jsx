"use client";
import TransButton from "../../components/TransButton/TransButton";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";

const FEATURES = [
  {
    title: "Continuous Market Scanning",
    description:
      "Track competitors, regulations, and trends with curated sources and scheduled crawls.",
    icon: "/img/r1.png",
  },
  {
    title: "Domain Corpus Construction",
    description:
      "Unify papers, SOPs, tickets, call notes, and internal docs into a clean, queryable knowledge base.",
    icon: "/img/r2.png",
  },
  {
    title: "Evidence Graph",
    description:
      "Link claims to citations and provenance so every recommendation is traceable.",
    icon: "/img/r3.png",
  },
  {
    title: "Private Data Connectors",
    description:
      "Securely ingest CRM, wikis, drive folders, and data warehouses with strict access controls.",
    icon: "/img/r4.png",
  },
  {
    title: "Evaluation & Guardrails",
    description:
      "Ground responses with retrieval checks, red-teaming prompts, and compliance filters.",
    icon: "/img/r5.png",
  },
  {
    title: "Decision-Ready Briefs",
    description:
      "Concise briefs tailored to roles so teams act faster with confidence.",
    icon: "/img/r6.png",
  },
];

export default function RAProtocolSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <section
        aria-labelledby="ra-protocol-heading"
        className="relative mx-auto w-full max-w-[1700px] px-6 lg:px-8 py-12 sm:py-14 "
      >
        {/* Badge */}
        <div className="mb-4 text-center sm:text-left">
          <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-xs sm:text-sm text-white">
            Our Differentiator
          </span>
        </div>

        {/* Heading */}
        <h2
          id="ra-protocol-heading"
          className="text-balance text-4xl xl:text-6xl font-bold leading-tight text-white text-center sm:text-left mb-6"
        >
          The RA Protocol{" "}
          <span className="text-cyan-400">
            (Research <br /> & Apply)
          </span>
        </h2>

        {/* Paragraph */}
        <p className="mt-3 max-w-2xl text-xs sm:text-sm md:text-xl text-gray-300 text-center sm:text-left">
          Research new possibilities. Apply them instantly into SaaS products
          with ROI.
        </p>

        {/* Mobile: Swiper Carousel */}
        {isMobile ? (
          <div className="mt-10">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              loop={true}
              className="!pb-10"
            >
              {FEATURES.map((feature, index) => (
                <SwiperSlide key={index}>
                  <div className="flex flex-col items-center justify-center border animated-border rounded-lg p-6 text-center hover:border-cyan-400 transition-all duration-300">
                    <span className="flex h-16 w-16 items-center justify-center rounded-lg bg-white/10 text-cyan-400 flex-shrink-0 mb-3">
                      <img
                        src={feature.icon}
                        className="w-9 h-auto"
                        alt={feature.title}
                      />
                    </span>
                    <h3 className="text-base mb-2 text-white">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ) : (
          // Desktop: Grid Layout
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-2 sm:gap-4 md:gap-6">
            {FEATURES.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row items-center sm:items-start md:items-center gap-4 border animated-border rounded-lg p-4 sm:p-5 hover:border-cyan-400 transition-all duration-300"
              >
                <span className="flex h-16 w-16 lg:h-24 lg:w-24 items-center justify-center rounded-lg bg-white/10 text-cyan-400 flex-shrink-0">
                  <img
                    src={feature.icon}
                    className="w-9 lg:w-12 h-auto"
                    alt={feature.title}
                  />
                </span>
                <div className="text-center sm:text-left max-w-md">
                  <h3 className="text-base text-xl 2xl:text-2xl mb-1 sm:mb-2 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-sm xl:text-lg text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Button */}
      <div className="flex justify-center">
        <TransButton text="Talk To Us" />
      </div>
    </div>
  );
}
