"use client";

import { MaterialSymbolsMail } from "public/svg/Mail";
import { RiWhatsappFill } from "public/svg/Whatsapp";
import { MdiLinkedin } from "public/svg/Linkedin";
import { RiInstagramFill } from "public/svg/Instagram";
import { MdiGithub } from "public/svg/GitHub";
import Link from "next/link";
import { motion } from "framer-motion";

const containerVariant = {
  animate: {
    transition: {
      staggerChildren: 0.5,
      delayChildren: 1,
    },
  },
};

const childVariant = {
  hidden: {
    x: 40,
    opacity: 0,
  },

  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 3,
      type: "spring",
      damping: 10,
      stiffness: 100,
    }
  },
};

export default function HeroAboutContacts() {
  return (
    <motion.div
      variants={containerVariant}
      initial="hidden"
      animate="animate"
      className="mt-9 flex items-center gap-7 sm:mt-10 sm:gap-10"
    >
      <motion.div variants={childVariant}>
        <Link
          href="mailto:reynardhansel@gmail.com"
          className="transition-all duration-300 hover:scale-110"
        >
          <MaterialSymbolsMail className="w-8 text-neutral-800" />
        </Link>
      </motion.div>
      <motion.div variants={childVariant}>
        <Link
          href="https://wa.me/6281320036888"
          target="_blank"
          className="transition-all duration-300 hover:scale-110"
        >
          <RiWhatsappFill className="w-8 text-neutral-800" />
        </Link>
      </motion.div>
      <motion.div variants={childVariant}>
        <Link
          href="https://www.linkedin.com/in/reynard-hansel/"
          target="_blank"
          className="transition-all duration-300 hover:scale-110"
        >
          <MdiLinkedin className="w-8 text-neutral-800" />
        </Link>
      </motion.div>
      <motion.div variants={childVariant}>
        <Link
          href="https://www.instagram.com/reynardhansel/"
          target="_blank"
          className="transition-all duration-300 hover:scale-110"
        >
          <RiInstagramFill className="w-8 text-neutral-800" />
        </Link>
      </motion.div>
      <motion.div variants={childVariant}>
        <Link
          href="https://github.com/ReynardHansel"
          target="_blank"
          className="transition-all duration-300 hover:scale-110"
        >
          <MdiGithub className="w-8 text-neutral-800" />
        </Link>
      </motion.div>
    </motion.div>
  );
}
