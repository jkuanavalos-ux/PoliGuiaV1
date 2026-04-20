import { X, MapPin, ChevronRight, ChevronLeft } from "lucide-react"
import { useState } from "react"

interface AreaData {
  nombre: string
  descripcion: string
  imagenes: string[]
  contacto: string
  capacidad: string
  horarios: string
  enlace?: string
}

export default function InfoPanel({
  area,
  onClose,
}: {
  area: AreaData
  onClose: () => void
}) {
  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = () =>
    setCurrentImage((prev) => (prev + 1) % area.imagenes.length)
  const prevImage = () =>
    setCurrentImage(
      (prev) => (prev - 1 + area.imagenes.length) % area.imagenes.length
    )

  return (
<div className="fixed inset-0 flex items-center justify-center z-50">
  {/* Fondo oscuro detrás */}
  <div
    className="absolute inset-0 bg-black/60"
    onClick={onClose}
  />

  {/* Contenedor del panel */}
  <div className="relative w-[470px] max-w-[90vw] max-h-[85vh] rounded-2xl overflow-hidden shadow-2xl bg-[#0B284E] text-white flex flex-col">
    {/* Header */}
    <div className="flex items-center justify-between p-4 border-b border-gray-700">
      <div className="flex items-center gap-2">
        <MapPin className="text-blue-400" size={18} />
        <h2 className="font-semibold text-lg">{area.nombre}</h2>
      </div>
      <button onClick={onClose} className="hover:text-gray-300">
        <X size={20} />
      </button>
    </div>

    {/* Imagen deslizable */}
    <div className="relative w-full h-[220px] overflow-hidden">
      <img
        src={area.imagenes[currentImage]}
        alt={area.nombre}
        className="w-full h-full object-cover"
      />
      {area.imagenes.length > 1 && (
        <>
          <button
            onClick={prevImage}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 p-1 rounded-full hover:bg-black/60"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 p-1 rounded-full hover:bg-black/60"
          >
            <ChevronRight />
          </button>
        </>
      )}
    </div>

    {/* Contenido */}
    <div className="flex-1 overflow-y-auto p-4 space-y-3 text-sm">
      <p className="text-gray-300">{area.descripcion}</p>

      <div className="border-t border-gray-700 pt-2 space-y-1">
        <p><span className="font-semibold text-white">Horario:</span> {area.horarios}</p>
        <p><span className="font-semibold text-white">Capacidad:</span> {area.capacidad}</p>
        <p><span className="font-semibold text-white">Contacto:</span> {area.contacto}</p>
      </div>

      {area.enlace && (
        <a
          href={area.enlace}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 underline hover:text-blue-300"
        >
          Ver más información
        </a>
      )}
    </div>
  </div>
</div>

  )
}
