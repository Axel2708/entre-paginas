type StickyNoteProps = {
  title: string;
  text: string;
  rotate?: string;
};

export default function StickyNote({
  title,
  text,
  rotate = "rotate-0",
}: StickyNoteProps) {
  return (
    <div className={`w-full bg-[#fff3a6] p-3 shadow-md ${rotate}`}>
      <h3 className="text-sm font-bold text-[var(--text)]">{title}</h3>

      <p className="mt-1 text-xs leading-snug text-[var(--text)]">
        {text}
      </p>
    </div>
  );
}