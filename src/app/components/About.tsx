import Image from "next/image";
import blob1 from "public/svg/blobs/about-left.svg";
import blob2 from "public/svg/blobs/about-right.svg";
import AboutText from "./About/AboutText";
import AboutImage from "./About/AboutImage";

export default function About() {
  return (
    <div className="relative flex items-center justify-center mb-[10vh] py-14 sm:py-20 lg:py-32">
      <Image
        src={blob1}
        alt=""
        className="absolute -left-56 -top-14 hidden lg:block"
      />
      <div className="flex max-w-[80vw] grid-cols-2 flex-col gap-[5vw] lg:max-w-[75vw] md:flex-row">
        {/* IMAGE */}
        <AboutImage className="hidden md:grid" />

        {/* TEXT */}
        <AboutText />
      </div>
      <div className="absolute -bottom-32 right-0 -z-10 overflow-x-hidden md:-bottom-[13vh]">
        <Image
          src={blob2}
          alt=""
          className="relative -right-[45vw] h-[20vh] sm:-right-80 md:-right-96 md:h-[30vh] lg:h-[50vh]"
        />
      </div>
    </div>
  );
}

//* NOTE:
//* Breakpoint: md