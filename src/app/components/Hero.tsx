"use client";
import { HeroHighlight } from "./ui/hero-highlight";
import HeroImage from "./Hero/HeroImage";
import HeroText from "./Hero/HeroText";
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <HeroHighlight className="flex flex-col max-w-[80vw] items-center justify-center">
      <div className="flex">
        {/* TEXT */}
        <HeroText />

        {/* IMAGE */}
        <HeroImage />
      </div>
    </HeroHighlight>
  );
}
