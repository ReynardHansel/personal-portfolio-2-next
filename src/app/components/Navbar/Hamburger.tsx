import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { AnimatedHamburgerButton } from "./AnimatedHamburgerButton";

export default function Hamburger() {
  const [open, setOpen] = useState(false);

  const closePopover = () => {
    //* setTimeout to delay the closing of the popover, because smooth scrolling instantly stopped when the popover is closed
    setTimeout(() => {
      setOpen(false);
    }, 500);
  };

  return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild className="">
          <Button
            variant="ghost"
            className="relative left-4 p-0"
            onClick={() => setOpen(!open)}
          >
            <AnimatedHamburgerButton />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          align="end"
          className="flex w-fit flex-col items-end gap-2 px-6"
        >
          <Link href="#about" className="" onClick={closePopover}>
            About
          </Link>
          <Separator />
          <Link href="#skillset" className="" onClick={closePopover}>
            Skill Set
          </Link>
          <Separator />
          <Link href="#projects" className="" onClick={closePopover}>
            Projects
          </Link>
          <Separator />
          <Link href="#contact" className="" onClick={closePopover}>
            Contact
          </Link>
        </PopoverContent>
      </Popover>
  );
}
