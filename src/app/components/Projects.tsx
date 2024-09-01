import Image from "next/image";
import Title from "./Reusable/Title";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import { content } from "@/data/projects";
import blob1 from "public/svg/blobs/projects-left.svg";
import blob2 from "public/svg/blobs/projects-bottom.svg";
import blobBtm from "public/svg/blobs/mobile-projects-left.svg";

export default function Projects() {
  return (
    <div
      id="projects"
      className="relative flex flex-col items-center justify-center gap-[10vh] py-[15vh]"
    >
      <Image
        src={blob1}
        alt=""
        className="absolute -left-64 -top-32 hidden sm:block lg:-left-36 lg:-top-20"
      />
      <Image
        src={blobBtm}
        alt=""
        className="absolute -left-8 top-0 scale-150 sm:hidden"
      />
      <Title>Featured Projects</Title>
      <StickyScroll content={content} />
      <Image
        src={blob2}
        alt=""
        className="absolute -bottom-96 -z-10 lg:right-72"
      />
    </div>
  );
}
