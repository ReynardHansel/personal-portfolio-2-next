import { ReactNode } from "react";
import Image from "next/image"; // Assuming you're using Next.js

// Define the type for the content items
interface ContentItem {
  title: string;
  description: string | ReactNode;
  content: ReactNode;
}

// Export the content array
export const content: ContentItem[] = [
  {
    title: "Metallica Web Project (incomplete)",
    description:
      'My very first successful web dev project. Here I learned HTML and CSS and how they are used as a foundation to build the web that I see everyday. I was so excited that I went out of my way to build an additional page: "Metallica-quotes.html" which is not included in the tutorial. There I tried CSS grid for the first time and I almost gave up to be honest :"). I also tried to download a font so the website would look more "Metallica" and successfully applied it. Later I learned git and github, and I pushed this project to my repo.',
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "GYCC Prayer Support",
    description:
      "My first real project that gets published/hosted online and used in real-time by my church community. The idea is to support our user's prayer by collecting their prayer intention and then pray it together for them. I was so excited when I learned that it's possible to host a site online for free, even to gather data using forms! I tried my best here for the first time on CSS animations to make a pleasing experience for my community and every user. Finally, I hosted it on netlify and the project is online and is being used until this day. My first ever project that is 'useful' and my way to give back to the community :D!!",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "BNCC Store",
    description: (
      <>
        <p className="mb-9">
          My first experience in team leading and also my first time touching
          Javascript. I must say it was quite a challenging but fun experience.
          I get to really connect with my team members at BNCC on a much deeper
          level. Here's more or less what I did: I tried to look at the big
          picture of the project --&gt; plan a rough sketch and the UI wireframe
          in Figma --&gt; we select the fitting tools/techstacks --&gt; divided
          the tasks for each person --&gt; monitor the execution, ensuring that
          the deadline could be met --&gt; while consulting with my team and
          implementing ideas.
        </p>

        <p>
          The most impactful thing is when I consult with my team and then
          implement our ideas. My first idea/rough sketch was really basic. But
          after doing this, I saw the UI of the project became sooo amazing and
          pleasing!! It's my first taste of "WHOA...!" in a front-end project,
          which became my motivation for each project from there on out!
        </p>
      </>
    ),

    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
        Version control
      </div>
    ),
  },
  {
    title: "Assurance of Learning: Database",
    description: (
      <>
        <p className="mb-9">
          My first project that touches Back-End and Database. Even as a team, I
          struggled hard at figuring out how to make the connection between
          FrontEnd - BackEnd - Database works. Tutorials were lacking in YouTube
          and on the web back then because NextJS' App Router was still new.
        </p>
        <p>
          I contacted and bothered my friends that are more experienced than me.
          And finally, with the help of my friends, online references, and a
          little help from AI to put things together, I finally succeeded in
          making the app running correctly. I felt so happy and proud that I
          finally am able to bridge the connection between FrontEnd and BackEnd.
        </p>
      </>
    ),
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Running out of content
      </div>
    ),
  },
  {
    title: "Technoscape - Techno Summit",
    description: (
      <>
        <p className="mb-9">
          My first time working within a team, for a professional and live
          project of a big event. Here my view in project management in a whole
          is expanded and I got to see a different view and approach to problem
          solving and team management. I'm paired with a UI/UX designer and we
          both discussed everything about realizing the project from design to
          live, and whether or not some designs are possible.
        </p>
        <p>
          In this project I'm limited to only allowed to use Tailwind on
          framework. So my approach to building this web app became a real
          challenge for me, especially on positioning the majority of elements,
          which is not my style of design at all. But it turned out that I
          learned a lot from this and it became like a real-life experience of
          what I could expect I'll go through as a developer.
        </p>
      </>
    ),
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Running out of content
      </div>
    ),
  },
];
