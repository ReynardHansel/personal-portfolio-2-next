import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import SkillCard from "@/app/components/Skillset/SkillCard";
import { projectsBento } from "@/data/projects_bento";
import SectionLabel from "./SectionLabel";

type ProjectFrameworkTechProps = {
  project: (typeof projectsBento)[number];
};

export default function ProjectFrameworkTech({
  project,
}: ProjectFrameworkTechProps) {
  return (
    <motion.div className="p-8 lg:p-12">
      <SectionLabel>Framework & Tech</SectionLabel>

      <div className="flex flex-col gap-12">
        <div className="mt-4">
          <h4 className="mb-3 text-xs font-semibold uppercase tracking-widest text-neutral-400">
            Architectural Logic
          </h4>
          {project.architecturalLogic.length > 1 ? (
            <ul className="flex list-disc flex-col gap-2 pl-5 font-nunito-sans text-[#5a5f60]">
              {project.architecturalLogic.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className="font-nunito-sans text-[#5a5f60]">
              {project.architecturalLogic[0]}
            </p>
          )}
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
          <ActionLink href={project.sourceRepo}>Source Repo</ActionLink>
          <ActionLink href={project.liveDemo}>Live Demo</ActionLink>
        </div>
      </div>
    </motion.div>
  );
}

function ActionLink({
  href,
  children,
}: {
  href: string | undefined;
  children: React.ReactNode;
}) {
  const isPrivate = href === "private";
  const isUnavailable = href === "unavailable";
  const isDisabled = isPrivate || isUnavailable;

  const label = isPrivate ? "Private" : isUnavailable ? "Unavailable" : href;

  if (isDisabled) {
    return (
      <Button
        variant="outline"
        disabled
        className="flex w-full items-center justify-between border-neutral-300 bg-neutral-50 px-5 py-4 text-xs font-semibold uppercase tracking-widest text-neutral-400"
      >
        <span className="flex items-center gap-2">
          <span>{children}</span>
          <span className="text-[10px] opacity-60">({label})</span>
        </span>
        <span className="opacity-40">⊘</span>
      </Button>
    );
  }

  return (
    <Link
      href={href || "/#projects"}
      className="flex items-center justify-between rounded-lg border border-neutral-300 bg-neutral-50 px-5 py-4 text-xs font-semibold uppercase tracking-widest transition-all hover:border-porto_purple hover:bg-porto_purple hover:text-white"
    >
      <span>{children}</span>
      <span>→</span>
    </Link>
  );
}
