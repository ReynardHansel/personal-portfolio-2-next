"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string | React.ReactNode;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref,
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0,
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "var(--slate-900)",
    "var(--black)",
    "var(--neutral-900)",
  ];
  const linearGradients = [
    "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
    "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
    "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0],
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <div className="flex flex-col items-center">
      {/* CONTENT */}
      <div
        style={{ background: backgroundGradient }}
        className={cn(
          "sticky top-10 h-[25vh] w-[85%] sm:w-[80%] overflow-hidden rounded-md bg-white lg:hidden",
          contentClassName,
        )}
      >
        {content[activeCard].content ?? null}
      </div>

      <motion.div
        // animate={{
        //   backgroundColor: backgroundColors[activeCard % backgroundColors.length],
        // }}
        className="relative my-[3.5vh] md:my-[6vh] flex h-[80vh] w-screen items-start justify-between space-x-10 overflow-y-auto rounded-md px-[5vw] sm:px-[8vw] md:px-[10vw] [&::-webkit-scrollbar]:hidden"
        ref={ref}
      >
        <div className="div relative flex items-start px-4">
          <div className="max-w-2xl">
            {content.map((item, index) => (
              <div
                key={item.title + index}
                className="mb-14 mt-1 border-red-500 lg:mb-20"
              >
                <motion.h2
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  className="text-2xl font-bold tracking-wider text-black md:text-3xl"
                >
                  {item.title}
                </motion.h2>
                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  className="mt-7 lg:mt-10 flex flex-col gap-9 text-base tracking-wide text-gray-700 lg:max-w-md xl:max-w-xl xl:text-lg"
                >
                  {item.description}
                </motion.div>
              </div>
            ))}
            <div className="h-20 lg:h-52" />
          </div>
        </div>

        {/* CONTENT */}
        <div
          style={{ background: backgroundGradient }}
          className={cn(
            "sticky top-0 hidden h-[45vh] w-[38vw] overflow-hidden rounded-md bg-white lg:block",
            contentClassName,
          )}
        >
          {content[activeCard].content ?? null}
        </div>
      </motion.div>
    </div>
  );
};
