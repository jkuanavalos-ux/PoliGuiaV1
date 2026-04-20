"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { useEffect } from "react"
import Secciones from "@/components/Secciones"


export default function HomePage() {
  
  const router = useRouter()

  // Función que lleva al mapa
  const irAlMapa = () => {
    router.push("/mapa") // asegúrate de que tu página del mapa esté en /app/mapa/page.tsx
  }

  // Scroll suave
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (window.scrollY === 0 && e.deltaY > 0) {
        window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
      }
    }
    window.addEventListener("wheel", handleWheel)
    return () => window.removeEventListener("wheel", handleWheel)
  }, [])


  return (
    <div className="flex flex-col items-center justify-start min-h-screen text-white bg-black">
      {/* === HERO / PORTADA === */}
      <section
        id="inicio"
        className="relative w-full h-screen flex flex-col items-center justify-start pt-[20vh] 
        text-center text-white bg-cover bg-center"
        style={{
          backgroundImage: "url('/Poli-Guía.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-3xl px-6">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">PoliGuía</h1>
          <p className="max-w-2xl mb-8 text-lg text-white text-center">
            Descubrí la Facultad Politécnica desde cualquier lugar con PoliGuía, <br />
            una plataforma virtual que te muestra cada rincón del campus <br /> 
            mediante fotos e información interactiva.
          </p>
          <Button
            onClick={() => router.push("/mapa")}
            className="relative inline-flex items-center justify-center px-8 py-3 text-lg font-bold text-white rounded-full border-2 border-[#0b57d0] bg-transparent transition-all duration-500 hover:bg-[#0b57d0]/15 hover:shadow-[0_0_8px_#0b57d0] before:absolute before:inset-0 before:rounded-full before:border before:border-[#0b57d0]/60 before:animate-[pulse_3s_ease-in-out_infinite]"
          >
            Explorar Mapa
          </Button>
        </div>
      </section>
      <Secciones />

      {/* === PIE DE PÁGINA === */}
      <footer className="w-full bg-[#0f1420] text-blue-100 text-center py-8 mt-0 transition-colors duration-500">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left">
        
        {/* Columna izquierda - Créditos */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Desarrollado por</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Alumnos de la FPUNE</li>
          </ul>
        </div>

        {/* Columna derecha - Proyecto */}
        <div className="flex flex-col items-center md:items-end justify-center">
          <p className="text-sm text-gray-300 mb-2">
            © {new Date().getFullYear()} <span className="font-semibold text-white">Poli-Guía</span>
          </p>
          <p className="text-sm text-gray-400">
            <a
              href="https://www.fpune.edu.py/v2/pagina/index"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Facultad Politécnica · Universidad Nacional del Este
            </a>
          </p>
        </div>
      </div>
      </footer>
    </div>
  )
}