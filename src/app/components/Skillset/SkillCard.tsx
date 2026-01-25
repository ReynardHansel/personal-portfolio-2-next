"use client";

import { Item, ItemContent, ItemMedia, ItemTitle } from "@/components/ui/item";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

// 1. CONTAINER VARIANTS
const cardVariants: Variants = {
  closed: {
    backgroundColor: "rgba(0,0,0,0)",
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  open: (color) => ({
    backgroundColor: color || "rgba(0,0,0,0)",
    transition: { duration: 0.3, ease: "easeInOut" },
  }),
};

// 2. TEXT VARIANTS
const textVariants: Variants = {
  closed: {
    width: 0,
    opacity: 0,
    marginLeft: 0,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  open: {
    width: "auto",
    opacity: 1,
    marginLeft: 12,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

interface SkillCardProps {
  name: string;
  icon: string;
  color: string;
  isLastInRow?: boolean;
}

export default function SkillCard({
  name,
  icon,
  color,
  isLastInRow = false,
}: SkillCardProps) {
  return (
    <motion.div
      layout={!isLastInRow}
      className="relative z-10 h-full min-h-8 w-fit min-w-8 rounded-md sm:min-h-10 sm:min-w-10"
    >
      <motion.div
        variants={cardVariants}
        custom={color}
        initial="closed"
        whileHover="open"
        whileFocus="open"
        layout
        // FIX 1: Added 'w-max' (width: max-content).
        // This stops the absolute container from squashing/wrapping its content.
        className={`
           group flex items-center rounded-md w-max
           ${isLastInRow 
             ? "absolute left-0 h-fit" 
             : "relative h-full z-10"
           }
        `}
      >
        <Item
          variant="outline"
          className="flex flex-row flex-nowrap items-center gap-0 p-2 sm:p-3"
        >
          <ItemMedia className="relative flex h-8 w-8 shrink-0 items-center justify-center sm:h-10 sm:w-10">
            <Image
              src={icon || "/placeholder.svg"}
              alt={name}
              fill
              className={`object-contain transition-all duration-300 ${
                name === "JavaScript" || name === "Motion"
                  ? "group-hover:brightness-0"
                  : "group-hover:brightness-0 group-hover:invert"
              }`}
              unoptimized
            />
          </ItemMedia>

          <motion.div
            variants={textVariants}
            className="overflow-hidden whitespace-nowrap"
          >
            <ItemContent className="p-0">
              <ItemTitle
                className={`text-sm font-medium text-black transition-colors duration-300 sm:text-base ${
                  name === "JavaScript" || name === "Motion"
                    ? "group-hover:text-black"
                    : "group-hover:text-white"
                }`}
              >
                {name}
              </ItemTitle>
            </ItemContent>
          </motion.div>
        </Item>
      </motion.div>
    </motion.div>
  );
}