"use client";
import { motion } from "framer-motion";
import "./clip_heroImage.css";

const pathVariants = {
  start: {
    pathLength: 0,
  },
  end: {
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

const fillVariants = {
  start: {
    scale: 0,
  },
  end: {
    fill: "url(#paint0_linear_124_247)",
    scale: 1,
    transition: {
      type: "spring",
      bounce: .35,
      duration: 1,
      ease: "easeInOut",
      delay: 2,
    },
  },
};

export default function BlobBackground() {
  return (
    <motion.svg
      width="100%"
      height="100%"
      viewBox="0 0 536 561"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute left-0 top-0 h-full w-full overflow-visible"
      initial="start"
      animate="end"
    >
      <motion.path
        d="M520.923 362.896C431.244 575.727 -58.0639 650.743 6.49671 414.227C59.2165 221.09 -43.018 92.7085 77.4966 13.7272C165.997 -44.2726 247.191 110.163 378.802 175.244C408.996 196.227 587.115 205.805 520.923 362.896Z"
        fill="none"
        stroke="url(#paint0_linear_124_247)"
        variants={pathVariants}
      />
      <motion.path
        d="M520.923 362.896C431.244 575.727 -58.0639 650.743 6.49671 414.227C59.2165 221.09 -43.018 92.7085 77.4966 13.7272C165.997 -44.2726 247.191 110.163 378.802 175.244C408.996 196.227 587.115 205.805 520.923 362.896Z"
        // fill="url(#paint0_linear_124_247)"
        variants={fillVariants}
      />
      <defs>
        <linearGradient
          id="paint0_linear_124_247"
          x1="-16.185"
          y1="203.751"
          x2="478.961"
          y2="448.601"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#816ED8" />
          <stop offset="0.185" stop-color="#7568DD" />
          <stop offset="0.385" stop-color="#565ED3" />
          <stop offset="0.615" stop-color="#559CDF" />
          <stop offset="0.81" stop-color="#6FC0AC" />
          <stop offset="0.995" stop-color="#70CEA8" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
}
