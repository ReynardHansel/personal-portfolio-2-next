import { SkillName } from "@/app/components/Skillset/skillData";

export type ExperienceData = {
  id: string;
  company: string;
  role: string[];
  duration: string;
  responsibility: string;
  techStack: SkillName[];
  images: string[];
};

export const EXPERIENCES: ExperienceData[] = [
  {
    id: "ada",
    company: "Apple Developer Academy",
    role: ["Junior iOS Developer"],
    duration: "Feb 2025 — Dec 2025",
    responsibility:
      "Developed 4 applications across iOS and watchOS platforms and led a cross-functional team in delivering a tailored technical solution for an external FinTech partner.",
    techStack: ["Swift", "iOS", "AppStore", "Figma", "Miro", "Confluence"],
    images: [
      "/images/exp/ada/1.jpg",
      "/images/exp/ada/2.jpg",
      "/images/exp/ada/3.jpg",
      "/images/exp/ada/4.jpg",
      "/images/exp/ada/5.jpg",
      "/images/exp/ada/6.jpg",
      "/images/exp/ada/7.jpg",
      "/images/exp/ada/8.jpg",
      "/images/exp/ada/9.jpg",
      "/images/exp/ada/10.jpg",
      "/images/exp/ada/11.jpg",
      "/images/exp/ada/12.jpg",
    ],
  },
  {
    id: "bncc",
    company: "BNCC",
    role: ["Research and Development Manager"],
    duration: "Sept 2023 — Feb 2025",
    responsibility:
      "Orchestrated the delivery of 3 concurrent projects and increased team productivity by over 80% by leading agile scrums and bridging the communication gap between design and development teams.",
    techStack: [
      "NextJS",
      "React",
      "TypeScript",
      "Tailwind",
      "ExpressJS",
      "Figma",
      "Motion",
      "PostgreSQL",
      "Prisma",
      "tRPC",
    ],
    images: [
      "/images/exp/bncc/1.jpg",
      "/images/exp/bncc/2.jpg",
      "/images/exp/bncc/3.jpg",
      "/images/exp/bncc/4.jpg",
      "/images/exp/bncc/5.jpg",
    ],
  },
  {
    id: "maestrobyte",
    company: "Maestrobyte",
    role: ["UI/UX Designer", "Junior System Analyst"],
    duration: "2018 — 2021",
    responsibility:
      "Optimized digital product development by designing both intuitive user interfaces and end-to-end system flows for 3 clients, ensuring a seamless alignment between business logic, stakeholder vision, and technical execution.",
    techStack: ["Figma"],
    images: [],
  },
];
