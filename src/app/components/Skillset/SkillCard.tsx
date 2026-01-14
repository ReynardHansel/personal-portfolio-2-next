"use client";

import { Item, ItemContent, ItemMedia, ItemTitle } from "@/components/ui/item";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

// Helper for animation states
const textVariants: Variants = {
  closed: {
    width: 0,
    opacity: 0,
    paddingLeft: 0,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  open: {
    width: "auto",
    opacity: 1,
    paddingLeft: 12,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
};

// Props to make it reusable
interface SkillCardProps {
  name: string;
  icon: string;
  color: string;
}

export default function SkillCard({ name, icon, color }: SkillCardProps) {
  return (
    <motion.div
      initial="closed"
      whileHover="open"
      className="group h-full w-fit"
    >
      <motion.div
        whileHover={{ backgroundColor: color || "transparent" }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden rounded-md"
      >
        <Item
          variant="outline"
          className="w-fit cursor-pointer flex-row items-center justify-start gap-0 bg-transparent p-2 transition-all duration-300 group-hover:border-transparent sm:p-3"
        >
          <ItemMedia className="relative flex h-8 w-8 items-center justify-center sm:h-10 sm:w-10">
            <Image
              src={icon}
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

          <motion.div variants={textVariants} className="whitespace-nowrap">
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
