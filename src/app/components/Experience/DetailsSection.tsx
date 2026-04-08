"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import type { ExperienceData } from "@/data/exp";
import SkillContainer from "../Reusable/SkillContainer";
import { IoLockClosedSharp } from "react-icons/io5";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Fade from "embla-carousel-fade";
import Autoplay from "embla-carousel-autoplay";

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

interface DetailsSectionProps {
  experience: ExperienceData;
}

export default function DetailsSection({ experience }: DetailsSectionProps) {
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

      {/* Tech Stacks */}
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
            className="h-full w-full [&>div]:h-full"
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
          <div className="flex h-full w-full flex-col items-center justify-center bg-neutral-100/50 px-4">
            <div className="absolute inset-0 [background-image:linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] dark:[background-image:linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] sm:[background-size:20px_20px] md:[background-size:24px_24px]" />

            {/* Radial Fade effect */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>

            {/* Content */}
            <div className="relative flex h-full w-full items-center justify-center gap-3 text-neutral-400">
              <IoLockClosedSharp className="mb-[.5%] text-[150%]" />
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
