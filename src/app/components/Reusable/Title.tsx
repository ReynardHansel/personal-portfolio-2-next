"use client"; //? For some reason I don't understand why this one needs to be a client component
import { motion } from "framer-motion";
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

// interface TitleProps {
//   children: string;
// }

export default function Title({ children }: { children: string }) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex overflow-hidden"
    >
      <div className="mr-[.85rem] w-[.35rem] rounded-full bg-porto_purple sm:w-2"></div>
      <motion.p
        variants={textVariants}
        className="font-plus-jakarta-sans text-4xl font-bold text-porto_purple lg:text-5xl"
      >
        {children}
      </motion.p>
    </motion.div>
  );
}