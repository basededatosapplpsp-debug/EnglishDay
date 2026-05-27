const GAME_DATA = [
  {
    id: "6-1_vs_6-2",
    title: "Sexto 1 vs Sexto 2",
    match: "Sexto 1 contra Sexto 2",
    defaultTeams: ["Sexto 1", "Sexto 2"],
    topics: ["Suma", "Resta", "Multiplicación", "División", "Razonamiento Cuantitativo"],
    questions: [
      // SUMA (5)
      { type:"Suma", visual:"➕", q:"Calcula: 345 + 128", a:"473" },
      { type:"Suma", visual:"➕", q:"Calcula: 1.250 + 3.750", a:"5.000" },
      { type:"Suma", visual:"➕", q:"Calcula: 89 + 47 + 11", a:"147" },
      { type:"Suma", visual:"➕", q:"Calcula: 582 + 219", a:"801" },
      { type:"Suma", visual:"➕", q:"¿Cuánto es 15 + 23 + 42?", a:"80" },
      // RESTA (5)
      { type:"Resta", visual:"➖", q:"Calcula: 512 - 189", a:"323" },
      { type:"Resta", visual:"➖", q:"Calcula: 2.000 - 1.450", a:"550" },
      { type:"Resta", visual:"➖", q:"Calcula: 850 - 325", a:"525" },
      { type:"Resta", visual:"➖", q:"Calcula: 124 - 79", a:"45" },
      { type:"Resta", visual:"➖", q:"¿Cuánto le falta a 65 para llegar a 150?", a:"85" },
      // MULTIPLICACIÓN (5)
      { type:"Multiplicación", visual:"✖️", q:"Calcula: 15 × 12", a:"180" },
      { type:"Multiplicación", visual:"✖️", q:"Calcula: 25 × 4", a:"100" },
      { type:"Multiplicación", visual:"✖️", q:"Calcula: 9 × 80", a:"720" },
      { type:"Multiplicación", visual:"✖️", q:"Calcula: 11 × 11", a:"121" },
      { type:"Multiplicación", visual:"✖️", q:"Calcula: 13 × 3", a:"39" },
      // DIVISIÓN (5)
      { type:"División", visual:"➗", q:"Calcula: 144 ÷ 12", a:"12" },
      { type:"División", visual:"➗", q:"Calcula: 500 ÷ 25", a:"20" },
      { type:"División", visual:"➗", q:"Calcula: 81 ÷ 9", a:"9" },
      { type:"División", visual:"➗", q:"Calcula: 150 ÷ 6", a:"25" },
      { type:"División", visual:"➗", q:"Si repartes 210 dulces entre 7 niños, ¿cuántos recibe cada uno?", a:"30" },
      // RAZONAMIENTO CUANTITATIVO (5)
      { type:"Razonamiento Cuantitativo", visual:"🧠", q:"Si un tren sale a las 2:00 PM y llega a las 4:30 PM, ¿cuántos minutos duró el viaje?", a:"150 minutos" },
      { type:"Razonamiento Cuantitativo", visual:"🧠", q:"En una caja hay 4 docenas de huevos. ¿Cuántos huevos hay en total?", a:"48" },
      { type:"Razonamiento Cuantitativo", visual:"🧠", q:"Si tengo 5 manzanas rojas y el doble de verdes, ¿cuántas manzanas tengo en total?", a:"15" },
      { type:"Razonamiento Cuantitativo", visual:"🧠", q:"Un camión lleva 10 cajas, cada caja tiene 10 bolsas. ¿Cuántas bolsas lleva?", a:"100" },
      { type:"Razonamiento Cuantitativo", visual:"🧠", q:"Si compras un cuaderno de $3.500 y pagas con un billete de $5.000, ¿cuánto te devuelven?", a:"$1.500" }
    ],
    finalQuestions: [
      { type:"Suma", visual:"➕", q:"Suma los primeros 5 números enteros positivos (1+2+3+4+5)", a:"15" },
      { type:"Razonamiento Cuantitativo", visual:"💡", q:"Tengo 3 manzanas y me quitas 2, ¿cuántas manzanas tienes tú?", a:"2" }
    ]
  },
  {
    id: "7-1_vs_7-2",
    title: "Séptimo 1 vs Séptimo 2",
    match: "Séptimo 1 contra Séptimo 2",
    defaultTeams: ["Séptimo 1", "Séptimo 2"],
    topics: ["Suma", "Resta", "Multiplicación", "División", "Razonamiento Cuantitativo"],
    questions: [
      // SUMA (5)
      { type:"Suma", visual:"➕", q:"Calcula con enteros: (-15) + 32", a:"17" },
      { type:"Suma", visual:"➕", q:"Calcula con fracciones: 1/4 + 2/4", a:"3/4" },
      { type:"Suma", visual:"➕", q:"Calcula: (-8) + (-12)", a:"-20" },
      { type:"Suma", visual:"➕", q:"Calcula decimales: 4,5 + 3,25", a:"7,75" },
      { type:"Suma", visual:"➕", q:"Calcula: 100 + (-45)", a:"55" },
      // RESTA (5)
      { type:"Resta", visual:"➖", q:"Calcula con enteros: 24 - (-16)", a:"40" },
      { type:"Resta", visual:"➖", q:"Calcula: (-10) - 5", a:"-15" },
      { type:"Resta", visual:"➖", q:"Calcula: 3/5 - 1/5", a:"2/5" },
      { type:"Resta", visual:"➖", q:"Calcula: (-7) - (-7)", a:"0" },
      { type:"Resta", visual:"➖", q:"Calcula decimales: 10 - 2,5", a:"7,5" },
      // MULTIPLICACIÓN (5)
      { type:"Multiplicación", visual:"✖️", q:"Calcula: (-8) × 7", a:"-56" },
      { type:"Multiplicación", visual:"✖️", q:"Calcula: (-5) × (-9)", a:"45" },
      { type:"Multiplicación", visual:"✖️", q:"Calcula la potencia: 2⁴", a:"16" },
      { type:"Multiplicación", visual:"✖️", q:"Calcula: 0,5 × 12", a:"6" },
      { type:"Multiplicación", visual:"✖️", q:"Calcula: (-1) × 45", a:"-45" },
      // DIVISIÓN (5)
      { type:"División", visual:"➗", q:"Calcula: (-63) ÷ (-9)", a:"7" },
      { type:"División", visual:"➗", q:"Calcula: 80 ÷ (-4)", a:"-20" },
      { type:"División", visual:"➗", q:"Calcula: 0 ÷ (-15)", a:"0" },
      { type:"División", visual:"➗", q:"Calcula la mitad de 15", a:"7,5 o 15/2" },
      { type:"División", visual:"➗", q:"Calcula: (-100) ÷ 25", a:"-4" },
      // RAZONAMIENTO CUANTITATIVO (5)
      { type:"Razonamiento Cuantitativo", visual:"🧠", q:"Un pastel se corta en 8 partes. Si Carlos come 3 partes, ¿qué fracción del pastel queda?", a:"5/8" },
      { type:"Razonamiento Cuantitativo", visual:"🧠", q:"Si 3 camisas cuestan $45.000, ¿cuánto cuesta una sola camisa?", a:"$15.000" },
      { type:"Razonamiento Cuantitativo", visual:"🧠", q:"En un salón de 30 estudiantes, el 50% son mujeres. ¿Cuántas mujeres hay?", a:"15" },
      { type:"Razonamiento Cuantitativo", visual:"🧠", q:"Si la escala de un mapa dice que 1cm represents 5km, ¿cuántos km representan 4cm?", a:"20 km" },
      { type:"Razonamiento Cuantitativo", visual:"🧠", q:"¿Qué número sigue en la secuencia: 2, 5, 8, 11, ...?", a:"14" }
    ],
    finalQuestions: [
      { type:"Multiplicación", visual:"✖️", q:"¿Cuánto es el triple de -12?", a:"-36" },
      { type:"Razonamiento Cuantitativo", visual:"💡", q:"Si dos gatos cazan dos ratones en dos minutos, ¿cuánto tardará un gato en cazar un ratón?", a:"2 minutos" }
    ]
  },
  {
    id: "8-1_vs_8-2",
    title: "Octavo 1 vs Octavo 2",
    match: "Octavo 1 contra Octavo 2",
    defaultTeams: ["Octavo 1", "Octavo 2"],
    topics: ["Suma", "Resta", "Multiplicación", "División", "Razonamiento Cuantitativo"],
    questions: [
      // SUMA (5)
      { type:"Suma", visual:"➕", q:"Simplifica: (3x + 5y) + (2x - y)", a:"5x + 4y" },
      { type:"Suma", visual:"➕", q:"Simplifica: 2a² + 3a²", a:"5a²" },
      { type:"Suma", visual:"➕", q:"Simplifica: (x - 2) + (x + 5)", a:"2x + 3" },
      { type:"Suma", visual:"➕", q:"Suma los términos semejantes: 4m + 5n + 2m", a:"6m + 5n" },
      { type:"Suma", visual:"➕", q:"Simplifica: (-3x) + 7x", a:"4x" },
      // RESTA (5)
      { type:"Resta", visual:"➖", q:"Simplifica: (7x² - 3) - (2x² + 4)", a:"5x² - 7" },
      { type:"Resta", visual:"➖", q:"Simplifica: 10x - 4x", a:"6x" },
      { type:"Resta", visual:"➖", q:"Simplifica: (5a - 2b) - (2a + b)", a:"3a - 3b" },
      { type:"Resta", visual:"➖", q:"Calcula: 0 - 8x", a:"-8x" },
      { type:"Resta", visual:"➖", q:"Simplifica: 3m - (-2m)", a:"5m" },
      // MULTIPLICACIÓN (5)
      { type:"Multiplicación", visual:"✖️", q:"Resuelve el producto monomio: 3x × 4x²", a:"12x³" },
      { type:"Multiplicación", visual:"✖️", q:"Calcula: (-2a) × (-5b)", a:"10ab" },
      { type:"Multiplicación", visual:"✖️", q:"Aplica distributiva: 2(x + 3)", a:"2x + 6" },
      { type:"Multiplicación", visual:"✖️", q:"Calcula: x × x", a:"x²" },
      { type:"Multiplicación", visual:"✖️", q:"Resuelve: 4m² × 2m³", a:"8m⁵" },
      // DIVISIÓN (5)
      { type:"División", visual:"➗", q:"Divide el monomio: 20x⁵ ÷ 4x²", a:"5x³" },
      { type:"División", visual:"➗", q:"Divide: -15a ÷ 3", a:"-5a" },
      { type:"División", visual:"➗", q:"Simplifica: m³ ÷ m", a:"m²" },
      { type:"División", visual:"➗", q:"Divide: 8x²y ÷ 2x", a:"4xy" },
      { type:"División", visual:"➗", q:"Simplifica: (-12ab) ÷ (-12ab)", a:"1" },
      // RAZONAMIENTO CUANTITATIVO (5)
      { type:"Razonamiento Cuantitativo", visual:"🧠", q:"Si X + 12 = 30, ¿cuál es el valor de 2X?", a:"36" },
      { type:"Razonamiento Cuantitativo", visual:"🧠", q:"Si el área de un cuadrado es 49 cm², ¿cuánto mide su lado?", a:"7 cm" },
      { type:"Razonamiento Cuantitativo", visual:"🧠", q:"Despeja x en: 2x = 16", a:"8" },
      { type:"Razonamiento Cuantitativo", visual:"🧠", q:"Un número más su doble suma 15. ¿Cuál es el número?", a:"5" },
      { type:"Razonamiento Cuantitativo", visual:"🧠", q:"Si la base de un triángulo mide 6 y su altura es 4, ¿cuál es su área?", a:"12" }
    ],
    finalQuestions: [
      { type:"Resta", visual:"➖", q:"¿Cuál es el resultado de restar 10x de 4x?", a:"-6x" },
      { type:"Razonamiento Cuantitativo", visual:"💡", q:"Si un patio cuadrado tiene un área de 49 metros cuadrados, ¿cuánto mide su perímetro?", a:"28 metros" }
    ]
  },
  {
    id: "9-1_vs_9-2",
    title: "Noveno 1 vs Noveno 2",
    match: "Noveno 1 contra Noveno 2",
    defaultTeams: ["Noveno 1", "Noveno 2"],
    topics: ["Suma", "Resta", "Multiplicación", "División", "Razonamiento Cuantitativo"],
    questions: [
      // SUMA (5)
      { type:"Suma", visual:"➕", q:"Calcula la suma de radicales: √2 + 3√2", a:"4√2" },
      { type:"Suma", visual:"➕", q:"Suma las fracciones: 1/2 + 1/4", a:"3/4" },
      { type:"Suma", visual:"➕", q:"Si f(x)=2x+1 y g(x)=3x, ¿cuánto es f(x)+g(x)?", a:"5x + 1" },
      { type:"Suma", visual:"➕", q:"Suma los números complejos: (2 + 3i) + (1 + i)", a:"3 + 4i" },
      { type:"Suma", visual:"➕", q:"Calcula la suma de raíces: 2√5 + 7√5", a:"9√5" },
      // RESTA (5)
      { type:"Resta", visual:"➖", q:"Si x - y = 5 y x = 8. ¿Cuánto vale y?", a:"3" },
      { type:"Resta", visual:"➖", q:"Calcula la diferencia de radicales: 5√3 - 2√3", a:"3√3" },
      { type:"Resta", visual:"➖", q:"Resta los complejos: (5 + 4i) - (2 + i)", a:"3 + 3i" },
      { type:"Resta", visual:"➖", q:"Despeja y en: x - y = 0", a:"y = x" },
      { type:"Resta", visual:"➖", q:"Calcula: 1/2 - 1/4", a:"1/4" },
      // MULTIPLICACIÓN (5)
      { type:"Multiplicación", visual:"✖️", q:"Resuelve el producto notable: (x + 3)(x - 3)", a:"x² - 9" },
      { type:"Multiplicación", visual:"✖️", q:"Calcula