"use client";

import { motion } from "framer-motion";

type TypeWriterProps = {
  text: string;
  speed?: number;
};

export default function TypeWriter({ text, speed = 0.025 }: TypeWriterProps) {
  return (
    <p className="mt-8 whitespace-pre-line text-lg leading-relaxed text-[var(--text)]">
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * speed }}
        >
          {char}
        </motion.span>
      ))}
    </p>
  );
}