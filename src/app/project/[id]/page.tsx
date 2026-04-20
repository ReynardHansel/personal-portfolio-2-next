"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { projectsBento } from "@/data/projects_bento";
import Link from "next/link";
import Image from "next/image";
import { IoLockClosedSharp } from "react-icons/io5";
import SkillCard from "@/app/components/Skillset/SkillCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

function ImageWithLoading({
  src,
  alt,
  idx,
}: {
  src: string;
  alt: string;
  idx: number;
}) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-neutral-300 bg-neutral-100">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center text-sm text-neutral-500">
          loading image {idx}
        </div>
      )}
      <Image
        src={src}
        fill
        className="object-cover transition-transform duration-500 hover:scale-105"
        alt={alt}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
}

export default function ProjectPage() {
  const { id } = useParams();
  const router = useRouter();
  const projectIndex = parseInt(id as string, 10) - 1;
  const project = projectsBento[projectIndex];

  if (!project) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-white">
        <h1 className="mb-4 text-sm font-semibold uppercase tracking-widest text-neutral-500">
          Project Not Found
        </h1>
        <button
          onClick={() => router.push("/#projects")}
          className="rounded-md border border-neutral-300 px-6 py-3 text-xs font-semibold uppercase tracking-widest transition-colors hover:border-porto_purple hover:bg-porto_purple hover:text-white"
        >
          Back to Projects
        </button>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-white font-plus-jakarta-sans text-[#2d3334]"
    >
      {/* Hero */}
      <section className="grid grid-cols-1 border-b border-neutral-300 lg:grid-cols-[2.5fr_3fr]">
        {/* Hero Image */}
        <div className="relative min-h-[40vh] overflow-hidden border-neutral-300 bg-neutral-100 lg:min-h-[55vh] lg:border-r">
          <Image
            src={project.images?.[0] || `/placeholder.svg`}
            fill
            className="object-cover"
            alt={project.title}
            priority
          />
        </div>

        {/* Hero Content */}
        <div className="flex min-h-[40vh] flex-col justify-between p-8 lg:min-h-[55vh] lg:p-16">
          <div className="flex justify-between text-xs font-semibold uppercase tracking-widest text-neutral-500">
            <span>ID: #{String(project.id).padStart(3, "0")}</span>
            <span>Year: {project.year}</span>
          </div>

          <div>
            <h1 className="mb-16 max-w-4xl font-helvetica-neue text-4xl font-bold uppercase leading-[0.9] tracking-tight lg:text-6xl">
              {project.title}
            </h1>

            <div className="grid grid-cols-3 gap-8 text-xs font-semibold uppercase tracking-widest text-neutral-500">
              <div>
                <span className="mb-1 block text-neutral-400">Role</span>
                <span className="text-[#2d3334]">{project.role}</span>
              </div>
              <div>
                <span className="mb-1 block text-neutral-400">Location</span>
                <span className="text-[#2d3334]">{project.location}</span>
              </div>
              <div>
                <span className="mb-1 block text-neutral-400">Status</span>
                <span className="text-porto_purple">{project.status}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {/* Left Column */}
        <div className="border-neutral-300 lg:border-r">
          {/* Problem Statement */}
          <motion.div
            {...fadeIn}
            className="border-b border-neutral-300 p-8 lg:p-12"
          >
            <SectionTitle>Problem Statement</SectionTitle>
            <h3 className="mb-4 font-helvetica-neue text-2xl font-bold">
              Overview
            </h3>
            <div className="font-nunito-sans leading-relaxed text-[#5a5f60]">
              {project.description}
            </div>
          </motion.div>

          {/* Framework & Tech */}
          <motion.div {...fadeIn} className="p-8 lg:p-12">
            <SectionTitle>Framework & Tech</SectionTitle>

            <div className="flex flex-col gap-12">
              <div className="mt-4">
                <h4 className="mb-3 text-xs font-semibold uppercase tracking-widest text-neutral-400">
                  Architectural Logic
                </h4>
                <p className="font-nunito-sans text-[#5a5f60]">
                  {project.architecturalLogic}
                </p>
              </div>

              <div>
                <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-neutral-400">
                  System Integration
                </h4>
                <div className="flex flex-wrap gap-3">
                  {project.skills.map((skill, index) => (
                    <SkillCard key={skill} skill={skill} index={index} />
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3">
                {project.sourceRepo && (
                  <ActionLink href={project.sourceRepo}>Source Repo</ActionLink>
                )}
                {project.liveDemo && (
                  <ActionLink href={project.liveDemo}>Live Demo</ActionLink>
                )}
                {!project.sourceRepo && !project.liveDemo && (
                  <>
                    <ActionLink href="/#projects">Source Repo</ActionLink>
                    <ActionLink href="/#projects">Live Demo</ActionLink>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-2">
          {/* Visual Assets */}
          <motion.div
            {...fadeIn}
            className="border-b border-neutral-300 p-8 lg:p-12"
          >
            <SectionTitle>Visual Assets</SectionTitle>

            {project.images && project.images.length > 0 ? (
              <>
                <Carousel opts={{ align: "start" }} className="w-full">
                  <CarouselContent>
                    {/* Split images into groups of 4 */}
                    {Array.from({
                      length: Math.ceil(project.images.length / 4),
                    }).map((_, slideIndex) => {
                      const slideImages = project.images!.slice(
                        slideIndex * 4,
                        slideIndex * 4 + 4,
                      );
                      return (
                        <CarouselItem key={slideIndex}>
                          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            {slideImages.map((imgSrc, imgIndex) => (
                              <ImageWithLoading
                                key={imgIndex}
                                src={imgSrc}
                                alt={`Asset ${slideIndex * 4 + imgIndex + 1}`}
                                idx={slideIndex * 4 + imgIndex + 1}
                              />
                            ))}
                          </div>
                        </CarouselItem>
                      );
                    })}
                  </CarouselContent>

                  {project.images.length > 4 && (
                    <div className="absolute -bottom-6 left-1/2 flex -translate-x-1/2 justify-center gap-4">
                      <CarouselPrevious />
                      <CarouselNext />
                    </div>
                  )}
                </Carousel>
              </>
            ) : (
              /* Proprietary Work - No Images Available */
              <div className="relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-lg border border-neutral-300 bg-neutral-100">
                {/* Grid Pattern Background */}
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `linear-gradient(to right, #e5e7eb 1px, transparent 1px),
                                      linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)`,
                    backgroundSize: "24px 24px",
                  }}
                />

                {/* Radial Fade Effect */}
                <div className="pointer-events-none absolute inset-0 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

                {/* Content */}
                <div className="relative flex items-center gap-3 text-neutral-400">
                  <IoLockClosedSharp className="text-xl" />
                  <span className="text-lg font-medium uppercase tracking-widest">
                    Proprietary Work
                  </span>
                </div>
              </div>
            )}
          </motion.div>

          {/* Evaluation & Analysis */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            <motion.div
              {...fadeIn}
              className="border-neutral-300 p-8 md:border-r lg:p-12"
            >
              <SectionTitle>Evaluation</SectionTitle>
              <blockquote className="rounded-lg border border-neutral-300 p-6">
                <p className="mb-4 font-nunito-sans text-lg text-[#2d3334]">
                  "{project.quote}"
                </p>
                <div className="flex items-center gap-3 text-xs font-semibold uppercase text-neutral-500">
                  <div className="h-0.5 w-6 rounded-full bg-porto_purple" />
                  <span>{project.quoteAuthor}</span>
                </div>
              </blockquote>
            </motion.div>

            <motion.div {...fadeIn} className="p-8 lg:p-12">
              <SectionTitle>Analysis</SectionTitle>
              <div className="mb-4 rounded-lg border border-neutral-300 p-6">
                <h4 className="mb-3 text-xs font-semibold uppercase text-neutral-400">
                  Key Takeaways
                </h4>
                <p className="font-nunito-sans text-sm text-[#5a5f60]">
                  {project.keyTakeaways}
                </p>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-neutral-50 px-4 py-3 text-xs font-semibold uppercase text-neutral-600">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-porto_purple" />
                  <span>Completed</span>
                </div>
                <span className="text-porto_purple">100%</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="flex flex-col items-start justify-between border-t border-neutral-300 px-8 py-8 text-xs sm:flex-row sm:items-center">
        <div className="mb-4 sm:mb-0">
          <span className="font-bold text-[#2d3334]">Portfolio</span>
          <span className="ml-2 text-neutral-400">© 2024</span>
        </div>
        <div className="flex gap-6">
          <Link
            href="#"
            className="text-neutral-500 transition-colors hover:text-porto_purple"
          >
            LinkedIn
          </Link>
          <Link
            href="#"
            className="text-neutral-500 transition-colors hover:text-porto_purple"
          >
            GitHub
          </Link>
          <button
            onClick={() => router.push("/#projects")}
            className="text-[#2d3334] transition-colors hover:text-porto_purple"
          >
            Back
          </button>
        </div>
      </footer>
    </motion.div>
  );
}

// Helper Components
function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <div className="h-8 w-2 rounded-full bg-porto_purple" />
      <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-500">
        {children}
      </h2>
    </div>
  );
}

function ActionLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="flex items-center justify-between rounded-lg border border-neutral-300 bg-neutral-50 px-5 py-4 text-xs font-semibold uppercase tracking-widest transition-all hover:border-porto_purple hover:bg-porto_purple hover:text-white"
    >
      <span>{children}</span>
      <span>→</span>
    </Link>
  );
}
