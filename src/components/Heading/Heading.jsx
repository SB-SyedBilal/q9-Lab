"use client"
import { motion } from "framer-motion"



const Heading = ({ heading, highlight }) => {
  return (
    <motion.h2
      className="text-2xl sm:text-[27px] md:text-[30px] lg:text-[32px] xl:text-[40px] 2xl:text-[50px] font-semibold text-white mb-6"
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {heading}{" "}
      <motion.span
        className="text-[#14cff0]"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        whileHover={{
          scale: 1.05,
          textShadow: "",
        }}
      >
        {highlight}
      </motion.span>
    </motion.h2>
  )
}

export default Heading
