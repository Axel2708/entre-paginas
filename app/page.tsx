import Book from "./components/Book";

export default function Home() {
  return (
    <main className="w-screen h-screen flex items-center justify-center bg-[var(--wood)] overflow-hidden">
      <Book />
    </main>
  );
}