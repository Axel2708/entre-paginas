"use client";

import { motion, AnimatePresence } from "framer-motion";
import TypeWriter from "./TypeWriter";
import Polaroid from "./Polaroid";
import StickyNote from "./StickyNote";
import Letter from "./Letter";

type BookContentProps = {
  isOpen: boolean;
  currentPage: number;
  setCurrentPage: (page: number) => void;
};

const pages = [
{
  title: "Prólogo",
  type: "typewriter",
  text: `Hay personas que llegan a nuestra vida sin esperarlas y poco a poco terminan ocupando un lugar que nunca imaginamos.

Este libro no cuenta una historia perfecta, porque las mejores nunca lo son. Está hecho de pequeños momentos, pequeñas conversaciones llenas de emoción, risas descolocadas, momentos que se congelaron en fotos y frases que, aunque para otros no signifiquen algo, para nosotros guardan muchas emociones.

Si alguna vez todo se va, en este libro encontrarás los momentos lindos que pasamos juntos con nuestras frases.`,

  rightPolaroid: {
    src: "/photos/21.jpeg",
    caption: "La persona que llego.",
    rotate: "-rotate-2",
  },
},
  {
    title: "Índice",
    type: "index",
    chapters: [
      { label: "Capítulo I", title: "Cómo empezó todo", page: 2 },
      { label: "Capítulo II", title: "Pequeños momentos", page: 3 },
      { label: "Capítulo III", title: "Frases mieles", page: 4 },
      { label: "Capítulo IV", title: "Fotos y recuerdos", page: 5 },
      { label: "Capítulo V", title: "Gracias por existir", page: 6 },
    ],
  },
 {
  title: "Capítulo I",
  type: "normal",
  subtitle: "Cómo empezó todo",
  text: `
        Todo inicio en la univesidad, nos hicieron equipo en redes y queria hablarte aunque me daba pena el equipo fue la excusa perfecta para comenzar hacerlo.
        Luego revalidaste ingles y comenzamos a compartir tiempo juntos, platicando de lo que nos gustaba y lo que no. Y asi empezo todo conociendo lo bueno y malo de cada uno , compartiendo momentos lindos ,tristes y enojos. 
        
        Gracias por cada momento....`,
  rightPolaroid: {
    src: "/photos/1.jpeg",
    caption: "El inicio de todo....",
    rotate: "-rotate-2",
  },
},
  {
  title: "Capítulo II",
  type: "normal",
  subtitle: "Pequeños momentos",
  text: `Cada foto es un pequeño recuerdo de cada aventura juntos.
    Hemos pasado diferentes momentos , dificiles , feos pero tambien bonitos y aqui estan algunos de esos momentos en los que disfrutamos pequeños momentos , donde hubieron risas, momentos chistosos.
    
    En poco tiempo han pasado muchas cosas y de la mayoria eh aprendido que es muy lindo pasar tiempo contigo , muriendonos de risa o tristes . No se que depare el futuro o que pase mañana solo si tengo claro que estoy feliz de tener a una persona como tu en mi vida , con ese corazon que vale oro. `,
  rightPolaroid: {
    src: "/photos/20.jpg",
    caption: "Cada momento contigo se volvió un recuerdo bonito.",
    rotate: "rotate-2",
  },
},

 {
  title: "Capítulo III",
  type: "funny",
  subtitle: "Frases mieles",
  leftNotes: [
    { title: "Frase 1", text: "Pela la mazorca.", rotate: "-rotate-1" },
    { title: "Frase 2", text: "Esta tete.", rotate: "rotate-1" },
    { title: "Frase 3", text: "Ven y amame.", rotate: "-rotate-1" },
    { title: "Frase 4", text: "Huye , venado.", rotate: "rotate-1" },
    { title: "Frase 5", text: "Collelle collelle.", rotate: "-rotate-1" },
    { title: "Frase 6", text: "Tonoto.", rotate: "rotate-1" },
    { title: "Frase 7", text: "Abacho y pecho.", rotate: "-rotate-1" },
    { title: "Frase 8", text: "Por partes como jack.", rotate: "rotate-1" },
    { title: "Frase 9", text: "Te quiero tanto que te comería.", rotate: "-rotate-1" },
    { title: "Frase 10", text: "Snoopido.", rotate: "rotate-1" },
    { title: "Frase 11", text: "Que me ves te debo?.", rotate: "-rotate-1" },
    { title: "Frase 12", text: "Cuchame.", rotate: "rotate-1" },
    { title: "Frase 13", text: "El que es chido es chido.", rotate: "-rotate-1" },
    { title: "Frase 14", text: "Iguanitos , Drilococo.", rotate: "rotate-1" },
    { title: "Frase 15", text: "Espero que sigamos teniendo mas frases .", rotate: "-rotate-1" },
    { title: "Frase 16", text: "Te quiero mucho.", rotate: "rotate-1" },
  ],
  rightPolaroid: {
    src: "/photos/12.jpeg",
    caption: "Nuestra colección de frases raritas",
    rotate: "-rotate-2",
  },
},
  {
    title: "Capítulo IV",
    type: "photos",
    subtitle: "Fotos y recuerdos",
   leftPhotos: [
  {
    src: "/photos/1.jpeg",
    caption: "Nuestra primer foto",
    rotate: "-rotate-2",
  },
  {
    src: "/photos/2.jpeg",
    caption: "Primera salida juntos",
    rotate: "rotate-1",
  },
  {
    src: "/photos/3.jpeg",
    caption: "Linda sonrisa",
    rotate: "rotate-1",
  },
  {
    src: "/photos/6.jpeg",
    caption: "Primera vez que jugamos",
    rotate: "-rotate-1",
  },
  {
    src: "/photos/4.jpeg",
    caption: "Un recuerdo más",
    rotate: "rotate-2",
  },
  {
    src: "/photos/5.jpeg",
    caption: "Primera foto que te tome",
    rotate: "-rotate-2",
  },
],
    rightPhotos: [
      {
        src: "/photos/7.jpeg",
        caption: "Nuestra primer feria",
        rotate: "rotate-2",
      },
      {
        src: "/photos/8.jpeg",
        caption: "Un día bonito",
        rotate: "-rotate-1",
      },
      {
        src: "/photos/10.jpeg",
        caption: "Pegados como siempre",
        rotate: "rotate-1",
      },
      {
        src: "/photos/11.jpeg",
        caption: "Aprendiendo ",
        rotate: "-rotate-2",
      },
    ],
  },
  
 {
  title: "Capítulo V",
  type: "letter",
  subtitle: "Gracias por existir",
  text: `Gracias por cada risa, cada momento raro,
cada salida, cada frase que se volvió nuestra.

Gracias por aparecer en mi vida
como esas páginas que uno no sabía que necesitaba leer.

Espero que nuestras aventuras no terminen.

Atte:
Axel.`,

  rightPolaroid: {
    src: "/photos/us snoopy.png",
    caption: "Espero que este solo sea otro capítulo de muchos más.",
    rotate: "-rotate-2",
  },
},
];

export default function BookContent({
  isOpen,
  currentPage,
  setCurrentPage,
}: BookContentProps) {
  const page = pages[currentPage];

  const nextPage = () => {
    setCurrentPage(currentPage === pages.length - 1 ? 0 : currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage === 0 ? pages.length - 1 : currentPage - 1);
  };

  const isPhotoPage = page.type === "photos";

  return (
    <div className="absolute inset-0 rounded-2xl bg-[var(--leather-dark)] p-7 shadow-2xl">
      <div className="relative flex h-full overflow-hidden rounded-xl bg-[var(--paper)]">
        {/* HOJA IZQUIERDA */}
        <div className="relative w-1/2 overflow-hidden border-r border-black/10 p-8">
          <AnimatePresence mode="wait">
            {isOpen && (
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-4xl font-bold text-[var(--text)]">
                  {page.title}
                </h2>

                {"subtitle" in page && (
                  <p className="mt-1 text-xl italic text-[var(--text)]/70">
                    {page.subtitle}
                  </p>
                )}

                {page.type === "typewriter" && "text" in page && (
                  <TypeWriter text={page.text ?? ""} />
                )}

                {page.type === "normal" && "text" in page && (
                  <p className="mt-8 whitespace-pre-line text-lg leading-relaxed text-[var(--text)]">
                    {page.text}
                  </p>
                )}

                {page.type === "letter" && "text" in page && (
  <Letter text={page.text} />
)}

      {page.type === "funny" && "leftNotes" in page && (
  <div className="mt-4 grid grid-cols-2 gap-2">
    {page.leftNotes.map((note) => (
      <StickyNote
        key={note.title}
        title={note.title}
        text={note.text}
        rotate={note.rotate}
      />
    ))}
  </div>
)}




                {page.type === "photos" && "leftPhotos" in page && (
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    {page.leftPhotos.map((photo) => (
                      <Polaroid
                        key={photo.src}
                        src={photo.src}
                        caption={photo.caption}
                        rotate={photo.rotate}
                      />
                    ))}
                  </div>
                )}

                {page.type === "index" && "chapters" in page && (
                  <div className="mt-8 space-y-4">
                    {page.chapters.map((chapter) => (
                      <button
                        key={chapter.page}
                        onClick={() => setCurrentPage(chapter.page)}
                        className="group w-full rounded-xl border border-black/10 bg-white/25 p-4 text-left transition hover:scale-[1.02] hover:bg-white/40"
                      >
                        <span className="block text-sm uppercase tracking-[3px] text-[var(--gold)]">
                          {chapter.label}
                        </span>

                        <span className="mt-1 block text-xl font-semibold text-[var(--text)]">
                          {chapter.title}
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* HOJA DERECHA */}
        <div className="relative w-1/2 bg-[var(--paper-dark)] p-8">
          <div className="absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-black/10 to-transparent" />

          {isOpen && (
            <div className="relative z-10 flex h-full flex-col justify-between">
              <div className="text-right text-sm italic text-[var(--text)]/50">
                Entre Páginas
              </div>

{("rightPolaroid" in page) && (
  <div className="flex h-full items-center justify-center px-6">
    <div className="w-[85%]">
      <Polaroid
        src={page.rightPolaroid.src}
        caption={page.rightPolaroid.caption}
        rotate={page.rightPolaroid.rotate}
        variant="large"
      />
    </div>
  </div>
)}
              {isPhotoPage && "rightPhotos" in page && (
                <div className="grid grid-cols-2 gap-4 pt-10">
                  {page.rightPhotos.map((photo) => (
                    <Polaroid
                      key={photo.src}
                      src={photo.src}
                      caption={photo.caption}
                      rotate={photo.rotate}
                    />
                  ))}
                </div>
              )}

              <div className="space-y-3 self-end">
                <button
                  onClick={prevPage}
                  className="mr-3 rounded-xl border border-[var(--leather)] px-5 py-3 text-[var(--leather)] transition hover:scale-105"
                >
                  ← Atrás
                </button>

                <button
                  onClick={nextPage}
                  className="rounded-xl bg-[var(--leather)] px-5 py-3 text-white transition hover:scale-105"
                >
                  Pasar página →
                </button>
              </div>
            </div>
          )}
        </div>

        {/* LOMO / SOMBRA CENTRAL */}
        <div className="absolute left-1/2 top-0 h-full w-6 -translate-x-1/2 bg-gradient-to-r from-black/20 via-black/10 to-black/20" />
      </div>
    </div>
  );
}