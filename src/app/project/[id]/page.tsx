"use client";

import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { projectsBento } from "@/data/projects_bento";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ProjectHero from "@/app/components/Project/ProjectHero";
import ProjectProblemStatement from "@/app/components/Project/ProjectProblemStatement";
import ProjectFrameworkTech from "@/app/components/Project/ProjectFrameworkTech";
import ProjectVisualAssets from "@/app/components/Project/ProjectVisualAssets";
import ProjectEvaluation from "@/app/components/Project/ProjectEvaluation";
import ProjectAnalysis from "@/app/components/Project/ProjectAnalysis";
import ProjectFooter from "@/app/components/Project/ProjectFooter";

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
          Back to Home
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
      {/* Top Hero */}
      <ProjectHero project={project} />

      <div className="grid grid-cols-1 lg:grid-cols-3">
        {/* Left Column */}
        <div className="border-neutral-300 lg:border-r">
          <ProjectProblemStatement project={project} />
          <ProjectFrameworkTech project={project} />
        </div>

        {/* Right Column */}
        <div className="lg:col-span-2">
          <ProjectVisualAssets project={project} />

          <div className="grid grid-cols-1 md:grid-cols-2">
            <ProjectEvaluation project={project} />
            <ProjectAnalysis project={project} />
          </div>
        </div>
      </div>

      <ProjectFooter projectIndex={projectIndex} />      
    </motion.div>
  );
}
