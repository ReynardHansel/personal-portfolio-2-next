import Title from "./Reusable/Title";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const skills1 = [
  "React",
  "NextJS",
  "Tailwind",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Framer Motion",
  "Figma",
];

const skills2 = [
  "SQL",
  "PostgreSQL",
  "MySQL",
  "Prisma",
  "tRPC",
  "ExpressJS",
  "NextAuth",
  "C",
  "Python",
  "Java",
  "Arduino",
];

export default function Skillset() {
  return (
    <div id="skillset" className="my-[15vh] flex flex-col items-center justify-center gap-[6vh]">
      <Title>Skill Set</Title>
      <p className="px-[10vw] text-center font-plus-jakarta-sans tracking-wider md:px-[15vw] lg:px-[15vw] lg:text-lg">
        Over the years, I've gathered a toolkit of skills that help me deliver
        high-quality, efficient, and innovative solutions. With a solid
        foundation in modern web development and software engineering, I'm
        equipped to tackle challenges across various domains. Below are the
        skills and tech stacks that drive my success and make it all happen.
      </p>
      <div className="flex flex-col ">
        <InfiniteMovingCards
          speed="normal"
          direction="left"
          skills={skills1}
        />
        <InfiniteMovingCards speed="normal" direction="right" skills={skills2} />
      </div>
    </div>
  );
}
