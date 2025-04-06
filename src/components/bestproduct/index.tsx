import React from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui";
import img from "../../../public/assets/hero-image.jpg";
import img1 from "../../../public/assets/woman-hero.png";
import img2 from "../../../public/assets/one.webp";
import img3 from "../../../public/assets/two.jpg";
import img4 from "../../../public/assets/three.webp";
import img5 from "../../../public/assets/four.jpg";
import { transform } from "next/dist/build/swc/generated-native";

const arr = [img, img1, img2, img3, img4, img5];

function BestProduct() {
  return (
    <div className="w-full">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-[60%] mx-auto "
      >
        <CarouselContent className="-ml-1">
          {Array.from({ length: 7 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="pl-1 lg:basis-1/3 transform-none"
            >
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-2xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default BestProduct;
