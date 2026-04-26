import { SkillName } from "@/app/components/Skillset/skillData";

interface ProjectBentoData {
  id: number;
  title: string;
  description: string;
  images?: string[];
  role: string;
  location: string;
  status: "Completed" | "Deployed" | "In Progress" | "Archived";
  year: string;
  type: "Individual" | "Team";
  skills: SkillName[];
  problemStatement: string;
  architecturalLogic: string[];
  quotes: {
    quote: string;
    author: string;
    type?: "good" | "bad" | "neutral";
  }[];
  keyTakeaways: string[];
  sourceRepo: string | "private";
  liveDemo: string | "unavailable";
}

export const projectsBento: ProjectBentoData[] = [
  {
    id: 1,
    title: "Technoscape Summit 2024",
    description:
      "Landing page for Technoscape Summit (1 of 3 core pillars of BNCC's annual national technology event, alongside Hackathon and TechFest). Built with dynamic animations and interactive elements to deliver an engaging, polished user experience.",
    images: [
      "/images/projects/technoscape/1.png",
      "/images/projects/technoscape/2.png",
      "/images/projects/technoscape/3.png",
      "/images/projects/technoscape/4.png",
      "/images/projects/technoscape/5.png",
      "/images/projects/technoscape/6.png",
      "/images/projects/technoscape/7.png",
    ],
    role: "Frontend Developer",
    location: "Bandung & Jakarta",
    status: "Completed",
    year: "2024",
    type: "Team",
    problemStatement:
      "BNCC needed a high-traffic event website that could handle thousands of concurrent visitors on multiple devices, while the dev team had varying skill levels with no shared framework experience.",
    skills: ["HTML", "CSS", "JavaScript", "Tailwind", "Figma", "Git", "GitHub"],
    architecturalLogic: [
      "Prioritizing responsiveness so that it could reach as many audience as possible no matter what device they may be using",
      "Built with vanilla HTML and JS, using only TailwindCSS as a library, to match with each dev's skill level",
      "Heavy in absolute-positioning for the visual elements, sizing and anchoring them to the viewport or parent container so as to not break in any screen size",
    ],
    quotes: [
      {
        quote:
          "I don't even know how you managed to make that and all those elements without any frameworks!",
        author: "Rafael Marvin",
        type: "good",
      },
    ],
    keyTakeaways: [
      'Styling multiple elements in "everywhere" requires a dynamic sizing and placing of absolute-positioned elements. Whether it be using viewport units or percentage, it is important to consider the constraints of the parent container.',
      "For a big project/event that has a clear deadline and promises to sponsors, it is crucial to have a clear communication with the whole team, and having a scrum meeting once a week helps to keep everyone accountable and on the same page.",
      "It is also important to have a clear division of labor within the team, and to have a clear understanding of each member's responsibilities. This helps to ensure no confusion, misunderstanding, or miscommunication.",
    ],
    sourceRepo: "private",
    liveDemo: "unavailable",
  },
  //* DONE

  {
    id: 2,
    title: "Ripely",
    description:
      "A machine learning based iOS App developed in Apple Developer Academy for Machine Learning Challenge. Uses Computer Vision to identify the ripeness level of an apple and how to best store it.",
    images: [
      "/images/projects/ripely/1.png",
      "/images/projects/ripely/2.png",
      "/images/projects/ripely/3.png",
      "/images/projects/ripely/4.png",
      "/images/projects/ripely/5.png",
      "/images/projects/ripely/6.png",
      "/images/projects/ripely/7.png",
      "/images/projects/ripely/8.png",
    ],
    role: "iOS Developer",
    location: "Green Office Park 9, BSD City",
    status: "Deployed",
    year: "2025",
    type: "Team",
    problemStatement:
      "Academy learners who prioritize healthy nutrition need a reliable way to determine the ripeness of apples before purchasing them. Unlike bananas, which offer clear visual indicators of readiness, apples are difficult to assess externally. Because shoppers cannot cut or taste fruit at the point of sale, they frequently purchase suboptimal apples, leading to a breakdown in their healthy eating habits and unnecessary food waste.",
    skills: ["iOS", "Swift", "Figma", "AppStore"],
    architecturalLogic: [
      "Uses MVVM architecture to separate the UI, business logic, and data layers, making it easier to maintain and collaborate.",
      "Uses CoreML to run the machine learning model on-device",
      "Uses SwiftUI for the UI Framework and integration with UIKit for camera and ML features",
      "Uses Combine to synchronize the state between the ML background processes and the foreground UI.",
    ],
    quotes: [
      {
        quote:
          "I'm really impressed and thank the developers for making every UI element EXACTLY like the Figma design",
        author: "Natasha, Ripely Design Lead",
        type: "good",
      },
      {
        quote: "The design looks good, modern, and intuitive!",
        author: "Khawlah, Apple Developer Catalyst, Saudi Arabia",
        type: "good",
      },
      {
        quote:
          "Your test accuracy is overfitting, the data are not varying enough.",
        author: "Khawlah, Apple Developer Catalyst, Saudi Arabia",
        type: "bad",
      },
      {
        quote:
          "The features are too minimal, only able to detect the ripeness of red apples",
        author: "Khawlah, Apple Developer Catalyst, Saudi Arabia",
        type: "bad",
      },
    ],
    keyTakeaways: [
      "Building a product HAVE TO start with a clear, concise, and valid problem statement! Also it HAS to relate to your target audience, you have to be in their shoes.",
      "A team-decided architecture is a must have for developing a consistent and scalable product, especially also in integrating features made by different developers.",
      "A messy codebase leads to having more and more trouble, risks, and slower development process, at one point it is a good investment to take the time and refactor the codebase (before the mess get too much)",
      "Do not let tech debts be piled up too much.",
    ],
    sourceRepo: "https://github.com/Lunardy2509/Ripely",
    liveDemo: "https://apps.apple.com/id/app/ripely/id6747743774",
  },
  //* DONE

  {
    id: 3,
    title: "BNCC Bandung Showcase",
    description:
      "Portfolio and event showcase website for the Bina Nusantara Computer Club (BNCC) Bandung",
    images: [
      "/images/projects/bncc-showcase/1.png",
      "/images/projects/bncc-showcase/2.png",
      "/images/projects/bncc-showcase/3.png",
      "/images/projects/bncc-showcase/4.png",
    ],
    role: "Project Manager",
    location: "Bandung",
    status: "Deployed",
    year: "2024",
    type: "Team",
    problemStatement:
      "BNCC Bandung lacks a compelling way to demonstrate membership outcomes to BINUS freshmen, resulting in both the organization missing out on potential new talents, and the freshmen missing out on a great community, personal soft and hard skills improvement, a chance for a huge network, and many more.",
    skills: [
      "NextJS",
      "TypeScript",
      "Tailwind",
      "Motion",
      "Figma",
      "tRPC",
      "Prisma",
      "Zod",
      "GitHub",
      "Git",
    ],
    architecturalLogic: [
      "Relies on the Next.js App Router with dynamic paths for its foundational routing.",
      "Uses Tailwind CSS for styling and Framer Motion for animations",
      "Defaults to React Server Components for performance, only converting specific files to client components when interactivity demands it.",
    ],
    quotes: [
      {
        quote:
          "The design and subtle animations reflect BNCC's character well and perfectly highlight our content.",
        author: "Melisa Lea, BNCC CFO 2025/2026",
        type: "good",
      },
      {
        quote:
          "It would be better if the projects were categorized (web, mobile, etc.) to showcase the project's diversity.",
        author: "Melisa Lea, BNCC CFO 2025/2026",
        type: "bad",
      },
    ],
    keyTakeaways: [
      "Leading a team and a project really doesn't stop at the individual's skill level. You also have to pay attention to their motivation, their progress, the team's dynamics, and many more.",
      "Leading a team and their growth requires patience and attention. It doesn't mean the project will be perfect and have no errors, but you have to balance their growth and the project's quality for the next generation.",
      "Leading a team means to trust them and give them their respective responsibilities.",
    ],
    sourceRepo: "private",
    liveDemo: "https://showcasebdg.bncc.net/",
  },
  //* DONE

  {
    id: 4,
    title: "GYCC Prayer Support 2",
    description:
      "A redesign of the previous GYCC Prayer Support website. A form to collect prayer requests from the community to be prayed together, hosted on Netlify.",
    images: [
      "/images/projects/gycc-2/1.png",
      "/images/projects/gycc-2/2.png",
      "/images/projects/gycc-2/3.png",
      "/images/projects/gycc-2/4.png",
    ],
    role: "Solo Developer",
    location: "Bandung",
    status: "Deployed",
    year: "2024",
    type: "Individual",
    problemStatement:
      "The current in-person prayer request process prevents members from sharing private needs due to fear of being known, resulting in unshared burdens that never reach the team.",
    skills: ["React", "JavaScript", "Tailwind", "Motion"],
    architecturalLogic: [
      "Uses Netlify's native form collecting feature to store form data.",
      "Uses framer motion for smooth and controlled animations that drastically improves User Experience.",
      "Utilizes a timeout-driven numeric state as a simple state-machine to chronologically sequence the phases of the app.",
    ],
    quotes: [
      {
        quote: 'I like the tone now, feels like "Home". ',
        author: "Nathania Graciella",
        type: "good",
      },
      {
        quote: "Don't let the animations be too drawn out.",
        author: "Vincent Geraldi",
        type: "neutral",
      },
    ],
    keyTakeaways: [
      "It is of paramount importance to empathize with your target audiences, knowing their pain, and putting ourselves in their shoes, in order to understand their needs and craft the best help/solution.",
      "It's important to convince your audience that you understand them and that they TRULY CAN trust you.",
      "Approach with empathy and ears to listen and understand.",
    ],
    sourceRepo: "private",
    liveDemo: "https://gycc-2-support.netlify.app/",
  },
  //* DONE

  {
    id: 5,
    title: "QuizAI",
    description:
      "A platform for someone to learn something new by asking the AI about the topic they want to learn about, and then the AI will quiz them about it and share with them the results. Built for a National Hackathon Championship.",
    images: [
      "/images/projects/quizai/1.png",
      "/images/projects/quizai/2.png",
      "/images/projects/quizai/3.png",
      "/images/projects/quizai/4.png",
    ],
    role: "Project Manager & Developer",
    location: "Virtual",
    status: "Deployed",
    year: "2024",
    type: "Team",
    problemStatement:
      "Self-directed learners have endless access to information, but with no way to test their understanding or catch their own misunderstandings, they may build false confidence on shaky knowledge",
    skills: [
      "NextJS",
      "TypeScript",
      "Tailwind",
      "Motion",
      "tRPC",
      "Prisma",
      "Zod",
      "PostgreSQL",
      "GitHub",
      "Git",
    ],
    architecturalLogic: [
      "Responsive UI using sophisticated CSS Grid and Flexbox structures that employs a bento-grid aesthetic for an adaptable layout across all devices.",
      "UI is strcutured using modular reusable components for seperation of concerns",
      "Framer Motion is heavily integrated within client components to orchestrate fluid micro-animations and seamless page transitions.",
    ],
    quotes: [
      {
        quote: "This is a project worthy of getting in the top 3!",
        author: "Rafael Marvin",
        type: "good",
      },
    ],
    keyTakeaways: [
      "In the world of competition, speed of iteration and delivery is a must. And to achieve speed, one must have a clear vision, plan, and requirements.",
      "Iterations need to be quick. The team needs to be comfortable in making decisions and pivots.",
      "A bad decision is much better than overthinking and getting stuck trying to find the 'perfect' solution.",
    ],
    sourceRepo: "private",
    liveDemo: "https://quizai.rey.mba/",
  },
];
//* DONE

// feat(proj): Update projects data with real data