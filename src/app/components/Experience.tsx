"use client";

import { useRef, useState } from "react";
import Title from "./Reusable/Title";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
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
import SkillContainer from "./Reusable/SkillContainer";
import { IoLockClosedSharp } from "react-icons/io5";

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

  // Output mapped string tracking exact relative distance to center the trailing dot
  const dotPosition = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  // Calculate the active index dynamically as the user scrolls
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Map the 0-1 progress to the exact indices of the array
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
        <div className="flex h-full w-full flex-col items-start justify-center gap-[5vw] px-6 md:flex-row md:items-stretch md:px-[5%]">
          {/* AnimatePresence handles mounting/unmounting components safely so exit variants have time to fire */}
          <AnimatePresence mode="wait">
            <ExperienceSection
              key={`left-${activeIndex}`}
              experience={experiences[activeIndex]}
            />
          </AnimatePresence>

          {/* Scroll Progress Meter */}
          <div className="relative hidden w-0.5 overflow-visible rounded-full bg-neutral-200 md:block">
            <motion.div
              className="absolute inset-0 origin-top rounded-full bg-black"
              style={{ scaleY: scrollYProgress }}
            />
            <motion.div
              className="absolute left-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-[1.5px] border-white bg-black shadow-sm"
              style={{ top: dotPosition }}
            />
          </div>

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
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
    exit: {
      opacity: 0,
      x: -50,
      transition: { duration: 0.4, ease: "easeInOut" },
    },
  };

  return (
    <motion.div
      className="flex flex-1 flex-col items-start justify-center self-start md:py-10"
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* Duration */}
      <motion.div
        variants={itemVariants}
        className="flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-neutral-500 sm:text-sm"
      >
        {experience.duration}
      </motion.div>

      {/* Company */}
      <motion.p
        variants={itemVariants}
        className="mt-6 text-[2rem] font-bold uppercase leading-none tracking-tight text-[#2d3334] sm:mt-10 sm:text-[2.5rem] lg:text-[3.25rem]"
      >
        {experience.company}
      </motion.p>

      {/* Job Title */}
      {experience.role.map((roleStr, idx) => (
        <motion.p
          key={idx}
          variants={itemVariants}
          className="mt-1 text-lg font-light text-[#5a5f60] sm:mt-2 sm:text-[1.3rem]"
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
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
    exit: {
      opacity: 0,
      x: 50,
      transition: { duration: 0.4, ease: "easeInOut" },
    },
  };

  return (
    <motion.div
      className="flex max-h-full w-full flex-[2] flex-col items-start justify-between gap-[4vh] pt-8 md:pt-6"
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* Responsibility Text */}
      <motion.p
        className="max-w-[42rem] text-base font-light leading-relaxed tracking-tight text-[#5a5f60] sm:text-lg md:text-lg lg:leading-snug xl:text-[1.5rem]"
        variants={itemVariants}
      >
        {experience.responsibility}
      </motion.p>

      <SkillContainer
        skills={experience.techStack}
        variants={itemVariants}
        className="max-w-[70%] origin-left scale-50 flex-wrap gap-2 px-0 sm:scale-90 sm:gap-3 sm:px-0 md:scale-100"
      />

      <motion.div
        className="relative flex min-h-[30vh] w-full flex-1 flex-col overflow-hidden rounded-md border border-neutral-300 md:max-w-[95%]"
        variants={itemVariants}
      >
        {experience.images && experience.images.length > 0 ? (
          //* If there's an image
          <Carousel
            className="absolute inset-0 h-full w-full [&>div]:h-full"
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
            <CarouselContent className="h-full">
              {experience.images.map((image) => (
                <CarouselItem key={image} className="h-full">
                  <div className="relative h-full w-full bg-neutral-100">
                    <Image
                      src={image}
                      alt={`${experience.company} image`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        ) : (
          //* If there's no image
          <div className="absolute inset-0 flex h-full w-full flex-col items-center justify-center bg-neutral-100/50 px-4">
            <div className="absolute inset-0 [background-image:linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] dark:[background-image:linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] sm:[background-size:20px_20px] md:[background-size:24px_24px]" />

            {/* Radial Fade effect */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>

            {/* Content */}
            <div className="relative flex h-full w-full items-center justify-center gap-3 text-neutral-400">
              <IoLockClosedSharp className="text-[150%] mb-[.5%]" />
              <p className="text-center text-[150%] font-medium uppercase tracking-[30%]">
                Proprietary Work
              </p>
            </div>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}
