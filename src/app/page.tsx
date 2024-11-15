import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skillset from "./components/Skillset";
// import UnderDevelopment from "./components/UnderDevelopment";

export default function Home() {
  return (
  <div className="overflow-x-hidden bg-white">
    <Navbar />
    <Hero />
    <About />
    <Skillset />
    <Projects />
    {/* <UnderDevelopment /> */}
    <Contact />
    <Footer />
  </div>
  );
}
