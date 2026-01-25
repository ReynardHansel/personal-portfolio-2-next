"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Title from "./Reusable/Title";
import SkillCard from "./Skillset/SkillCard";
import { skillData } from "./Skillset/skillData";

export default function Skillset() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [lastInRowIndices, setLastInRowIndices] = useState<Set<number>>(
    new Set(),
  );

  useEffect(() => {
    const updateLastInRow = () => {
      if (!containerRef.current || cardRefs.current.length === 0) return;

      const indices = new Set<number>();
      const positions: { index: number; top: number }[] = [];

      cardRefs.current.forEach((card, index) => {
        if (card) {
          const rect = card.getBoundingClientRect();
          positions.push({ index, top: rect.top });
        }
      });

      const rows: number[][] = [];
      let currentRow: number[] = [];
      let currentTop = positions[0]?.top;

      positions.forEach(({ index, top }) => {
        // Allow a small tolerance (1px) for sub-pixel rendering differences
        if (Math.abs(top - currentTop!) > 1) {
          if (currentRow.length > 0) {
            rows.push(currentRow);
          }
          currentRow = [index];
          currentTop = top;
        } else {
          currentRow.push(index);
        }
      });

      if (currentRow.length > 0) {
        rows.push(currentRow);
      }

      rows.forEach((row) => {
        if (row.length > 0) {
          const lastIndexInRow = row[row.length - 1];
          indices.add(lastIndexInRow);
        }
      });

      setLastInRowIndices(indices);
    };

    updateLastInRow();

    const resizeObserver = new ResizeObserver(updateLastInRow);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    window.addEventListener("resize", updateLastInRow);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateLastInRow);
    };
  }, []);

  return (
    <div
      id="skillset"
      className="my-[15vh] flex flex-col items-center justify-center gap-[6vh] px-4"
    >
      <Title>Skill Set</Title>
      <motion.div
        ref={containerRef}
        className="flex max-w-5xl flex-wrap gap-4 px-[18%] sm:px-[20%]"
      >
        {skillData.map((skill, index) => (
          <div
            key={index}
            ref={(el) => {
              cardRefs.current[index] = el;
            }}
          >
            <SkillCard
              name={skill.name}
              icon={skill.icon || ""}
              color={skill.color || ""}
              isLastInRow={lastInRowIndices.has(index)}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}