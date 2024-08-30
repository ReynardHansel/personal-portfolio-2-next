import Link from "next/link";

export default function Navbar() {
  return (
    <div className="fixed top-0 flex justify-between items-center h-[13vh] z-10 w-full px-[10vw]">
        <h2 className="font-bold font-nunito-sans text-lg sm:text-2xl">Reynard H.</h2>
        <div className="flex gap-[6vw] sm:text-lg justify-between font-nunito-sans">
            <Link href="#about" className="">About</Link>
            <Link href="#skillset" className="">Skill Set</Link>
            <Link href="#projects" className="">Projects</Link>
            <Link href="#contact" className="">Contact</Link>
        </div>
    </div>
  )
}
