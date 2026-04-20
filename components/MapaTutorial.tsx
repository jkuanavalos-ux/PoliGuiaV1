"use client"
import { useState } from "react"
import Image from "next/image"
import { ChevronRight, ChevronLeft } from "lucide-react"

export default function MapaTutorial() {
  const [index, setIndex] = useState(0)

  const pasos = [
    {
      img: "/t1.png",
      titulo: "Puntos del Mapa",
      descripcion:
        "Los círculos azules marcan los lugares interactivos del campus. Al hacer clic sobre uno, podrás ver imágenes y detalles del edificio o espacio seleccionado.",
    },
    {
      img: "/t2.png",
      titulo: "Vistas del Mapa",
      descripcion:
        "Puedes alternar entre tres perspectivas diferentes del mapa usando los botones en la esquina inferior derecha. Cada vista muestra angulos distint de la Facultad.",
    },
    {
      img: "/t3.png",
      titulo: "Categorías",
      descripcion:
        "Usa el filtro lateral para ver solo los tipos de lugares que desees, como espacios administrativos, aulas, comedores o áreas deportivas.",
    },
  ]

  const siguiente = () => setIndex((prev) => (prev + 1) % pasos.length)
  const anterior = () => setIndex((prev) => (prev - 1 + pasos.length) % pasos.length)

  const paso = pasos[index]

  return (
    <div className="relative w-full flex flex-col md:flex-row items-center justify-center text-white overflow-hidden px-4 md:px-10">

      {/* Contenido principal */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full gap-8 md:gap-10">
        {/* Imagen más grande (70%) */}
        <div className="w-full md:w-[70%] flex justify-center">
          <Image
            src={paso.img}
            alt={paso.titulo}
            width={1200}
            height={700}
            className="w-full h-auto max-h-[80vh] object-contain rounded-xl"
            priority
          />
        </div>

        {/* Texto más pequeño (30%) */}
        <div className="w-full md:w-[30%] text-left md:pr-8 space-y-3">
          <h3 className="text-2xl md:text-3xl font-bold text-blue-400 text-center md:text-left">
            {paso.titulo}
          </h3>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed text-center md:text-left">
            {paso.descripcion}
          </p>
        </div>
      </div>

      {/* Flecha derecha */}
      <button
        onClick={siguiente}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-gray-300 p-3 rounded-full transition z-20"
        aria-label="Siguiente"
      >
        <ChevronRight className="w-8 h-8" />
      </button>
    </div>
  )
}
