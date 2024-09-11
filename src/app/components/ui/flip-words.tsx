"use client";
import React, { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "lib/utils";

interface Word {
  text: string;
  className?: string;
}

export const FlipWords = ({
  words,
  duration = 3000,
  className,
}: {
  words: Word[];
  duration?: number;
  className?: string;
}) => {
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const startAnimation = useCallback(() => {
    const nextIndex = (words.indexOf(currentWord) + 1) % words.length;
    const nextWord = words[nextIndex];
    setCurrentWord(nextWord);
    setIsAnimating(true);
  }, [currentWord, words]);

  useEffect(() => {
    if (!isAnimating) {
      const timer = setTimeout(() => {
        startAnimation();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isAnimating, duration, startAnimation]);

  return (
    <AnimatePresence
      onExitComplete={() => {
        setIsAnimating(false);
      }}
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
        }}
        exit={{
          opacity: 0,
          y: -40,
          x: 40,
          filter: "blur(8px)",
          scale: 2,
          position: "absolute",
        }}
        className={cn(
          "z-10 inline-block relative text-left",
          className
        )}
        key={currentWord.text}
      >
        {currentWord.text.split(" ").map((word, index) => (
          <React.Fragment key={currentWord.text + index}>
            <motion.p
              initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                delay: index * 0.15,
                duration: 0.4,
              }}
              className={cn(
                "inline",
                currentWord.className // Apply the className from the current word
              )}
            >
              {word}
            </motion.p><span>&nbsp;</span>
          </React.Fragment>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};