"use client";

import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

const heroImages = [
  {
    imgLink: "/assets/hero-1.svg",
    alt: "i1",
  },
  {
    imgLink: "/assets/hero-2.svg",
    alt: "i1",
  },
  {
    imgLink: "/assets/hero-3.svg",
    alt: "i1",
  },
  {
    imgLink: "/assets/hero-4.svg",
    alt: "i1",
  },
  {
    imgLink: "/assets/hero-5.svg",
    alt: "i1",
  },
];

const HeroCarousel = () => {
  return (
    <Carousel
      showThumbs={false}
      autoPlay
      infiniteLoop
      interval={20000}
      showArrows={false}
      showStatus={false}
    >
      {heroImages.map((image) => (
        <Image
          key={image.imgLink}
          src={image.imgLink}
          alt={image.alt}
          width={484}
          height={484}
          className="object-contain"
        />
      ))}
    </Carousel>
  );
};

export default HeroCarousel;
