"use client"

import { motion } from "framer-motion"

interface Step {
  text: string
  action: "next" | "wait" | "finish"
  indicator?: "hamburger" | "views" | "points"
}

export const TUTORIAL_STEPS: Step[] = [
  {
    text: "¡Hola! Soy Polito, tu guía en el campus de la FPUNE. Te voy a mostrar cómo usar este mapa interactivo. 👋",
    action: "next",
  },
  {
    text: "Con este mapa podés explorar todos los espacios del campus: aulas, laboratorios, plazas, servicios ¡y mucho más!",
    action: "next",
  },
  {
    text: "¿Ves los puntos azules en el mapa? Cada uno representa un lugar del campus. ¡Tocá cualquiera para conocerlo!",
    action: "wait",
    indicator: "points",
  },
  {
    text: "¡Excelente! Acá podés ver toda la información del lugar: descripción, horarios, capacidad y datos de contacto. Tocá Siguiente para continuar.",
    action: "next",
  },
  {
    text: "Ahora tocá el botón ☰ que está arriba a la izquierda para ver las categorías.",
    action: "wait",
    indicator: "hamburger",
  },
  {
    text: "¡Genial! Estas son las categorías del mapa. Al tocar una, solo se mostrarán los puntos de esa categoría. ¡Tocá una para probarlo!",
    action: "wait",
  },
  {
    text: "¡Como podés ver, ahora solo aparecen los puntos de la categoría que elegiste! Podés volver a \"Todos\" en cualquier momento.",
    action: "next",
  },
  {
    text: "Por último, abajo a la derecha están los botones 1, 2 y 3 para cambiar el ángulo de vista del mapa. ¡Hay 3 perspectivas distintas para explorar el campus!",
    action: "next",
    indicator: "views",
  },
  {
    text: "¡Eso es todo! Ya sabés usar el Mapa Interactivo de la FPUNE. ¡Explorá el campus y descubrí todos sus espacios! 🎉",
    action: "finish",
  },
]

interface Props {
  step: number
  onNext: () => void
  onSkip: () => void
}

export default function TutorialOverlay({ step, onNext, onSkip }: Props) {
  if (step >= TUTORIAL_STEPS.length) return null
  const current = TUTORIAL_STEPS[step]

  return (
    <>
      {/* Zona transparente sobre el mapa que avanza al tocar (solo en pasos "next") */}
      {current.action === "next" && (
        <div
          className="fixed inset-x-0 top-0 z-[190]"
          style={{ bottom: 168 }}
          onClick={onNext}
        />
      )}

      {/* Indicador: puntos del mapa */}
      {current.indicator === "points" && (
        <motion.div
          className="fixed z-[201] pointer-events-none select-none flex flex-col items-center gap-1"
          style={{ top: "40%", left: "50%", transform: "translate(-50%, -50%)" }}
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 0.9, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-4xl drop-shadow-lg">☝️</span>
          <span className="bg-blue-900/85 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow">
            tocá un punto azul
          </span>
        </motion.div>
      )}

      {/* Indicador: botón hamburguesa */}
      {current.indicator === "hamburger" && (
        <motion.div
          className="fixed z-[201] pointer-events-none select-none"
          style={{ top: 88, left: 72 }}
          animate={{ x: [0, -10, 0] }}
          transition={{ duration: 0.65, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-4xl drop-shadow-lg">👈</span>
        </motion.div>
      )}

      {/* Indicador: selector de vistas */}
      {current.indicator === "views" && (
        <motion.div
          className="fixed z-[201] pointer-events-none select-none"
          style={{ bottom: 172, right: 28 }}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 0.65, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-4xl drop-shadow-lg">👇</span>
        </motion.div>
      )}

      {/* Panel del tutorial */}
      <motion.div
        key={step}
        className="fixed bottom-0 left-0 right-0 z-[200] p-3"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.18, ease: "easeOut" }}
      >
        <div className="bg-[#0b284e] rounded-2xl p-3 shadow-2xl border border-blue-700/40 max-w-lg mx-auto">

          {/* Polito + burbuja de diálogo */}
          <div className="flex items-end gap-3">

            {/* Mascota */}
            <div className="flex-shrink-0 flex flex-col items-center">
              <img
                src="/polito.png"
                alt="Polito"
                className="w-16 h-16 object-contain drop-shadow-md"
                draggable={false}
              />
              <span className="text-[11px] text-blue-300 font-bold mt-0.5 tracking-wide">
                Polito
              </span>
            </div>

            {/* Burbuja */}
            <div className="flex-1 relative bg-white/10 rounded-2xl rounded-bl-none p-3">
              {/* Cola de la burbuja apuntando a Polito */}
              <div className="absolute -left-[7px] bottom-4 w-0 h-0 border-t-[7px] border-t-transparent border-r-[8px] border-r-white/10 border-b-[7px] border-b-transparent" />
              <p className="text-white text-sm leading-relaxed">{current.text}</p>
            </div>
          </div>

          {/* Fila de botones */}
          <div className="flex justify-between items-center mt-3">
            <button
              onClick={onSkip}
              className="text-blue-400/70 text-xs hover:text-blue-300 transition-colors px-1 py-1"
            >
              Saltar tutorial
            </button>

            {current.action === "next" && (
              <button
                onClick={onNext}
                className="bg-blue-600 active:bg-blue-500 text-white px-5 py-2 rounded-xl text-sm font-semibold transition-colors active:scale-95 shadow"
              >
                Siguiente →
              </button>
            )}

            {current.action === "finish" && (
              <button
                onClick={onSkip}
                className="bg-blue-600 active:bg-blue-500 text-white px-5 py-2 rounded-xl text-sm font-semibold transition-colors active:scale-95 shadow"
              >
                ¡Empezar! 🎉
              </button>
            )}

            {current.action === "wait" && (
              <span className="text-blue-400/50 text-xs italic">
                Realizá la acción para continuar
              </span>
            )}
          </div>
        </div>
      </motion.div>
    </>
  )
}
