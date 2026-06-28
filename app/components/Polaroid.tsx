type PolaroidProps = {
  src: string;
  caption: string;
  rotate?: string;
  variant?: "small" | "large";
};

export default function Polaroid({
  src,
  caption,
  rotate = "rotate-0",
  variant = "small",
}: PolaroidProps) {
  return (
    <div
      className={`
        w-full bg-white shadow-xl ${rotate}
        ${variant === "large" ? "p-5 pb-10" : "p-2 pb-6"}
      `}
    >
      <img
        src={src}
        alt={caption}
        className={`
          w-full object-cover
          ${variant === "large" ? "h-[300px]" : "h-32"}
        `}
      />

      <p
        className={`
          text-center italic text-[var(--text)]
          ${variant === "large" ? "mt-5 text-xl" : "mt-2 text-sm"}
        `}
      >
        {caption}
      </p>
    </div>
  );
}