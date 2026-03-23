import Title from "./Reusable/Title";
import DetailsSection from "./Experience/DetailsSection";

export default function Experience() {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-[5vh]">
      <Title>Experience</Title>
      <div className="space-around flex h-full min-h-[80vh] w-full flex-col items-center justify-center gap-[5vw] px-6 py-8 md:flex-row md:items-start md:px-[5%] md:py-0">
        {/* Experience */}
        <ExperienceSection />

        {/* Divider Line */}
        <div className="hidden w-0.5 self-stretch bg-black md:block"></div>

        {/* Details */}
        <DetailsSection />
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <div className="flex flex-1 flex-col items-start justify-center md:py-10">
      {/* Duration */}
      <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-widest text-neutral-500">
        {/* <span className="h-2.5 w-2.5 rounded-full bg-neutral-600"></span> */}
        2023 — PRESENT
      </div>

      {/* Company */}
      <p className="mt-10 text-[2.5rem] font-bold uppercase leading-none tracking-tight text-[#2d3334] sm:text-[3.25rem]">
        Apple Developer Academy
      </p>

      {/* Job Title */}
      <p className="mt-2 text-[1.3rem] font-light text-[#5a5f60]">
        Junior iOS Developer
      </p>
    </div>
  );
}
