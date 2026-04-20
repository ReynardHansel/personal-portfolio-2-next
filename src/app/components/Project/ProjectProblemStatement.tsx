import { motion } from "framer-motion";
import { projectsBento } from "@/data/projects_bento";
import SectionLabel from "./SectionLabel";

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

