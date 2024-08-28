import Image from "next/image";
import Title from "./Reusable/Title";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import { content } from "@/data/projects";



export default function Projects() {
  return (
    <div className="flex flex-col items-center gap-[6vh] justify-center">
      <Title>Featured Projects</Title>
      <StickyScroll content={content} />
    </div>
  );
}
