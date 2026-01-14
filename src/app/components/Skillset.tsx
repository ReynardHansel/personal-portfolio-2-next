import Title from "./Reusable/Title";
import SkillCard from "./Skillset/SkillCard";
import { skillData } from "./Skillset/skillData";

export default function Skillset() {
  return (
    <div
      id="skillset"
      className="my-[15vh] flex flex-col items-center justify-center gap-[6vh] px-4"
    >
      <Title>Skill Set</Title>
      <div className="flex max-w-5xl flex-wrap justify-center gap-4">
        {skillData.map((skill, index) => (
          <SkillCard key={index} name={skill.name} icon={skill.icon || ""} />
        ))}
      </div>
    </div>
  );
}
