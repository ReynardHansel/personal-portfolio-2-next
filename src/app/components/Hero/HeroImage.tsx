import profileImage from "public/images/bw-cool.png";
// import testImage from "public/images/test.jpg";
import Image from "next/image";
import { motion } from "framer-motion";
import "./clip_heroImage.css";
import BlobBackground from "./BlobBackground";

const imgVariants = {
  hidden: {
    opacity: 0,
    y: "50%",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 2.4,
      duration: 1.5,
      ease: [0.23, 1, 0.32, 1],
      // ease: "easeInOut",
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

export default function HeroImage() {
  return (
    <div
      id="container"
      className="relative left-6 hidden overflow-visible sm:flex items-center justify-center lg:top-12"
    >
      <BlobBackground />
      <div
        id="clipper"
        className="clip-section bottom-[.15rem] overflow-hidden pt-4 md:bottom-[.05rem] lg:bottom-0"
      >
        <motion.div
          variants={imgVariants}
          initial="hidden"
          animate="visible"
          className="relative"
          whileHover="hover"
        >
          <Image
            src={profileImage}
            alt="Profile Image"
            className="pointer-events-none relative scale-[118%]"
            // style={{ clipPath: "url(#clip1)" }}
          ></Image>
        </motion.div>
      </div>
    </div>
  );
}
