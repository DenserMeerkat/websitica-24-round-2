"use client";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="max-w-8xl mx-auto">
      <Title />
    </section>
  );
};

export default Hero;

const Title = () => {
  const variants1 = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  };
  return (
    <div className="mx-auto max-w-7xl">
      <motion.h1
        initial="hidden"
        animate="visible"
        transition={{ duration: 1 }}
        variants={variants1}
        className="mt-10 text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]"
      >
        Your Dream Holiday Awaits
      </motion.h1>
      <motion.span
        initial="hidden"
        animate="visible"
        transition={{ duration: 1, delay: 0.3 }}
        variants={variants1}
        className="text-2xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-4xl md:leading-[5rem]"
      >
        Book Your Perfect Getaway Today!
      </motion.span>
    </div>
  );
};
