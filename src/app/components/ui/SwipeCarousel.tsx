"use client";

import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import img from "public/images/bw-cool.png";

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

interface SwipeCarouselProps {
  imgs: string[];
}

// const imgs = [
//   "/images/bw-cool.png",
//   "/images/projects/bncc/2.png",
//   "/images/projects/bncc/3.png",
// ];

export const SwipeCarousel = ({ imgs }: SwipeCarouselProps) => {
  const [imgIndex, setImgIndex] = useState(0);

  const dragX = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();

      if (x === 0) {
        setImgIndex((pv) => {
          if (pv === imgs.length - 1) {
            return 0;
          }
          return pv + 1;
        });
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, [dragX, imgs.length]);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && imgIndex < imgs.length - 1) {
      setImgIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1);
    }
  };

  return (
    <div className="relative h-full w-full overflow-hidden bg-transparent">
      <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        style={{
          x: dragX,
        }}
        animate={{
          translateX: `-${imgIndex * 100}%`,
        }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="flex cursor-grab items-center active:cursor-grabbing"
      >
        <Images imgIndex={imgIndex} imgs={imgs} />
      </motion.div>

      <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} imgs={imgs} />
      {/* <GradientEdges /> */}
    </div>
  );
};

const Images = ({ imgIndex, imgs }: { imgIndex: number; imgs: string[] }) => {
  return (
    <>
      {imgs.map((imgSrc, idx) => {
        return (
          <motion.div
            key={idx}
            style={{
              backgroundImage: `url(${imgSrc})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            animate={{
              scale: imgIndex === idx ? 0.95 : 0.85,
            }}
            transition={SPRING_OPTIONS}
            className="aspect-video w-full shrink-0 rounded-2xl object-cover shadow-md"
          />
        );
      })}
    </>
  );
};

const Dots = ({
  imgIndex,
  setImgIndex,
  imgs,
}: {
  imgIndex: number;
  setImgIndex: Dispatch<SetStateAction<number>>;
  imgs: string[];
}) => {
  return (
    <div className="mt-2 flex w-full justify-center gap-2">
      {imgs.map((_, idx) => {
        return (
          <button
            key={idx}
            onClick={() => setImgIndex(idx)}
            className={`h-2 w-2 rounded-full transition-colors md:h-3 md:w-3 border border-neutral-600 ${
              idx === imgIndex ? "bg-neutral-600" : "bg-neutral-"
            }`}
          />
        );
      })}
    </div>
  );
};

const GradientEdges = () => {
  return (
    <>
      <div className="pointer-events-none absolute bottom-0 left-0 top-0 hidden w-[10vw] max-w-[100px] bg-gradient-to-r from-neutral-950/50 to-neutral-950/0 md:block" />
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 hidden w-[10vw] max-w-[100px] bg-gradient-to-l from-neutral-950/50 to-neutral-950/0 md:block" />
    </>
  );
};
