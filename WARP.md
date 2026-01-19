# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion. The site showcases personal projects, skills, and contact information with custom animations and interactive UI components.

## Development Commands

### Running the Development Server
```bash
pnpm run dev
```
The development server runs on `http://localhost:3000` with hot-reload enabled.

### Building for Production
```bash
pnpm run build
```
Generates an optimized production build in the `.next` directory.

### Starting Production Server
```bash
pnpm run start
```
Runs the production build locally (must run `npm run build` first).

### Linting
```bash
pnpm run lint
```
Runs ESLint with Next.js configuration to check for code quality issues.

### Code Formatting
```bash
pnpm dlx prettier --write .
```
Formats code using Prettier with Tailwind CSS class sorting plugin.

## Architecture and Structure

### Directory Structure

```
src/
├── app/                          # Next.js App Router
│   ├── components/               # Page-level components
│   │   ├── About/                # About section sub-components
│   │   ├── Contact/              # Contact section sub-components
│   │   ├── Hero/                 # Hero section sub-components
│   │   ├── Navbar/               # Navigation sub-components
│   │   ├── Reusable/             # Shared components (Title, ButtonGradient, etc.)
│   │   ├── Skillset/             # Skillset section sub-components
│   │   ├── ui/                   # Custom UI components with animations
│   │   ├── About.tsx             # Main About section
│   │   ├── Contact.tsx           # Main Contact section
│   │   ├── Footer.tsx            # Footer section
│   │   ├── Hero.tsx              # Main Hero section
│   │   ├── Navbar.tsx            # Main Navigation
│   │   ├── Projects.tsx          # Main Projects section
│   │   └── Skillset.tsx          # Main Skillset section
│   ├── globals.css               # Global styles and Tailwind imports
│   ├── layout.tsx                # Root layout with metadata
│   └── page.tsx                  # Home page (imports all sections)
├── components/                   # Shared UI components
│   └── ui/                       # shadcn/ui components
├── data/                         # Content and data files
│   ├── projects.json             # Project metadata
│   └── projects.tsx              # Project content with JSX
└── lib/
    └── utils.ts                  # Utility functions (cn helper)

public/                           # Static assets
├── images/                       # Project screenshots
│   └── projects/                 # Organized by project name
└── svg/                          # SVG assets
    ├── about/                    # About section SVGs
    ├── blobs/                    # Decorative blob shapes
    ├── hero/                     # Hero section SVGs
    └── logo/                     # Technology/skill logos
```

### Key Architectural Patterns

#### Component Organization
- **Section-based structure**: Major sections (Hero, About, Skillset, Projects, Contact, Footer) are top-level components in `src/app/components/`
- **Sub-component folders**: Each major section has its own folder containing smaller, related components
- **Reusable components**: Shared components like `Title`, `ButtonGradient`, and `ProjectDetails` live in the `Reusable/` folder
- **UI components**: Custom animated components in `src/app/components/ui/` and shadcn/ui components in `src/components/ui/`

#### Data Management
- Project content is defined in `src/data/projects.tsx` as an array of objects with title, description, and JSX content
- Skill data is centralized in `src/app/components/Skillset/skillData.ts`
- Static assets (images, SVGs) are organized by purpose in the `public/` directory

#### Page Structure
The main page (`src/app/page.tsx`) is a single-page application that imports and renders all sections in sequence. Currently, most sections are commented out except for `Skillset`, indicating the site is under active development.

#### Styling Approach
- **Tailwind CSS**: Primary styling method with custom configuration
- **Custom colors**: Includes brand colors like `porto_purple` (#5060F0) and `broken_white` (#F2FCFD)
- **Custom fonts**: Plus Jakarta Sans (primary), Nunito Sans, and Helvetica Neue
- **Custom utilities**: 
  - `bg-dot-thick` for dotted backgrounds
  - `bg-gradient-text` for gradient text effects
  - CSS variables for shadcn/ui theming
- **Framer Motion**: Used extensively for animations and transitions

#### Path Aliases
- `@/*` maps to `./src/*` for cleaner imports

#### Image Handling
- Next.js Image component is used for optimized images
- External image domains configured in `next.config.mjs` (currently: `api.microlink.io`)
- Local images stored in `public/` directory

### Technology Stack
- **Framework**: Next.js 14 (App Router, RSC)
- **Language**: TypeScript with strict mode
- **Styling**: Tailwind CSS with custom configuration
- **Animations**: Framer Motion
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Icons**: Lucide React, React Icons
- **Code Quality**: ESLint (Next.js config), Prettier with Tailwind plugin

## Development Guidelines

### Adding New Components
- Place section components directly in `src/app/components/`
- Create a subfolder if the section needs multiple sub-components
- Put reusable components in `src/app/components/Reusable/`
- Custom UI/animation components go in `src/app/components/ui/`
- shadcn/ui components go in `src/components/ui/`

### Adding New Projects
1. Add project images to `public/images/projects/{project-name}/`
2. Add project entry to `src/data/projects.tsx` in the `content` array
3. Follow the existing structure: title, description (JSX), content (JSX with SwipeCarousel and ProjectDetails)

### Adding New Skills
Update the `skillData` array in `src/app/components/Skillset/skillData.ts` with the skill name, icon path, and brand color.

### Styling Conventions
- Use Tailwind utility classes for styling
- Use the `cn()` utility from `@/lib/utils` to merge class names conditionally
- Follow responsive-first design with Tailwind breakpoints (sm, md, lg, xl, 2xl)
- Prefer Tailwind custom utilities over inline styles

### Animation Conventions
- Use Framer Motion for complex animations
- Leverage custom Tailwind animations defined in `tailwind.config.ts` for simpler cases
- Mark components using client-side features (useState, useEffect, Framer Motion) with `"use client"`

### Image Optimization
- Always use Next.js `Image` component for local images
- Store images in appropriate `public/` subdirectories
- Add external image domains to `next.config.mjs` when needed
