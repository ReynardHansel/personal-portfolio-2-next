import Image from "next/image";
import Title from "./Reusable/Title";
import SkillContainer from "./Reusable/SkillContainer";
import { skillData } from "./Skillset/skillData";

import blob2 from "public/svg/blobs/about-right.svg";

export default function Skillset() {
  return (
    <div
      id="skillset"
      className="relative my-[15vh] flex flex-col items-center justify-center gap-[5vh] px-4"
    >
      {/* BLOB */}
      <div className="absolute -bottom-32 right-0 z-0 overflow-visible md:-bottom-[37vh]">
        <Image
          src={blob2}
          alt=""
          className="relative -right-[45vw] h-[20vh] sm:-right-80 md:-right-96 md:h-[30vh] lg:h-[50vh]"
        />
      </div>

      <Title>Skill Set</Title>
      <p className="px-[10vw] text-center font-plus-jakarta-sans tracking-wider md:px-[15vw] lg:px-[15vw] lg:text-lg">
        Constantly experimenting and evolving. This is the tech stack I
        currently work with, while I keep learning and adding new tools to my
        belt.
      </p>
      <SkillContainer skills={skillData.map((s) => s.name)} />
    </div>
  );
}
