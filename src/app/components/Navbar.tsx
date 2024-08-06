export default function Navbar() {
  return (
    <div className="fixed top-0 flex justify-between items-center h-[13vh] z-10 w-full px-[10vw]">
        <h2 className="font-bold font-nunito-sans text-lg sm:text-2xl">Reynard H.</h2>
        <div className="flex gap-[6vw] sm:text-lg justify-between font-nunito-sans">
            <a href="#about" className="">About</a>
            <a href="#skillset" className="">Skill Set</a>
            <a href="#projects" className="">Projects</a>
            <a href="#contact" className="">Contact</a>
        </div>
    </div>
  )
}
