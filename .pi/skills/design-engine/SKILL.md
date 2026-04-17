---
name: design-engine
description: Convert UI design images into high-fidelity Next.js components. Use this skill when asked to build a new section or layout based on an image, ensuring strict adherence to the existing project design system.
---

# Design Engine

## Goal
Translate visual designs from images into clean, responsive, and performant React components that feel native to the existing portfolio design system.

## Implementation Workflow

### 1. Visual Analysis
When an image is provided, analyze the following:
- **Layout Structure**: Identify the grid/flexbox arrangement, spacing, and alignment.
- **Typography**: Map the visual weight and size to the design system's fonts (Plus Jakarta Sans, Nunito Sans, Helvetica Neue).
- **Color Palette**: Match colors to `porto_purple` (#5060F0), `broken_white` (#F2FCFD), and the shadcn/ui CSS variables.
- **Interactions**: Identify potential hover effects or animations that should be implemented with Framer Motion.

### 2. Design System Alignment
Strictly follow the conventions defined in `AGENTS.md`:
- **Components**: Use PascalCase for components.
- **UI Elements**: Use kebab-case for custom UI components in `src/app/components/ui/`.
- **Styling**: Use Tailwind CSS exclusively. Use `cn()` from `@/lib/utils` for conditional classes.
- **Animations**: Define Framer Motion variants outside the component. Use `initial`, `animate`, `whileInView`, and `exit`.
- **Directives**: Add `"use client"` if the component uses hooks or Framer Motion.

### 3. Component Architecture
- **Atomic Design**: Break the layout into smaller, reusable components within the section's folder.
- **Data-Driven**: Separate the content (text, image paths) into a data object or a separate file in `src/data/` if it's likely to change.
- **Responsive**: Use a mobile-first approach (`base` $\to$ `sm` $\to$ `md` $\to$ `lg` $\to$ `xl`).

## Technical Constraints
- **Performance**: Use `next/image` for all images.
- **Accessibility**: Use semantic HTML (e.g., `section`, `article`, `h2` through `h6`) and ensure sufficient color contrast.
- **Strict Typing**: Define prop types as inline interfaces/types. Never use `any`.

## Output Requirements
When proposing a layout, provide:
1. **Architecture plan**: Brief description of the component hierarchy.
2. **The Code**: The complete implementation following all project guidelines.
3. **Design Justification**: Explain how the implementation matches the provided image and the existing design system.
