import { MaterialSymbolsMail } from "public/svg/Mail";
import "./Contact/contact.css";
import Title from "./Reusable/Title";
import { RiWhatsappFill } from "public/svg/Whatsapp";
import { MdiLinkedin } from "public/svg/Linkedin";
import { RiInstagramFill } from "public/svg/Instagram";
import { MdiGithub } from "public/svg/GitHub";

export default function Contact() {
  return (
    <div className="bg-linear mt-[10vh] flex flex-col items-center justify-center gap-[5vh] py-[10vh] text-broken_white lg:min-h-[80vh]">
      <Title
        blockClassName="bg-broken_white"
        textClassName="text-broken_white font-nunito-sans tracking-wide"
      >
        Contact Me
      </Title>
      <p className="px-[10vw] text-center font-plus-jakarta-sans tracking-wider md:px-[15vw] lg:px-[20vw] lg:text-xl">
        I'd love to hear from you! Whether you have a project idea, a
        collaboration in mind, or just want to chat about the latest in tech,
        don't hesitate to reach out. I'm always open to new opportunities,
        interesting conversations, and creative challenges. Let's connect and
        see how we can create something awesome together!
      </p>

      {/* LINKS */}
      <div className="flex w-full flex-wrap items-center justify-between gap-4 px-[10vw] pt-[5vh]">
        <a
          href="#"
          className="flex flex-col flex-grow items-center gap-1 transition-all duration-300 hover:scale-110"
        >
          <MaterialSymbolsMail className="w-8 fill-broken_white" />
          <p className="hidden text-sm font-bold sm:block">
            reynardhansel@gmail.com
          </p>
        </a>
        <a
          href="#"
          className="flex flex-col flex-grow items-center gap-1 transition-all duration-300 hover:scale-110"
        >
          <RiWhatsappFill className="w-8 fill-broken_white" />
          <p className="hidden text-sm font-bold sm:block">0813-2003-6888</p>
        </a>
        <a
          href="#"
          className="flex flex-col flex-grow items-center gap-1 transition-all duration-300 hover:scale-110"
        >
          <MdiLinkedin className="w-8 fill-broken_white" />
          <p className="hidden text-sm font-bold sm:block">Reynard Hansel</p>
        </a>
        <a
          href="#"
          className="flex flex-col flex-grow items-center gap-1 transition-all duration-300 hover:scale-110"
        >
          <RiInstagramFill className="w-8 fill-broken_white" />
          <p className="hidden text-sm font-bold sm:block">reynardhansel</p>
        </a>
        <a
          href="#"
          className="flex flex-col flex-grow items-center gap-1 transition-all duration-300 hover:scale-110"
        >
          <MdiGithub className="w-8 fill-broken_white" />
          <p className="hidden text-sm font-bold sm:block">ReynardHansel</p>
        </a>
      </div>
    </div>
  );
}
