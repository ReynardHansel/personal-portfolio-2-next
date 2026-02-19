import Title from "./Reusable/Title";
import SkillContainer from "./Reusable/SkillContainer";
import { skillData } from "./Skillset/skillData";

export default function Skillset() {
  return (
    <div
      id="skillset"
      className="my-[15vh] flex flex-col items-center justify-center gap-[5vh] px-4"
    >
      <Title>Skill Set</Title>
      <p className="px-[10vw] text-center font-plus-jakarta-sans tracking-wider md:px-[15vw] lg:px-[15vw] lg:text-lg">
        Constantly experimenting and evolving. This is the tech stack I
        currently work with, while I keep learning and adding new tools to my
        belt.
      </p>
      <SkillContainer skills={skillData} />
    </div>
  );
}