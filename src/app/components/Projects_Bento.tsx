"use client";

import Masonry from "react-masonry-css";
import Image from "next/image";
import { motion } from "framer-motion";
import Title from "./Reusable/Title";

const items = [
  {
    id: "1",
    title: "Project Alpha",
    image: "https://picsum.photos/seed/project1/400/300",
    aspect: 1.33,
  },
  {
    id: "2",
    title: "Project Beta",
    image: "https://picsum.photos/seed/project2/400/500",
    aspect: 0.8,
  },
  {
    id: "3",
    title: "Project Gamma",
    image: "https://picsum.photos/seed/project3/400/350",
    aspect: 1.14,
  },
  {
    id: "4",
    title: "Project Delta",
    image: "https://picsum.photos/seed/project4/400/280",
    aspect: 1.43,
  },
  {
    id: "5",
    title: "Project Epsilon",
    image: "https://picsum.photos/seed/project5/400/450",
    aspect: 0.89,
  },
  {
    id: "6",
    title: "Project Zeta",
    image: "https://picsum.photos/seed/project6/400/320",
    aspect: 1.25,
  },
  {
    id: "7",
    title: "Project Eta",
    image: "https://picsum.photos/seed/project7/400/380",
    aspect: 1.05,
  },
  {
    id: "8",
    title: "Project Theta",
    image: "https://picsum.photos/seed/project8/400/260",
    aspect: 1.54,
  },
];

const breakpointColumns = {
  default: 4,
  1280: 3,
  1024: 3,
  768: 2,
  640: 1,
};

export default function Projects_Bento() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center gap-[5vh] py-[7vh]">
      <Title>Featured Projects</Title>
      <Masonry
        breakpointCols={breakpointColumns}
        className="-ml-4 flex w-full max-w-6xl"
        columnClassName="pl-4 bg-clip-padding"
      >
        {items.map((item) => (
          <motion.div
            key={item.id}
            className="group relative mb-4 w-full overflow-hidden rounded-xl"
            style={{ aspectRatio: item.aspect }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Image wrapper - scales the image on hover for zoom effect */}
            <motion.div
              className="absolute inset-0"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="rounded-xl object-cover"
              />
            </motion.div>

            {/* Gradient overlay - dark at bottom, transparent at top; always visible for text readability */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
              initial={{ opacity: 1 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />

            {/* Dark overlay - starts invisible, fades in on hover for extra contrast */}
            <motion.div
              className="absolute inset-0 bg-black/30"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />

            {/* Title text - slides up and fades in on hover */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 p-4 text-white"
              initial={{ y: 10, opacity: 0 }}
              whileHover={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="font-semibold">{item.title}</h3>
            </motion.div>
          </motion.div>
        ))}
      </Masonry>
    </div>
  );
}
