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
      <SectionLabel>Overview</SectionLabel>
      <div>
        <h3 className="mb-4 font-helvetica-neue text-xl font-bold">
          Description
        </h3>
        <div className="font-nunito-sans text-sm leading-relaxed text-[#5a5f60]">
          {project.description}
        </div>
      </div>
      <div className="mt-10">
        <h3 className="mb-4 font-helvetica-neue text-xl font-bold">
          Problem Statement
        </h3>
        <div className="font-nunito-sans text-sm leading-relaxed text-[#5a5f60]">
          {project.problemStatement}
        </div>
      </div>
    </motion.div>
  );
}
