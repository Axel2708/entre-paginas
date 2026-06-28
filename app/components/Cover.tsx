"use client";

import { motion } from "framer-motion";

type CoverProps = {
  isOpen: boolean;
  onOpen: () => void;
};

export default function Cover({ isOpen, onOpen }: CoverProps) {
  return (
    <motion.button
      onClick={onOpen}
      disabled={isOpen}
      className="absolute left-0 top-0 w-full h-full rounded-2xl overflow-hidden bg-[var(--leather)] shadow-2xl origin-left z-30 cursor-pointer"
      animate={
        isOpen
          ? { rotateY: -160, x: -12 }
          : { rotateY: 0, x: 0 }
      }
      transition={{ duration: 1.4, ease: "easeInOut" }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/30" />

      <div className="absolute inset-5 rounded-xl border border-[var(--gold)]" />

      <div className="absolute top-5 left-5 w-10 h-10 border-l-2 border-t-2 border-[var(--gold)] rounded-tl-lg" />
      <div className="absolute top-5 right-5 w-10 h-10 border-r-2 border-t-2 border-[var(--gold)] rounded-tr-lg" />
      <div className="absolute bottom-5 left-5 w-10 h-10 border-l-2 border-b-2 border-[var(--gold)] rounded-bl-lg" />
      <div className="absolute bottom-5 right-5 w-10 h-10 border-r-2 border-b-2 border-[var(--gold)] rounded-br-lg" />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <h1 className="text-6xl font-bold tracking-[10px] text-[var(--gold)] drop-shadow-lg">
          Pequeños
        </h1>

        <h2 className="mt-2 text-5xl font-bold text-[var(--gold)] drop-shadow-lg">
          Momentos
        </h2>

        <div className="my-8 h-px w-56 bg-[var(--gold)]" />

        <p className="text-xl italic text-white/80">Recuerdos</p>

        <p className="mt-10 text-white/60">Haz clic para abrir</p>
      </div>
    </motion.button>
  );
}