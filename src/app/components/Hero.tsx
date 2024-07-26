"use client";
import { motion } from "framer-motion";
import { HeroHighlight } from "./ui/hero-highlight";
import Image from "next/image";
import profileImage from "public/images/bw-cool.png";
import { FlipWords } from "./ui/flip-words";

export default function Hero() {
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
      text: "also a Software Engineer",
      className: "text-blue-500",
    },
  ];

  return (
    // <div className="w-screen">
    <HeroHighlight className="flex justify-center items-center p-[10vw]">
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-3xl lg:text-4xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
      >
        Hi, I'm <FlipWords words={words} />
      </motion.h1>
      {/* <h1 className="bg-gradient-text text-transparent bg-clip-text">
        This is a test
      </h1> */}
      {/* <div className="blob relative max-w-[40%] max-h-[40%] overflow-hidden  border-red-500">
        <div className="magicpattern"></div>
        <Image src={profileImage} alt="Profile Image"></Image>
      </div> */}
    </HeroHighlight>
    // </div>
  );
}
