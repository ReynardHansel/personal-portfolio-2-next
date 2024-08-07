import { FaGithub } from "react-icons/fa";
import Title from "../Reusable/Title";
import { LinkPreview } from "../ui/link-preview";
import { Button } from "@/components/ui/button";

export default function AboutText() {
  return (
    <div className="flex flex-col gap-5 text-lg tracking-wide">
      <Title>About Me</Title>
      <p>
        Hi! I'm Reynard, an undergraduate student at BINUS University with a
        passion for Web and Software Development, specializing in Front-End Web
        Development. My goal? Crafting apps with a pleasing experience that make
        users go, "Whoa!"
      </p>
      <p>
        With 3+ years of experience, I've built sleek, responsive interfaces
        using my favorite tools like{" "}
        <LinkPreview
          url="https://vitejs.dev/"
          className="font-bold text-porto_purple"
        >
          React/Vite
        </LinkPreview>
        ,{" "}
        <LinkPreview
          url="https://nextjs.org/"
          className="font-bold text-porto_purple"
        >
          Next.js
        </LinkPreview>
        ,{" "}
        <LinkPreview
          url="https://tailwindcss.com/"
          className="font-bold text-porto_purple"
        >
          Tailwind CSS
        </LinkPreview>
        ,{" "}
        <LinkPreview
          url="https://www.framer.com/motion/"
          className="font-bold text-porto_purple"
        >
          Framer Motion
        </LinkPreview>
        ,{" "}
        <LinkPreview
          url="https://create.t3.gg/"
          className="font-bold text-porto_purple"
        >
          T3 Stack
        </LinkPreview>
        , etc.
      </p>
      <p>
        When I'm not coding, I'm usually working on team projects or looking for
        new tools to upgrade my output (I LOVE finding out awesome tools that I
        end up using btw).
      </p>

      <div>
        <p>
          Here's my github if you'd like to check out some of my projects:{" "}
          <LinkPreview
            url="https://github.com/ReynardHansel"
            className="italic hover:underline"
          >
            <Button variant="default" className="inline-flex gap-2">
              <FaGithub className="inline scale-125" /> Reynard Hansel
            </Button>
          </LinkPreview>
        </p>
        {/* <Button variant="ghost" className="flex gap-2 -ml-2">
          <FaGithub className="inline scale-125" /> Reynard Hansel
        </Button> */}
      </div>
    </div>
  );
}
