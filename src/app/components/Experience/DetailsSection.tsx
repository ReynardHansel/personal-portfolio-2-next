"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Fade from "embla-carousel-fade";
import Autoplay from "embla-carousel-autoplay";
import SkillCard from "../Skillset/SkillCard";

export default function DetailsSection() {
  const [api, setApi] = useState<CarouselApi>();

  return (
    <div className="flex flex-[2] flex-col items-start justify-between gap-[4vh] self-stretch pt-8 md:pt-6">
      {/* Responsibility Text */}
      <p className="max-w-[42rem] text-[1.6rem] font-light leading-snug tracking-tight text-[#5a5f60]">
        Engineering a unified visual language for decentralized infrastructure,
        bridging the gap between complex blockchain protocols and intuitive user
        interfaces.
      </p>

      {/* Tech Pills */}
      {/* <div className="mt-8 flex flex-wrap gap-3">
        {["NEXT.JS 14", "TAILWINDCSS", "FRAMER MOTION", "WEB3.JS"].map((tech) => (
          <span
            key={tech}
            className="rounded-sm bg-[#f2f3f4] px-3 py-1.5 text-[0.7rem] font-medium tracking-widest text-[#666] uppercase"
          >
            {tech}
          </span>
        ))}
      </div> */}

      <div className="flex scale-90 gap-3">
        <SkillCard
          name="NextJS"
          icon={`/svg/logo/nextdotjs.svg`}
          color="#000000"
        />
        <SkillCard name="Figma" icon={`/svg/logo/figma.svg`} color="#F24E1E" />
        <SkillCard
          name="Python"
          icon={`/svg/logo/python.svg`}
          color="#3776AB"
        />
      </div>

      {/* Gradient Box Placeholder */}
      {/* <div className="aspect-[16/10] w-[95%] rounded-md border border-neutral-300 bg-gradient-to-br from-neutral-200 to-neutral-400"></div> */}
      <Carousel
        className="w-[95%]"
        opts={{
          align: "start",
          loop: true,
          containScroll: false,
          duration: 50, // Slower fade
        }}
        plugins={[
          Autoplay({
            delay: 5000,
            stopOnInteraction: false,
          }),
          Fade(),
        ]}
      >
        <CarouselContent>
          <CarouselItem>
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-md border border-neutral-300">
              <Image
                src="/images/exp/bncc/1.jpg"
                alt="BNCC"
                fill
                className="object-cover"
              />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-md border border-neutral-300">
              <Image
                src="/images/exp/bncc/2.jpg"
                alt="BNCC"
                fill
                className="object-cover"
              />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-md border border-neutral-300">
              <Image
                src="/images/exp/bncc/3.jpg"
                alt="BNCC"
                fill
                className="object-cover"
              />
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
}
