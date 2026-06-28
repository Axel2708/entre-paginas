"use client";

import TypeWriter from "./TypeWriter";

type LetterProps = {
  text: string;
};

export default function Letter({ text }: LetterProps) {
  return (
    <div className="relative mt-6 rounded-lg bg-[#fffaf0] p-6 shadow-xl border border-black/10">
      <div className="absolute -top-3 left-8 h-6 w-20 rotate-[-4deg] bg-[#e8d9b5]/80" />
      <div className="absolute -top-3 right-8 h-6 w-20 rotate-[4deg] bg-[#e8d9b5]/80" />

      <h3 className="text-2xl font-bold text-[var(--text)]">
        Para ti
      </h3>

      <TypeWriter text={text} speed={0.012} />
    </div>
  );
}