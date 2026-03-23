import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import HeroAbout from "./components/HeroAbout";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skillset from "./components/Skillset";
// import UnderDevelopment from "./components/UnderDevelopment";

export default function Home() {
  return (
    <div className="flex flex-col items-center overflow-x-clip bg-white">
      <Navbar />
      {/* <Hero /> */}
      {/* <About /> */}
      <HeroAbout />
      <Skillset />
      <Experience />
      <Projects />
      {/* <UnderDevelopment /> */}
      <Contact />
      <Footer />
    </div>
  );
}
