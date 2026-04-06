"use client";

import { motion, useMotionValueEvent, useSpring } from "framer-motion";
import { MotionValue } from "framer-motion";
import { ExperienceData } from "@/data/exp";
import { useEffect, useRef } from "react";

interface ProgressMeterProps {
  scrollYProgress: MotionValue<number>;
  dotPosition: MotionValue<string>;
  activeIndex: number;
  experiences: ExperienceData[];
}

export default function ProgressMeter({
  scrollYProgress,
  dotPosition,
  activeIndex,
  experiences,
}: ProgressMeterProps) {
  const opacity = useSpring(0, { stiffness: 100, damping: 15 });
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    opacity.set(1);

    timeoutRef.current = setTimeout(() => {
      opacity.set(0);
    }, 1000);
  });

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div className="relative hidden w-0.5 overflow-visible rounded-full bg-neutral-200 md:block">
      {/* Black Track */}
      <motion.div
        className="absolute inset-0 origin-top rounded-full bg-black"
        style={{ scaleY: scrollYProgress }}
      />

      {/* Black Dot */}
      <motion.div
        className="absolute left-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-[1.5px] border-white bg-black shadow-sm"
        style={{ top: dotPosition }}
      >
        {/* Experience Info */}
        <motion.div
          className="absolute right-[calc(100%+1em)] top-1/2 -translate-y-1/2 whitespace-nowrap text-right"
          style={{ opacity }}
        >
          <p className="text-sm font-medium">
            {experiences[activeIndex].company}
          </p>
          <p className="text-xs text-neutral-500">
            {experiences[activeIndex].duration}
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
