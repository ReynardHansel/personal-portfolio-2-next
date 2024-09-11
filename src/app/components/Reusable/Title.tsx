"use client"; //? For some reason I don't understand why this one needs to be a client component
import { motion } from "framer-motion";
import { cn } from "lib/utils";
import React from "react";
// import { ReactNode } from "react";

const containerVariants = {
  hidden: {
    x: "50%",
  },
  visible: {
    x: 0,
    transition: {
      duration: 1.3,
      ease: "easeOut",
    },
  },
};

const textVariants = {
  hidden: {
    x: "-120%",
  },
  visible: {
    x: 0,
    transition: {
      duration: 1,
      ease: [0.17, 0.84, 0.44, 1],
    },
  },
};

type TitleProps = {
  children: React.ReactNode;
  className?: string;
  blockClassName?: string;
  textClassName?: string;
}

export default function Title({ children, className, blockClassName, textClassName }: TitleProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={cn("flex w-fit overflow-hidden", className)}
    >
      <div className={cn("mr-[.85rem] w-[.35rem] rounded-full bg-porto_purple sm:w-2", blockClassName)}></div>
      <motion.div
        variants={textVariants}
        className={cn("font-helvetica-neue text-3xl font-bold text-porto_purple lg:text-4xl", textClassName)}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
