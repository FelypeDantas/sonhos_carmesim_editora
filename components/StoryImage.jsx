"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export function StoryImage() {
  const [current, setCurrent] = useState(0);

  const images = [
    "/portfolio/capa-4.jpeg",
    "/portfolio/capa-4_1.jpeg", // altere a extensão se necessário
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // troca a cada 3 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {images.map((image, index) => (
        <Image
          key={image}
          src={image}
          alt="Capa 4"
          fill
          className={`absolute inset-0 object-cover transition-opacity duration-700 ${
            current === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Barra de progresso igual ao Stories */}
      <div className="absolute top-2 left-2 right-2 flex gap-1 z-20">
        {images.map((_, index) => (
          <div
            key={index}
            className="flex-1 h-1 rounded-full bg-white/30 overflow-hidden"
          >
            <div
              className={`h-full bg-white transition-all ${
                current === index ? "w-full duration-[3000]" : "w-0 duration-300"
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}