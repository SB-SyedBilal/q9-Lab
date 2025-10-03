"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const Advance = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative w-full bg-cover bg-center bg-no-repeat text-white py-16 sm:py-20 px-4 sm:px-6 md:px-10"
      style={{
        backgroundImage: `url('/img/herobg.jpg')`,
      }}
    >
      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60 z-0"></div>

      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16 relative">
        {/* Left Content with shadow directly behind */}
        <motion.div
          className="flex-[0.7] relative z-10 flex items-center h-full w-full"
          initial={{ x: -100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Animated Shadow behind content */}
          <motion.div
            className="absolute lg:-top-10 xl:-top-54 md:-left-20 top-2 w-[300px] sm:w-[500px] md:w-[600px] h-[400px] sm:h-[500px] md:h-[600px] z-0"
            style={{
              background:
                "radial-gradient(circle at top left, rgba(6,42,110,0.9) 0%, transparent 100%)",
              filter: "blur(50px)",
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.9, 0.6, 0.9],
            }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />

          {/* Actual content */}
          <div className="relative z-10 max-w-[600px] px-2 sm:px-4 md:px-0 text-center lg:text-left">
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-snug"
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Ready to Advance <br />
              Your{" "}
              <motion.span
                className="text-[#00CFFF]"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={
                  isInView
                    ? { scale: 1, opacity: 1 }
                    : { scale: 0.8, opacity: 0 }
                }
                transition={{ duration: 0.8, delay: 0.6 }}
                whileHover={{
                  scale: 1.05,
                  textShadow: "0 0 20px rgba(0, 207, 255, 0.8)",
                }}
              >
                Intelligence
              </motion.span>
              ?
            </motion.h2>

            <motion.p
              className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed"
              initial={{ y: 30, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              The future of business is intelligent, adaptive, and always
              learning. With Q9labs, you're not just adopting AI — you're
              partnering with visionaries who understand that every epoch brings
              new possibilities for growth, efficiency, and success.
            </motion.p>
          </div>
        </motion.div>

        {/* Right Side Image */}
        <motion.div
          className="flex-[1] flex items-center justify-center lg:justify-end w-full h-auto relative z-10"
          initial={{ x: 100, opacity: 0, scale: 0.8 }}
          animate={
            isInView
              ? { x: 0, opacity: 1, scale: 1 }
              : { x: 100, opacity: 0, scale: 0.8 }
          }
          transition={{ duration: 1, delay: 0.4 }}
          whileHover={{ scale: 1.05, rotate: 3 }}
        >
          <motion.div
            animate={{
              y: [0, -15, 0],
              rotate: [0, 2, 0],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <Image
              src="/img/aiimg2.png"
              alt="AI Robot"
              width={700}
              height={700}
              className="object-contain w-full max-w-[320px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] xl:max-w-[700px] h-auto"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Advance;
