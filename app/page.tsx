"use client";

import Header from "@/components/header";
import Hero from "./hero";
import Search from "./search";
import { CarouselHeading, CarouselCards } from "./carousel";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import Categories from "./categories";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Hero />
      <Search />
      <Categories />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1, type: "spring" }}
      >
        <CarouselHeading heading={"Most Popular"} />
        <CarouselCards />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1, type: "spring" }}
      >
        <CarouselHeading heading={"Recently Viewed"} />
        <CarouselCards />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1, type: "spring" }}
      >
        <CarouselHeading heading={"Holiday Destinations"} />
        <CarouselCards />
      </motion.div>
      <Footer />
    </div>
  );
}
