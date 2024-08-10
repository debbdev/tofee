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
    <section className="">
      <div className="text-dark100_light900 background-light850_dark100">
        <h1 className="ms-72 text-2xl">Trusted partners</h1>
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
          className="me-72 ms-72 items-center justify-center"
        >
          <CarouselContent className="">
            {logo.map((item) => (
              <CarouselItem
                key={item.label}
                className="md:basis-1/2 lg:basis-1/5"
              >
                <Image src={item.imgURL} width={100} height={50} alt="logos" />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      <div className="text-dark100_light900 background-light850_dark100 pb-5 text-center">
        <p className="text-xs">© 2024 FeeTrx Energy Market.</p>
      </div>
    </section>
  );
}

export default Footer;
