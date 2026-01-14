import Title from "./Reusable/Title";
import SkillCard from "./Skillset/SkillCard";

// Example: You'll likely need to map these names to actual file paths
// For now, I'm using your arduino path as a placeholder for all
const logoPath = "/svg/logo/";

const skillData = [
  { name: "React", icon: `${logoPath}react.svg` },
  { name: "NextJS", icon: `${logoPath}nextdotjs.svg` },
  { name: "Tailwind", icon: `${logoPath}tailwindcss.svg` },
  { name: "HTML", icon: `${logoPath}html5.svg` },
  { name: "CSS", icon: `${logoPath}css.svg` },
  { name: "JavaScript", icon: `${logoPath}javascript.svg` },
  { name: "TypeScript", icon: `${logoPath}typescript.svg` },
  { name: "Framer Motion", icon: `${logoPath}framer.svg` },
  { name: "Figma", icon: `${logoPath}figma.svg` },
  { name: "SQL", icon: `${logoPath}sql_database.svg` },
  { name: "PostgreSQL", icon: `${logoPath}postgresql.svg` },
  { name: "MySQL", icon: `${logoPath}mysql.svg` },
  { name: "Prisma", icon: `${logoPath}prisma.svg` },
  { name: "tRPC", icon: `${logoPath}trpc.svg` },
  { name: "ExpressJS", icon: `${logoPath}express.svg` },
  { name: "C Language", icon: `${logoPath}c.svg` },
  { name: "Python", icon: `${logoPath}python.svg` },
  { name: "Java", icon: `${logoPath}java.svg` },
  { name: "Arduino", icon: `${logoPath}arduino.svg` },
];

export default function Skillset() {
  return (
    <div
      id="skillset"
      className="my-[15vh] flex flex-col items-center justify-center gap-[6vh] px-4"
    >
      <Title>Skill Set</Title>
      
      {/* This layout mimics the video:
        1. flex-wrap: Items flow to the next line if space runs out.
        2. justify-center: Items align to the center (not left).
        3. max-w-5xl: Prevents the row from getting too wide on huge screens.
      */}
      <div className="flex flex-wrap justify-center gap-4 max-w-5xl">
        {skillData.map((skill, index) => (
           <SkillCard 
             key={index} 
             name={skill.name} 
             icon={skill.icon || ""}
           />
        ))}
      </div>
    </div>
  );
}