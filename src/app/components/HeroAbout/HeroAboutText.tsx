"use client";

import { motion } from "framer-motion";
import { FlipWords } from "../ui/flip-words";
import { LinkPreview } from "../ui/link-preview";

// Define the variants
const containerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.3, // Faster stagger for snappier feel
    },
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0.0, 0.2, 1],
    },
  },
};

const textVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0.0, 0.2, 1],
    },
  },
};

const words = [
  {
    text: "Reynard Hansel",
    className: "text-[#816ED8]",
  },
  {
    text: "a Web Developer",
    className: "text-[#6FC0AC]",
  },
  {
    text: "an iOS Developer",
    className: "text-[#F05138]",
  },
  {
    text: "a Software Engineer",
    className: "text-blue-500",
  },
];

export default function HeroAboutText() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center justify-center gap-6 sm:items-start sm:gap-8 w-full max-w-2xl lg:w-[120%]"
    >
      <motion.h1
        variants={childVariants}
        // CHANGED:
        // 1. Started smaller (text-3xl) for mobile.
        // 2. Scales up aggressively (md:text-5xl, lg:text-6xl).
        // 3. Changed leading to 'tight' (better for large headings).
        className="text-center text-3xl font-helvetica-neue font-bold leading-tight tracking-tight text-neutral-800 dark:text-white sm:text-left md:text-5xl"
      >
        Hi, I'm <br className="block sm:hidden" /> {/* Break line for tiny screens only */}
        <FlipWords words={words} />
      </motion.h1>

      <div className="flex flex-col gap-6 font-plus-jakarta-sans text-center sm:text-left text-base leading-relaxed text-neutral-600 dark:text-neutral-300 sm:text-lg lg:text-[1.15rem]">
        <motion.p variants={textVariants}>
          an undergraduate student at BINUS University with a
          passion for Web and Software Development, specializing in Front-End Web
          Development. My goal? Crafting apps with a pleasing experience that make
          users go, "Whoa!"
        </motion.p>
        
        <motion.p variants={textVariants}>
          With 3+ years of experience, I've built sleek, responsive interfaces
          using my favorite tools like{" "}
          <LinkPreview
            url="https://vitejs.dev/"
            className="font-semibold text-porto_purple hover:underline"
          >
            React/Vite
          </LinkPreview>
          ,{" "}
          <LinkPreview
            url="https://nextjs.org/"
            className="font-semibold text-porto_purple hover:underline"
          >
            Next.js
          </LinkPreview>
          ,{" "}
          <LinkPreview
            url="https://tailwindcss.com/"
            className="font-semibold text-porto_purple hover:underline"
          >
            Tailwind CSS
          </LinkPreview>
          ,{" "}
          <LinkPreview
            url="https://www.framer.com/motion/"
            className="font-semibold text-porto_purple hover:underline"
          >
            Framer Motion
          </LinkPreview>
          ,{" "}
          <LinkPreview
            url="https://create.t3.gg/"
            className="font-semibold text-porto_purple hover:underline"
          >
            T3 Stack
          </LinkPreview>
          , etc.
        </motion.p>
        
        <motion.p variants={textVariants}>
          When I'm not coding, I'm usually working on team projects, YouTube-ing
          new techs and tech updates, or looking for new tools to upgrade my
          output. Scroll down a little bit more for my GitHub and projects :D!
        </motion.p>
      </div>
    </motion.div>
  );
}