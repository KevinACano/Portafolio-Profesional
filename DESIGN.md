# Sistema de Diseño y Dirección Visual (DESIGN.md)

## Portafolio Profesional — Kevin Ariel Cano Chan
**Software Engineer · Cancún, Quintana Roo, México**

---

### 1. Filosofía & Estilo (Maximalismo Limpio, Expresivo y Propio)
- **Maximalismo con claridad:** Tipografías grandes y contundentes, bordes definidos de 2px-3px, sombras *pop* neo-brutalistas (`4px 4px 0px`), sellos/stickers llamativos y contrastes calculados para un impacto visual memorable sin saturar la usabilidad.
- **Identidad Propia (Guitarras & Michis):**
  - Iconos e ilustraciones vectoriales de guitarras eléctricas y michis (gatos).
  - Widget interactivo `MichiCompanion` en la esquina inferior: acariciable, con frases y ronroneos de depuración.
  - Vibe musical en proyectos y trayectoria: *«El software es como tocar rock en vivo: precisión, sincronización y cero excusas»*.
- **Contraste Extremo y Accesibilidad (WCAG AAA):**
  - MODO OSCURO (Cyber-Obsidian): Fondo `#0A0B0E`, tarjetas `#14161E`, texto `#F7F8FC` (contraste > 15:1), acentos eléctricos `#FF5533` y `#00D8FE`.
  - MODO CLARO (Editorial Pop): Fondo `#FAF8F5`, tarjetas `#FFFFFF`, bordes `#111216`, texto `#0B0C0E` (contraste > 14:1), acentos `#D33F1E` y `#E08700`.
- **Tipografías con Carácter:**
  - Display: `Syne` (pesos 700 y 800 para encabezados imponentes).
  - Lectura: `Epilogue` (peso 400 a 700 para máxima legibilidad técnica y editorial).

---

### 2. Características Clave Implementadas
1. **Toggle de Modo Oscuro / Modo Claro:**
   - Botón en barra superior con animación de rotación sol/luna, persistencia en `localStorage` y detección de `prefers-color-scheme`.
2. **Selector de Idioma (ES / EN):**
   - Ubicado al lado del botón de tema en el header.
   - Diccionario completo en `src/data/translations.js` traduciendo todas las vistas, modales y textos.
3. **Skills Interactivas con Logos Reales y Animación:**
   - Se agregaron **Linux**, **PostgreSQL** y **Python**, además de React, Next.js, TypeScript, JavaScript, Node.js, C#, Git y Redes TI.
   - Cada icono cuenta con su SVG vectorial oficial, efecto de levitación, rotación sutil al seleccionar y panel interactivo con el contexto real de aplicación.
4. **Página 404 Personalizada:**
   - Accesible vía `#404` o desde el enlace del pie de página.
   - Escena con el michi mordiendo los cables del servidor junto a una guitarra eléctrica, botón de retorno y notificación directa a WhatsApp.
5. **Formulario "Contáctame" 100% Funcional:**
   - Validación instantánea.
   - Generación y apertura de correo vía `mailto:` con asunto y cuerpo estructurados.
   - Botón directo de **WhatsApp** en 1 clic (`https://wa.me/529983813313?text=...`) prellenado con los datos del usuario.
   - Copiado con toast interactivo y estado de felicitación con michi guardián.
6. **Fotografía Personal:**
   - Referenciada a `Imagenes/yo.jpeg` con texto alternativo detallado para lectores de pantalla.
