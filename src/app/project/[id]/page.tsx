"use client";

import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { content } from "@/data/projects";
import Link from "next/link";
import { useEffect } from "react";

// Layout constants - to map to brutalist design
const BORDER = "border-neutral-200";

// Basic icons to replace the ones in SYSTEM INTEGRATION
const icon1 = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l4 10-4 10-4-10 4-10z"/></svg>
);
const icon2 = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
);
const icon3 = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><circle cx="18" cy="6" r="3"/><path d="M18 9v6"/><path d="M9 18h6"/><path d="M6 9v9a2 2 0 0 0 2 2h10"/></svg>
);
const icon4 = (
  <span className="text-xs font-mono font-bold tracking-widest">BIM</span>
);
const icons = [icon1, icon2, icon3, icon4];

// SVG for the diagonal arrow
const arrowIcon = (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
);

export default function ProjectPage() {
  const params = useParams();
  const id = params.id as string;
  const projectIndex = parseInt(id, 10) - 1;
  const router = useRouter();

  // Scroll to top on mount just in case
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handle invalid index
  if (projectIndex < 0 || projectIndex >= content.length) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-[#FDFDFD] px-6 selection:bg-neutral-900 selection:text-white">
        <h1 className="text-sm font-mono uppercase tracking-widest text-neutral-500 mb-8">
          SYSTEM ERROR: RESOURCE NOT ATTACHED
        </h1>
        <button
          onClick={() => router.push("/#projects")}
          className="border border-neutral-300 px-6 py-3 text-xs font-mono font-bold tracking-widest transition-colors hover:bg-neutral-100 uppercase"
        >
          BACK TO ROOT
        </button>
      </div>
    );
  }

  const project = content[projectIndex];
  
  return (
    <motion.div 
      initial={{ opacity: 0, filter: "blur(4px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`min-h-screen bg-[#FDFDFD] text-neutral-900 font-sans selection:bg-neutral-900 selection:text-white flex flex-col`}
    >
      {/* Header */}
      <header className={`flex justify-between items-center px-6 lg:px-10 py-6 border-b ${BORDER} text-[10px] sm:text-xs font-mono font-bold tracking-widest uppercase`}>
         <div className="whitespace-nowrap">THE ARCHITECT // LOG</div>
         <div className="hidden md:flex gap-8 lg:gap-12 text-neutral-500">
           <Link href="/#projects" className="hover:text-black transition-colors">PROJECTS</Link>
           <Link href="#" className="hover:text-black transition-colors">ARCHIVE</Link>
           <Link href="/#contact" className="hover:text-black transition-colors">CONTACT</Link>
         </div>
         <div className="flex items-center gap-6 lg:gap-8">
           <span className="text-neutral-400 hidden sm:inline-block">VER. 2.4.0</span>
           <button onClick={() => router.push("/#projects")} className="bg-neutral-900 text-white px-5 py-2.5 hover:bg-neutral-800 transition-colors">CONNECT</button>
         </div>
      </header>

      {/* Main Grid */}
      <main className="flex-grow flex flex-col">
        {/* ROW 1: Hero */}
        <div className={`grid grid-cols-1 lg:grid-cols-3 border-b ${BORDER}`}>
          {/* Left Hero (Image) */}
          <div className={`col-span-1 border-b lg:border-b-0 lg:border-r ${BORDER} relative min-h-[50vh] lg:min-h-[70vh] bg-neutral-100 overflow-hidden`}>
             <img 
               src={project.images?.[0] || `https://picsum.photos/seed/${project.id * 8}/800/800`} 
               className="absolute inset-0 w-full h-full object-cover grayscale opacity-90 transition-transform duration-1000 hover:scale-105" 
               alt={`${project.title} Hero`} 
             />
          </div>
          {/* Right Hero (Text) */}
          <div className="col-span-2 p-8 sm:p-12 lg:p-16 flex flex-col justify-between min-h-[50vh] lg:min-h-[70vh]">
             {/* Top Meta */}
             <div className="flex justify-between text-[10px] sm:text-xs font-mono font-bold tracking-widest uppercase text-neutral-500 mb-20 lg:mb-32">
                <span className="flex gap-2"><span>SYSTEM ID:</span> <span className="text-neutral-900">CS_{String(project.id).padStart(3, '0')}</span></span>
                <span className="flex gap-2"><span>TIMESTAMP:</span> <span className="text-neutral-900">2024.Q1</span></span>
             </div>
             {/* Title */}
             <div>
                <h1 className="font-helvetica-neue text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[7rem] font-bold tracking-tighter uppercase leading-[0.85] mb-20 lg:mb-32 max-w-4xl">
                   {project.title}
                </h1>
                {/* Bottom Meta */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-[10px] sm:text-xs font-mono uppercase tracking-widest">
                   <div className="flex flex-col gap-3">
                     <span className="text-neutral-400">ASSIGNED ROLE</span>
                     <span className="font-bold">LEAD DESIGNER</span>
                   </div>
                   <div className="flex flex-col gap-3">
                     <span className="text-neutral-400">GEOGRAPHIC</span>
                     <span className="font-bold">COPENHAGEN</span>
                   </div>
                   <div className="flex flex-col gap-3">
                     <span className="text-neutral-400">STATE</span>
                     <span className="font-bold">DEPLOYED</span>
                   </div>
                </div>
             </div>
          </div>
        </div>

        {/* ROW 2 & 3 Combined via 2 main columns to preserve vertical line on Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-3 flex-grow">
           {/* LEFT CONTENT COLUMN */}
           <div className={`col-span-1 border-b lg:border-b-0 lg:border-r ${BORDER} flex flex-col`}>
              {/* 01 PROBLEM STATEMENT */}
              <div className={`p-8 sm:p-12 border-b ${BORDER}`}>
                 <h2 className="text-[10px] font-mono font-bold tracking-widest uppercase mb-10 flex gap-4 text-neutral-800">
                   <span>01 //</span> <span>PROBLEM STATEMENT</span>
                 </h2>
                 <h3 className="text-xl sm:text-2xl font-bold mb-6 font-helvetica-neue tracking-tight uppercase">
                   RHYTHMIC VOID / CHAOTIC URBAN GRID
                 </h3>
                 <div className="text-neutral-600 leading-relaxed font-nunito-sans text-sm sm:text-base [&>p]:mb-4 last:[&>p]:mb-0">
                   {project.description}
                 </div>
              </div>
              {/* 02 FRAMEWORK & TECH */}
              <div className={`p-8 sm:p-12 flex-grow`}>
                 <h2 className="text-[10px] font-mono font-bold tracking-widest uppercase mb-10 flex gap-4 text-neutral-800">
                   <span>02 //</span> <span>FRAMEWORK &amp; TECH</span>
                 </h2>
                 
                 <div className="mb-10">
                   <h4 className="text-[10px] sm:text-xs font-mono font-bold tracking-widest text-neutral-400 mb-4 uppercase">ARCHITECTURAL LOGIC</h4>
                   <p className="text-neutral-600 leading-relaxed font-nunito-sans text-sm">
                     Cast-in-place concrete structure utilizing modular formwork for repetitive geometric execution.
                   </p>
                 </div>

                 <div className="mb-12">
                   <h4 className="text-[10px] sm:text-xs font-mono font-bold tracking-widest text-neutral-400 mb-4 uppercase">SYSTEM INTEGRATION</h4>
                   <div className="grid grid-cols-4 gap-3">
                     {icons.map((icon, i) => (
                        <div key={i} className={`aspect-square border ${BORDER} flex items-center justify-center text-neutral-500`}>
                          {icon}
                        </div>
                     ))}
                   </div>
                 </div>

                 <div className="flex flex-col gap-3">
                   <Link href="/#projects" className={`group flex justify-between items-center px-5 py-4 bg-[#F8F8F8] hover:bg-[#F0F0F0] transition-colors text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest border ${BORDER}`}>
                     <span>SOURCE REPO</span>
                     <span className="transform transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">{arrowIcon}</span>
                   </Link>
                   <Link href="/#projects" className={`group flex justify-between items-center px-5 py-4 bg-[#F8F8F8] hover:bg-[#F0F0F0] transition-colors text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest border ${BORDER}`}>
                     <span>PROJECT NODE</span>
                     <span className="transform transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">{arrowIcon}</span>
                   </Link>
                 </div>
              </div>
           </div>

           {/* RIGHT CONTENT COLUMN */}
           <div className={`col-span-2 flex flex-col`}>
              {/* 03 VISUAL ASSETS */}
              <div className={`p-8 sm:p-12 border-b ${BORDER}`}>
                 <h2 className="text-[10px] font-mono font-bold tracking-widest uppercase mb-10 flex gap-4 text-neutral-800">
                   <span>03 //</span> <span>VISUAL ASSETS</span>
                 </h2>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   {[1, 2, 3, 4].map((idx) => {
                     const imgCount = project.images?.length || 0;
                     const imgSrc = imgCount > 0 
                       ? project.images![idx % imgCount] 
                       : `https://picsum.photos/seed/${project.id * 10 + idx}/800/600`;
                     return (
                        <div key={idx} className={`aspect-[4/3] relative overflow-hidden bg-neutral-100 ${idx > 2 ? 'hidden md:block' : ''}`}>
                          <img 
                            src={imgSrc} 
                            className="absolute inset-0 w-full h-full object-cover grayscale opacity-90 transition-transform duration-700 hover:scale-[1.03]" 
                            alt={`Visual asset ${idx}`} 
                          />
                        </div>
                     )
                   })}
                 </div>
              </div>

              {/* 04 & 05 (Inside Right Column) */}
              <div className="grid grid-cols-1 md:grid-cols-2 flex-grow">
                 {/* 04 EVALUATION */}
                 <div className={`p-8 sm:p-12 border-b md:border-b-0 md:border-r ${BORDER} flex flex-col`}>
                    <h2 className="text-[10px] font-mono font-bold tracking-widest uppercase mb-10 flex gap-4 text-neutral-800">
                      <span>04 //</span> <span>EVALUATION</span>
                    </h2>
                    <div className={`border ${BORDER} p-8 sm:p-10 flex-grow flex flex-col justify-between whitespace-normal`}>
                       <p className="italic font-serif text-lg sm:text-xl leading-relaxed text-neutral-800 mb-12">
                         "Structural honesty translated into profound emotional experience. The design commands silence without architectural overstatement."
                       </p>
                       <div className="flex items-center gap-4 text-[10px] font-mono font-bold tracking-widest uppercase text-neutral-700">
                         <div className="w-8 h-[2px] bg-neutral-900"></div>
                         <span>ELIAS THORNE // LEAD AUDITOR</span>
                       </div>
                    </div>
                 </div>

                 {/* 05 ANALYSIS */}
                 <div className="p-8 sm:p-12 flex flex-col">
                    <h2 className="text-[10px] font-mono font-bold tracking-widest uppercase mb-10 flex gap-4 text-neutral-800">
                      <span>05 //</span> <span>ANALYSIS</span>
                    </h2>
                    <div className={`border ${BORDER} p-8 sm:p-10 mb-8 flex-grow`}>
                       <h4 className="text-[10px] font-mono font-bold tracking-widest mb-6 uppercase text-neutral-900">LESSON LEARNED</h4>
                       <p className="text-neutral-600 leading-relaxed font-nunito-sans text-sm sm:text-base">
                         Visual simplification directly correlates with architectural impact. High complexity is best managed through strict textural variance.
                       </p>
                    </div>
                    {/* Status Bar */}
                    <div className={`border ${BORDER} px-6 py-5 flex justify-between items-center text-[10px] font-mono font-bold tracking-widest uppercase bg-[#F8F8F8] text-neutral-700 mt-auto`}>
                       <div className="flex items-center gap-4">
                         <div className="w-2.5 h-2.5 rounded-full bg-neutral-900 animate-pulse"></div>
                         <span className="hidden sm:inline-block">PHASE 01: SYNTHESIS COMPLETE</span>
                         <span className="sm:hidden">COMPLETE</span>
                       </div>
                       <span>100.00%</span>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </main>

      {/* Footer */}
      <footer className={`flex flex-col sm:flex-row justify-between items-start sm:items-center px-6 lg:px-10 py-8 bg-[#FDFDFD] border-t ${BORDER} font-mono uppercase tracking-widest text-[10px]`}>
        <div className="flex flex-col gap-2 mb-8 sm:mb-0">
           <div className="font-bold text-neutral-900">THE ARCHITECT // TECHNICAL DIVISION</div>
           <div className="text-neutral-400 text-[8px] sm:text-[10px]">AUTOMATED DOCUMENTATION SYSTEM © 2024</div>
        </div>
        <div className="flex flex-wrap items-center gap-6 sm:gap-10">
           <Link href="#" className="hover:text-black text-neutral-500 transition-colors">DIR_LI</Link>
           <Link href="#" className="hover:text-black text-neutral-500 transition-colors">DIR_IG</Link>
           <Link href="#" className="hover:text-black text-neutral-500 transition-colors">DIR_BE</Link>
           <button onClick={() => router.push("/#projects")} className={`border ${BORDER} px-6 py-3 hover:bg-[#F8F8F8] text-neutral-900 transition-colors hidden sm:block`}>
             BACK TO ROOT
           </button>
        </div>
      </footer>
    </motion.div>
  );
}
