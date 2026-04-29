"use client";

import { motion } from "framer-motion";
import React from "react";

const containerVariants = {
  hidden: { x: "50%" },
  visible: {
    x: 0,
    transition: { duration: 1.3, ease: "easeOut" },
  },
};

const textVariants = {
  hidden: { x: "-120%" },
  visible: {
    x: 0,
    transition: { duration: 1, ease: [0.17, 0.84, 0.44, 1] },
  },
};

export default function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="mb-6 flex w-fit items-center gap-3 overflow-hidden"
    >
      <div className="h-8 w-2 rounded-full bg-porto_purple" />
      <motion.h2
        variants={textVariants}
        className="text-xs font-bold uppercase tracking-widest text-neutral-500"
      >
        {children}
      </motion.h2>
    </motion.div>
  );
}
