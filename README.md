# Marina Vera Guzmán Landing

Landing pública construida con React, Vite y Tailwind CSS. Su recorrido guía a
las personas desde conocer el enfoque hasta solicitar una cita online o
presencial; no incluye portal clínico, autenticación, pagos ni captura propia de
datos.

## Scripts

- `npm run dev`: inicia Vite en desarrollo.
- `npm run build`: genera la build de producción.
- `npm run preview`: sirve la build generada.
- `npm run lint`: ejecuta ESLint.
- `npm test`: ejecuta las pruebas deterministas de configuración y navegación.

## Configuración pública

`src/config/publicSite.js` es la única fuente de datos públicos compartidos:
nombre, rol, registro SIS, navegación y enlaces externos. El registro correcto
es `829352`; no debe repetirse como texto literal en componentes.

| Variable | Uso |
| --- | --- |
| `VITE_EMAIL` | Correo opcional mostrado en contacto. |
| `VITE_INSTAGRAM_URL` | Perfil público de Instagram. |
| `VITE_TIKTOK_URL` | Perfil público de TikTok. |

## Antes de publicar

- Confirmar con la titular cualquier canal de solicitud y las condiciones de atención presencial antes de habilitarlo.
- Revisar enlaces de redes y contacto en `publicSite.js`.
- No añadir testimonios, precios, horarios, ubicación, condiciones legales,
  privacidad o información de urgencias sin texto aprobado por la titular.

## Metadatos de despliegue pendientes

El título, la descripción y `robots` están en `index.html` para que sigan
disponibles sin JavaScript. Canonical, imágenes Open Graph, tarjetas sociales y
datos estructurados permanecen fuera hasta contar con un dominio público, URL de
imagen y datos de publicación confirmados. No se deben inferir esos valores.

## Calidad

La automatización en `.github/workflows/quality.yml` ejecuta `npm run lint`,
`npm test` y `npm run build`, y conserva el directorio `dist` como el artefacto
`production-build` durante 14 días. Las pruebas cubren la ausencia de un canal
de recolección para citas, los fragmentos de navegación y el foco al navegar
desde el menú móvil.

## Recuperar una versión conocida como buena

1. En GitHub Actions, identificar una ejecución verde de `Quality` y descargar
   su artefacto `production-build` antes de su vencimiento.
2. Extraerlo y reemplazar localmente el directorio `dist` por el contenido del
   artefacto. Ejecutar `npm run preview -- --host 127.0.0.1 --port 4173` y
   verificar la página, las modalidades online/presencial y que no exista un
   canal de reserva confirmado.
3. Publicar **únicamente ese `dist` validado** mediante el procedimiento de
   despliegue vigente del entorno. No reconstruir desde otra revisión durante la
   restauración.
4. Confirmar la versión restaurada en el entorno público y registrar la
   ejecución de CI/artefacto usada. Si no queda un artefacto válido, restaurar la
   revisión conocida como buena, ejecutar las tres comprobaciones de calidad y
   desplegar el nuevo `dist` resultante.

## Estructura

- `src/App.jsx`: composición de la página pública.
- `src/config/publicSite.js`: configuración pública centralizada.
- `src/components/CarePathway.jsx`: ruta de cuidado y selector de modalidad.
- `src/index.css`: tokens, layout responsive, foco visible y reducción de movimiento.
- `public/robots.txt` y `public/sitemap.xml`: base SEO estática sin dominio supuesto.
