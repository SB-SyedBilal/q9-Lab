"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import BlueBgButton from "../BlueBgButton/BlueBgButton";

const Magic = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const isInView1 = useInView(ref1, { once: true, margin: "-50px" });
  const isInView2 = useInView(ref2, { once: true, margin: "-50px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.2,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.15,
      },
    },
  };

  const slideInLeft = {
    hidden: { x: -60, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.5,
      },
    },
  };

  const slideInRight = {
    hidden: { x: 60, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.5,
      },
    },
  };

  const fadeInUp = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
        duration: 0,
      },
    },
  };

  const scaleIn = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 20,
        duration: 0,
      },
    },
  };

  return (
    <section
      className="relative -mt-17 z-30 min-h-screen flex flex-col bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: `url('/img/herobg.jpg')`,
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/60 z-0"></div>

      {/* first row */}
      <motion.div
        ref={ref1}
        className="flex flex-col lg:flex-row items-center justify-between relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView1 ? "visible" : "hidden"}
      >
        <div
          className="absolute top-0 md:bottom-0 left-0 w-[700px] h-[700px] z-0"
          style={{
            background:
              "radial-gradient(circle at bottom left, rgba(6,42,110,0.9) 0%, transparent 100%)",
            filter: "blur(100px)",
          }}
        />

        {/* Left Content */}
        <motion.div
          className="relative z-10 w-full lg:w-1/2"
          variants={slideInLeft}
        >
          <div className="relative z-10 w-full max-w-[750px] px-6 lg:pl-20 py-16 md:py-20 text-white flex flex-col justify-center text-center lg:text-left">
            <div>
              <motion.h2
                className="text-3xl md:text-5xl font-bold mb-6 leading-snug"
                variants={fadeInUp}
              >
                Where Magic Meets
                <motion.span
                  className="block text-[#14cff0]"
                  variants={scaleIn}
                  whileHover={{
                    scale: 1.05,
                    textShadow: "0 0 20px rgba(20, 207, 240, 0.8)",
                    transition: { duration: 0 },
                  }}
                >
                  Technology
                </motion.span>
              </motion.h2>

              <motion.p
                className="text-sm md:text-base leading-loose mb-6 text-white/70"
                variants={fadeInUp}
              >
                We believe that true innovation happens at the intersection of
                hardware and software — a reaction so powerful it redefines what
                technology can achieve. This philosophy drives everything we do,
                from custom AI integration to conversational AI, AI glasses, and
                intelligent assistants that transform how businesses operate.
              </motion.p>

              <motion.p
                className="text-sm md:text-base leading-loose mb-8 text-white/70"
                variants={fadeInUp}
              >
                We believe everything is possible. That's not just optimism —
                it's our driving force. In a world where AI capabilities are
                expanding exponentially, we stand ready to exploit the
                opportunities that matter most to your success.
              </motion.p>

              <BlueBgButton text="Read More" />
            </div>
          </div>
        </motion.div>

        {/* Right Side Image */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center md:justify-end items-center px-6 md:px-0 py-8 md:py-0 relative z-10 overflow-hidden"
          variants={slideInRight}
          whileHover={{
            scale: 1.02,
            rotate: 1,
            transition: { duration: 0, ease: "easeOut" },
          }}
        >
          <motion.div
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <Image
              src="/img/magic1.png"
              alt="Tech Visual"
              width={800}
              height={900}
              className="object-contain w-full max-w-[400px] md:max-w-[900px] h-auto"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* second row */}
      <motion.div
        ref={ref2}
        className="flex flex-col-reverse lg:flex-row items-center justify-between relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView2 ? "visible" : "hidden"}
      >
        {/* left Side Image */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center md:justify-start items-center px-6 md:px-0 py-8 md:py-0 overflow-hidden"
          variants={slideInLeft}
          whileHover={{
            scale: 1.05,
            rotate: -2,
            transition: { duration: 0, ease: "easeOut" },
          }}
        >
          <motion.div
            animate={{
              y: [0, 18, 0],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <Image
              src="/img/magic2.png"
              alt="Tech Visual"
              width={800}
              height={900}
              className="object-cover w-full max-w-[500px] md:max-w-[900px] h-auto"
            />
          </motion.div>
        </motion.div>

        {/* right Content */}
        <motion.div
          className="relative w-full lg:w-1/2"
          variants={slideInRight}
        >
          <motion.div
            className="absolute -bottom-10 right-0 w-[700px] h-[700px] z-0 overflow-hidden"
            style={{
              background:
                "radial-gradient(circle at bottom right, rgba(6,42,110,0.9) 0%, transparent 100%)",
              filter: "blur(50px)",
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.8, 0.4, 0.8],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />

          <div className="relative z-10 w-full max-w-[750px] px-6 lg:pr-20 py-16 md:py-20 text-white flex flex-col justify-center text-center lg:text-left">
            <div>
              <motion.h2
                className="text-3xl md:text-5xl font-bold mb-6 leading-snug"
                variants={fadeInUp}
              >
                What Is
                <motion.span
                  className=" text-[#14cff0]"
                  variants={scaleIn}
                  whileHover={{
                    scale: 1.05,
                    textShadow: "0 0 20px rgba(20, 207, 240, 0.8)",
                    transition: { duration: 0 },
                  }}
                >
                  {" "}
                  Q9 Labs
                </motion.span>
              </motion.h2>

              <motion.p
                className="text-sm md:text-base leading-loose mb-6 text-white/70"
                variants={fadeInUp}
              >
                We're not just another AI company. We're pioneers who understand
                that the real power of artificial intelligence lies not in
                replacing human capabilities, but in amplifying them. Our
                solutions are built to integrate seamlessly into your existing
                workflows, enhancing productivity while maintaining the human
                touch that makes your business unique.
              </motion.p>

              <motion.p
                className="text-sm md:text-base leading-loose mb-8 text-white/70"
                variants={fadeInUp}
              >
                From multinational corporations to growing startups, our AI
                solutions scale with your ambitions. We combine enterprise-grade
                security with user-friendly interfaces, ensuring that advanced
                AI technology is accessible to everyone, regardless of technical
                expertise.
              </motion.p>

              <BlueBgButton text="Read More" />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Magic;
