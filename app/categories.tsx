import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AirVent, Archive, Award, Bath, Home } from "lucide-react";
import { motion } from "framer-motion";

const Categories = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 1, type: "spring" }}
      className="mt-12"
    >
      <h2 className="text-center text-2xl font-bold">{"Top Categories"}</h2>
      <Carousel
        opts={{
          align: "start",
        }}
        className="mx-auto mt-12 w-full max-w-7xl"
      >
        <CarouselContent>
          <CarouselItem className="max-w-[120px] md:basis-1/2 lg:basis-1/3">
            <div className="flex flex-col items-center gap-1 text-white drop-shadow-lg">
              <AirVent className="h-16 w-16" />
              <span className="text-lg font-medium">Lorem</span>
            </div>
          </CarouselItem>
          <CarouselItem className="max-w-[120px] md:basis-1/2 lg:basis-1/3">
            <div className="flex flex-col items-center gap-1 text-white drop-shadow-lg">
              <Archive className="h-16 w-16" />
              <span className="text-lg font-medium">Lorem</span>
            </div>
          </CarouselItem>
          <CarouselItem className="max-w-[120px] md:basis-1/2 lg:basis-1/3">
            <div className="flex flex-col items-center gap-1 text-white drop-shadow-lg">
              <Award className="h-16 w-16" />
              <span className="text-lg font-medium">Lorem</span>
            </div>
          </CarouselItem>
          <CarouselItem className="max-w-[120px] md:basis-1/2 lg:basis-1/3">
            <div className="flex flex-col items-center gap-1 text-white drop-shadow-lg">
              <Bath className="h-16 w-16" />
              <span className="text-lg font-medium">Lorem</span>
            </div>
          </CarouselItem>
          <CarouselItem className="max-w-[120px] md:basis-1/2 lg:basis-1/3">
            <div className="flex flex-col items-center gap-1 text-white drop-shadow-lg">
              <Home className="h-16 w-16" />
              <span className="text-lg font-medium">Lorem</span>
            </div>
          </CarouselItem>{" "}
          <CarouselItem className="max-w-[120px] md:basis-1/2 lg:basis-1/3">
            <div className="flex flex-col items-center gap-1 text-white drop-shadow-lg">
              <AirVent className="h-16 w-16" />
              <span className="text-lg font-medium">Lorem</span>
            </div>
          </CarouselItem>
          <CarouselItem className="max-w-[120px] md:basis-1/2 lg:basis-1/3">
            <div className="flex flex-col items-center gap-1 text-white drop-shadow-lg">
              <Archive className="h-16 w-16" />
              <span className="text-lg font-medium">Lorem</span>
            </div>
          </CarouselItem>
          <CarouselItem className="max-w-[120px] md:basis-1/2 lg:basis-1/3">
            <div className="flex flex-col items-center gap-1 text-white drop-shadow-lg">
              <Award className="h-16 w-16" />
              <span className="text-lg font-medium">Lorem</span>
            </div>
          </CarouselItem>
          <CarouselItem className="max-w-[120px] md:basis-1/2 lg:basis-1/3">
            <div className="flex flex-col items-center gap-1 text-white drop-shadow-lg">
              <Bath className="h-16 w-16" />
              <span className="text-lg font-medium">Lorem</span>
            </div>
          </CarouselItem>
          <CarouselItem className="max-w-[120px] md:basis-1/2 lg:basis-1/3">
            <div className="flex flex-col items-center gap-1 text-white drop-shadow-lg">
              <Home className="h-16 w-16" />
              <span className="text-lg font-medium">Lorem</span>
            </div>
          </CarouselItem>{" "}
          <CarouselItem className="max-w-[120px] md:basis-1/2 lg:basis-1/3">
            <div className="flex flex-col items-center gap-1 text-white drop-shadow-lg">
              <AirVent className="h-16 w-16" />
              <span className="text-lg font-medium">Lorem</span>
            </div>
          </CarouselItem>
          <CarouselItem className="max-w-[120px] md:basis-1/2 lg:basis-1/3">
            <div className="flex flex-col items-center gap-1 text-white drop-shadow-lg">
              <Archive className="h-16 w-16" />
              <span className="text-lg font-medium">Lorem</span>
            </div>
          </CarouselItem>
          <CarouselItem className="max-w-[120px] md:basis-1/2 lg:basis-1/3">
            <div className="flex flex-col items-center gap-1 text-white drop-shadow-lg">
              <Award className="h-16 w-16" />
              <span className="text-lg font-medium">Lorem</span>
            </div>
          </CarouselItem>
          <CarouselItem className="max-w-[120px] md:basis-1/2 lg:basis-1/3">
            <div className="flex flex-col items-center gap-1 text-white drop-shadow-lg">
              <Bath className="h-16 w-16" />
              <span className="text-lg font-medium">Lorem</span>
            </div>
          </CarouselItem>
          <CarouselItem className="max-w-[120px] md:basis-1/2 lg:basis-1/3">
            <div className="flex flex-col items-center gap-1 text-white drop-shadow-lg">
              <Home className="h-16 w-16" />
              <span className="text-lg font-medium">Lorem</span>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </motion.div>
  );
};

export default Categories;
