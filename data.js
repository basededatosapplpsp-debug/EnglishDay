const GAME_DATA = [
  {
    id: "6-1_vs_6-2",
    title: "Sexto 1 vs Sexto 2",
    match: "Sexto 1 contra Sexto 2",
    defaultTeams: ["Sexto 1", "Sexto 2"],
    topics: ["Suma", "Resta", "Multiplicación", "División", "Razonamiento Cuantitativo"],
    questions: [
      { type:"Suma", visual:"➕", q:"Calcula: 345 + 128", a:"473" },
      { type:"Resta", visual:"➖", q:"Calcula: 512 - 189", a:"323" },
      { type:"Multiplicación", visual:"✖️", q:"Calcula: 15 × 12", a:"180" },
      { type:"División", visual:"➗", q:"Calcula: 144 ÷ 12", a:"12" },
      { type:"Razonamiento Cuantitativo", visual:"🧠", q:"Si un tren sale a las 2:00 PM y llega a las 4:30 PM, ¿cuántos minutos duró el viaje?", a:"150 minutos" }
    ],
    finalQuestions: [
      { type:"Suma", visual:"➕", q:"Calcula la suma de los primeros 5 números enteros positivos (1+2+3+4+5)", a:"15" },
      { type:"Razonamiento Cuantitativo", visual:"💡", q:"Tengo 3 manzanas y me quitas 2, ¿cuántas manzanas tienes tú?", a:"2 manzanas" }
    ]
  },
  {
    id: "7-1_vs_7-2",
    title: "Séptimo 1 vs Séptimo 2",
    match: "Séptimo 1 contra Séptimo 2",
    defaultTeams: ["Séptimo 1", "Séptimo 2"],
    topics: ["Suma", "Resta", "Multiplicación", "División", "Razonamiento Cuantitativo"],
    questions: [
      { type:"Suma", visual:"➕", q:"Calcula con números enteros: (-15) + 32", a:"17" },
      { type:"Resta", visual:"➖", q:"Calcula con números enteros: 24 - (-16)", a:"40" },
      { type:"Multiplicación", visual:"✖️", q:"Calcula: (-8) × 7", a:"-56" },
      { type:"División", visual:"➗", q:"Calcula: (-63) ÷ (-9)", a:"7" },
      { type:"Razonamiento Cuantitativo", visual:"🧠", q:"Un pastel se corta en 8 partes iguales. Si Carlos se come 3 partes, ¿qué fracción del pastel queda?", a:"5/8" }
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
      { type:"Suma", visual:"➕", q:"Simplifica la expresión algebraica: (3x + 5y) + (2x - y)", a:"5x + 4y" },
      { type:"Resta", visual:"➖", q:"Simplifica la expresión algebraica: (7x² - 3) - (2x² + 4)", a:"5x² - 7" },
      { type:"Multiplicación", visual:"✖️", q:"Resuelve el producto monomio: 3x × 4x²", a:"12x³" },
      { type:"División", visual:"➗", q:"Divide el monomio: 20x⁵ ÷ 4x²", a:"5x³" },
      { type:"Razonamiento Cuantitativo", visual:"🧠", q:"Si X + 12 = 30, ¿cuál es el valor de 2X?", a:"36" }
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
      { type:"Suma", visual:"➕", q:"Calcula la suma de radicales: √2 + 3√2", a:"4√2" },
      { type:"Resta", visual:"➖", q:"Resuelve el sistema por inspección si x - y = 5 y x = 8. ¿Cuánto vale y?", a:"3" },
      { type:"Multiplicación", visual:"✖️", q:"Resuelve el producto notable: (x + 3)(x - 3)", a:"x² - 9" },
      { type:"División", visual:"➗", q:"Simplifica la fracción algebraica: (x² - 4) ÷ (x - 2)", a:"x + 2" },
      { type:"Razonamiento Cuantitativo", visual:"🧠", q:"La suma de las edades de un padre y su hijo es 40 años. Si el padre tiene el triple de la edad del hijo, ¿cuántos años tiene el hijo?", a:"10 años" }
    ],
    finalQuestions: [
      { type:"Multiplicación", visual:"✖️", q:"Desarrolla el binomio al cuadrado: (x + 1)²", a:"x² + 2x + 1" },
      { type:"Razonamiento Cuantitativo", visual:"💡", q:"En una bolsa hay 3 bolas rojas y 2 azules. ¿Cuál es la probabilidad en porcentaje de sacar una bola azul al azar?", a:"40%" }
    ]
  },
  {
    id: "10-1_vs_10-2",
    title: "Décimo 1 vs Décimo 2",
    match: "Décimo 1 contra Décimo 2",
    defaultTeams: ["Décimo 1", "Décimo 2"],
    topics: ["Suma", "Resta", "Multiplicación", "División", "Razonamiento Cuantitativo"],
    questions: [
      { type:"Suma", visual:"➕", q:"En funciones trigonométricas, simplifica: sen²(x) + cos²(x)", a:"1" },
      { type:"Resta", visual:"➖", q:"Si un vector A = (5, 8) y B = (2, 3), ¿cuál es el vector resultante de A - B?", a:"(3, 5)" },
      { type:"Multiplicación", visual:"✖️", q:"Encuentra el valor exacto de: 2 × sen(30°) × cos(30°)", a:"√3/2 (o sen(60°))" },
      { type:"División", visual:"➗", q:"¿A qué es igual la división trigonométrica sen(x) ÷ cos(x)?", a:"tan(x) (Tangente)" },
      { type:"Razonamiento Cuantitativo", visual:"🧠", q:"Un árbol proyecta una sombra de 12 metros con un ángulo de elevación solar de 45°. ¿Cuál es la altura del árbol?", a:"12 metros" }
    ],
    finalQuestions: [
      { type:"Suma", visual:"➕", q:"¿Cuánto suman los ángulos internos de cualquier triángulo?", a:"180 grados" },
      { type:"Razonamiento Cuantitativo", visual:"💡", q:"Un ciclista viaja a una velocidad constante de 25 km/h. ¿Cuántos kilómetros recorrerá en 2 horas y media?", a:"62.5 km" }
    ]
  },
  {
    id: "11-1_vs_11-2",
    title: "Once 1 vs Once 2",
    match: "Once 1 contra Once 2",
    defaultTeams: ["Once 1", "Once 2"],
    topics: ["Suma", "Resta", "Multiplicación", "División", "Razonamiento Cuantitativo"],
    questions: [
      { type:"Suma", visual:"➕", q:"Calcula el límite: lim(x→2) de (x² + 3x)", a:"10" },
      { type:"Resta", visual:"➖", q:"Si f(x) = 5x y g(x) = 2x, calcula la derivada de (f - g)(x)", a:"3" },
      { type:"Multiplicación", visual:"✖️", q:"Calcula la derivada de f(x) = x³ usando la regla del producto o potencia", a:"3x²" },
      { type:"División", visual:"➗", q:"Calcula el límite indeterminado: lim(x→3) de (x² - 9) ÷ (x - 3)", a:"6" },
      { type:"Razonamiento Cuantitativo", visual:"🧠", q:"Si el 20% de un número es 45, ¿cuál es el 100% de ese número?", a:"225" }
    ],
    finalQuestions: [
      { type:"División", visual:"➗", q:"¿Cuál es la derivada de una constante?", a:"0" },
      { type:"Razonamiento Cuantitativo", visual:"💡", q:"Un padre tiene 5 hijas y cada hija tiene un hermano. ¿Cuántos hijos en total tiene el padre?", a:"6 hijos (las 5 hijas comparten el mismo hermano)" }
    ]
  },
  {
    id: "final",
    title: "Gran Final",
    match: "Final de Ganadores",
    defaultTeams: ["Finalista Matemática A", "Finalista Matemática B"],
    topics: ["Desafío Final"],
    questions: [
      { type:"Final", visual:"🏆", q:"¿Cuál es el único número primo que también es par?", a:"2" },
      { type:"Final", visual:"⚡", q:"Si multiplicas todos los números del teclado de un teléfono móvil, ¿cuál es el resultado?", a:"0 (debido al cero)" },
      { type:"Final", visual:"🎯", q:"¿Cómo se llama un polígono regular de 5 lados?", a:"Pentágono" },
      { type:"Final", visual:"👏", q:"¿Cuántos segundos hay en un cuarto de hora?", a:"900 segundos" },
      { type:"Final", visual:"🏆", q:"Calcula rápidamente: 7 + 7 ÷ 7 + 7 × 7 - 7", a:"50" }
    ]
  }
];