"use client";

import { useRef, useState } from "react";
import Title from "./Reusable/Title";
import {
  AnimatePresence,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { EXPERIENCES } from "@/data/exp";
import ExperienceSection from "./Experience/ExperienceSection";
import DetailsSection from "./Experience/DetailsSection";
import ProgressMeter from "./Experience/ProgressMeter";

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

          <ProgressMeter
            scrollYProgress={scrollYProgress}
            dotPosition={dotPosition}
            activeIndex={activeIndex}
            experiences={experiences}
          />

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
