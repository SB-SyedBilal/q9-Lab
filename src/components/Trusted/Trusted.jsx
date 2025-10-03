"use client"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import Heading from "../../components/Heading/Heading"
import Button from "../../components/TransButton/TransButton"

const Trusted = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const logoVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.8 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  }

  return (
    <div className="relative w-full bg-[#0b0b0b]">
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 -top-37 z-20 bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: "url('/img/curve.png')",
        }}
        
      />

      {/* Content Layer */}
      <motion.section
        ref={ref}
        className="relative z-30 max-w-[1400px] mx-auto flex flex-col py-16 gap-10 px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        {/* Heading */}
        <motion.div
          className="mb-4 text-center"
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <Heading heading="Trusted By" highlight="Customers" />
        </motion.div>

        {/* Logos Grid */}
        <div>
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 mb-16 sm:mb-18"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {["comp1.png", "comp2.png", "comp3.png", "comp4.png", "comp5.png"].map((img, idx) => (
              <motion.div
                key={idx}
                className="flex items-center justify-center bg-[#1b1b1b] rounded-lg h-[100px] sm:h-[120px] md:h-[130px] lg:h-[150px] p-4"
                variants={logoVariants}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#252525",
                  boxShadow: "0 10px 30px rgba(20, 207, 240, 0.2)",
                }}
                transition={{ duration: 0.08 }}
              >
                <div className="relative w-[120px] h-[60px] sm:w-[140px] sm:h-[70px] md:w-[160px] md:h-[80px] lg:w-[180px] lg:h-[90px]">
                  <Image src={`/img/${img}`} alt={`Logo ${idx + 1}`} fill className="object-contain" />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Content Box */}
          <motion.div
            className="relative bg-[#111] rounded-2xl overflow-hidden text-center p-6 sm:p-10 mt-8 mb-26"
            initial={{ y: 100, opacity: 0, scale: 0.9 }}
            animate={isInView ? { y: 0, opacity: 1, scale: 1 } : { y: 100, opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileHover={{ scale: 1 }}
          >
            {/* Animated Curvy icons */}
            <motion.div
              className="absolute md:top-10 top-26 right-4 md:right-16 z-20"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <Image
                src="/img/curvy.png"
                alt="Curvy Shape"
                width={30}
                height={30}
                className="sm:w-[35px] sm:h-[35px]"
              />
            </motion.div>

            <motion.div
              className="absolute bottom-16 md:left-46 z-20"
              animate={{
                rotate: [360, 0],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: 1,
              }}
            >
              <Image
                src="/img/curvy2.png"
                alt="Curvy Shape 2"
                width={30}
                height={30}
                className="sm:w-[35px] sm:h-[35px]"
              />
            </motion.div>

            {/* Background stars */}
            <div className="absolute inset-0">
              <Image src="/img/futurebg.png" alt="Stars Background" fill className="object-cover" />
            </div>

            {/* Animated Overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-[#124672] via-[#124672]/10 to-transparent"
              animate={{
                opacity: [0.8, 0.6, 0.8],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />

            {/* Content */}
            <div className="relative z-10 max-w-3xl mx-auto mt-6 sm:mt-8">
              <motion.h1
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6"
                initial={{ y: 30, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                Welcome to the Future of AI Innovation
              </motion.h1>

              <motion.p
                className="text-gray-400 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 px-2"
                initial={{ y: 30, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
                transition={{ duration: 0.4, delay: 1 }}
              >
                At Q9labs, we don't just develop artificial intelligence — we craft the catalytic reactions that happen
                when cutting-edge hardware meets revolutionary software. As a UAE-based AI research and development
                startup under CollabEZ, we exist with one unwavering mission: to unlock the most beneficial and
                lucrative possibilities that AI has to offer.
              </motion.p>

              <motion.p
                className="text-gray-100 text-sm sm:text-base font-semibold mb-6 sm:mb-8 px-2"
                initial={{ y: 30, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
                transition={{ duration: 0.4, delay: 1 }}
              >
                The time for intelligence isn't coming tomorrow. It's already here, and we're at the forefront of making
                it work for you.
              </motion.p>

              <motion.div
                className="flex justify-center"
                initial={{ y: 30, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
                transition={{ duration: 0.4, delay: 1 }}
              >
                <Button />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}

export default Trusted
