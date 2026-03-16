# La Velada VI — Demo

Mini-proyecto interactivo construido con el mismo stack que la web oficial de La Velada del Año VI.

**Stack:** Astro 5.18 · Tailwind CSS 4.2 · TypeScript · View Transitions API · canvas-confetti · Railway

## Contenido

- Hero con branding La Velada VI
- Countdown interactivo al 25 de julio de 2026
- Sección de predicciones con votación local (localStorage) y confetti
- View Transitions entre navegación
- Tipografía Cinzel y paleta oficial (#0a1024, #c9a227, #c0c0c0)

## Desarrollo

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy en Railway

1. Sube el repo a GitHub
2. Ve a [railway.app](https://railway.app) y crea un nuevo proyecto
3. Conecta el repo de GitHub
4. Railway detecta automáticamente el build (`npm run build`) y el start (`serve dist`)
5. Asigna un dominio en la pestaña Settings del servicio

O con la CLI:

```bash
npm i -g @railway/cli
railway login
railway init
railway up
```

## Autor

Vittorio Gambi — [vgdev14@gmail.com](mailto:vgdev14@gmail.com)

Construido con el mismo stack que la web oficial de La Velada (midudev/la-velada-web-oficial).
