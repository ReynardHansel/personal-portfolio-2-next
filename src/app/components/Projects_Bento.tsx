"use client";

import { useState } from "react";
import Masonry from "react-masonry-css";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Title from "@/app/components/Reusable/Title";
import { projectsBento } from "@/data/projects_bento";
import Link from "next/link";

// ============================================================
// BENTO LAYOUT
// ============================================================
const LAYOUT_MAP = {
  large: "md:col-span-2 md:row-span-2",
  medium: "md:col-span-2 md:row-span-1",
  small: "md:col-span-1 md:row-span-1",
};

// ============================================================
// MASONRY LAYOUT (preserved for future use)
// ============================================================
const HEIGHT_MAP = {
  short: "aspect-[4/3]",
  medium: "aspect-[3/4]",
  tall: "aspect-[2/3]",
};

const breakpointColumns = {
  default: 4,
  1280: 3,
  1024: 3,
  768: 2,
  640: 1,
};

// ============================================================
// SHARED CARD COMPONENT
// ============================================================
function ProjectCard({
  project,
  layoutClassName,
}: {
  project: (typeof projectsBento)[number];
  layoutClassName?: string;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={cn(
        "group relative w-full overflow-hidden rounded-xl",
        layoutClassName
      )}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/project/${project.id}`} className="relative flex h-full w-full">
        {/* Image */}
        <motion.div
          className="absolute inset-0"
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={project.images?.[0] || "/placeholder.svg"}
            alt={project.title}
            fill
            className="rounded-xl object-cover"
          />
        </motion.div>

        {/* Gradient overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Title text */}
        <motion.h3
          className="absolute bottom-0 left-0 right-0 p-4 font-semibold text-white"
          animate={{ y: isHovered ? -24 : 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {project.title}
        </motion.h3>

        {/* Description text */}
        <motion.p
          className="absolute bottom-0 left-0 right-0 p-4 text-sm text-white/80"
          initial={{ y: 20, opacity: 0 }}
          animate={{
            y: isHovered ? 0 : 20,
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {project.description}
        </motion.p>
      </Link>
    </motion.div>
  );
}

// ============================================================
// BENTO LAYOUT EXPORT (active)
// ============================================================
export function BentoGrid() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center gap-[5vh] py-[7vh]">
      <Title>Featured Projects</Title>
      <div className="grid w-full max-w-6xl grid-cols-1 gap-4 auto-rows-[200px] grid-flow-dense p-4 md:grid-cols-4">
        {projectsBento.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            layoutClassName={LAYOUT_MAP[project.layout]}
          />
        ))}
      </div>
    </div>
  );
}

// ============================================================
// MASONRY LAYOUT EXPORT (preserved)
// ============================================================
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function MasonryLayout() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center gap-[5vh] py-[7vh]">
      <Title>Featured Projects</Title>
      <Masonry
        breakpointCols={breakpointColumns}
        className="-ml-4 flex w-full max-w-6xl"
        columnClassName="pl-4 bg-clip-padding"
      >
        {projectsBento.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            layoutClassName={cn(
              "mb-4 w-full overflow-hidden rounded-xl",
              HEIGHT_MAP[project.heightType]
            )}
          />
        ))}
      </Masonry>
    </div>
  );
}

// ============================================================
// DEFAULT EXPORT — switch here to toggle layouts
// ============================================================
export default function Projects_Bento() {
  return <BentoGrid />;
}

