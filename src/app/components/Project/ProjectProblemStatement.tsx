import { motion } from "framer-motion";
import { projectsBento } from "@/data/projects_bento";

type ProjectProblemStatementProps = {
  project: (typeof projectsBento)[number];
};

export default function ProjectProblemStatement({
  project,
}: ProjectProblemStatementProps) {
  return (
    <motion.div className="border-b border-neutral-300 p-8 lg:p-12">
      <SectionLabel>Problem Statement</SectionLabel>
      <h3 className="mb-4 font-helvetica-neue text-2xl font-bold">Overview</h3>
      <div className="font-nunito-sans leading-relaxed text-[#5a5f60]">
        {project.description}
      </div>
    </motion.div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <div className="h-8 w-2 rounded-full bg-porto_purple" />
      <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-500">
        {children}
      </h2>
    </div>
  );
}
