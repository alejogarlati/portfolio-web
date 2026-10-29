# Portfolio & Dossier Técnico — Alejo Garlati

Aplicación web construida en **Next.js 15 (App Router) + React 19 + TypeScript + Tailwind CSS + Three.js**, diseñada siguiendo las especificaciones de identidad visual de la propuesta comercial para **Guzmán y Guzmán Inmobiliaria**.

---

## 1. Ejecución Local con Node.js

Desde la terminal, ingresá a la carpeta `portfolio-web` y ejecutá:

```bash
# Con pnpm (recomendado)
pnpm dev

# O con npm
npm run dev
```

Luego abrí **`http://localhost:3000`** en el navegador.

---

## 2. Cómo Agregar o Editar Proyectos

Toda la información está desacoplada de la interfaz en la carpeta `data/`:

- **`data/projects.ts`**: Lista de proyectos (`PROJECTS_DATA`).
  - Para sumar un nuevo proyecto, agregá un objeto al arreglo.
  - Si querés mostrar una foto o render propio en vez de la lámina vectorial, guardá la imagen en `public/projects/mi-imagen.jpg` y agregá la propiedad `image: "/projects/mi-imagen.jpg"` al proyecto.
- **`data/profile.ts`**: Datos de contacto, experiencia laboral (`Corralón Aconquija`, `Inmobiliaria Norurbana`, `Freelance`), educación y los 7 rubros de alcance.

---

## 3. Despliegue en Vercel o Netlify

El proyecto es una aplicación Next.js estándar:

1. Subí el repositorio a GitHub / GitLab o usá Vercel CLI (`npx vercel --prod`).
2. Vercel y Netlify detectan automáticamente el `package.json` y ejecutan `next build` sin requerir configuración adicional.
