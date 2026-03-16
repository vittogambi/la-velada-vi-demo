# La Velada del Año VI — Demo

Demo interactiva de la web de La Velada del Año VI, construida como candidatura de desarrollador para el evento de Ibai Llanos a través de InfoJobs + Midudev.

## Por qué esta demo destaca

- **Sistema de predicciones interactivo** — vota por combate, confetti al votar, persistencia en localStorage, botón de compartir en Twitter/X y portapapeles.
- **10 combates reales** — cartelera completa con descripciones, tags (Periodismo, Femenino, Trap, Main Event...) y acordeón con transición suave.
- **Diseño fiel al original** — logo, countdown en tiempo real, "Entradas agotadas", redes sociales, patrocinio InfoJobs.
- **Animaciones de entrada** — staggered fadeInUp en el hero, partículas doradas CSS, scroll reveal en combates via IntersectionObserver.
- **SEO y Open Graph** — meta tags, JSON-LD schema Event, favicon SVG, apple-touch-icon.
- **Accesibilidad** — skip-to-content link, aria-expanded, aria-live, role="timer".
- **Mismo stack que la web oficial** — Astro 5, Tailwind CSS 4, View Transitions API, TypeScript.

## Stack

| Tecnología | Versión |
|------------|---------|
| [Astro](https://astro.build) | 5.18 |
| [Tailwind CSS](https://tailwindcss.com) | 4.2 |
| TypeScript | 5.7 |
| [canvas-confetti](https://www.npmjs.com/package/canvas-confetti) | 1.9 |
| View Transitions API | nativo |

## Desarrollo local

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo (http://localhost:4321)
npm run dev

# Build de producción
npm run build

# Preview de la build
npm run preview
```

## Estructura del proyecto

```
src/
├── components/
│   ├── Hero.astro          # Logo, countdown, partículas, entradas agotadas
│   ├── Combates.astro      # Cartelera con VS layout, tags, acordeón
│   ├── Predictions.astro   # Votación interactiva con confetti y share
│   └── Footer.astro        # Redes sociales, InfoJobs, créditos
├── layouts/
│   └── Layout.astro        # Head, OG tags, JSON-LD, fonts
├── pages/
│   └── index.astro         # Página principal
└── styles/
    └── global.css          # Tailwind, animaciones, scrollbar custom
```

## Deploy

El proyecto está configurado para Railway (static output con `serve`), pero funciona en cualquier hosting estático:

```bash
npm run build   # genera dist/
npx serve dist  # sirve en localhost:3000
```

Compatible con Vercel, Netlify, Cloudflare Pages o cualquier CDN.

## Autor

**Vittorio Gambi** — [GitHub](https://github.com/vittogambi)

Demo para candidatura a desarrollador en La Velada del Año VI · InfoJobs + Midudev
