"use client";
import { HeroHighlight } from "./ui/hero-highlight";
import HeroImage from "./Hero/HeroImage";
import HeroText from "./Hero/HeroText";

export default function Hero() {
  return (
    <HeroHighlight className="flex max-w-[80vw] items-center justify-center">
      {/* TEXT */}
      <HeroText />

      {/* IMAGE */}
      <HeroImage />
    </HeroHighlight>
  );
}
