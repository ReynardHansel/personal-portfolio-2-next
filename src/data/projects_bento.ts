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
  skills: SkillName[];
  architecturalLogic: string;
  quote: string;
  quoteAuthor: string;
  keyTakeaways: string;
  sourceRepo?: string;
  liveDemo?: string;
}

export const projectsBento: ProjectBentoData[] = [
  {
    id: 1,
    title: "Portfolio Redesign",
    description:
      "A comprehensive redesign of a personal portfolio website, focusing on minimal design principles and seamless user experience across all devices.",
    images: [
      "https://picsum.photos/seed/1/800/800",
      "https://picsum.photos/seed/12/800/600",
      "https://picsum.photos/seed/13/800/600",
      "https://picsum.photos/seed/14/800/600",
    ],
    role: "Lead Designer",
    location: "Remote",
    status: "Completed",
    year: "2024",
    skills: ["React", "NextJS", "Tailwind", "TypeScript"],
    architecturalLogic:
      "Component-based architecture with emphasis on performance and scalability. Built using modern React patterns with server-side rendering for optimal SEO.",
    quote:
      "A thoughtful design that prioritizes user experience through clean architecture.",
    quoteAuthor: "Client Review",
    keyTakeaways:
      "Simplified architecture leads to better maintainability and user satisfaction. Clear separation of concerns allows for easier iteration.",
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with real-time inventory management, payment processing, and an intuitive admin dashboard.",
    images: [
      "https://picsum.photos/seed/2/800/800",
      "https://picsum.photos/seed/22/800/600",
      "https://picsum.photos/seed/23/800/600",
      "https://picsum.photos/seed/24/800/600",
    ],
    role: "Full Stack Developer",
    location: "Copenhagen",
    status: "Completed",
    year: "2023",
    skills: ["NextJS", "TypeScript", "PostgreSQL", "Tailwind"],
    architecturalLogic:
      "Microservices architecture with API-first design. PostgreSQL for data persistence with Prisma ORM for type-safe database access.",
    quote:
      "The platform handles thousands of concurrent users with impressive uptime and performance metrics.",
    quoteAuthor: "Tech Lead Review",
    keyTakeaways:
      "Optimized database queries reduced load times by 60%. Effective caching strategies improved overall system responsiveness.",
  },
  {
    id: 3,
    title: "Mobile App Development",
    description:
      "Cross-platform mobile application for task management with real-time collaboration features and offline capabilities.",
    images: [
      "https://picsum.photos/seed/3/800/800",
      "https://picsum.photos/seed/32/800/600",
      "https://picsum.photos/seed/33/800/600",
      "https://picsum.photos/seed/34/800/600",
    ],
    role: "Mobile Developer",
    location: "Berlin",
    status: "Deployed",
    year: "2023",
    skills: ["Flutter", "SQL", "Figma"],
    architecturalLogic:
      "Clean architecture with BLoC pattern for state management. Local database for offline functionality with cloud sync capabilities.",
    quote:
      "The app maintains a 4.8-star rating with over 50,000 active users praising its intuitive interface.",
    quoteAuthor: "Product Manager",
    keyTakeaways:
      "Extensive user testing revealed key usability improvements. Progressive Web App fallback ensured accessibility on all devices.",
  },
  {
    id: 4,
    title: "Dashboard Analytics",
    description:
      "Real-time analytics dashboard with interactive visualizations, custom reporting, and automated insights powered by machine learning.",
    images: [
      "https://picsum.photos/seed/4/800/800",
      "https://picsum.photos/seed/42/800/600",
      "https://picsum.photos/seed/43/800/600",
      "https://picsum.photos/seed/44/800/600",
    ],
    role: "Lead Designer",
    location: "Amsterdam",
    status: "Completed",
    year: "2024",
    skills: ["React", "Motion", "Figma", "TypeScript"],
    architecturalLogic:
      "Recharts library for data visualization with custom theming. Optimized re-renders using React.memo and strategic state management.",
    quote:
      "Interactive charts and smooth animations make complex data instantly comprehensible.",
    quoteAuthor: "Executive Review",
    keyTakeaways:
      "Performance optimizations allowed real-time updates without frame drops. Accessibility compliance reached WCAG 2.1 AA standards.",
  },
  {
    id: 5,
    title: "SaaS Platform",
    description:
      "Multi-tenant SaaS solution for project management with role-based access control, billing integration, and comprehensive API.",
    images: [
      "https://picsum.photos/seed/5/800/800",
      "https://picsum.photos/seed/52/800/600",
      "https://picsum.photos/seed/53/800/600",
      "https://picsum.photos/seed/54/800/600",
    ],
    role: "Backend Developer",
    location: "Remote",
    status: "In Progress",
    year: "2024",
    skills: ["NextJS", "PostgreSQL", "Prisma", "TypeScript"],
    architecturalLogic:
      "Serverless architecture using Next.js API routes. Multi-tenancy handled at database level with row-level security policies.",
    quote:
      "Modern stack choices ensure maintainability while supporting enterprise-scale requirements.",
    quoteAuthor: "Architecture Review",
    keyTakeaways:
      "Early security considerations prevented major refactoring. API versioning strategy allows graceful upgrades.",
  },
  {
    id: 6,
    title: "Brand Identity System",
    description:
      "Complete brand identity system including logo design, typography guidelines, color palette, and comprehensive usage documentation.",
    images: [
      "https://picsum.photos/seed/6/800/800",
      "https://picsum.photos/seed/62/800/600",
      "https://picsum.photos/seed/63/800/600",
      "https://picsum.photos/seed/64/800/600",
    ],
    role: "Creative Director",
    location: "London",
    status: "Completed",
    year: "2023",
    skills: ["Figma", "Motion"],
    architecturalLogic:
      "Design system built on atomic design principles. Each component documented with usage guidelines and accessibility notes.",
    quote:
      "Cohesive brand identity that scales from startup pitch deck to enterprise collateral.",
    quoteAuthor: "Creative Director",
    keyTakeaways:
      "Systematic approach reduced design inconsistency by 80%. Clear guidelines accelerated onboarding for new team members.",
  },
];