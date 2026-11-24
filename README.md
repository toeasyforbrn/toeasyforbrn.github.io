# La nocheósfera · Portafolio de Bryan González

Portafolio con un paisaje de Jarabacoa que pasa de día a noche mientras haces scroll.
Hecho con **React + Vite + Bootstrap 5** y publicado en **Cloudflare Workers**.

## Trabajar en la página

```bash
npm install      # solo la primera vez (o cuando cambien las dependencias)
npm run dev      # abre http://localhost:5173 y ves los cambios al instante
npm run build    # genera la versión final en dist/
```

## Publicar en Cloudflare Workers

La configuración está en `wrangler.jsonc` (sirve la carpeta `dist`).

1. Crea una cuenta gratis en https://dash.cloudflare.com/sign-up
2. En la terminal de VS Code, dentro de esta carpeta:
   ```bash
   npx wrangler login   # abre el navegador para que autorices tu cuenta
   npm run deploy       # compila y sube la página
   ```
3. Wrangler te muestra el enlace: `https://nocheosfera.<tu-subdominio>.workers.dev`

Cada vez que cambies algo, vuelve a correr `npm run deploy`.

## Dónde cambiar cada cosa

| Quiero cambiar… | Archivo |
|---|---|
| Textos (español e inglés), proyectos, trayectoria, redes | `src/data/contenido.js` |
| Colores del cielo y en qué momento pasa cada cosa | `src/lib/escena.js` |
| Estilos y animaciones | `src/styles/global.css` |
| Partes de Bootstrap que se cargan | `src/styles/bootstrap.scss` |
| El paisaje (día, atardecer y noche) | `src/assets/*.svg` |

## Cómo funciona la animación

Todo depende de un número: **p**, el progreso del scroll (0 arriba, 1 abajo).
`src/hooks/useEscenaScroll.js` lo calcula y `src/lib/escena.js` lo convierte en variables CSS
(`--nocheOp`, `--buho`, `--tinta`…). Cada pieza de la escena usa su variable en `global.css`.

## Rendimiento

- Solo se carga la parte de Bootstrap que se usa (CSS de ~250 KB a ~65 KB).
- El scroll no vuelve a renderizar React: solo cambia variables CSS, y solo las que cambiaron.
- Los brillos (luciérnagas, humo, ventana) usan degradados, no filtros de desenfoque.
- El cursor es el del sistema con otro dibujo, sin retraso.
