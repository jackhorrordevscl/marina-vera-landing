# Marina Vera Guzmán Landing

Landing page profesional para consulta psicológica, construida con React, Vite, Tailwind CSS y Framer Motion.

## Stack

- React 19
- Vite 8
- Tailwind CSS 4
- Framer Motion
- react-helmet-async
- ESLint 9

## Scripts disponibles

- `npm run dev`: inicia el servidor de desarrollo con Vite
- `npm run build`: genera la build de producción
- `npm run preview`: sirve localmente la build generada
- `npm run lint`: ejecuta ESLint sobre el proyecto

## Variables de entorno

El proyecto usa variables Vite. Puedes partir copiando `.env.example` a tu archivo `.env` local.

Variables activas en el código actual:

- `VITE_SITE_URL`: URL pública base del sitio para canonical, Open Graph, Twitter Card y JSON-LD
- `VITE_WHATSAPP_NUMBER`: número en formato internacional sin `+` para enlaces `wa.me`
- `VITE_EMAIL`: correo de contacto mostrado en el sitio
- `VITE_FORM_AGENDAR`: URL del formulario principal de agendamiento
- `VITE_INSTAGRAM_URL`: enlace público del perfil de Instagram
- `VITE_TIKTOK_URL`: enlace público del perfil de TikTok

## Estructura general

- `src/App.jsx`: compone la landing, define metadata SEO dinámica y JSON-LD
- `src/components/Header.jsx`: navegación principal y CTAs del header
- `src/components/Hero.jsx`: sección principal de apertura
- `src/components/Services.jsx`: servicios clínicos
- `src/components/Specialties.jsx`: especialidades y áreas de abordaje
- `src/components/About.jsx`: perfil profesional e imagen de presentación
- `src/components/Testimonials.jsx`: testimonios
- `src/components/Contact.jsx`: formulario principal, modalidad y CTA de WhatsApp
- `src/components/Footer.jsx`: contacto, redes y datos legales
- `src/index.css`: tokens, utilidades y estilos compartidos del layout
- `public/`: favicon, assets públicos y Open Graph image

## Notas de mantenimiento

- La metadata principal del sitio se gestiona en `src/App.jsx` con `react-helmet-async`.
- `index.html` mantiene una base SEO mínima para no depender exclusivamente del render en cliente.
- El espaciado general entre secciones se controla desde la clase compartida `.section-container` en `src/index.css`.
- Los layouts especiales de cards centradas se resolvieron localmente en `Services.jsx`, `Specialties.jsx` y `Contact.jsx`.

## Estado actual

- `npm run lint`: en verde
- `npm run build`: en verde

## Próximo mantenimiento sugerido

- Revisar periódicamente si cambian las variables activas del proyecto para mantener `.env.example` y este README alineados.
- Si el objetivo SEO crece, evaluar prerender o SSR en lugar de depender principalmente de metadata inyectada en cliente.
