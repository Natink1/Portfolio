import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div class="py-20 px-30 px-6 md:px-20 flex flex-row md:flex-row justify-between items-center ">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
        }}
        class="pt-10 md:pt-0 w-full md:w-1/2"
      >
        <h1 class="text-[#FF8303] sm:text-4xl md:text-6xl font-bold">
          Hi, I am Natnael Deribe
        </h1>
        <h2 class="text-white leading-15 text-2xl md:text-3xl">
          IT Support Specialist & Motion Graphics Designer
        </h2>
        <button class=" mt-10 bg-[#FF8303] text-white w-35 h-12 rounded-lg transition-all duration-300 hover:border border-[#FF8303] hover:bg-transparent hover:drop-shadow-[0_0_3px_rgba(255,145,1,1)]">
          Email Me
        </button>
      </motion.div>
      <div>
        <motion.img
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            delay: 0.2,
            duration: 0.7,
          }}
          src="/src/images/Image.png"
          class="mx-auto w-100 md:w-170 sm:w-50 opacity-30 transition-all ease-linear duration-300 hover:opacity-100 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Hero;
