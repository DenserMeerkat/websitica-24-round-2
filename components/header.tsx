"use client";
import { FADE_DOWN_ANIMATION_VARIANTS } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

const Header = () => {
  return (
    <motion.header
      initial="hidden"
      animate="show"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
      className="h-32 bg-gradient-to-b from-white from-60%"
    >
      <motion.div
        variants={FADE_DOWN_ANIMATION_VARIANTS}
        className="max-w-8xl mx-auto flex justify-between py-4"
      >
        <span className="text-2xl font-extrabold text-foreground">TRXVL</span>
        <nav className="flex gap-4 font-medium lg:gap-8">
          <a
            href="#"
            className="text-foreground underline-offset-4 transition-all hover:underline"
          >
            Home
          </a>
          <a
            href="#"
            className="text-foreground underline-offset-4 transition-all hover:underline"
          >
            Stays
          </a>
          <a
            href="#"
            className="text-foreground underline-offset-4 transition-all hover:underline"
          >
            Flights
          </a>
          <a
            href="#"
            className="text-foreground underline-offset-4 transition-all hover:underline"
          >
            Packages
          </a>
          <a
            href="#"
            className="text-foreground underline-offset-4 transition-all hover:underline"
          >
            Sign Up
          </a>
        </nav>
      </motion.div>
    </motion.header>
  );
};

export default Header;
