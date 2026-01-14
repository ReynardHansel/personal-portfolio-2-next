"use client";

import { Item, ItemContent, ItemMedia, ItemTitle } from "@/components/ui/item";
// import iconEx from "/public/svg/logo/arduino.svg";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

// Helper for animation states
const textVariants: Variants = {
  closed: {
    // x: -20,
    width: 0,
    opacity: 0,
    paddingLeft: 0,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  open: {
    // x: 0,
    width: "auto",
    opacity: 1,
    paddingLeft: 12, // Add spacing (pl-3) when open
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

// Props to make it reusable
interface SkillCardProps {
  name: string;
  icon: string;
}

export default function SkillCard({ name, icon }: SkillCardProps) {
  return (
    <motion.div
      initial="closed"
      // whileFocus="open"
      whileHover="open"
      className="h-full w-fit"
    >
      <Item
        variant="outline"
        className="w-fit cursor-pointer flex-row items-center justify-start gap-0 p-2 transition-colors hover:border-blue-500/50 sm:p-3"
      >
        <ItemMedia className="relative flex h-8 w-8 items-center justify-center sm:h-10 sm:w-10">
          <Image
            src={icon}
            alt={name}
            fill
            className="object-contain"
            unoptimized
          />
        </ItemMedia>

        <motion.div variants={textVariants} className="whitespace-nowrap">
          <ItemContent>
            <ItemTitle className="text-sm font-medium text-black sm:text-base">
              {name}
            </ItemTitle>
          </ItemContent>
        </motion.div>
      </Item>
    </motion.div>
  );
}
