"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Cover from "./Cover";
import BookContent from "./BookContent";

export default function Book() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <div className="relative w-[760px] h-[500px] perspective">
      <div className="absolute inset-0 translate-y-12 scale-105 bg-black/30 blur-3xl rounded-full" />

      <motion.div
        className="relative w-full h-full"
        initial={{ scale: 0.9, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <BookContent
          isOpen={isOpen}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />

        <Cover isOpen={isOpen} onOpen={() => setIsOpen(true)} />
      </motion.div>

      <style jsx>{`
        .perspective {
          perspective: 1600px;
        }
      `}</style>
    </div>
  );
}