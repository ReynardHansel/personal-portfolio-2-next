"use client";

import { Item, ItemContent, ItemMedia, ItemTitle } from "@/components/ui/item";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  closed: {
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  open: {
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

const textVariants: Variants = {
  closed: {
    opacity: 0,
    width: 0,
    marginLeft: 0,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  open: {
    opacity: 1,
    width: "auto",
    marginLeft: 12,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

const textVariantsAbsolute: Variants = {
  closed: {
    opacity: 0,
    width: 0,
    left: "100%",
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  open: {
    opacity: 1,
    width: "auto",
    left: "100%",
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

// Props to make it reusable
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
      variants={containerVariants}
      initial="closed"
      whileHover="open"
      className={`group h-full ${isLastInRow ? "relative" : ""}`}
    >
      <motion.div
        whileHover={{ backgroundColor: color || "transparent" }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden rounded-md"
      >
        <Item
          variant="outline"
          className={`cursor-pointer flex-row items-center justify-start gap-0 bg-transparent p-2 transition-all duration-300 group-hover:border-transparent sm:p-3 ${
            isLastInRow ? "relative" : ""
          }`}
        >
          <ItemMedia className="relative flex h-8 w-8 items-center justify-center sm:h-10 sm:w-10">
            <Image
              src={icon || "/placeholder.svg"} //TODO: add a placeholder icon in src
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
            variants={isLastInRow ? textVariantsAbsolute : textVariants}
            className={`overflow-hidden whitespace-nowrap ${
              isLastInRow ? "absolute top-0 z-10 pl-3" : ""
            }`}
          >
            <ItemContent>
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
