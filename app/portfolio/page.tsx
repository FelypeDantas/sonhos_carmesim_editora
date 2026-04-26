"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type Book = {
  id: number;
  title: string;
  cover: string;
  synopsis: string;
};

const books: Book[] = [
  {
    id: 1,
    title: "Amor além do crime",
    cover: "/covers/AmorAlemDoCrime.png",
    synopsis:
      "Florença não é apenas arte, história e beleza: é território. Nas sombras da cidade mais icônica da Itália, existe um império invisível. A Salvezza. A maior organização criminosa do mundo. Intocável. Implacável. E comandada por uma mulher cujo nome é temido por todos. Kimberly Santoro. Quando uma onda de conflitos no tráfico ameaça expor tudo o que ela construiu, um nome surge como o centro do caos: Marco César. Dono de uma rede de armazéns… e de segredos que podem derrubar reinos. Mas Kimberly não destrói seus inimigos à distância. Ela se infiltra. Manipula. Controla. E é assim que Felipe César entra no jogo, como a peça perfeita, o elo mais fraco… ou assim ela pensava. Frio, enigmático e perigosamente imprevisível, Felipe não se comporta como uma marionete. Ele desafia. Provoca. Enxerga além do que deveria. E, pela primeira vez, Kimberly perde o controle. Entre jogos de poder, traições e desejo proibido, o que começa como um plano de destruição se transforma em algo muito mais perigoso: Uma obsessão. Porque no mundo deles, amar é uma fraqueza. E confiar… é sentença de morte. Um dark romance intenso, onde poder e paixão colidem, e ninguém sai ileso.",
  },
  {
    id: 2,
    title: "Fragmentos",
    cover: "/covers/Fragmentos.jpeg",
    synopsis:
      "Lutyah nasceu entre as chamas, moldada por Lúcifer e pela glória do caos. Mas o que o inferno chamou de “criação perfeita”, ela chama de prisão. Determinada a renegar o pai e tudo o que ele representa, Lutyah parte em uma jornada que desafia o equilíbrio dos mundos: reunir os fragmentos da antiga Casa, artefatos que, quando unidos, podem erguer um novo lar. Um refúgio onde nenhuma alma será escrava do Céu ou do Abismo. Ao seu lado está Mel, sua irmã e cúmplice, e o anjo que traiu a luz para servi-la. Entre eles, não há medo, apenas um amor que o próprio universo se recusa a compreender: ardente, leal e tão destrutivo quanto belo. Mas cada fragmento está guardado por forças que nenhum ser deveria desafiar. Deuses do Olimpo, hostes celestiais e demônios antigos se erguem contra ela, temendo o que acontecerá se a filha de Lúcifer conseguir o que busca. Entre a lâmina e o fogo, entre o desejo e a ruína, Lutyah descobrirá que a verdadeira guerra não é contra os deuses, mas sim contra as correntes que tentam definir quem ela deve ser. Ela não nasceu para governar o inferno. Nasceu para destruí-lo. E, se for preciso, para incendiar o paraíso também.",
  },
  {
    id: 3,
    title: "4 e Meio: Enquanto o mundo ainda não acabou",
    cover: "/covers/4emeio.png",
    synopsis:
      "Essa história ainda não possui uma sinopse completa.",
  }
];

export default function PortfolioPage() {
  const [selected, setSelected] = useState<Book | null>(null);

  return (
    <main className="min-h-screen px-6 py-20">
      <h1 className="text-3xl md:text-5xl font-bold mb-12 text-center">
        Exemplares de capa
      </h1>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {books.map((book) => (
          <motion.div
            key={book.id}
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer group"
            onClick={() => setSelected(book)}
          >
            <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={book.cover}
                alt={book.title}
                fill
                className="object-contain group-hover:scale-110 transition duration-500"
              />

              {/* overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-end p-4">
                <h2 className="text-lg font-semibold">{book.title}</h2>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 dark:bg-black/70 bg-black/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="bg-zinc-900 p-6 rounded-2xl max-w-lg w-full"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-2xl font-bold mb-4 text-white dark:text-zinc-900">
                {selected.title}
              </h2>

              <p className="text-zinc-300 leading-relaxed">
                {selected.synopsis}
              </p>

              <button
                onClick={() => setSelected(null)}
                className="mt-6 px-4 py-2 bg-white text-black rounded-lg hover:opacity-80"
              >
                Fechar
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
