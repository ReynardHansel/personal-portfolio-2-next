"use client";

import { useRef, useState } from "react";
import Title from "./Reusable/Title";
import SkillCard from "./Skillset/SkillCard";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  Variants,
} from "framer-motion";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Fade from "embla-carousel-fade";
import Autoplay from "embla-carousel-autoplay";
import { EXPERIENCES } from "@/data/exp";
import type { ExperienceData } from "@/data/exp";

const experiences = EXPERIENCES;

const containerVariants: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
};

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Track the scroll progress of the tall outer container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Calculate the active index dynamically as the user scrolls
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Map the 0-1 progress to the exact indices of our array
    const newIndex = Math.round(latest * (experiences.length - 1));
    if (newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  });

  return (
    <section
      ref={containerRef}
      className="relative flex w-full flex-col items-center"
      // Height expands based on number of experiences so there's plenty of scroll runway
      style={{ height: `${experiences.length * 100}vh` }}
    >
      <Title>Experience</Title>
      {/* Sticky container stays snapped to the screen! */}
      <div className="sticky top-0 flex h-screen max-h-[90vh] w-full flex-col items-center justify-center gap-[5vh] overflow-hidden border-none bg-white py-12">
        <div className="flex h-full w-full flex-col items-start justify-center gap-[5vw] px-6 md:flex-row md:px-[5%]">
          {/* AnimatePresence handles mounting/unmounting components safely so exit variants have time to fire */}
          <AnimatePresence mode="wait">
            <ExperienceSection
              key={`left-${activeIndex}`}
              experience={experiences[activeIndex]}
            />
          </AnimatePresence>

          {/* Divider Line */}
          <div className="hidden w-0.5 self-stretch bg-black md:block"></div>

          <AnimatePresence mode="wait">
            <DetailsSection
              key={`right-${activeIndex}`}
              experience={experiences[activeIndex]}
            />
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function ExperienceSection({ experience }: { experience: ExperienceData }) {
  const itemVariants: Variants = {
    initial: { opacity: 0, x: -50 },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
    // The key logic: Exit back to the left
    exit: {
      opacity: 0,
      x: -50,
      transition: { duration: 0.4, ease: "easeInOut" },
    },
  };

  return (
    <motion.div
      className="flex flex-1 flex-col items-start justify-center md:py-10"
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* Duration */}
      <motion.div
        variants={itemVariants}
        className="flex items-center gap-3 text-sm font-semibold uppercase tracking-widest text-neutral-500"
      >
        {experience.duration}
      </motion.div>

      {/* Company */}
      <motion.p
        variants={itemVariants}
        className="mt-10 text-[2.5rem] font-bold uppercase leading-none tracking-tight text-[#2d3334] sm:text-[3.25rem]"
      >
        {experience.company}
      </motion.p>

      {/* Job Title */}
      {experience.role.map((roleStr, idx) => (
        <motion.p
          key={idx}
          variants={itemVariants}
          className="mt-2 text-[1.3rem] font-light text-[#5a5f60]"
        >
          {roleStr}
        </motion.p>
      ))}
    </motion.div>
  );
}

function DetailsSection({ experience }: { experience: ExperienceData }) {
  const itemVariants: Variants = {
    initial: { opacity: 0, x: 50 },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
    // The key logic: Exit back to the right
    exit: {
      opacity: 0,
      x: 50,
      transition: { duration: 0.4, ease: "easeInOut" },
    },
  };

  return (
    <motion.div
      className="flex w-full flex-[2] flex-col items-start justify-between gap-[4vh] pt-8 md:pt-6"
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* Responsibility Text */}
      <motion.p
        className="max-w-[42rem] text-[1.6rem] font-light leading-snug tracking-tight text-[#5a5f60]"
        variants={itemVariants}
      >
        {experience.responsibility}
      </motion.p>

      <motion.div className="flex scale-90 gap-3" variants={itemVariants}>
        {experience.techStack.map((skill) => (
          <SkillCard key={skill} skill={skill} />
        ))}
      </motion.div>

      <motion.div className="w-full" variants={itemVariants}>
        <Carousel
          className="w-full"
          opts={{
            align: "start",
            loop: true,
            containScroll: false,
            duration: 50,
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
            {experience.images.map((image) => (
              <CarouselItem key={image}>
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-md border border-neutral-300">
                  <Image
                    src={image}
                    alt={`${experience.company} image`}
                    fill
                    className="relative object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </motion.div>
    </motion.div>
  );
}
