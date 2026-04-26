import { motion } from "framer-motion";
import { projectsBento } from "@/data/projects_bento";
import SectionLabel from "./SectionLabel";
import { cn } from "@/lib/utils";

type ProjectEvaluationProps = {
  project: (typeof projectsBento)[number];
};

export default function ProjectEvaluation({ project }: ProjectEvaluationProps) {
  return (
    <motion.div className="border-neutral-300 p-8 md:border-r lg:p-12">
      <SectionLabel>Evaluation</SectionLabel>
      <div className="flex flex-col gap-4">
        {project.quotes.map((item, i) => (
          <blockquote
            key={i}
            className="rounded-lg border border-neutral-300 p-6"
          >
            <p className="mb-4 font-nunito-sans text-lg text-[#2d3334]">
              &ldquo;{item.quote}&rdquo;
            </p>
            <div className="flex items-center gap-3 text-xs font-semibold uppercase text-neutral-500">
              <div
                className={cn(
                  "h-1 w-6 rounded-full bg-porto_purple",
                  item.type === "good" && "bg-[#6FC0AC]",
                  item.type === "bad" && "bg-[#F05138]",
                )}
              />
              <span>{item.author}</span>
            </div>
          </blockquote>
        ))}
      </div>
    </motion.div>
  );
}
