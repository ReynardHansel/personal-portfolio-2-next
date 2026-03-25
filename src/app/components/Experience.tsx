"use client";

// import { useState } from "react";
import Title from "./Reusable/Title";
import SkillCard from "./Skillset/SkillCard";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

import {
  Carousel,
  // CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Fade from "embla-carousel-fade";
import Autoplay from "embla-carousel-autoplay";
import { EXPERIENCES } from "@/data/exp";

const experiences = EXPERIENCES;

const containerVariants: Variants = {
  initial: { opacity: 0 },
  whileInView: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function Experience() {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-[5vh]">
      <Title>Experience</Title>
      <motion.div
        className="space-around mt-[5vh] flex h-full min-h-[80vh] w-full flex-col items-center justify-center gap-[5vw] px-6 py-8 md:flex-row md:items-start md:pl-[5%] md:py-0"
        initial="initial"
        animate="animate"
        whileInView="whileInView"
      >
        {/* Experience */}
        <ExperienceSection />

        {/* Divider Line */}
        <div className="hidden w-0.5 self-stretch bg-black md:block"></div>

        {/* Details */}
        <DetailsSection />
      </motion.div>
    </section>
  );
}

function ExperienceSection() {
  // const containerVariants: Variants = {
  //   initial: { opacity: 0 },
  //   whileInView: {
  //     opacity: 1,
  //     transition: {
  //       staggerChildren: 0.2,
  //     },
  //   },
  // };

  const itemVariants: Variants = {
    initial: { opacity: 0, x: -50 },
    whileInView: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.div
      className="flex flex-1 flex-col items-start justify-center md:py-10"
      variants={containerVariants}
    >
      {/* Duration */}
      <motion.div
        variants={itemVariants}
        className="flex items-center gap-3 text-sm font-semibold uppercase tracking-widest text-neutral-500"
      >
        {/* <span className="h-2.5 w-2.5 rounded-full bg-neutral-600"></span> */}
        {experiences[0].duration}
      </motion.div>

      {/* Company */}
      <motion.p
        variants={itemVariants}
        className="mt-10 text-[2.5rem] font-bold uppercase leading-none tracking-tight text-[#2d3334] sm:text-[3.25rem]"
      >
        {experiences[0].company}
      </motion.p>

      {/* Job Title */}
      {experiences[0].role.map((role) => (
        <motion.p
          variants={itemVariants}
          className="mt-2 text-[1.3rem] font-light text-[#5a5f60]"
        >
          {role}
        </motion.p>
      ))}

      <button onClick={() => console.log(experiences[0])}>Experiences</button>
    </motion.div>
  );
}

function DetailsSection() {
  // const [api, setApi] = useState<CarouselApi>();
  const itemVariants: Variants = {
    initial: { opacity: 0, y: 50 },
    whileInView: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <motion.div
      className="flex flex-[2] flex-col items-start justify-between gap-[4vh] self-stretch pt-8 md:pt-6"
      variants={containerVariants}
    >
      {/* Responsibility Text */}
      <motion.p
        className="max-w-[42rem] text-[1.6rem] font-light leading-snug tracking-tight text-[#5a5f60]"
        variants={itemVariants}
      >
        {experiences[0].responsibility}
      </motion.p>

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

      <motion.div className="flex scale-90 gap-3" variants={itemVariants}>
        {experiences[0].techStack.map((skill) => (
          <SkillCard key={skill} skill={skill} />
        ))}
      </motion.div>

      {/* Gradient Box Placeholder */}
      {/* <div className="aspect-[16/10] w-[95%] rounded-md border border-neutral-300 bg-gradient-to-br from-neutral-200 to-neutral-400"></div> */}
      <motion.div className="w-full" variants={itemVariants}>
        <Carousel
          className="w-full"
          // setApi={setApi}
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
            {experiences[0].images.map((image) => (
              console.log(image),
              <CarouselItem key={image}>
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-md border border-neutral-300">
                  <Image
                    src={image}
                    alt={image}
                    fill
                    className="object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
            {/* <CarouselItem>
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
            </CarouselItem> */}
          </CarouselContent>
        </Carousel>
      </motion.div>
    </motion.div>
  );
}
