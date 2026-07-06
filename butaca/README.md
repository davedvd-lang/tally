# 🍿 Butaca

Prototipo de diario personal de series y películas: estados **Viendo / Por ver / Vistas**
independientes para pelis y series, con seguimiento por temporada y capítulo de un solo
toque. React 19 + Tailwind CSS 4 + Lucide Icons, datos locales de ejemplo (sin red, sin
cuentas).

**Probar**: abre `index.html` en cualquier navegador (es un único archivo autocontenido).

**Carátulas y sinopsis**: cada título incluye sinopsis en español. Las carátulas reales se
cargan solas al abrir la app con conexión (TVmaze para series, iTunes para películas — sin
clave) y se cachean en `localStorage`; sin red se muestra el póster de degradado. Con una
API key gratuita de [TMDB](https://www.themoviedb.org/settings/api) (pestaña **Stats**) el
buscador pasa a ser online y global, con carátulas, sinopsis en español y temporadas
reales al añadir una serie. Tu biblioteca persiste en el dispositivo entre sesiones.

**PWA instalable**: servida por HTTPS (por ejemplo GitHub Pages), la app se puede instalar
en el móvil («Añadir a pantalla de inicio») y funciona sin conexión: el service worker
cachea la app y las carátulas ya vistas. En **Stats** puedes exportar tu biblioteca a un
archivo JSON e importarla en otro dispositivo — el mismo esquema de copia de seguridad
que Tally.

**Publicar en GitHub Pages**: activa Pages (Settings → Pages → Deploy from branch → main)
y la app quedará en `https://<usuario>.github.io/<repo>/butaca/`.

**Desarrollar**:

```bash
npm install
npm run build   # regenera index.html desde src/
```

Las decisiones de diseño (arquitectura de información, flujos, paleta, microinteracciones)
están documentadas en [DESIGN.md](DESIGN.md).
