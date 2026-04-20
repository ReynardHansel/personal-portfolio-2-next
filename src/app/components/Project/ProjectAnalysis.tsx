import { motion } from "framer-motion";
import { projectsBento } from "@/data/projects_bento";
import SectionLabel from "./SectionLabel";

type ProjectAnalysisProps = {
  project: (typeof projectsBento)[number];
};

export default function ProjectAnalysis({ project }: ProjectAnalysisProps) {
  return (
    <motion.div className="p-8 lg:p-12">
      <SectionLabel>Analysis</SectionLabel>
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
  );
}
