"use client";
import { HeroHighlight } from "./ui/hero-highlight";
import HeroImage from "./Hero/HeroImage";
import HeroText from "./Hero/HeroText";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <HeroHighlight className="flex max-w-[80vw] flex-col items-center justify-center px-[5vw] sm:px-0">
      <div className="flex">
        {/* TEXT */}
        <HeroText />

        {/* IMAGE */}
        <HeroImage />
      </div>
    </HeroHighlight>
  );
}
