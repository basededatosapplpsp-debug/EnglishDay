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


## Ajuste v4 de buzzers

Asignación actual:

- Jugador / Equipo 1: clic derecho.
- Jugador / Equipo 2: clic izquierdo.

Importante sobre dos mouse:
Los navegadores web normales no permiten distinguir qué mouse físico hizo el clic. Si conectas dos mouse, Chrome/Edge/Firefox los tratan como un mismo puntero. Por eso no es posible seleccionar “mouse de control” y “mouse de jugadores” desde esta app HTML estándar.

Solución recomendada para el evento:
- Usa el mouse del profesor solo sobre botones de la interfaz. Esos clics están ignorados como buzzer.
- Usa el mouse de los jugadores para presionar derecho o izquierdo cuando aparece la pregunta.
- Evita hacer clic con el mouse del profesor en el área grande de la pregunta mientras el buzzer esté esperando.
- Para controlar sin riesgo, usa el teclado:
  - Flecha derecha: siguiente pregunta.
  - Flecha izquierda: pregunta anterior.
  - C: correcto.
  - X: incorrecto.
  - T: iniciar timer.
  - Barra espaciadora: mostrar respuesta.
  - 1 y 2: seleccionar equipo manualmente.

Para una versión con identificación real de controles separados, lo ideal sería usar teclados separados, controles tipo gamepad, pulsadores USB que envíen teclas diferentes, o un sistema especializado de buzzer.


## Ajuste v5

Cuando cualquier equipo presiona su botón de buzzer:

- Se selecciona automáticamente el equipo que presionó primero.
- Se bloquea el turno.
- El cronómetro se detiene inmediatamente.
- La app queda esperando que el presentador marque correcto o incorrecto.


## Ajuste v6

- El aviso del equipo que presiona primero ahora aparece arriba en la tarjeta de pregunta.
- Ya no tapa la pregunta ni la respuesta.
- El sonido del buzzer ahora es diferente al sonido de correcto, incorrecto y timer.
- Se mantiene la misma dinámica: primer clic válido bloquea el turno y detiene el cronómetro.


## Ajuste v7

- El aviso del turno ahora aparece en el encabezado, entre el nombre del versus y el cronómetro.
- Se quitó el texto “clic izquierdo” o “clic derecho” del aviso.
- El aviso ahora solo muestra el equipo que tiene el turno para responder.


## Ajuste v8

- El aviso del turno ahora queda exactamente entre:
  - el título del versus
  - y el cronómetro/timer.
- Ya no aparece dentro o debajo del panel de pregunta.


## Ajuste v10

- Se quitó el aviso inicial de “BUZZER ACTIVO / DERECHO / IZQUIERDO”.
- El buzzer sigue funcionando igual.
- Cuando un equipo presiona primero, sí aparece arriba “TURNO PARA ...”.
- No se modificó la lógica de puntaje, timer, equipos, final ni sonidos.


## Ajuste v11

- Se recuperó la diferencia de colores por equipo en el aviso superior:
  - Equipo 1: azul.
  - Equipo 2: rosado.
- Cuando alguien presiona el buzzer, aparece un aviso grande en el centro de la pantalla.
- Ese aviso central desaparece rápidamente.
- Después queda el aviso superior indicando quién responde.
- No se modificó la lógica de preguntas, puntaje, timer, sonidos ni final.


## Ajuste v12

- Cambio solo de diseño visual.
- Interfaz más parecida a concurso de TV:
  - fondo oscuro/neón,
  - tarjetas de equipos azul y rojo,
  - aviso superior estilo panel luminoso,
  - tarjeta de pregunta tipo escenario,
  - botones y timer más llamativos.
- No se cambió la lógica de preguntas, buzzer, puntaje, timer, final ni sonidos.


## Ajuste v13

- Todas las categorías principales ahora tienen 10 preguntas.
- La Gran Final usa solo 5 preguntas.
- La final toma las preguntas según la categoría activa antes de entrar a “Modo Final”.
  Ejemplo: si estabas en “Sexto A vs Sexto B”, la final usará 5 preguntas de Weather / Places in the City.
- No se modificó el diseño ni la lógica de puntaje, buzzer, sonidos o ganador.


## Ajuste v14

Se agregaron tres categorías especiales para desempate:

- Mega Final
- Ultra Final
- Hiper Final

Características:
- 5 preguntas cada una.
- Mezcla de temas desde Sexto hasta Once.
- Ninguna pregunta se repite entre las tres categorías.
- Funcionan igual que las demás categorías desde el combo principal.
