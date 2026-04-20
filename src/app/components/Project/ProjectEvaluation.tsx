import { motion } from "framer-motion";
import { projectsBento } from "@/data/projects_bento";
import SectionLabel from "./SectionLabel";

type ProjectEvaluationProps = {
  project: (typeof projectsBento)[number];
};

export default function ProjectEvaluation({
  project,
}: ProjectEvaluationProps) {
  return (
    <motion.div className="border-neutral-300 p-8 md:border-r lg:p-12">
      <SectionLabel>Evaluation</SectionLabel>
      <blockquote className="rounded-lg border border-neutral-300 p-6">
        <p className="mb-4 font-nunito-sans text-lg text-[#2d3334]">
          &ldquo;{project.quote}&rdquo;
        </p>
        <div className="flex items-center gap-3 text-xs font-semibold uppercase text-neutral-500">
          <div className="h-0.5 w-6 rounded-full bg-porto_purple" />
          <span>{project.quoteAuthor}</span>
        </div>
      </blockquote>
    </motion.div>
  );
}