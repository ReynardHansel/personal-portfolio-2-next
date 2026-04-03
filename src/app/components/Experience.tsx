"use client";

import { useRef, useState } from "react";
import Title from "./Reusable/Title";
import {
  motion,
  AnimatePresence,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { EXPERIENCES } from "@/data/exp";
import ExperienceSection from "./Experience/ExperienceSection";
import DetailsSection from "./Experience/DetailsSection";

const experiences = EXPERIENCES;

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

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const newIndex = Math.round(latest * (experiences.length - 1));
    if (newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  });

  return (
    <section
      ref={containerRef}
      className="relative flex w-full flex-col items-center"
      style={{ height: `${experiences.length * 100}vh` }} //? Acts ss the landslide of the whole scrollytelling
    >
      <Title>Experience</Title>
      <div className="sticky top-0 flex h-screen max-h-[90vh] w-full flex-col items-center justify-center gap-[5vh] overflow-hidden border-none bg-white py-12">
        <div className="flex h-full w-full flex-col items-start justify-center gap-[5vw] px-6 md:flex-row md:items-stretch md:px-[5%]">
          {/* Experience Section */}
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

          {/* Details Section */}
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
