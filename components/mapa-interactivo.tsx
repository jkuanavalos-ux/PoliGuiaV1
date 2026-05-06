"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X, MapPin, Users, Clock, Phone, Menu } from "lucide-react"
import InfoPanel from "@/components/InfoPanel";


function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  
  useEffect(() => {
    // Solo se ejecuta en el cliente (navegador)
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize(); // Llamada inicial
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  
  return size;
}

// ====== ÁREAS INTERACTIVAS POR VISTA ======
const areasDataVista1 = {

    edificio1: {
    nombre: "Centro de Información Universitaria",
    descripcion: "Espacio dedicado a la recepción y orientación de estudiantes y visitantes, donde se centraliza la información institucional",
    horarios: "Abierto durante horario institucional",
    contacto: "secretaria@fpune.edu.py",
    capacidad: "--",
    imagen: ["/centro/centro4.jpeg", "/centro/centro3.jpeg"],
    x: 20,
    y: 38,
    radius: 50,
  },
  cantina: {
    nombre: "Restaurante Universitario",
    descripcion: "Área de servicio alimentario ubicada en el campus, destinada a estudiantes, docentes y visitantes para pausa, café o almuerzo informal.",
    horarios: "Abierto durante horario institucional",
    capacidad: "80 personas",
    contacto: "--",
    imagen: ["/cantina/can7.jpeg","/cantina/cantina1.jpg","/cantina/can3.jpeg",
      "/cantina/can5.jpeg"],
    x: 25,
    y: 44,
    radius: 50,
  },
    biblioteca: {
    nombre: "Biblioteca",
    descripcion: "La Biblioteca de la facultad ofrece recursos académicos, sala de lectura, préstamo de materiales, acceso a internet para investigación y ambientes grupales o individuales de estudio.Cantina universitaria con opciones variadas de comida.",
    horarios: "Lunes a viernes de 07:30 a 20:30 hs",
    capacidad: "80 personas",
    contacto: ["biblioteca@fpune.edu.py"],
    imagen: ["/biblioteca/biblioteca1.jpg","/biblioteca/biblioteca1.jpg",
      "/biblioteca/biblioteca1.jpg", "/biblioteca/biblioteca2.jpg", "/biblioteca/biblioteca3.jpg",
     "/biblioteca/biblioteca4.jpg","/biblioteca/biblioteca5.jpg","/biblioteca/biblioteca7.jpg", 
     "/biblioteca/biblioteca8.jpg", "/biblioteca/biblioteca9.jpg", "/biblioteca/biblioteca10.jpg",
     "/biblioteca/biblioteca13.jpg", "/biblioteca/cartel2.jpg"],
    x: 30 ,
    y: 52,
    radius: 50,
  },
    poliplaza1: {
    nombre: "PoliPlaza 1",
    descripcion: "Espacio abierto tipo plaza dentro del campus que funciona como zona de encuentro, relajación o estudio al aire libre, con vegetación y bancos.",
    horarios: "Abierto Siempre",
    capacidad: "Espacio Abierto",
    contacto: "--",
    imagen: ["/poliplazas/poliplaza1_2.jpg", "/poliplazas/poliplaza1_1.jpg", "/poliplazas/p1_2.jpeg"],
    x: 61,
    y: 36,
    radius: 50,
  },
    poliplaza2: {
    nombre: "PoliPlaza 2",
    descripcion: "Espacio abierto tipo plaza dentro del campus que funciona como zona de encuentro, relajación o estudio al aire libre, con vegetación y bancos.",
    horarios: "Abierto Siempre",
    capacidad: "Espacio Abierto",
    contacto: "--",
    imagen: ["/poliplazas/poliplaza2.jpeg", "/poliplazas/p2_2.jpeg"],
    x: 47,
    y: 49,
    radius: 50,
  },
    poliplaza3: {
    nombre: "PoliPlaza 3",
    descripcion: "Espacio abierto tipo plaza dentro del campus que funciona como zona de encuentro, relajación o estudio al aire libre, con vegetación y bancos.",
    horarios: "Abierto Siempre",
    capacidad: "Espacio Abierto",
    contacto: "--",
    imagen: ["/poliplazas/poliplaza3.jpg", "/poliplazas/p3.jpeg"],
    x: 46,
    y: 27,
    radius: 50,
  },
    poliplaza4: {
    nombre: "PoliPlaza 4",
    descripcion: "Espacio abierto tipo plaza dentro del campus que funciona como zona de encuentro, relajación o estudio al aire libre, con vegetación y bancos.",
    horarios: "Abierto Siempre",
    capacidad: "Espacio Abierto",
    contacto: "--",
    imagen: ["/poliplazas/poliplaza4.jpg"],
    x: 35,
    y: 58,
    radius: 50,
  },
    poliplaza5: {
    nombre: "PoliPlaza 5",
    descripcion: "Espacio abierto tipo plaza dentro del campus que funciona como zona de encuentro, relajación o estudio al aire libre, con vegetación y bancos.",
    horarios: "Abierto Siempre",
    capacidad: "Espacio Abierto",
    contacto: "--",
    imagen: ["/poliplazas/poliplaza5.jpg"],
    x: 12,
    y: 77,
    radius: 50,
  },
    poliplaza6: {
    nombre: "PoliPlaza 6",
    descripcion: "Espacio abierto tipo plaza dentro del campus que funciona como zona de encuentro, relajación o estudio al aire libre, con vegetación y bancos.",
    horarios: "Abierto Siempre",
    capacidad: "Espacio Abierto",
    contacto: "--",  
    imagen: "/poliplazas/poliplaza6.jpg",
    x: 5,
    y: 84,
    radius: 50,
  },
  poliplaza8: {
    nombre: "PoliPlaza 8",
    descripcion: "Espacio abierto tipo plaza dentro del campus que funciona como zona de encuentro, relajación o estudio al aire libre, con vegetación y bancos.",
    horarios: "Abierto Siempre",
    capacidad: "Espacio Abierto",
    contacto: "--",
    imagen: ["/poliplazas/poliplaza8.jpg","/poliplazas/poliplaza8_2.jpg", "/poliplazas/poliplaza8_3.jpg",   
    "/poliplazas/poliplaza8_4.jpeg", "/poliplazas/poliplaza8_5.jpeg"],
    x: 69,
    y: 50,
    radius: 50,
  },
    poliplaza9: {
    nombre: "PoliPlaza 9",
    descripcion: "Sala de descanso diseñada para la pausa de estudiantes, con colchonetas en asientos, ambiente tranquilo, para recargar energías entre clases o actividades.",
    horarios: "Abierto durante horario institucional",
    capacidad: "Espacio Abierto",
    contacto: "--",
    imagen: ["/poliplazas/poliplaza9.jpg", "/poliplazas/poliplaza9_2.jpg"],
    x: 69,
    y: 64,
    radius: 50,
  },
    calistenia: {
    nombre: "Parque de Calistenia",
    descripcion: "Espacio al aire libre equipado para la práctica de ejercicios de calistenia, diseñado para promover la actividad física y el bienestar de los estudiantes. Cuenta con estructuras metálicas, barras paralelas, dominadas y otros elementos que permiten realizar rutinas de fuerza y resistencia sin necesidad de equipamiento adicional.",
    horarios: "Abierto Siempre",
    capacidad: "Espacio Abierto",
    contacto: "--",
    imagen: ["/calistenia/calistenia.jpeg","/calistenia/calistenia2.jpg", 
      "/calistenia/calistenia3.jpg", "/calistenia/otro.jpeg"],
    x: 68,  
    y: 57,
    radius: 50,
  },

  coordinacion: {
    nombre: "Coordinación",
    descripcion: "Área encargada de planificar, supervisar y acompañar el desarrollo de las actividades académicas de la facultad. Brinda orientación a estudiantes y docentes sobre planes de estudio, asignaturas, horarios, prácticas profesionales, evaluaciones y procesos administrativos relacionados con la gestión académica.",
    horarios: "Lunes a viernes, de 07:30 a 13:00 y de 14:30 a 20:00",
    contacto: "+595 21 3281244 / +595 21 3281252",
    capacidad: "--",
    imagen: ["/coordinacion/coordinacion1.jpg","/coordinacion/coordinacion2.jpg"],
    x: 55,
    y: 42,
    radius: 50,
  },

    bloque_aulas: {
    nombre: "Bloque de Aulas",
    descripcion: "El Bloque de Aulas constituye la zona principal de enseñanza de la Facultad. El edificio cuenta con múltiples salas equipadas con mobiliario moderno, pizarras, proyectores y sistemas de ventilación.",
    horarios: "Abierto durante horario institucional",
    capacidad: "Varias aulas en dos plantas",        
    contacto: "--",
    imagen: ["/bloque_aulas/pasillo1.jpg", "/bloque_aulas/pasillo4.jpg","/bloque_aulas/pasillo5.jpg",
     "/bloque_aulas/saladeclases.jpg", "/bloque_aulas/ba1.jpeg","/bloque_aulas/bebedero.jpg",
     "/bloque_aulas/cefpune.jpg",],
    x: 52,
    y: 32,
    radius: 60,
  },
    aula_magna: {
    nombre: "Aula Magna 1 y Aula Magna 2",
    descripcion: "Salas de gran capacidad para conferencias, clases magistrales, eventos académicos o ceremonias institucionales, ubicado en el bloque de aulas.",
    horarios: "Abierto durante horario institucional",
    capacidad: "80 personas",
    contacto: "--",
    imagen: ["/aulamagna/am1.jpeg"],
    x: 55,
    y: 24,
    radius: 50,
  },  
  laboratorios: {
    nombre: "Bloque de Laboratorios",
    descripcion: "Espacio general para prácticas de enseñanza técnica o científica, equipado con bancos de trabajo, instrumentos y ambientes de experimentación. Se encuentran Laboratorio de Hardware y Redes, Automatización y Control, Física, Electricidad y Electrónica, Química, Informática",
    horarios: "Abierto durante horario institucional",
    capacidad: "Varias aulas en dos plantas",        
    contacto: "--",
    imagen: ["/laboratorio/lab1.jpg", "/laboratorio/lab2.jpeg", "/laboratorio/lab3.jpeg", 
    "/laboratorio/labc1.jpg", "/laboratorio/labd1.jpg", "/laboratorio/le2.jpeg", "/laboratorio/le3.jpeg",
    "/laboratorio/h_lab.jpg", "/laboratorio/m_lab.jpg"],
    x: 39,
    y: 22,
    radius: 60,
  },
  estacionamiento: {
    nombre: "Estacionamiento",
    descripcion: "Área habilitada para el estacionamiento de vehículos de estudiantes y visitantes dentro del campus.",
    horarios: "Abierto durante horario institucional",
    capacidad: "100 vehiculos",
    contacto: "--",
    imagen: ["/estacionamiento/est1.jpg", "/estacionamiento/est2.jpeg", 
      "/estacionamiento/est_polito.jpg"],
    x: 35,
    y: 38,
    radius: 50,
  },
  mesa_de_entrada: {
    nombre: "Mesa de Entrada",
    descripcion: "Punto de acceso principal a la facultad donde se gestionan consultas, acreditaciones de ingreso, entrega de credenciales y orientación inmediata al campus.",
    horarios: "Lunes a Viernes: 7:30 - 13:00 | 14:30 - 20:00",
    contacto: "+595 21 3281244 / +595 21 3281252.",
    capacidad: "--",
    imagen: ["/mesa_entrada/mesaentrada1.jpg", "/mesa_entrada/me1.jpeg",    
    "/mesa_entrada/me3.jpeg", "/mesa_entrada/me4.jpeg","/mesa_entrada/me6.jpeg"],
    x: 48,
    y: 56,
    radius: 50,
  },
  enfermeria: {
    nombre: "Enfermeria",
    descripcion: "Servicio de atención sanitaria básica y primeros auxilios para estudiantes y personal del campus.",
    horarios: "Abierto durante horario institucional",
    capacidad: "--",
    contacto: "--",
    imagen: ["/enfermeria/enfermeria1.jpg","/enfermeria/enfermeria2.jpg"],
    x: 50,
    y: 69,
    radius: 50,
  },
    huerto: {
    nombre: "Huerto",
    descripcion: "Área verde de cultivo dentro del campus.",
    horarios: "Abierto Siempre",
    imagen: ["plantacion1.jpg", "plantacion2.jpg"],
    capacidad: "--",
    contacto: "--",
    x: 49,
    y: 80,
    radius: 50,
  },

  comedor: {
    nombre: "Comedor",
    descripcion: "Espacio donde los usuarios pueden merendar o almorzar, equipado con heladera, microondas, mesas",
    horarios: "Abierto durante horario institucional",
    capacidad: "80 personas",
    contacto: "--",    
    imagen: ["/comedor/comedor_sala.jpg","/comedor/comedor.jpg","/comedor/c2.jpeg",
       "/comedor/c3.jpeg", "/comedor/cocina.jpg", "/comedor/bano.jpg"],
    x: 75,
    y: 55,
    radius: 50,
  },

  estudio: {
    nombre: "Sala de Estudio",
    descripcion: "La Sala de Estudio ofrece un ambiente tranquilo, cómodo y acondicionado para el trabajo académico individual o en grupo. Está equipada con mesas, enchufes, buena iluminación, pizarras acrilicas y conectividad Wi-Fi, pensada para que los estudiantes puedan realizar investigaciones, tareas y proyectos fuera del horario de clases.",
    horarios: "Abierto durante horario institucional",
    capacidad: "54 personas",
    contacto: "--",
    imagen: ["/comedor/salaestudio1.jpg", "/comedor/salaestudio2.jpg"],
    x: 79,
    y: 58,
    radius: 50,
  },

    estacionamiento_funcionarios: {
    nombre: "Estacionamiento de Funcionarios",
    descripcion: "Zona reservada dentro del campus para el aparcamiento de vehículos del personal docente y administrativo, con gestión interna de la facultad.",
    horarios: "Abierto durante horario institucional",
    contacto: "--",
    capacidad: "50 vehiculos",
    imagen: ["/est_fun/est.jpg", "/est_fun/entrada1.jpg"],
    x: 74,
    y: 80,
    radius: 50,
  },

    cancha_pista: {
    nombre: "Cancha de Pista",
    descripcion: "Terreno deportivo para partidos, entrenamientos o actividades de integración estudiantil.",
    horarios: "Se reserva con antelación para su uso en mesa de entrada",
    contacto: "--",
    capacidad: "--",
    imagen: ["/cancha/cp.jpeg", "/cancha/cp2.jpeg"],
    x: 88,
    y: 45,
    radius: 50,
  },
    cancha_pasto: {
    nombre: "Cancha de Pasto",
    descripcion: "Terreno deportivo para partidos, entrenamientos o actividades de integración estudiantil.",
    horarios: "Se reserva con antelación para su uso en mesa de entrada",
    contacto: "--",
    capacidad: "--",
    imagen: ["/cancha/cf.jpg", "/cancha/cf2.jpg"],
    x: 14,
    y: 89,
    radius: 50,
  },
    columnas: {
    nombre: "Área de Prácticas de Conexión Eléctrica",
    descripcion: "Infraestructura técnica especializada donde los estudiantes de Ingeniería Eléctrica realizan conexiones, prácticas reales de instalaciones eléctricas, mediciones y experiencias de laboratorio.",
    capacidad: "Espacio Abierto",
    horarios: "Abierto Siempre",
    contacto: "--",
    imagen: ["/columnas/e1.jpeg", "/columnas/e2.jpeg"],
    x: 71,
    y: 38,
    radius: 50,
  },
}

const areasDataVista2 = {
    coordinacion: {
    nombre: "Coordinación",
    descripcion: "Área encargada de planificar, supervisar y acompañar el desarrollo de las actividades académicas de la facultad. Brinda orientación a estudiantes y docentes sobre planes de estudio, asignaturas, horarios, prácticas profesionales, evaluaciones y procesos administrativos relacionados con la gestión académica.",
    horarios: "Lunes a viernes, de 07:30 a 13:00 y de 14:30 a 20:00",
    contacto: "+595 21 3281244 / +595 21 3281252",
    capacidad: "--",
    imagen: ["/coordinacion/coordinacion1.jpg","/coordinacion/coordinacion2.jpg"],
    x: 50,
    y: 41,
    radius: 50,
  },
  calistenia: {
    nombre: "Parque de Calistenia",
    descripcion: "Espacio al aire libre equipado para la práctica de ejercicios de calistenia, diseñado para promover la actividad física y el bienestar de los estudiantes. Cuenta con estructuras metálicas, barras paralelas, dominadas y otros elementos que permiten realizar rutinas de fuerza y resistencia sin necesidad de equipamiento adicional.",
    horarios: "Abierto Siempre",
    capacidad: "Espacio Abierto",
    contacto: "--",
    imagen: ["/calistenia/calistenia.jpeg","/calistenia/calistenia2.jpg", 
      "/calistenia/calistenia3.jpg", "/calistenia/otro.jpeg"],
    x: 33,  
    y: 38,
    radius: 50,
  },
    cancha_pista: {
    nombre: "Cancha de Pista",
    descripcion: "Terreno deportivo para partidos, entrenamientos o actividades de integración estudiantil.",
    horarios: "Se reserva con antelación para su uso en mesa de entrada",
    contacto: "--",
    capacidad: "--",
    imagen: ["/cancha/cp.jpeg", "/cancha/cp2.jpeg"],    
    x: 20,
    y: 57,
    radius: 50,
  },
  comedor: {
    nombre: "Comedor",
    descripcion: "Espacio donde los usuarios pueden merendar o almorzar, equipado con heladera, microondas, mesas",
    horarios: "Abierto durante horario institucional",
    capacidad: "80 personas",
    contacto: "--",    
    imagen: ["/comedor/comedor_sala.jpg","/comedor/comedor.jpg","/comedor/c2.jpeg",
       "/comedor/c3.jpeg", "/comedor/cocina.jpg", "/comedor/bano.jpg"],
    x: 28,
    y: 38,
    radius: 50,
  },

  estudio: {
    nombre: "Sala de Estudio",
    descripcion: "La Sala de Estudio ofrece un ambiente tranquilo, cómodo y acondicionado para el trabajo académico individual o en grupo. Está equipada con mesas, enchufes, buena iluminación, pizarras acrilicas y conectividad Wi-Fi, pensada para que los estudiantes puedan realizar investigaciones, tareas y proyectos fuera del horario de clases.",
    horarios: "Abierto durante horario institucional",
    capacidad: "54 personas",
    contacto: "--",
    imagen: ["/comedor/salaestudio1.jpg", "/comedor/salaestudio2.jpg"],
    x: 24,
    y: 38,
    radius: 50,
  },

    estacionamiento_funcionarios: {
    nombre: "Estacionamiento de Funcionarios",
    descripcion: "Zona reservada dentro del campus para el aparcamiento de vehículos del personal docente y administrativo, con gestión interna de la facultad.",
    horarios: "Abierto durante horario institucional",
    contacto: "--",
    capacidad: "50 vehiculos",
    imagen: ["/est_fun/est.jpg", "/est_fun/entrada1.jpg"],
    x: 23,
    y: 30,
    radius: 50,
  },
    columnas: {
    nombre: "Área de Prácticas de Conexión Eléctrica",
    descripcion: "Infraestructura técnica especializada donde los estudiantes de Ingeniería Eléctrica realizan conexiones, prácticas reales de instalaciones eléctricas, mediciones y experiencias de laboratorio.",
    capacidad: "Espacio Abierto",
    horarios: "Abierto Siempre",
    contacto: "--",
    imagen: ["/columnas/e1.jpeg", "/columnas/e2.jpeg"],
    x: 40,
    y: 58,
    radius: 50,
  },
    bloque_aulas: {
    nombre: "Bloque de Aulas",
    descripcion: "El Bloque de Aulas constituye la zona principal de enseñanza de la Facultad. El edificio cuenta con múltiples salas equipadas con mobiliario moderno, pizarras, proyectores y sistemas de ventilación.",
    horarios: "Abierto durante horario institucional",
    capacidad: "Varias aulas en dos plantas",        
    contacto: "--",
    imagen: ["/bloque_aulas/pasillo1.jpg", "/bloque_aulas/pasillo4.jpg","/bloque_aulas/pasillo5.jpg",
     "/bloque_aulas/saladeclases.jpg", "/bloque_aulas/ba1.jpeg","/bloque_aulas/bebedero.jpg",
     "/bloque_aulas/cefpune.jpg",],
    x: 59,
    y: 38,
    radius: 50,
  },
    aula_magna: {
    nombre: "Aula Magna 1 y Aula Magna 2",
    descripcion: "Salas de gran capacidad para conferencias, clases magistrales, eventos académicos o ceremonias institucionales, ubicado en el bloque de aulas.",
    horarios: "Abierto durante horario institucional",
    capacidad: "80 personas",
    contacto: "--",
    imagen: ["/aulamagna/am1.jpeg"],
    x: 66,
    y: 52,
    radius: 50,
  },
    poliplaza1: {
    nombre: "PoliPlaza 1",
    descripcion: "Espacio abierto tipo plaza dentro del campus que funciona como zona de encuentro, relajación o estudio al aire libre, con vegetación y bancos.",
    horarios: "Abierto Siempre",
    capacidad: "Espacio Abierto",
    contacto: "--",
    imagen: ["/poliplazas/poliplaza1_2.jpg", "/poliplazas/poliplaza1_1.jpg", "/poliplazas/p1_2.jpeg"],
    x: 50,
    y: 51,
    radius: 50,
  },

    poliplaza2: {
    nombre: "PoliPlaza 2",
    descripcion: "Espacio abierto tipo plaza dentro del campus que funciona como zona de encuentro, relajación o estudio al aire libre, con vegetación y bancos.",
    horarios: "Abierto Siempre",
    capacidad: "Espacio Abierto",
    contacto: "--",
    imagen: ["/poliplazas/poliplaza2.jpeg", "/poliplazas/p2_2.jpeg"],
    x: 52,
    y: 32,
    radius: 50,
  },

    poliplaza3: {
    nombre: "PoliPlaza 3",
    descripcion: "Espacio abierto tipo plaza dentro del campus que funciona como zona de encuentro, relajación o estudio al aire libre, con vegetación y bancos.",
    horarios: "Abierto Siempre",
    capacidad: "Espacio Abierto",
    contacto: "--",
    imagen: ["/poliplazas/poliplaza3.jpg", "/poliplazas/p3.jpeg"],
    x: 75,
    y: 50,
    radius: 50,
  },
    poliplaza4: {
    nombre: "PoliPlaza 4",
    descripcion: "Espacio abierto tipo plaza dentro del campus que funciona como zona de encuentro, relajación o estudio al aire libre, con vegetación y bancos.",
    horarios: "Abierto Siempre",
    capacidad: "Espacio Abierto",
    contacto: "--",
    imagen: ["/poliplazas/poliplaza4.jpg"],
    x: 53,
    y: 23,
    radius: 50,
  },

    poliplaza9: {
    nombre: "PoliPlaza 9",
    descripcion: "Sala de descanso diseñado para la pausa de estudiantes, con colchonetas en asientos, ambiente tranquilo, para recargar energías entre clases o actividades.",
    horarios: "Abierto durante horario institucional",
    capacidad: "Espacio Abierto",
    contacto: "--",
    imagen: ["/poliplazas/poliplaza9.jpg", "/poliplazas/poliplaza9_2.jpg"],
    x: 29,
    y: 33,
    radius: 50,
  },
    poliplaza8: {
    nombre: "PoliPlaza 8",
    descripcion: "Espacio abierto tipo plaza dentro del campus que funciona como zona de encuentro, relajación o estudio al aire libre, con vegetación y bancos.",
    horarios: "Abierto Siempre",
    capacidad: "Espacio Abierto",
    contacto: "--",
    imagen: ["/poliplazas/poliplaza8.jpg","/poliplazas/poliplaza8_2.jpg", "/poliplazas/poliplaza8_3.jpg",   
    "/poliplazas/poliplaza8_4.jpeg", "/poliplazas/poliplaza8_5.jpeg"],
    x: 35,
    y: 42,
    radius: 50,
  },
  laboratorios: {
    nombre: "Bloque de Laboratorios",
    descripcion: "Espacio general para prácticas de enseñanza técnica o científica, equipado con bancos de trabajo, instrumentos y ambientes de experimentación. Se encuentran Laboratorio de Hardware y Redes, Automatización y Control, Física, Electricidad y Electrónica, Química, Informática",
    horarios: "Abierto durante horario institucional",
    capacidad: "Varias aulas en dos plantas",        
    contacto: "--",
    imagen: ["/laboratorio/lab1.jpg", "/laboratorio/lab2.jpeg", "/laboratorio/lab3.jpeg", 
    "/laboratorio/labc1.jpg", "/laboratorio/labd1.jpg", "/laboratorio/le2.jpeg", "/laboratorio/le3.jpeg",
    "/laboratorio/h_lab.jpg", "/laboratorio/m_lab.jpg"],
    x: 86,
    y: 48,
    radius: 50,
  },
  estacionamiento: {
    nombre: "Estacionamiento",
    descripcion: "Área habilitada para el estacionamiento de vehículos de estudiantes y visitantes dentro del campus.",
    horarios: "Abierto durante horario institucional",
    capacidad: "100 vehiculos",
    contacto: "--",
    imagen: ["/estacionamiento/est1.jpg", "/estacionamiento/est2.jpeg", 
    "/estacionamiento/est_polito.jpg"],
    x: 70,
    y: 33,
    radius: 50,
  },
  edificio1: {
    nombre: "Centro de Información Universitaria",
    descripcion: "Espacio dedicado a la recepción y orientación de estudiantes y visitantes, donde se centraliza la información institucional",
    horarios: "Abierto durante horario institucional",
    contacto: "secretaria@fpune.edu.py",
    capacidad: "--",
    imagen: ["/centro/centro4.jpeg", "/centro/centro3.jpeg"],
    x: 76,
    y: 23,
    radius: 50,
  },
  cantina: {
    nombre: "Restaurante Universitario",
    descripcion: "Área de servicio alimentario ubicada en el campus, destinada a estudiantes, docentes y visitantes para pausa, café o almuerzo informal.",
    horarios: "Abierto durante horario institucional",
    capacidad: "80 personas",
    contacto: "--",
    imagen: ["/cantina/can7.jpeg","/cantina/cantina1.jpg","/cantina/can3.jpeg",
    "/cantina/can5.jpeg"],
    x: 66,
    y: 23,
    radius: 50,
  },
    biblioteca: {
    nombre: "Biblioteca",
    descripcion: "La Biblioteca de la facultad ofrece recursos académicos, sala de lectura, préstamo de materiales, acceso a internet para investigación y ambientes grupales o individuales de estudio.Cantina universitaria con opciones variadas de comida.",
    horarios: "Lunes a viernes de 07:30 a 20:30 hs",
    capacidad: "80 personas",
    contacto: ["biblioteca@fpune.edu.py"],
    imagen: ["biblioteca/biblioteca1.jpg","biblioteca/biblioteca1.jpg",
    "biblioteca/biblioteca1.jpg", "biblioteca/biblioteca2.jpg", "biblioteca/biblioteca3.jpg",
    "biblioteca/biblioteca4.jpg","biblioteca/biblioteca5.jpg","biblioteca/biblioteca7.jpg", 
    "biblioteca/biblioteca8.jpg", "biblioteca/biblioteca9.jpg", "biblioteca/biblioteca10.jpg",
    "biblioteca/biblioteca13.jpg", "biblioteca/cartel2.jpg"],
    x: 58,
    y: 21,
    radius: 50,
  },
  mesa_de_entrada: {
    nombre: "Mesa de Entrada",
    descripcion: "Punto de acceso principal a la facultad donde se gestionan consultas, acreditaciones de ingreso, entrega de credenciales y orientación inmediata al campus.",
    horarios: "Lunes a Viernes: 7:30 - 13:00 | 14:30 - 20:00",
    contacto: "+595 21 3281244 / +595 21 3281252.",
    capacidad: "--",
    imagen: ["/mesa_entrada/mesaentrada1.jpg", "/mesa_entrada/me1.jpeg",    
    "/mesa_entrada/me3.jpeg", "/mesa_entrada/me4.jpeg","/mesa_entrada/me6.jpeg"],
    x: 47,
    y: 27,
    radius: 50,
  },
  enfermeria: {
    nombre: "Enfermeria",
    descripcion: "Servicio de atención sanitaria básica y primeros auxilios para estudiantes y personal del campus.",
    horarios: "Abierto durante horario institucional",
    capacidad: "--",
    contacto: "--",
    imagen: ["/enfermeria/enfermeria1.jpg","/enfermeria/enfermeria2.jpg"],
    x: 40,
    y: 25,
    radius: 50,
  },
}

const areasDataVista3 = {
    coordinacion: {
    nombre: "Coordinación",
    descripcion: "Área encargada de planificar, supervisar y acompañar el desarrollo de las actividades académicas de la facultad. Brinda orientación a estudiantes y docentes sobre planes de estudio, asignaturas, horarios, prácticas profesionales, evaluaciones y procesos administrativos relacionados con la gestión académica.",
    horarios: "Lunes a viernes, de 07:30 a 13:00 y de 14:30 a 20:00",
    contacto: "+595 21 3281244 / +595 21 3281252",
    capacidad: "--",
    imagen: ["/coordinacion/coordinacion1.jpg","/coordinacion/coordinacion2.jpg"],
    x: 51,
    y: 57,
    radius: 50,
  },
    cancha_pista: {
    nombre: "Cancha de Pista",
    descripcion: "Terreno deportivo para partidos, entrenamientos o actividades de integración estudiantil.",
    horarios: "Se reserva con antelación para su uso en mesa de entrada",
    contacto: "--",
    capacidad: "--",
    imagen: ["/cancha/cp.jpeg", "/cancha/cp2.jpeg"],
    x: 64,
    y: 88,
    radius: 50,
  },

  cancha_pasto: {
    nombre: "Cancha de Pasto",
    descripcion: "Terreno deportivo para partidos, entrenamientos o actividades de integración estudiantil.",
    horarios: "Se reserva con antelación para su uso en mesa de entrada",
    contacto: "--",
    capacidad: "--",
    imagen: ["/cancha/cf.jpg", "/cancha/cf2.jpg"],
    x: 20,
    y: 64,
    radius: 50,
  },

  comedor: {
    nombre: "Comedor",
    descripcion: "Espacio donde los usuarios pueden merendar o almorzar, equipado con heladera, microondas, mesas",
    horarios: "Abierto durante horario institucional",
    capacidad: "80 personas",
    contacto: "--",    
    imagen: ["/comedor/comedor_sala.jpg","/comedor/comedor.jpg","/comedor/c2.jpeg",
    "/comedor/c3.jpeg", "/comedor/cocina.jpg", "/comedor/bano.jpg"],
    x: 52,
    y: 84,
    radius: 50,
  },

  estudio: {
    nombre: "Sala de Estudio",
    descripcion: "La Sala de Estudio ofrece un ambiente tranquilo, cómodo y acondicionado para el trabajo académico individual o en grupo. Está equipada con mesas, enchufes, buena iluminación, pizarras acrilicas y conectividad Wi-Fi, pensada para que los estudiantes puedan realizar investigaciones, tareas y proyectos fuera del horario de clases.",
    horarios: "Abierto durante horario institucional",
    capacidad: "54 personas",
    contacto: "--",
    imagen: ["/comedor/salaestudio1.jpg", "/comedor/salaestudio2.jpg"],
    x: 52,
    y: 89,
    radius: 50,
  },

    estacionamiento_funcionarios: {
    nombre: "Estacionamiento de Funcionarios",
    descripcion: "Zona reservada dentro del campus para el aparcamiento de vehículos del personal docente y administrativo, con gestión interna de la facultad.",
    horarios: "Abierto durante horario institucional",
    contacto: "--",
    capacidad: "50 vehiculos",
    imagen: ["/est_fun/est.jpg", "/est_fun/entrada1.jpg"],
    x: 43,
    y: 93,
    radius: 50,
  },
    poliplaza9: {
    nombre: "PoliPlaza 9",
    descripcion: "Sala de descanso diseñado para la pausa de estudiantes, con colchonetas en asientos, ambiente tranquilo, para recargar energías entre clases o actividades.",
    horarios: "Abierto durante horario institucional",
    capacidad: "Espacio Abierto",
    contacto: "--",
    imagen: ["/poliplazas/poliplaza9.jpg", "/poliplazas/poliplaza9_2.jpg"],
    x: 46,
    y: 82.5,
    radius: 50,
  },
    poliplaza8: {
    nombre: "PoliPlaza 8",
    descripcion: "Espacio abierto tipo plaza dentro del campus que funciona como zona de encuentro, relajación o estudio al aire libre, con vegetación y bancos.",
    horarios: "Abierto Siempre",
    capacidad: "Espacio Abierto",
    contacto: "--",
    imagen: ["/poliplazas/poliplaza8.jpg","/poliplazas/poliplaza8_2.jpg", "/poliplazas/poliplaza8_3.jpg",   
    "/poliplazas/poliplaza8_4.jpeg", "/poliplazas/poliplaza8_5.jpeg"],
    x: 52,
    y: 77,
    radius: 50,
  },
  calistenia: {
    nombre: "Parque de Calistenia",
    descripcion: "Espacio al aire libre equipado para la práctica de ejercicios de calistenia, diseñado para promover la actividad física y el bienestar de los estudiantes. Cuenta con estructuras metálicas, barras paralelas, dominadas y otros elementos que permiten realizar rutinas de fuerza y resistencia sin necesidad de equipamiento adicional.",
    horarios: "Abierto Siempre",
    capacidad: "Espacio Abierto",
    contacto: "--",
    imagen: ["/calistenia/calistenia.jpeg","/calistenia/calistenia2.jpg", 
      "/calistenia/calistenia3.jpg", "/calistenia/otro.jpeg"],
    x: 50,  
    y: 78,
    radius: 50,
  },
    columnas: {
    nombre: "Área de Prácticas de Conexión Eléctrica",
    descripcion: "Infraestructura técnica especializada donde los estudiantes de Ingeniería Eléctrica realizan conexiones, prácticas reales de instalaciones eléctricas, mediciones y experiencias de laboratorio.",
    capacidad: "Espacio Abierto",
    horarios: "Abierto Siempre",
    contacto: "--",
    imagen: ["/columnas/e1.jpeg", "/columnas/e2.jpeg"],
    x: 62,
    y: 67,
    radius: 50,
  },
    bloque_aulas: {
    nombre: "Bloque de Aulas",
    descripcion: "El Bloque de Aulas constituye la zona principal de enseñanza de la Facultad. El edificio cuenta con múltiples salas equipadas con mobiliario moderno, pizarras, proyectores y sistemas de ventilación.",
    horarios: "Abierto durante horario institucional",
    capacidad: "Varias aulas en dos plantas",        
    contacto: "--",
    imagen: ["/bloque_aulas/pasillo1.jpg", "/bloque_aulas/pasillo4.jpg","/bloque_aulas/pasillo5.jpg",
     "/bloque_aulas/saladeclases.jpg", "/bloque_aulas/ba1.jpeg","/bloque_aulas/bebedero.jpg",
     "/bloque_aulas/cefpune.jpg",],
    x: 54,
    y: 47,
    radius: 60,
  },
    aula_magna: {
    nombre: "Aula Magna 1 y Aula Magna 2",
    descripcion: "Salas de gran capacidad para conferencias, clases magistrales, eventos académicos o ceremonias institucionales, ubicado en el bloque de aulas.",
    horarios: "Abierto durante horario institucional",
    capacidad: "80 personas",
    contacto: "--",
    imagen: ["/aulamagna/am1.jpeg"],
    x: 60,
    y: 41,
    radius: 50,
  },
    poliplaza1: {
    nombre: "PoliPlaza 1",
    descripcion: "Espacio abierto tipo plaza dentro del campus que funciona como zona de encuentro, relajación o estudio al aire libre, con vegetación y bancos.",
    horarios: "Abierto Siempre",
    capacidad: "Espacio Abierto",
    contacto: "--",
    imagen: ["/poliplazas/poliplaza1_2.jpg", "/poliplazas/poliplaza1_1.jpg", "/poliplazas/p1_2.jpeg"],
    x: 58,
    y: 57,
    radius: 50,
  },  
  laboratorios: {
    nombre: "Bloque de Laboratorios",
    descripcion: "Espacio general para prácticas de enseñanza técnica o científica, equipado con bancos de trabajo, instrumentos y ambientes de experimentación. Se encuentran Laboratorio de Hardware y Redes, Automatización y Control, Física, Electricidad y Electrónica, Química, Informática",
    horarios: "Abierto durante horario institucional",
    capacidad: "Varias aulas en dos plantas",        
    contacto: "--",
    imagen: ["/laboratorio/lab1.jpg", "/laboratorio/lab2.jpeg", "/laboratorio/lab3.jpeg", 
    "/laboratorio/labc1.jpg", "/laboratorio/labd1.jpg", "/laboratorio/le2.jpeg", "/laboratorio/le3.jpeg",
    "/laboratorio/h_lab.jpg", "/laboratorio/m_lab.jpg"],
    x: 58,
    y: 19,
    radius: 60,
  },
  estacionamiento: {
    nombre: "Estacionamiento",
    descripcion: "Área habilitada para el estacionamiento de vehículos de estudiantes y visitantes dentro del campus.",
    horarios: "Abierto durante horario institucional",
    capacidad: "100 vehiculos",
    contacto: "--",
    imagen: ["/estacionamiento/est1.jpg", "/estacionamiento/est2.jpeg", 
    "/estacionamiento/est_polito.jpg"],
    x: 45,
    y: 30,
    radius: 50,
  },
  edificio1: {
    nombre: "Centro de Información Universitaria",
    descripcion: "Espacio dedicado a la recepción y orientación de estudiantes y visitantes, donde se centraliza la información institucional",
    horarios: "Abierto durante horario institucional",
    contacto: "secretaria@fpune.edu.py",
    capacidad: "--",
    imagen: ["/centro/centro4.jpeg", "/centro/centro3.jpeg"],
    x: 35,
    y: 17,
    radius: 50,
  },
  cantina: {
    nombre: "Restaurante Universitario",
    descripcion: "Área de servicio alimentario ubicada en el campus, destinada a estudiantes, docentes y visitantes para pausa, café o almuerzo informal.",
    horarios: "Abierto durante horario institucional",
    capacidad: "80 personas",
    contacto: "--",
    imagen: ["/cantina/can7.jpeg", "/cantina/cantina1.jpg","/cantina/can3.jpeg",
    "/cantina/can5.jpeg"],
    x: 35,
    y: 31,
    radius: 50,
  },
    biblioteca: {
    nombre: "Biblioteca",
    descripcion: "La Biblioteca de la facultad ofrece recursos académicos, sala de lectura, préstamo de materiales, acceso a internet para investigación y ambientes grupales o individuales de estudio.Cantina universitaria con opciones variadas de comida.",
    horarios: "Lunes a viernes de 07:30 a 20:30 hs",
    capacidad: "80 personas",
    contacto: ["biblioteca@fpune.edu.py"],
    imagen: ["biblioteca/biblioteca1.jpg","biblioteca/biblioteca1.jpg",
      "biblioteca/biblioteca1.jpg", "biblioteca/biblioteca2.jpg", "biblioteca/biblioteca3.jpg",
     "biblioteca/biblioteca4.jpg","biblioteca/biblioteca5.jpg","biblioteca/biblioteca7.jpg", 
     "biblioteca/biblioteca8.jpg", "biblioteca/biblioteca9.jpg", "biblioteca/biblioteca10.jpg",
     "biblioteca/biblioteca13.jpg", "biblioteca/cartel2.jpg"],
    x: 35,
    y: 47,
    radius: 50,
  },
    poliplaza4: {
    nombre: "PoliPlaza 4",
    descripcion: "Espacio abierto tipo plaza dentro del campus que funciona como zona de encuentro, relajación o estudio al aire libre, con vegetación y bancos.",
    horarios: "Abierto Siempre",
    capacidad: "Espacio Abierto",
    contacto: "--",
    imagen: ["/poliplazas/poliplaza4.jpg"],
    x: 35.5,
    y: 51,
    radius: 50,
  },
  poliplaza5: {
    nombre: "PoliPlaza 5",
    descripcion: "Espacio abierto tipo plaza dentro del campus que funciona como zona de encuentro, relajación o estudio al aire libre, con vegetación y bancos.",
    horarios: "Abierto Siempre",
    capacidad: "Espacio Abierto",
    contacto: "--",
    imagen: ["/poliplazas/poliplaza5.jpg"],
    x: 21,
    y: 49,
    radius: 50,
  },
    poliplaza6: {
    nombre: "PoliPlaza 6",
    descripcion: "Espacio abierto tipo plaza dentro del campus que funciona como zona de encuentro, relajación o estudio al aire libre, con vegetación y bancos.",
    horarios: "Abierto Siempre",
    capacidad: "Espacio Abierto",
    contacto: "--",  
    imagen: "/poliplazas/poliplaza6.jpg",
    x: 15,
    y: 48,
    radius: 50,
  },
    poliplaza2: {
    nombre: "PoliPlaza 2",
    descripcion: "Espacio abierto tipo plaza dentro del campus que funciona como zona de encuentro, relajación o estudio al aire libre, con vegetación y bancos.",
    horarios: "Abierto Siempre",
    capacidad: "Espacio Abierto",
    contacto: "--",
    imagen: ["/poliplazas/poliplaza2.jpeg", "/poliplazas/p2_2.jpeg"],
    x: 45,
    y: 53,
    radius: 50,
  },
    poliplaza3: {
    nombre: "PoliPlaza 3",
    descripcion: "Espacio abierto tipo plaza dentro del campus que funciona como zona de encuentro, relajación o estudio al aire libre, con vegetación y bancos.",
    horarios: "Abierto Siempre",
    capacidad: "Espacio Abierto",
    contacto: "--",
    imagen: ["/poliplazas/poliplaza3.jpg", "/poliplazas/p3.jpeg"],
    x: 56,
    y: 31,
    radius: 50,
  },
    rectorado: {
    nombre: "Rectorado UNE",
    descripcion: "El Rectorado de la Universidad Nacional del Este (UNE) es la máxima instancia administrativa y académica de la institución. Desde este órgano se coordinan, planifican y supervisan las políticas institucionales, los programas académicos, la investigación, la extensión universitaria y la gestión general de todas las facultades que integran la UNE.",
    horarios: "7:00 - 13:00",
    capacidad: "--",
    contacto: "rectorado@une.edu.py  / +595 61 572 331 / +595 61 572 335",
    imagen: ["/rectorado.jpg", "/rectorado2.jpeg"],
    x: 88,
    y: 21,
    radius: 50,
  },
  mesa_de_entrada: {
    nombre: "Mesa de Entrada",
    descripcion: "Punto de acceso principal a la facultad donde se gestionan consultas, acreditaciones de ingreso, entrega de credenciales y orientación inmediata al campus.",
    horarios: "Lunes a Viernes: 7:30 - 13:00 | 14:30 - 20:00",
    contacto: "+595 21 3281244 / +595 21 3281252.",
    capacidad: "--",
       imagen: ["/mesa_entrada/mesaentrada1.jpg", "/mesa_entrada/me1.jpeg",   
    "/mesa_entrada/me3.jpeg", "/mesa_entrada/me4.jpeg","/mesa_entrada/me6.jpeg"],
    x: 40,
    y: 65,
    radius: 50,
  },
  enfermeria: {
    nombre: "Enfermeria",
    descripcion: "Servicio de atención sanitaria básica y primeros auxilios para estudiantes y personal del campus.",
    horarios: "Abierto durante horario institucional",
    capacidad: "--",
    contacto: "--",
    imagen: ["/enfermeria/enfermeria1.jpg","/enfermeria/enfermeria2.jpg"],
    x: 38,
    y: 72,
    radius: 50,
  },
   huerto: {
    nombre: "Huerto",
    descripcion: "Área verde de cultivo dentro del campus.",
    horarios: "Abierto Siempre",
    imagen: ["plantacion1.jpg", "plantacion2.jpg"],
    capacidad: "--",
    contacto: "--",
    x: 33,
    y: 76,
    radius: 50,
  },

}

// ====== COMPONENTE DE ÁREA INTERACTIVA ======
interface InteractiveAreaProps {
  id: string
  data: any
  isSelected: boolean
  isHovered: boolean
  onHover: (id: string | null) => void
  onClick: (id: string) => void
}

function InteractiveArea({ id, data, isSelected, isHovered, onHover, onClick }: InteractiveAreaProps) {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768
  const r = isMobile ? data.radius * 0.7 : data.radius

  return (
    <div
      className="absolute"
      style={{ left: `${data.x}%`, top: `${data.y}%`, transform: "translate(-50%, -50%)" }}
    >
      <AnimatePresence>
        {(isHovered || isSelected) && (
          <motion.div
            key="label"
            initial={{ opacity: 0, y: 6, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.95 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 whitespace-nowrap px-3 py-1.5 rounded-lg text-xs font-bold shadow-lg bg-blue-900 text-white pointer-events-none z-[60]"
          >
            {data.nombre}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="relative rounded-full cursor-pointer"
        style={{ width: r, height: r }}
        animate={
          isSelected
            ? { scale: 1.15 }
            : { scale: 1 }
        }
        whileTap={{ scale: 0.82 }}
        transition={{ type: "spring", stiffness: 380, damping: 22 }}
        onMouseEnter={() => onHover(id)}
        onMouseLeave={() => onHover(null)}
        onClick={() => onClick(id)}
      >
        <motion.div
          className="absolute inset-0 rounded-full"
          animate={{
            backgroundColor: isSelected
              ? "rgba(29,78,216,0.85)"
              : isHovered
              ? "rgba(37,99,235,0.55)"
              : "rgba(59,130,246,0.32)",
          }}
          transition={{ duration: 0.18 }}
        />
        <motion.div
          className="absolute inset-0 rounded-full border-2"
          animate={{
            borderColor: isSelected ? "rgba(96,165,250,1)" : "rgba(96,165,250,0.55)",
            opacity: isSelected ? 1 : isHovered ? 0.85 : 0.55,
          }}
          transition={{ duration: 0.18 }}
        />
        {isSelected && (
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-blue-400"
            animate={{ scale: [1, 1.7], opacity: [0.6, 0] }}
            transition={{ duration: 0.7, repeat: Infinity, ease: "easeOut" }}
          />
        )}
      </motion.div>
    </div>
  )
}

function MapViewer({ src, children, isMobile, windowHeight }:
  { src: string; children: React.ReactNode; isMobile: boolean; windowHeight: number }) {

  const containerRef = useRef<HTMLDivElement | null>(null)
  const imgRef = useRef<HTMLImageElement>(null)
  const pointers = useRef<Map<number, { x: number; y: number }>>(new Map())
  const lastPan = useRef<{ x: number; y: number }>({ x: 0, y: 0 })
  const lastDist = useRef<number | null>(null)
  const lastMid = useRef<{ x: number; y: number }>({ x: 0, y: 0 })

  const MIN_SCALE = 1
  const MAX_SCALE = 3

  const [view, setView] = useState({ tx: 0, ty: 0, scale: 1 })

  useEffect(() => {
    setView({ tx: 0, ty: 0, scale: 1 })
    lastDist.current = null
  }, [src])

  const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v))

  const getLimits = (s: number) => ({
    minX: Math.min(0, (containerRef.current?.offsetWidth ?? 0) - (imgRef.current?.offsetWidth ?? 0) * s),
    minY: Math.min(0, (containerRef.current?.offsetHeight ?? 0) - (imgRef.current?.offsetHeight ?? 0) * s),
  })

  const clampX = (v: number, s: number) => clamp(v, getLimits(s).minX, 0)
  const clampY = (v: number, s: number) => clamp(v, getLimits(s).minY, 0)

  const getPoints = () => Array.from(pointers.current.values())
  const pdist = (a: { x: number; y: number }, b: { x: number; y: number }) => Math.hypot(b.x - a.x, b.y - a.y)
  const pmid  = (a: { x: number; y: number }, b: { x: number; y: number }) => ({ x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 })

  const onPointerDown = (e: React.PointerEvent) => {
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY })
    const p = getPoints()
    if (p.length === 1) {
      lastPan.current = { x: e.clientX, y: e.clientY }
    } else if (p.length === 2) {
      lastDist.current = pdist(p[0], p[1])
      lastMid.current  = pmid(p[0], p[1])
    }
  }

  const onPointerMove = (e: React.PointerEvent) => {
    if (!pointers.current.has(e.pointerId)) return
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY })
    const p    = getPoints()
    const rect = containerRef.current?.getBoundingClientRect()

    if (p.length >= 2 && lastDist.current !== null && rect) {
      const newDist = pdist(p[0], p[1])
      const newMid  = pmid(p[0], p[1])
      setView(prev => {
        const ratio     = newDist / lastDist.current!
        const nextScale = clamp(prev.scale * ratio, MIN_SCALE, MAX_SCALE)
        const sr        = nextScale / prev.scale
        const px        = lastMid.current.x - rect.left
        const py        = lastMid.current.y - rect.top
        return {
          scale: nextScale,
          tx: clampX(px - sr * (px - prev.tx), nextScale),
          ty: clampY(py - sr * (py - prev.ty), nextScale),
        }
      })
      lastDist.current = newDist
      lastMid.current  = newMid
    } else if (p.length === 1) {
      const dx = e.clientX - lastPan.current.x
      const dy = e.clientY - lastPan.current.y
      lastPan.current = { x: e.clientX, y: e.clientY }
      setView(prev => ({
        ...prev,
        tx: clampX(prev.tx + dx, prev.scale),
        ty: clampY(prev.ty + dy, prev.scale),
      }))
    }
  }

  const onPointerUp = (e: React.PointerEvent) => {
    pointers.current.delete(e.pointerId)
    if (pointers.current.size < 2) lastDist.current = null
    const p = getPoints()
    if (p.length === 1) lastPan.current = p[0]
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden bg-[#0b284e]"
      style={{ height: "calc(100vh - 80px)", marginTop: "80px" }}
    >
      <div
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        style={{
          transform: `translate(${view.tx}px, ${view.ty}px) scale(${view.scale})`,
          transformOrigin: "0 0",
          touchAction: "none",
          position: "relative",
          width: isMobile ? "600px" : "100%",
          cursor: "grab",
          willChange: "transform",
        }}
      >
        <img
          ref={imgRef}
          src={src}
          alt="Mapa"
          className="select-none pointer-events-none"
          style={{ display: "block", width: "100%", height: "auto" }}
        />
        <div className="absolute inset-0">
          {children}
        </div>
      </div>
    </div>
  )
}



// ====== COMPONENTE PRINCIPAL ======
export default function MapaInteractivo() {
  const [vistaActual, setVistaActual] = useState(1)
  const [areaSeleccionada, setAreaSeleccionada] = useState<string | null>(null)
  const [areaHover, setAreaHover] = useState<string | null>(null)
  const mapRef = useRef<HTMLDivElement>(null)
  const [windowWidth, windowHeight] = useWindowSize();
  const isMobile = windowWidth < 768;

  const vistasData: Record<number, any> = {
    1: areasDataVista1,
    2: areasDataVista2,
    3: areasDataVista3,
  }

  // Mapeo de áreas por categoría
   const [filtroVisible, setFiltroVisible] = useState(false)
  const [categoria, setCategoria] = useState("Todos")

  const categorias: Record<string, string[]> = {
    Todos: [],
    Administrativo: ["mesa_de_entrada", "coordinacion", "edificio1"],
    Servicios: [ "biblioteca", "enfermeria", "cantina", "comedor", "estudio"],
    "Poliplazas": ["poliplaza1", "poliplaza2", "poliplaza3", "poliplaza4", "poliplaza5", "poliplaza6", "poliplaza8", "poliplaza9"],
    Aulas: ["bloque_aulas", "laboratorios", "aula_magna", "columna"],
    "Espacios deportivos": ["cancha_pista", "cancha_pasto", "calistenia"],
    Estacionamientos: ["estacionamiento", "estacionamiento_funcionarios"],
    Otros: ["huerto", "rectorado"],
  }

  //filtrar areas segun categoria
  const areasFiltradas = Object.entries(vistasData[vistaActual]).filter(([id]) => {
    if (categoria === "Todos") return true
    return categorias[categoria]?.includes(id)
  })

 
  //--------------------------------------------
  //AGREGO ESTE BLOQUE, bloque el scroll de la pagina al cargar el mapa
    useEffect(() => {
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100%';
      // Agregá esta línea para que el fondo sea siempre el azul de tu app
      document.body.style.backgroundColor = '#0b284e'; 

      return () => {
        document.body.style.overflow = 'unset';
        document.body.style.height = 'unset';
        document.body.style.backgroundColor = 'unset';
      };
    }, []);
  //-------------------------------------------


  const cerrarPanel = () => setAreaSeleccionada(null)


  const areaInfo =
    areaSeleccionada && vistasData[vistaActual]
      ? vistasData[vistaActual][areaSeleccionada as keyof typeof vistasData[1]]
      : null


  return (
    <>
      {/* ===== ENCABEZADO ===== */}
      <header className="fixed top-0 left-0 w-full z-[100] bg-[#0b284e] shadow-lg border-b border-blue-900">
        <div className="w-full px-6 py-3 flex items-center justify-between text-white">
          
          {/* TODO ESTE BLOQUE ES EL NUEVO BOTÓN DE INICIO */}
          <a href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity active:scale-95">
            <img
              src="/logoFpune2.png"
              alt="Logo FPUNE"
              className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-white object-cover"
            />
            <div>
              <h1 className="text-base md:text-lg font-bold leading-tight">PoliGuía</h1>
              {/* Ahora es un simple span (texto normal), no un link */}
              <span className="text-[10px] md:text-sm text-blue-200 -mt-1 block">
                FPUNE
              </span>
            </div>
          </a>

          {/* NAVEGACIÓN PARA PC (Se mantiene oculta en móvil) */}
          <nav className="hidden md:flex gap-8 text-lg font-semibold">
            <a href="/" className="hover:text-blue-300 transition-colors">Inicio</a>
            <a href="/#sobre" className="hover:text-blue-300 transition-colors">Sobre el Proyecto</a>
            <a href="/#uso" className="hover:text-blue-300 transition-colors">Tutorial</a>
          </nav>

        </div>
      </header>

{/* ===== MAPA PRINCIPAL ===== */}
<div className="bg-no-repeat bg-top">
  <MapViewer
    src={
      vistaActual === 1 ? "/1poli.png" : vistaActual === 2 ? "/2poli.png" : "/3poli.png"
    }
    isMobile={isMobile}
    windowHeight={windowHeight}
  >
    {/* Áreas interactivas: se renderizan sobre la imagen y usan % para posicionarse */}
    {areasFiltradas.map(([id, data]) => (
      <InteractiveArea
        key={id}
        id={id}
        data={data}
        isSelected={areaSeleccionada === id}
        isHovered={areaHover === id}
        onHover={setAreaHover}
        onClick={setAreaSeleccionada}
      />
    ))}
  </MapViewer>

{/* Panel con información */}
{/* 1. Envolmvemos todo en AnimatePresence para habilitar animaciones de salida */}
<AnimatePresence>
  {areaSeleccionada && areaInfo && (
    <>
      {/* 1. Fondo negro independiente - Animación simple de opacidad */}
      <motion.div
        key="overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }} // Un poco más rápido para que no distraiga
        onClick={cerrarPanel}
        className="fixed inset-0 bg-black/40 z-[110] backdrop-blur-[2px]"
      />

      {/* 2. El Panel - Recuperamos la fluidez original con coordenadas fijas */}
      <motion.div
        key="info-panel-content"
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        // Usamos una transición física (spring) pero ajustada para que sea suave
        transition={{ 
          type: "spring", 
          damping: 30, 
          stiffness: 300, 
          mass: 0.8     // Menos masa para que se mueva más liviano
        }}
        className="fixed bottom-0 left-0 w-full z-[120]"
      >
        <InfoPanel
          area={{
            nombre: areaInfo.nombre,
            descripcion: areaInfo.descripcion,
            horarios: areaInfo.horarios,
            capacidad: areaInfo.capacidad,
            contacto: areaInfo.contacto,
            imagenes: Array.isArray(areaInfo.imagen) ? areaInfo.imagen : [areaInfo.imagen],
          }}
          onClose={cerrarPanel}
        />
      </motion.div>
    </>
  )}
</AnimatePresence>

  {/* Selector de vistas mejorado para móvil */}
  <div className="fixed bottom-6 right-6 md:right-6 bg-white/90 backdrop-blur-sm rounded-full md:rounded-xl shadow-lg z-40 p-2 md:p-4 flex flex-row md:flex-col items-center gap-2">
    <h3 className="hidden md:block font-semibold text-gray-900 text-sm mb-1">
      Vistas
    </h3>
    <div className="flex gap-2">
      {[1, 2, 3].map((vista) => (
        <button
          key={vista}
          onClick={() => setVistaActual(vista)}
          className={`w-10 h-10 md:w-8 md:h-8 rounded-full md:rounded-lg border-2 transition-all flex items-center justify-center font-bold ${
            vistaActual === vista
              ? "border-blue-600 bg-blue-500 text-white"
              : "border-gray-300 bg-white text-gray-600"
          }`}
        >
          {vista}
        </button>
      ))}
    </div>
  </div>



{/* ===== PANEL DE FILTROS ===== */}
    {/* Botón hamburguesa con Tooltip */}
    <div className={`fixed top-[95px] left-6 z-[100] group transition-opacity ${areaSeleccionada ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
      <button
        onClick={() => setFiltroVisible(!filtroVisible)}
        className="bg-[#0b284e] text-white p-3 rounded-xl shadow-2xl transition-all duration-300 hover:bg-[#153a7a] hover:scale-105"
      >
        <Menu className="w-6 h-6" />
      </button>
    </div>

      {/* Overlay: bloquea el mapa y cierra el panel al tocar afuera */}
      <AnimatePresence>
        {filtroVisible && (
          <motion.div
            key="sidebar-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[85]"
            onClick={() => setFiltroVisible(false)}
          />
        )}
      </AnimatePresence>

      {/* Panel lateral */}
      <motion.div
        className="fixed top-[80px] left-0 h-full bg-[#0b284e] text-white w-64 shadow-2xl z-[90]"
        animate={{ x: filtroVisible ? 0 : -256 }}
        initial={{ x: -256 }}
        transition={{ type: "spring", damping: 30, stiffness: 300 }}
        drag="x"
        dragConstraints={{ left: -256, right: 0 }}
        dragElastic={0}
        dragMomentum={false}
        style={{ pointerEvents: filtroVisible ? "auto" : "none" }}
        onDragEnd={(_: unknown, info: { offset: { x: number }; velocity: { x: number } }) => {
          if (info.offset.x < -50 || info.velocity.x < -300) {
            setFiltroVisible(false)
          }
        }}
      >
        <ul className="pt-4 p-4 space-y-2">
          {Object.keys(categorias).map((cat) => (
            <li key={cat}>
              <button
                onClick={() => {
                  setCategoria(cat);
                  setFiltroVisible(false);
                }}
                className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                  categoria === cat
                    ? "bg-blue-600 text-white font-semibold"
                    : "hover:bg-blue-800/50 text-blue-200"
                }`}
              >
                {cat}
              </button>
            </li>
          ))}
        </ul>
      </motion.div>


</div>
    </>
  )
}
