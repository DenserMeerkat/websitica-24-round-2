"use client";

import Header from "@/components/header";
import Hero from "./hero";
import Search from "./search";
import { CarouselHeading, CarouselCards } from "./carousel";
import Footer from "@/components/footer";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Hero />
      <Search />
      <motion.div
        initial={{ opacity: 0, y: 500 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <CarouselHeading heading={"Most Popular"} />
        <CarouselCards />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 500 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <CarouselHeading heading={"Recently Viewed"} />
        <CarouselCards />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <CarouselHeading heading={"Holiday Destinations"} />
        <CarouselCards />
      </motion.div>
      <Footer />
    </div>
  );
}
