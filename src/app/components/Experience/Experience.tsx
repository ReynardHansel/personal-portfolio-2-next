import Title from "../Reusable/Title";

export default function Experience() {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-[5vh]">
      <Title>Experience</Title>
      <div className="space-around gap-5 flex h-full min-h-[80vh] w-full flex-col items-center justify-center px-6 py-8 md:flex-row md:items-start md:py-0 md:px-[5%]">
        {/* Experience */}
        <div className="flex flex-1 flex-col items-start justify-center">
          <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-widest text-neutral-500">
            {/* <span className="h-2.5 w-2.5 rounded-full bg-neutral-600"></span> */}
            2023 — PRESENT
          </div>

          <p className="mt-10 text-[2.5rem] font-bold uppercase leading-none tracking-tight text-[#2d3334] sm:text-[3.25rem]">
            METAVERS LABS
          </p>

          <p className="mt-2 text-[1.3rem] font-light text-[#5a5f60]">
            Lead Design Systems Architect
          </p>
        </div>

        {/* Divider Line */}
        <div className="hidden w-0.5 self-stretch bg-black md:block"></div>

        {/* Details */}
        <div className="border-blue-5 flex flex-[2] flex-col items-center justify-center border-2 py-8 md:py-0">
          <h1>Details</h1>
        </div>
      </div>
    </section>
  );
}
