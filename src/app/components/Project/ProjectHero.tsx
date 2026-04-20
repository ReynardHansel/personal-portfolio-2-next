import Image from "next/image";
import { projectsBento } from "@/data/projects_bento";

type ProjectHeroProps = {
  project: (typeof projectsBento)[number];
};

export default function ProjectHero({ project }: ProjectHeroProps) {
  return (
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
  );
}
