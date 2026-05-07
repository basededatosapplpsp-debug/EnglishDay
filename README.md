# English Day - Think Fast Challenge

App web lista para usar en TV o proyector y para subir a GitHub Pages.

## Archivos

- `index.html`: estructura principal.
- `styles.css`: diseño tipo concurso de TV.
- `data.js`: categorías, temas y preguntas.
- `app.js`: lógica del concurso, puntaje, sonidos, timer y final.

## Cómo usarlo localmente

1. Abre `index.html` en Google Chrome, Edge o Firefox.
2. Conecta el PC al TV por HDMI.
3. Presiona F11 para pantalla completa.
4. Selecciona la categoría desde el combo superior.
5. Configura los nombres de los equipos con el botón “Configurar”.
6. Usa:
   - Flecha derecha: siguiente pregunta.
   - Flecha izquierda: pregunta anterior.
   - 1 y 2: seleccionar equipo.
   - C: marcar correcto.
   - X: marcar incorrecto.
   - T: iniciar timer.
   - Barra espaciadora: mostrar respuesta.

## Cómo subir a GitHub Pages

1. Crea un repositorio nuevo en GitHub.
2. Sube estos archivos a la raíz del repositorio:
   - `index.html`
   - `styles.css`
   - `data.js`
   - `app.js`
3. En GitHub ve a:
   Settings > Pages
4. En “Build and deployment” selecciona:
   Source: Deploy from a branch
5. Branch: `main` y carpeta `/root`
6. Guarda.
7. GitHub te dará un link público para abrirlo desde cualquier TV o computador.

## Cómo editar preguntas

Abre `data.js` y cambia o agrega preguntas en este formato:

```js
{ type:"Colors", visual:"🔴", q:"What color is this?", a:"Red" }
```

- `type`: tema.
- `visual`: emoji o imagen visual.
- `q`: pregunta.
- `a`: respuesta.

## Categorías incluidas

- Primero vs Segundo: Colors, Animals.
- Tercero vs Cuarto: Family, House & Rooms.
- Quinto vs Quinto: Clothes, Food.
- Sexto A vs Sexto B: Weather, Places in the City.
- Séptimo vs Octavo: Daily Routines, Free Time Activities / Hobbies.
- Noveno vs Décimo: Feelings & Emotions, Jobs & Professions.
- Once A vs Once C: Environment, Travel & Culture.
- Gran Final: Mixed Vocabulary.

## Recomendación para el botón físico

Puedes usar una campana, timbre, pulsadores USB o una app de buzzer en celulares. El host selecciona el equipo con 1 o 2 y marca correcto con C.


## Mejoras de esta versión

- El cronómetro inicia automáticamente cuando aparece cada pregunta.
- El cronómetro suena desde el primer segundo para dar más emoción.
- Al marcar correcto:
  - suma punto,
  - detiene el cronómetro,
  - muestra “CORRECT!”,
  - lanza confeti en la tarjeta de pregunta,
  - reproduce sonido de victoria.
- Al marcar incorrecto:
  - detiene el cronómetro,
  - muestra “WRONG!”,
  - hace animación de error,
  - reproduce sonido de error con efecto tipo burla.


## Modo buzzer con mouse

Esta versión permite usar los dos botones del mouse como buzzers:

- Clic izquierdo: Equipo 1.
- Clic derecho: Equipo 2.

Cuando aparece una pregunta, el sistema abre automáticamente el buzzer.
El primer clic válido selecciona al equipo que responderá y bloquea el turno para evitar que el otro equipo lo cambie.

Notas:
- El clic derecho del navegador está bloqueado para que funcione como buzzer.
- El host todavía puede usar los botones de la interfaz normalmente.
- Para mayor comodidad, conecta dos pulsadores físicos configurados como clic izquierdo y clic derecho del mouse.
