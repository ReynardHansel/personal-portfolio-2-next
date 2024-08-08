import Image from "next/image";
import blob1 from "public/svg/blobs/about-left.svg";
import AboutText from "./About/AboutText";
import AboutImage from "./About/AboutImage";

export default function About() {
  return (
    <div className="relative flex items-center justify-center py-[20vh]">
      <Image src={blob1} alt="" className="absolute -left-56 -top-14" />
      <div className="flex max-w-[75vw] grid-cols-2 gap-[5vw]">
        {/* IMAGE */}
        <AboutImage />

        {/* TEXT */}
        <AboutText />
      </div>
    </div>
  );
}
