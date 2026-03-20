import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HeroAbout from "./components/HeroAbout";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skillset from "./components/Skillset";
// import UnderDevelopment from "./components/UnderDevelopment";

export default function Home() {
  return (
  <div className="overflow-x-clip bg-white flex flex-col items-center">
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
