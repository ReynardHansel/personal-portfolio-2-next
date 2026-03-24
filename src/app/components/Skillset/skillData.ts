const logoPath = "/svg/logo/";

const skillData = [
  { name: "React", icon: `${logoPath}react.svg`, color: "#61DAFB" },
  { name: "NextJS", icon: `${logoPath}nextdotjs.svg`, color: "#000000" },
  { name: "Tailwind", icon: `${logoPath}tailwindcss.svg`, color: "#06B6D4" },
  { name: "HTML", icon: `${logoPath}html5.svg`, color: "#E34F26" },
  { name: "CSS", icon: `${logoPath}css.svg`, color: "#663399" },
  { name: "JavaScript", icon: `${logoPath}javascript.svg`, color: "#F7DF1E" },
  { name: "TypeScript", icon: `${logoPath}typescript.svg`, color: "#3178C6" },
  { name: "Motion", icon: `${logoPath}motion.svg`, color: "#FFF312" },
  { name: "Figma", icon: `${logoPath}figma.svg`, color: "#F24E1E" },
  { name: "SQL", icon: `${logoPath}sql_database.svg`, color: "#EB7100" },
  { name: "PostgreSQL", icon: `${logoPath}postgresql.svg`, color: "#4169E1" },
  { name: "MySQL", icon: `${logoPath}mysql.svg`, color: "#4479A1" },
  { name: "Prisma", icon: `${logoPath}prisma.svg`, color: "#2D3748" },
  { name: "tRPC", icon: `${logoPath}trpc.svg`, color: "#2596BE" },
  { name: "ExpressJS", icon: `${logoPath}express.svg`, color: "#000000" },
  { name: "C Language", icon: `${logoPath}c.svg`, color: "#A8B9CC" },
  { name: "Python", icon: `${logoPath}python.svg`, color: "#3776AB" },
  { name: "Java", icon: `${logoPath}java.svg`, color: "#ED2026" },
  { name: "Arduino", icon: `${logoPath}arduino.svg`, color: "#00878F" },
] as const;

export type SkillName = (typeof skillData)[number]["name"];

export { skillData };
