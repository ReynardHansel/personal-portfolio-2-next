import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
// import React from "react";

export default function ButtonGradient({children}: {children: React.ReactNode}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 1.4, ease: "easeIn" }}
      className="group/hero_cta relative z-0 ml-2 mt-4 w-fit sm:mt-2"
    >
      <div className="absolute -z-10 h-full w-full rounded-full bg-gradient-to-r from-[#5060F0] to-[#6E7AEA] opacity-0 transition-all duration-200 group-hover/hero_cta:opacity-100"></div>
      <Button
        variant="none"
        size="lg"
        className="rounded-full border-2 border-porto_purple bg-transparent px-5 py-5 text-xl font-semibold tracking-wide text-porto_purple transition-all duration-200 group-hover/hero_cta:text-white"
      >
        {children}
      </Button>
    </motion.div>
  );
}
