import { motion } from "framer-motion";
import { FlipWords } from "../ui/flip-words";
import { Button } from "@/components/ui/button";
import ButtonGradient from "../Reusable/ButtonGradient";
import Link from "next/link";

// Define the variants
const containerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.7,
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
    y: [20, -5, 0],
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
    text: "a Software Engineer",
    className: "text-blue-500",
  },
];

export default function HeroText() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center justify-center gap-6 sm:items-start sm:gap-12 lg:w-[120%]"
    >
      <motion.h1
        variants={childVariants}
        className="text-center text-4xl font-helvetica-neue font-semibold leading-relaxed text-neutral-700 dark:text-white sm:text-left lg:text-5xl"
      >
        Hi, I'm <FlipWords words={words} />
      </motion.h1>

      <motion.p
        variants={childVariants}
        className="text-center font-plus-jakarta-sans text-lg tracking-wider text-neutral-600 dark:text-neutral-400 sm:text-left md:text-lg lg:text-xl"
      >
        "A software engineer specializing on Front-End Web Development, who
        loves to bridge the gap between beautiful design and seamless
        functionality to create exceptional user experiences"
      </motion.p>

      <ButtonGradient className="ml-2">
        <Link href="#contact">Contact Me</Link>
      </ButtonGradient>

      {/* <motion.button
          className="text-porto_purple border-porto_purple ml-2 rounded-full border-2 bg-transparent bg-gradient-to-r px-5 py-3 font-semibold tracking-wide transition-all duration-200 hover:from-[#5060F0] hover:to-[#6E7AEA] hover:text-white md:text-xl"
        >
          Contact Me
        </motion.button> */}
    </motion.div>
  );
}
