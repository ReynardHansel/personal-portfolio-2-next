---
name: agents
description: Guide for agentic coding agents working in this Next.js portfolio project. Use when starting a new task or when asked to explain project conventions.
---

# AGENTS.md - Coding Guide for This Repository

## Project Overview

Personal portfolio website built with Next.js 14 (App Router), TypeScript (strict mode), Tailwind CSS, Framer Motion, and shadcn/ui. Single-page application rendering all sections sequentially from `src/app/page.tsx`.

## Build / Lint / Test Commands

- **Dev server:** `pnpm run dev` (runs on http://localhost:3000)
- **Production build:** `pnpm run build`
- **Lint:** `pnpm run lint` (ESLint via Next.js built-in config)
- **Format:** `pnpm dlx prettier --write .` (Prettier with Tailwind class-sorting plugin)
- **No test framework is configured.** There are no test scripts, no test runner, and no test files. If adding tests, set up Vitest or Jest first and add scripts to package.json.
- **No single-test command exists yet.** Once a test runner is added, use e.g. `pnpm vitest run path/to/test.test.ts` for a single test.

## Package Manager

Use **pnpm** exclusively (pnpm-lock.yaml is present). Never use npm or yarn.

## Directory Structure

```
src/
├── app/
│   ├── components/          # Page-level section components & sub-folders
│   │   ├── {Section}/      # Sub-components per section (Hero/, About/, etc.)
│   │   ├── Reusable/       # Shared components (Title, ButtonGradient, etc.)
│   │   ├── ui/             # Custom animated UI components (kebab-case files)
│   │   └── {Section}.tsx   # Main section component files
│   ├── globals.css          # Global styles + Tailwind directives
│   ├── layout.tsx           # Root layout with metadata & fonts
│   └── page.tsx             # Home page composing all sections
├── components/ui/           # shadcn/ui components (button, carousel, etc.)
├── data/                    # Content/data files (projects.tsx, exp.tsx)
└── lib/utils.ts             # cn() utility function

public/
├── images/projects/         # Project screenshots
└── svg/                     # SVG assets (blobs, logos, icons as .tsx)
```

## Code Style Guidelines

### Imports

- Use `@/` path alias for src-level imports: `import { cn } from "@/lib/utils"`, `import { Button } from "@/components/ui/button"`
- Use relative imports within the same component tree: `./HeroText`, `../Reusable/Title`
- React is **not** explicitly imported (JSX transform handles it)
- Always prefer `@/lib/utils` over `lib/utils` (duplicate exists at root level — avoid using it)

### "use client" Directive

Add `"use client"` at the top of any component file that uses:

- Framer Motion (`motion`, `AnimatePresence`, hooks like `useScroll`, `useMotionValueEvent`)
- React hooks (`useState`, `useEffect`, `useRef`, `useCallback`)
- Event handlers (`onClick`, `onChange`, etc.)
- Browser APIs (`window`, `document`)

Leave components as server components (no directive) when they only render JSX and pass props.

### TypeScript

- Strict mode is enabled (`strict: true` in tsconfig.json)
- Define prop types as inline types/interfaces directly above the component: `type TitleProps = { text: string; className?: string }`
- Use `React.ReactNode` for children/content props
- Derive types from data using `typeof` + `as const`: `type SkillName = typeof skillData[number]["name"]`
- shadcn/ui components use `React.ComponentProps<>`, `React.ElementRef<>`, `VariantProps<typeof cva>`
- Never use `any` — use proper types or `unknown` with type guards

### Naming Conventions

- **Components:** PascalCase (`HeroText`, `SkillCard`, `ButtonGradient`)
- **Component files:** PascalCase for section/reusable components (`HeroText.tsx`, `SkillCard.tsx`)
- **Custom UI component files:** kebab-case (`hero-highlight.tsx`, `flip-words.tsx`, `3d-pin.tsx`)
- **shadcn/ui files:** lowercase (`button.tsx`, `carousel.tsx`)
- **Data files:** camelCase (`skillData.ts`, `projects.tsx`)
- **CSS files:** kebab-case (`contact.css`, `clip_heroImage.css`)
- **Exports:** Named exports for sub-components, default exports for main section components
- **Framer Motion variants:** camelCase module-level constants (`containerVariants`, `itemVariants`)

### Styling

- Tailwind CSS is the primary styling method — avoid inline styles except for dynamic values
- Use `cn()` from `@/lib/utils` for conditional/merged class names: `cn("base-class", condition && "conditional-class")`
- Follow mobile-first responsive design: base styles then `sm:`, `md:`, `lg:`, `xl:`, `2xl:` breakpoints
- Brand colors: `porto_purple` (#5060F0), `broken_white` (#F2FCFD) + shadcn/ui CSS variable system
- Custom fonts: Plus Jakarta Sans (primary), Nunito Sans, Helvetica Neue
- Only use custom CSS files for complex effects (clip-paths, gradients) that Tailwind cannot express
- Store component-specific CSS alongside the component in its subfolder

### Animations (Framer Motion)

- Define animation variants as `const` objects outside the component for reusability
- Use `initial`, `animate`, `whileInView`, `exit` pattern
- Always use variants for setting up animations. Do not use inline styles for animations.
- Wrap mount/unmount animations with `AnimatePresence`
- Use `useScroll`, `useTransform`, `useSpring` for scroll-based effects
- Prefer Framer Motion for complex animations; use custom Tailwind animations (defined in `tailwind.config.ts`) for simpler cases

### Error Handling

- Use fallback values for optional data: `skillData.find(...) || { name, icon, color }`
- Validate URLs before rendering with utility functions (e.g., `isValidUrl()`)
- Throw descriptive errors in context hooks: `throw new Error("useX must be used within <XProvider>")`
- No global error boundary is currently configured — consider adding one for production

### Formatting

- Prettier handles formatting with `prettier-plugin-tailwindcss` for automatic class sorting
- Run `pnpm dlx prettier --write .` before committing to ensure consistent formatting
- Double quotes for strings in TypeScript/TSX (Prettier default)
- Semicolons are used in custom component files; shadcn/ui files tend to omit them — follow the pattern of the file you're editing
- Comments use `//` for single-line, `{/* */}` in JSX

### Adding New Components

1. Section components → `src/app/components/{SectionName}.tsx`
2. Sub-components → `src/app/components/{SectionName}/{SubComponent}.tsx`
3. Reusable components → `src/app/components/Reusable/{Component}.tsx`
4. Custom animated UI → `src/app/components/ui/{component-name}.tsx` (kebab-case)
5. shadcn/ui components → `src/components/ui/` (use `pnpm dlx shadcn@latest add {component}`)

### Adding New Data

- Projects: add entry to `content` array in `src/data/projects.tsx`; add images to `public/images/projects/{name}/`
- Skills: update `skillData` in `src/app/components/Skillset/skillData.ts`
- Experience: update `EXPERIENCES` in `src/data/exp.tsx`

### Key Dependencies

| Dependency                 | Purpose                                                      |
| -------------------------- | ------------------------------------------------------------ |
| Next.js 14                 | Framework (App Router, RSC)                                   |
| React 18                   | UI library                                                   |
| TypeScript 5                | Type safety (strict mode)                                    |
| Tailwind CSS 3              | Styling                                                      |
| Framer Motion 11            | Animations                                                   |
| Radix UI                    | Accessible primitives (hover-card, popover, separator, slot) |
| shadcn/ui                   | Component system (via components.json)                       |
| class-variance-authority    | Variant-based styling                                         |
| embla-carousel              | Carousel with fade + autoplay                                 |
| lucide-react + react-icons  | Icons                                                        |
| clsx + tailwind-merge       | Conditional class merging (via `cn()`)                       |
