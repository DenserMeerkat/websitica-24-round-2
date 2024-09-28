import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { AirVent, Archive, Award, Bath, Heart, Star } from "lucide-react";

export function CarouselCards() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="mx-auto mt-6 w-full max-w-7xl"
    >
      <CarouselContent>
        {Array.from({ length: 9 }).map((_, index) => (
          <CarouselItem
            key={index}
            className="max-w-sm md:basis-1/2 lg:basis-1/3"
          >
            <div className="px-1 py-4 backdrop-blur-lg">
              <Card className="bg-gradient-to-t from-white to-white/80 drop-shadow-xl backdrop-blur-lg">
                <CardContent className="flex select-none flex-col items-center justify-center p-3">
                  <div className="relative aspect-video overflow-hidden rounded-xl">
                    <img src="/bg.jpg" alt="" />
                    <Button
                      size="icon"
                      variant="outline"
                      className="right-4 top-4 z-10 text-rose-400"
                    >
                      <Heart />
                    </Button>
                  </div>
                  <div className="flex w-full items-center justify-between p-2">
                    <div className="flex flex-col">
                      <span className="text-xl font-bold">
                        Lorem, ipsum dolor.
                      </span>
                      <span className="text-base text-muted-foreground">
                        Lorem ipsum dolor sit amet.
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-orange-500" />
                      <span className="text-lg font-medium">4.3</span>
                    </div>
                  </div>
                  <div className="flex-basis flex justify-around gap-6 py-4 text-muted-foreground/80">
                    <div className="flex flex-col items-center gap-1">
                      <AirVent />
                      <span>Lorem</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <Archive />
                      <span>Lorem</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <Award />
                      <span>Lorem</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <Bath />
                      <span>Lorem</span>
                    </div>
                  </div>
                  <p className="px-4 text-center text-sm leading-tight text-foreground/70">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Harum, minus!
                  </p>

                  <div className="flex w-full items-center justify-between gap-4 px-4 pt-4">
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-sm line-through">
                        $200 <span className="text-xs">/ night</span>
                      </span>
                      <span className="text-lg font-bold">
                        $200 <span className="text-sm">/ night</span>
                      </span>
                    </div>
                    <span className="text-end text-xs text-muted-foreground">
                      per person
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export function CarouselHeading({ heading }) {
  return (
    <div className="mx-auto mt-20 flex max-w-7xl items-center justify-between">
      <h2 className="text-2xl font-bold">{heading}</h2>
      <Button>View All</Button>
    </div>
  );
}
