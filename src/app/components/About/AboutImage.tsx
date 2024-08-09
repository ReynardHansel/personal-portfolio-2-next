"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { cn } from "lib/utils";
import profileImage from "public/images/bw-stand.png";
import "./clip_aboutImage.css";

const blobVariants: Variants = {
  hidden: {
    scale: 0,
    backgroundSize: "100%",
    backgroundPositionX: "0%",
    borderRadius: "44% 56% 39% 61% / 66% 31% 69% 34%",
  },
  visible: {
    scale: 1,
    transition: {
      type: "spring",
      bounce: 0.35,
      duration: 1,
      ease: [0.79,0.14,0.15,0.86],
    },
  },
  hover: {
    backgroundSize: "500%",
    backgroundPositionX: "100%",
    borderRadius: [
      "44% 56% 39% 61% / 66% 31% 69% 34%",
      "50% 50% 66% 34% / 26% 46% 54% 74%",
      "69% 31% 77% 23% / 37% 54% 46% 63%",
    ],
    transition: {
      duration: 10,
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};

const imgVariants = {
  hidden: {
    y: "100%",
  },
  visible: {
    y: 20,
    transition: {
      delay: .75,
      duration: 1.5,
      ease: [0.23, 1, 0.32, 1],
    },
  },
  hover: {
    scale: 1.15,
    y: 50,
    transition: {
      duration: 1.5,
      ease: [0.17, 0.84, 0.44, 1],
    },
  },
};

export default function AboutImage({className}: {className?: string}) {
  return (
    <motion.div
      variants={blobVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      className={cn("blob-border grid h-[31vw] w-[31vw] place-items-center overflow-hidden", className)}
    >
      <motion.div id="clipper" variants={imgVariants} className="w-[80%]">
        <Image src={profileImage} className="" alt="" />
      </motion.div>
    </motion.div>
  );
}
