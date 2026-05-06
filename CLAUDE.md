# CLAUDE.md — PoliGuiaV1

Guía de referencia para que Claude Code trabaje correctamente en este proyecto.

---

## Descripción del proyecto

**PoliGuiaV1** es una aplicación web construida con el stack moderno de Next.js App Router. Su nombre sugiere que es una guía o portal informativo (posiblemente universitario/politécnico). La interfaz está construida con componentes de shadcn/ui sobre Radix UI y estilizada con Tailwind CSS.

---

## Stack tecnológico

| Tecnología | Versión | Notas |
|---|---|---|
| Next.js | 15.1.0 | App Router (`/app` dir) |
| React | 19.0.0 | Con React DOM 19 |
| TypeScript | ^5 | Strict mode habilitado |
| Tailwind CSS | ^3.4.17 | Con `tailwindcss-animate` |
| shadcn/ui | — | Basado en Radix UI |
| Framer Motion | ^12.38.0 | Para animaciones |
| Lucide React | ^0.454.0 | Iconografía |
| Recharts | 2.15.0 | Gráficas/visualizaciones |
| React Hook Form | ^7.54.1 | Formularios con Zod |
| Zod | ^3.24.1 | Validación de esquemas |
| next-themes | ^0.4.4 | Soporte dark/light mode |
| Sonner | ^1.7.1 | Notificaciones/toasts |
| Geist | ^1.3.1 | Fuente tipográfica |
| date-fns | 4.1.0 | Manejo de fechas |
| Embla Carousel | 8.5.1 | Carrusel de contenido |
| Vaul | ^0.9.6 | Drawer (cajón deslizable) |
| cmdk | 1.0.4 | Command palette |
| pnpm | — | Gestor de paquetes preferido |

---

## Estructura del proyecto

```
PoliGuiaV1/
├── app/                  # App Router de Next.js (páginas, layouts, rutas)
├── components/           # Componentes reutilizables (shadcn/ui y propios)
├── hooks/                # Custom hooks de React
├── lib/                  # Utilidades, helpers, configuraciones
├── public/               # Assets estáticos (imágenes, íconos, fuentes)
├── styles/               # Estilos globales (globals.css con variables CSS)
├── components.json       # Configuración de shadcn/ui
├── tailwind.config.ts    # Configuración de Tailwind CSS
├── next.config.mjs       # Configuración de Next.js
├── tsconfig.json         # Configuración de TypeScript
├── .npmrc                # Configuración de npm/pnpm
└── package.json          # Dependencias y scripts
```

---

## Comandos esenciales

```bash
# Instalar dependencias
pnpm install

# Servidor de desarrollo
pnpm dev

# Build de producción
pnpm build

# Iniciar servidor de producción
pnpm start

# Linting
pnpm lint
```

> **Importante:** Usar **pnpm** como gestor de paquetes. El proyecto tiene `.npmrc` y `pnpm-lock.yaml`. No usar `npm install` ni `yarn`.

---

## Convenciones de código

### TypeScript
- Usar tipos explícitos siempre que sea posible.
- Preferir `interface` para objetos y `type` para uniones/intersecciones.
- Nunca usar `any`; usar `unknown` si el tipo es incierto.
- Habilitar y respetar el modo estricto (`strict: true` en `tsconfig.json`).

### Componentes React
- Usar **componentes funcionales** con hooks. No usar clases.
- Preferir **named exports** para componentes (no default exports, salvo en páginas de Next.js).
- Los archivos de página en `/app` deben exportar `default`.
- Colocar la lógica de estado y efectos en custom hooks dentro de `/hooks`.

### Estilos y Tailwind
- Usar exclusivamente **clases de Tailwind CSS** para estilos. No escribir CSS ad hoc salvo en `globals.css`.
- Para variantes de componentes, usar `class-variance-authority` (CVA).
- Para combinar clases condicionales, usar `clsx` + `tailwind-merge` a través de `cn()` en `lib/utils.ts`.
- Respetar el sistema de colores semántico definido en `tailwind.config.ts` (variables CSS via `hsl(var(--*))`).
- El dark mode se controla con `next-themes`; usar las clases semánticas (`bg-background`, `text-foreground`, etc.) en lugar de colores fijos.

### Componentes shadcn/ui
- Los componentes de UI base viven en `components/ui/`.
- Para agregar nuevos componentes de shadcn/ui, usar el CLI:
  ```bash
  pnpm dlx shadcn@latest add <nombre-componente>
  ```
- No modificar los archivos de `components/ui/` directamente a menos que sea estrictamente necesario; en ese caso, documentar el cambio.

### Formularios
- Usar **React Hook Form** + **Zod** para todos los formularios.
- Definir el schema de validación con Zod primero, luego usarlo con `useForm` y `zodResolver`.

### Animaciones
- Usar **Framer Motion** para animaciones complejas o de entrada/salida de elementos.
- Para animaciones simples de Tailwind (accordion, etc.), usar las utilidades de `tailwindcss-animate`.

---

## Sistema de temas

El proyecto usa variables CSS HSL para los colores. Están definidas en `styles/globals.css` y mapeadas en `tailwind.config.ts`.

**Colores semánticos disponibles:**
- `background` / `foreground`
- `card` / `card-foreground`
- `primary` / `primary-foreground`
- `secondary` / `secondary-foreground`
- `muted` / `muted-foreground`
- `accent` / `accent-foreground`
- `destructive` / `destructive-foreground`
- `border`, `input`, `ring`
- `sidebar-*` (sistema de sidebar)
- `chart-1` a `chart-5` (para Recharts)

Siempre preferir estas variables en lugar de colores hardcodeados.

---

## Patrones a seguir

### Estructura de un componente propio
```tsx
// components/mi-componente.tsx
import { cn } from "@/lib/utils"

interface MiComponenteProps {
  className?: string
  // ... otras props
}

export function MiComponente({ className, ...props }: MiComponenteProps) {
  return (
    <div className={cn("clase-base", className)} {...props}>
      {/* contenido */}
    </div>
  )
}
```

### Uso de cn() para clases condicionales
```tsx
import { cn } from "@/lib/utils"

<div className={cn(
  "base-classes",
  isActive && "active-classes",
  variant === "primary" && "primary-classes"
)} />
```

### Páginas en App Router
```tsx
// app/mi-ruta/page.tsx
export default function MiPagina() {
  return (
    <main>
      {/* contenido */}
    </main>
  )
}

export const metadata = {
  title: "Mi Página | PoliGuia",
  description: "Descripción de la página",
}
```

---

## Reglas de arquitectura

1. **No mezclar lógica con presentación.** Los componentes de UI solo reciben props y renderizan; la lógica va en hooks o en el Server Component padre.
2. **Preferir Server Components** de Next.js cuando no se necesite interactividad. Marcar con `"use client"` solo cuando sea necesario (eventos, estado, hooks del navegador).
3. **No hacer fetch de datos en Client Components** cuando se puede hacer en Server Components o en route handlers (`/app/api/`).
4. **Lazy loading** para componentes pesados con `next/dynamic`.
5. **Imágenes** siempre con el componente `<Image>` de `next/image`.
6. **Fuentes** cargadas con `next/font` (ya configurado con Geist).

---

## Lo que NO hacer

- ❌ No usar `npm` o `yarn` (usar `pnpm`).
- ❌ No instalar librerías de CSS-in-JS (styled-components, emotion) — se usa Tailwind.
- ❌ No escribir estilos inline (`style={{ color: 'red' }}`), preferir clases de Tailwind.
- ❌ No crear páginas fuera del directorio `/app`.
- ❌ No usar `React.FC` o `React.FunctionComponent` — usar la firma directa.
- ❌ No omitir tipos en funciones — siempre tipar parámetros y retornos.
- ❌ No mezclar `require()` con `import` — usar solo ES Modules.

---

## Agregar nuevas features

Al agregar una nueva sección o funcionalidad:

1. Crear la ruta en `/app/nombre-seccion/page.tsx`.
2. Si tiene componentes reutilizables, crearlos en `/components/`.
3. Si tiene lógica de estado compleja, extraerla a `/hooks/use-nombre-feature.ts`.
4. Si tiene utilidades puras, agregarlas en `/lib/`.
5. Verificar que el dark mode funcione correctamente usando las variables semánticas de Tailwind.
6. Asegurarse de que la página sea responsive (mobile-first con Tailwind).
