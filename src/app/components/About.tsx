import Image from "next/image";
import blob1 from "public/svg/blobs/about-left.svg";
import AboutText from "./About/AboutText";

export default function About() {
  return (
    <div className="relative flex min-h-screen items-center justify-center">
      <Image src={blob1} alt="" className="absolute -left-56 -top-14" />
      <div className="flex max-w-[80vw]">
        {/* IMAGE */}
        <div></div>

        {/* TEXT */}
        <AboutText />
      </div>
    </div>
  );
}
