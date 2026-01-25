"use client"

import { Item, ItemContent, ItemMedia, ItemTitle } from "@/components/ui/item";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

const containerVariants: Variants = {
    closed: {
        // scaleX: 1,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    open: {
        // scaleX: "100%",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };
  
  const textVariants: Variants = {
    closed: {
    //   opacity: 0,
    //   width: "auto",
      scaleX: 0,
      marginLeft: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    open: {
    //   opacity: 1,
    //   width: "auto",
      scaleX: 1,
      marginLeft: 12,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

export default function SkillTest() {
  return (
    <motion.div
      variants={containerVariants}
      initial="closed"
      whileHover="open"
      className="group h-full"
    >
      <motion.div
        whileHover={{ backgroundColor: "red" }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden rounded-md"
      >
        <Item
          variant="outline"
          className="cursor-pointer flex-row items-center justify-start gap-0 bg-transparent p-2 transition-all duration-300 group-hover:border-transparent sm:p-3"
        >
          {/* For the last item, we render the text BEFORE the image in the DOM if we want flex-row-reverse behavior,
              OR we keep this order and use absolute positioning. 
              Here we use absolute positioning logic to slide it out to the left.
            */}

          <ItemMedia className="relative flex h-8 w-8 items-center justify-center sm:h-10 sm:w-10 z-20">
            <Image
              src={"/placeholder.svg"}
              alt="Skill"
              fill
              className="object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert"
              unoptimized
            />
          </ItemMedia>

          <motion.div
            variants={textVariants}
            style={{originX: 0}}
            className="overflow-hidden whitespace-nowrap"
          >
            <ItemContent>
              <ItemTitle className="text-sm font-medium text-black transition-colors duration-300 sm:text-base group-hover:text-white">
                Test
              </ItemTitle>
            </ItemContent>
          </motion.div>
        </Item>
      </motion.div>
    </motion.div>
  );
}