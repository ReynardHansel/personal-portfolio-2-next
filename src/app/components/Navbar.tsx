"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Hamburger from "./Navbar/Hamburger";

const NavbarVariants = {
  hidden: {
    y: -150,
    transition: {
      duration: 0.3,
    },
  },
  visible: {
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
};

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  // useMotionValueEvent(scrollY, "change", (latest) => console.log(latest));

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious()!;
    if (latest > previous && latest > 100) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    // console.log(latest, previous);
  });

  return (
    <motion.nav
      variants={NavbarVariants}
      initial="hidden"
      animate={hidden ? "hidden" : "visible"}
      // animate="visible"
      className="fixed top-0 z-50 flex py-[2vh] w-full items-center justify-between rounded-b-3xl bg-white/60 px-[10vw] shadow-lg shadow-broken_white backdrop-blur-md"
    >
      <h2 className="font-helvetica-neue text-lg font-bold sm:text-2xl">
        Reynard H.
      </h2>
      <Hamburger />
      <div className="justify-between gap-[6vw] hidden font-helvetica-neue sm:flex sm:text-lg">
        <Link href="#about" className="">
          About
        </Link>
        <Link href="#skillset" className="">
          Skill Set
        </Link>
        <Link href="#projects" className="">
          Projects
        </Link>
        <Link href="#contact" className="">
          Contact
        </Link>
      </div>
    </motion.nav>
  );
}
