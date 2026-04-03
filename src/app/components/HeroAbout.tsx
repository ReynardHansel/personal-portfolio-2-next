import { HeroHighlight } from "./ui/hero-highlight";
import HeroAboutText from "./HeroAbout/HeroAboutText";
import HeroAboutImage from "./HeroAbout/HeroAboutImage";
import HeroAboutContacts from "./HeroAbout/HeroAboutContacts";

export default function HeroAbout() {
  return (
    <HeroHighlight className="flex max-w-[80vw] flex-col items-center justify-center px-[5vw] sm:px-0">
      <div className="flex gap-[5vw]">
        {/* TEXT */}
        <div>
          <HeroAboutText />
          <HeroAboutContacts />
        </div>

        {/* IMAGE */}
        <HeroAboutImage />
      </div>
    </HeroHighlight>
  );
}
