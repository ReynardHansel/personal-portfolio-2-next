import profileImage from "public/images/bw-cool.png";
import testImage from "public/images/test.jpg";
import blob1 from "public/svg/hero/elipse1.svg";
import Image from "next/image";
import "./clip_heroImage.css";
import BlobBackground from "./BlobBackground";

export default function HeroImage() {
  return (
      <div id="outer" className="relative left-6 top-12">
        <BlobBackground />
        <div id="inner" className="relative clip-section overflow-hidden pt-14 bottom-[.96rem]">
          <Image
            src={profileImage}
            alt="Profile Image"
            className="relative scale-125"
            // style={{ clipPath: "url(#clip1)" }}
          ></Image>
        </div>
      </div>
  );
}
