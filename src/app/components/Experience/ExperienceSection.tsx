"use client";

import { motion, Variants } from "framer-motion";
import type { ExperienceData } from "@/data/exp";

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

interface ExperienceSectionProps {
  experience: ExperienceData;
}

export default function ExperienceSection({
  experience,
}: ExperienceSectionProps) {
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
