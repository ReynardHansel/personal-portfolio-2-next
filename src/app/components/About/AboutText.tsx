"use client";

import { motion } from "framer-motion";
// import { FaGithub } from "react-icons/fa";
import Title from "../Reusable/Title";
import { LinkPreview } from "../ui/link-preview";
import ButtonGradient from "../Reusable/ButtonGradient";
import AboutImage from "./AboutImage";
import Link from "next/link";
// import { Button } from "@/components/ui/button";

const containerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.7,
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

export default function AboutText() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      animate="animate"
      viewport={{ margin: "-150px", once: true }}
      className="relative flex flex-col gap-6 tracking-wide md:w-[55%] lg:text-[1.08rem]"
    >
      {/* MOBILE div */}
      <div className="flex justify-between md:hidden">
        <Title>
          <p>About Me</p>
        </Title>
      </div>

      <Title className="hidden md:flex">About Me</Title>
      <motion.p variants={textVariants}>
        Hi! I'm Reynard, an undergraduate student at BINUS University with a
        passion for Web and Software Development, specializing in Front-End Web
        Development. My goal? Crafting apps with a pleasing experience that make
        users go, "Whoa!"
      </motion.p>
      <motion.p variants={textVariants}>
        With 3+ years of experience, I've built sleek, responsive interfaces
        using my favorite tools like{" "}
        <LinkPreview
          url="https://vitejs.dev/"
          className="font-bold text-porto_purple"
        >
          React/Vite
        </LinkPreview>
        ,{" "}
        <LinkPreview
          url="https://nextjs.org/"
          className="font-bold text-porto_purple"
        >
          Next.js
        </LinkPreview>
        ,{" "}
        <LinkPreview
          url="https://tailwindcss.com/"
          className="font-bold text-porto_purple"
        >
          Tailwind CSS
        </LinkPreview>
        ,{" "}
        <LinkPreview
          url="https://www.framer.com/motion/"
          className="font-bold text-porto_purple"
        >
          Framer Motion
        </LinkPreview>
        ,{" "}
        <LinkPreview
          url="https://create.t3.gg/"
          className="font-bold text-porto_purple"
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

      {/* <div>
        <p>
          Here's my github if you'd like to check out some of my projects:{" "}
          <LinkPreview
            url="https://github.com/ReynardHansel"
            className="italic hover:underline"
          >
            <Button variant="default" className="inline-flex gap-2">
              <FaGithub className="inline scale-125" /> Reynard Hansel
            </Button>
          </LinkPreview>
        </p>
        <Button variant="ghost" className="flex gap-2 -ml-2">
          <FaGithub className="inline scale-125" /> Reynard Hansel
        </Button>
      </div> */}

      <ButtonGradient>
        <Link
          href="https://drive.google.com/file/d/17F4z6iU6DxgepIFvBBKap3gPNNtqIEUK/view?usp=sharing"
          target="_blank"
        >
          CV Download
        </Link>
      </ButtonGradient>
    </motion.div>
  );
}
