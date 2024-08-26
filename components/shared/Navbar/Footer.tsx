import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { logo } from "@/constants";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

function Footer() {
  return (
    <section className="text-dark100_light900 background-light900_dark200 w-full sm:w-full">
      <div className="container mx-auto max-w-screen-sm max-sm:w-96 sm:w-full sm:max-w-screen-sm lg:w-[84rem] lg:max-w-screen-xl">
        <div className=" pl-2 text-left">
          <h1 className="pt-4 text-xl font-bold">Trusted partners</h1>
        </div>
        <div className="py-20">
          <Carousel
            orientation="horizontal"
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 2000,
                stopOnInteraction: true,
              }),
            ]}
            className="mx-auto max-w-[84rem] px-6 md:px-12 lg:px-0"
          >
            <CarouselContent className="flex gap-4 lg:gap-5">
              {logo.map((item) => (
                <CarouselItem
                  key={item.label}
                  className="shrink-0 basis-1/3 md:basis-1/4 lg:basis-1/5"
                >
                  <Image
                    src={item.imgURL}
                    width={100}
                    height={50}
                    alt="logos"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
        <div className="text-dark100_light900 background-light900_dark200 text-center">
          <p className="pb-5 text-xs">© 2024 FeeTrx Energy Market.</p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
