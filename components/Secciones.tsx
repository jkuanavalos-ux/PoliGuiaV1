"use client"

import Image from "next/image"
import { useState } from "react"
import { ChevronRight, ChevronLeft } from "lucide-react"
import MapaTutorial from "./MapaTutorial"



export default function Secciones() {
  return (
    
    <>

      {/* === SOBRE EL PROYECTO === */}
      <section
        id="sobre"
        className="w-full py-20 bg-[#0f1420] text-white text-center"
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Sobre el Proyecto</h2>
          <p className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-300 mb-16">
        Poli-Guía es una plataforma web interactiva desarrollada por estudiantes de Ingeniería de Sistemas de la Facultad Politécnica de la Universidad Nacional del Este, con el objetivo de brindar una experiencia virtual moderna y accesible del campus universitario, ubicado en Ciudad del Este, Alto Paraná.
        <br /><br />La aplicación permite explorar visualmente las instalaciones de la facultad mediante un mapa digital con fotografías y descripciones informativas buscando facilitar la orientación de los estudiantes nuevos y visitantes. 
          </p>

          {/* === CUADROS INFORMATIVOS === */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Cuadro 1 */}
            <div className="border border-gray-600 rounded-2xl p-6 bg-[#151b2a] hover:bg-[#1c2233] transition-colors">
              <div className="flex flex-col items-center">
                <Image
                  src="/icon1.png"
                  alt="Vistas del Mapa"
                  width={60}
                  height={60}
                  className="mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Vistas del Mapa</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Permite recorrer el campus a través de un mapa interactivo con distintas vistas, 
                  para explorar los diferentes sectores de la Facultad.
                </p>
              </div>
            </div>

            {/* Cuadro 2 */}
            <div className="border border-gray-600 rounded-2xl p-6 bg-[#151b2a] hover:bg-[#1c2233] transition-colors">
              <div className="flex flex-col items-center">
                <Image
                  src="/icon2.png"
                  alt="Galería Fotográfica"
                  width={60}
                  height={60}
                  className="mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Galería Fotográfica</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Incluye fotografías reales y actualizadas de las instalaciones, 
                  mostrando con claridad los espacios más representativos del campus.
                </p>
              </div>
            </div>

            {/* Cuadro 3 */}
            <div className="border border-gray-600 rounded-2xl p-6 bg-[#151b2a] hover:bg-[#1c2233] transition-colors">
              <div className="flex flex-col items-center">
                <Image
                  src="/icon3.png"
                  alt="Informaciones"
                  width={60}
                  height={60}
                  className="mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Informaciones</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Ofrece datos actualizados sobre cada dependencia del campus, 
                  horarios de atención, servicios disponibles y contactos institucionales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
            {/* === ¿CÓMO USAR EL MAPA? === */}
    <section id="uso" className="w-full py-20 bg-[#181e2d] text-white text-center">
      <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12">¿Cómo usar el mapa?</h2>

          <MapaTutorial />
        </div>
    </section>
    </>
  )
}
