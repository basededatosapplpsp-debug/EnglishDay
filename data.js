const GAME_DATA = [
  {
    id: "6-1_vs_6-2",
    title: "Sexto 1 vs Sexto 2",
    match: "Sexto 1 contra Sexto 2",
    defaultTeams: ["Sexto 1", "Sexto 2"],
    topics: ["Suma", "Resta", "Multiplicación", "División", "Razonamiento Cuantitativo"],
    questions: [
      // 5 Preguntas de Suma
      { type:"Suma", visual:"➕", q:"Calcula: 345 + 128", a:"473" },
      { type:"Suma", visual:"➕", q:"Calcula: 1.250 + 3.750", a:"5.000" },
      { type:"Suma", visual:"➕", q:"Calcula: 89 + 47 + 11", a:"147" },
      { type:"Suma", visual:"➕", q:"Calcula: 582 + 219", a:"801" },
      { type:"Suma", visual:"➕", q:"¿Cuánto es 15 + 23 + 42?", a:"80" },
      
      // 5 Preguntas de Resta
      { type:"Resta", visual:"➖", q:"Calcula: 512 - 189", a:"323" },
      { type:"Resta", visual:"➖", q:"Calcula: 2.000 - 1.450", a:"550" },
      { type:"Resta", visual:"➖", q:"Calcula: 850 - 325", a:"525" },
      { type:"Resta", visual:"➖", q:"Calcula: 124 - 79", a:"45" },
      { type:"Resta", visual:"➖", q:"¿Cuánto le falta a 65 para llegar a 150?", a:"85" },
      
      // 5 Preguntas de Multiplicación
      { type:"Multiplicación", visual:"✖️", q:"Calcula: 15 × 12", a:"180" },
      { type:"Multiplicación", visual:"✖️", q:"Calcula: 25 × 4", a:"100" },
      { type:"Multiplicación", visual:"✖️", q:"Calcula: 9 × 80", a:"720" },
      { type:"Multiplicación", visual:"✖️", q:"Calcula: 11 × 11", a:"121" },
      { type:"Multiplicación", visual:"✖️", q:"Calcula: 13 × 3", a:"39" },
      
      // 5 Preguntas de División
      { type:"División", visual:"➗", q:"Calcula: 144 ÷ 12", a:"12" },
      { type:"División", visual:"➗", q:"Calcula: 500 ÷ 25", a:"20" },
      { type:"División", visual:"➗", q:"Calcula: 81 ÷ 9", a:"9" },
      { type:"División", visual:"➗", q:"Calcula: 150 ÷ 6", a:"25" },
      { type:"División", visual:"➗", q:"Si repartes 210 dulces entre 7 niños, ¿cuántos recibe cada uno?", a:"30" },
      
      // 5 Preguntas de Razonamiento Cuantitativo
      { type:"Razonamiento Cuantitativo", visual:"🧠", q:"Si un tren sale a las 2:00 PM y llega a las 4:30 PM, ¿cuántos minutos duró el viaje?", a:"150 minutos" },
      { type:"Razonamiento Cuantitativo", visual:"🧠", q:"En una caja hay 4 docenas de huevos. ¿Cuántos huevos hay en total?", a:"48" },
      { type:"Razonamiento Cuantitativo", visual:"🧠", q:"Si tengo 5 manzanas rojas y el doble de verdes, ¿cuántas manzanas tengo en total?", a:"15" },
      { type:"Razonamiento Cuantitativo", visual:"🧠", q:"Un camión lleva 10 cajas, cada caja tiene 10 bolsas. ¿Cuántas bolsas lleva?", a:"100" },
      { type:"Razonamiento Cuantitativo", visual:"🧠", q:"Si compras un cuaderno de $3.500 y pagas con un billete de $5.000, ¿cuánto te devuelven?", a:"$1.500" }
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
      // 5 Preguntas de Suma
      { type:"Suma", visual:"➕", q:"Calcula con números enteros: (-15) + 32", a:"17" },
      { type:"Suma", visual:"➕", q:"Calcula con fracciones: 1/4 + 2/4", a:"3/4" },
      { type:"Suma", visual:"➕", q:"Calcula: (-8) + (-12)", a:"-20" },
      { type:"Suma", visual:"➕", q:"Calcula decimales: 4,5 + 3,25", a:"7,75" },
      { type:"Suma", visual:"➕", q:"Calcula: 100 + (-45)", a:"55" },
      
      // 5 Preguntas de Resta
      { type:"Resta", visual:"➖", q:"Calcula con números enteros: 24 - (-16)", a:"40" },
      { type:"Resta", visual:"➖", q:"Calcula: (-10) - 5", a:"-15" },
      { type:"Resta", visual:"➖", q:"Calcula: 3/5 - 1/5", a:"2/5" },
      { type:"Resta", visual:"➖", q:"Calcula: (-7) - (-7)", a:"0" },
      { type:"Resta", visual:"➖", q:"Calcula decimales: 10 - 2,5", a:"7,5" },
      
      // 5 Preguntas de Multiplicación
      { type:"Multiplicación", visual:"✖️", q:"Calcula: (-8) × 7", a:"-56" },
      { type:"Multiplicación", visual:"✖️", q:"Calcula: (-5) × (-9)", a:"45" },
      { type:"Multiplicación", visual:"✖️", q:"Calcula la potencia: 2⁴", a:"16" },
      { type:"Multiplicación", visual:"✖️", q:"Calcula: 0,5 × 12", a:"6" },
      { type:"Multiplicación", visual:"✖️", q:"Calcula: (-1) × 45", a:"-45" },
      
      // 5 Preguntas de División
      { type:"División", visual:"➗", q:"Calcula: (-63) ÷ (-9)", a:"7" },
      { type:"División", visual:"➗", q:"Calcula: 80 ÷ (-4)", a:"-20" },
      { type:"División", visual:"➗", q:"Calcula: 0 ÷ (-15)", a:"0" },
      { type:"División", visual:"➗", q:"Calcula la mitad de 15", a:"7,5" },
      { type:"División", visual:"➗", q:"Calcula: (-100) ÷ 25", a:"-4" },
      
      // 5 Preguntas de Razonamiento Cuantitativo
      { type:"Razonamiento Cuantitativo", visual:"🧠", q:"Un pastel se corta en 8 partes iguales. Si Carlos se come 3 partes, ¿qué fracción del pastel queda?", a:"5/8" },
      { type:"Razonamiento Cuantitativo", visual:"🧠", q:"Si 3 camisas cuestan $45.000, ¿cuánto cuesta una sola camisa?", a:"$15.000" },
      { type:"Razonamiento Cuantitativo", visual:"🧠", q:"En un salón de 30 estudiantes, el 50% son mujeres. ¿Cuántas mujeres hay?", a:"15" },
      { type:"Razonamiento Cuantitativo", visual:"🧠", q:"Si la escala de un mapa dice que 1cm representa 5km, ¿cuántos km representan 4cm?", a:"20 km" },
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
      // 5 Preguntas de Suma
      { type:"Suma", visual:"➕", q:"Simplifica la expresión algebraica: (3x + 5y) + (2x - y)", a:"5x + 4y" },
      { type:"Suma", visual:"➕", q:"Simplifica: 2a² + 3a²", a:"5a²" },
      { type:"Suma", visual:"➕", q:"Simplifica: (x - 2) + (x + 5)", a:"2x + 3" },
      { type:"Suma", visual:"➕", q:"Suma los términos semejantes: 4m + 5n + 2m", a:"6m + 5n" },
      { type:"Suma", visual:"➕", q:"Simplifica: (-3x) + 7x", a:"4x" },
      
      // 5 Preguntas de Resta
      { type:"Resta", visual:"➖", q:"Simplifica la expresión algebraica: (7x² - 3) - (2x² + 4)", a:"5x² - 7" },
      { type:"Resta", visual:"➖", q:"Simplifica: 10x - 4x", a:"6x" },
      { type:"Resta", visual:"➖", q:"Simplifica: (5a - 2b) - (2a + b)", a:"3a - 3b" },
      { type:"Resta", visual:"➖", q:"Calcula: 0 - 8x", a:"-8x" },
      { type:"Resta", visual:"➖", q:"Simplifica: 3m - (-2m)", a:"5m" },
      
      // 5 Preguntas de Multiplicación
      { type:"Multiplicación", visual:"✖️", q:"Resuelve el producto monomio: 3x × 4x²", a:"12x³" },
      { type:"Multiplicación", visual:"✖️", q:"Calcula: (-2a) × (-5b)", a:"10ab" },
      { type:"Multiplicación", visual:"✖️", q:"Aplica distributiva: 2(x + 3)", a:"2x + 6" },
      { type:"Multiplicación", visual:"✖️", q:"Calcula: x × x", a:"x²" },
      { type:"Multiplicación", visual:"✖️", q:"Resuelve: 4m² × 2m³", a:"8m⁵" },
      
      // 5 Preguntas de División
      { type:"División", visual:"➗", q:"Divide el monomio: 20x⁵ ÷ 4x²", a:"5x³" },
      { type:"División", visual:"➗", q:"Divide: -15a ÷ 3", a:"-5a" },
      { type:"División", visual:"➗", q:"Simplifica: m³ ÷ m", a:"m²" },
      { type:"División", visual:"➗", q:"Divide: 8x²y ÷ 2x", a:"4xy" },
      { type:"División", visual:"➗", q:"Simplifica: (-12ab) ÷ (-12ab)", a:"1" },
      
      // 5 Preguntas de Razonamiento Cuantitativo
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
      // 5 Preguntas de Suma
      { type:"Suma", visual:"➕", q:"Calcula la suma de radicales: √2 + 3√2", a:"4√2" },
      { type:"Suma", visual:"➕", q:"Suma las fracciones: 1/2 + 1/4", a:"3/4" },
      { type:"Suma", visual:"➕", q:"Si f(x)=2x+1 y g(x)=3x, ¿cuánto es f(x)+g(x)?", a:"5x + 1" },
      { type:"Suma", visual:"➕", q:"Suma los números complejos: (2 + 3i) + (1 + i)", a:"3 + 4i" },
      { type:"Suma", visual:"➕", q:"Calcula la suma de raíces: 2√5 + 7√5", a:"9√5" },
      
      // 5 Preguntas de Resta
      { type:"Resta", visual:"➖", q:"Resuelve el sistema por inspección si x - y = 5 y x = 8. ¿Cuánto vale y?", a:"3" },
      { type:"Resta", visual:"➖", q:"Calcula la diferencia de radicales: 5√3 - 2√3", a:"3√3" },
      { type:"Resta", visual:"➖", q:"Resta los complejos: (5 + 4i) - (2 + i)", a:"3 + 3i" },
      { type:"Resta", visual:"➖", q:"Despeja y en: x - y = 0", a:"y = x" },
      { type:"Resta", visual:"➖", q:"Calcula: 1/2 - 1/4", a:"1/4" },
      
      // 5 Preguntas de Multiplicación
      { type:"Multiplicación", visual:"✖️", q:"Resuelve el producto notable: (x + 3)(x - 3)", a:"x² - 9" },
      { type:"Multiplicación", visual:"✖️", q:"Calcula: √2 × √3", a:"√6" },
      { type:"Multiplicación", visual:"✖️", q:"Desarrolla el binomio: (x + 2)²", a:"x² + 4x + 4" },
      { type:"Multiplicación", visual:"✖️", q:"¿Cuánto es (3x³)³?", a:"27x⁹" },
      { type:"Multiplicación", visual:"✖️", q:"Multiplica: (2x)(x - 5)", a:"2x² - 10x" },
      
      // 5 Preguntas de División
      { type:"División", visual:"➗", q:"Simplifica la fracción algebraica: (x² - 4) ÷ (x - 2)", a:"x + 2" },
      { type:"División", visual:"➗", q:"Calcula: √10 ÷ √2", a:"√5" },
      { type:"División", visual:"➗", q:"Simplifica: 5x³ ÷ x³", a:"5" },
      { type:"División", visual:"➗", q:"Si x² = 25 y x es positivo, ¿cuánto es x?", a:"5" },
      { type:"División", visual:"➗", q:"Simplifica: (3x + 6) ÷ 3", a:"x + 2" },
      
      // 5 Preguntas de Razonamiento Cuantitativo
      { type:"Razonamiento Cuantitativo", visual:"🧠", q:"La suma de las edades de un padre y su hijo es 40 años. Si el padre tiene el triple de la edad del hijo, ¿cuántos años tiene el hijo?", a:"10 años" },
      { type:"Razonamiento Cuantitativo", visual:"🧠", q:"En una urna hay 3 bolas rojas y 2 azules. ¿Cuál es la probabilidad en porcentaje de sacar una azul?", a:"40%" },
      { type:"Razonamiento Cuantitativo", visual:"🧠", q:"¿Cuál es la hipotenusa de un triángulo rectángulo de lados 3 y 4?", a:"5" },
      { type:"Razonamiento Cuantitativo", visual:"🧠", q:"Si subes una escalera de 2 en 2 dando 15 pasos, ¿cuántos escalones tiene?", a:"30" },
      { type:"Razonamiento Cuantitativo", visual:"🧠", q:"¿Cuál es el 10% de 250?", a:"25" }
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
      // 5 Preguntas de Suma
      { type:"Suma", visual:"➕", q:"En funciones trigonométricas, simplifica: sen²(x) + cos²(x)", a:"1" },
      { type:"Suma", visual:"➕", q:"Si vector A=(2,3) y B=(4,1), calcula A + B", a:"(6, 4)" },
      { type:"Suma", visual:"➕", q:"¿Cuánto suma la progresión aritmética: 2 + 4 + 6 + 8?", a:"20" },
      { type:"Suma", visual:"➕", q:"Suma de logaritmos: log(2) + log(5) es igual a log de...", a:"10" },
      { type:"Suma", visual:"➕", q:"¿Cuánto suman los ángulos agudos de un triángulo rectángulo?", a:"90 grados" },
      
      // 5 Preguntas de Resta
      { type:"Resta", visual:"➖", q:"Si un vector A = (5, 8) y B = (2, 3), ¿cuál es el vector resultante de A - B?", a:"(3, 5)" },
      { type:"Resta", visual:"➖", q:"Utilizando identidades, ¿a qué es igual: 1 - sen²(x)?", a:"cos²(x)" },
      { type:"Resta", visual:"➖", q:"¿A qué es igual: sec²(x) - tan²(x)?", a:"1" },
      { type:"Resta", visual:"➖", q:"Resta de logaritmos: log(20) - log(2) es igual a log de...", a:"10" },
      { type:"Resta", visual:"➖", q:"Si el ángulo alfa es de 30°, ¿cuánto es su ángulo complementario?", a:"60 grados" },
      
      // 5 Preguntas de Multiplicación
      { type:"Multiplicación", visual:"✖️", q:"Encuentra el valor exacto de: 2 × sen(30°) × cos(30°)", a:"√3/2 (o sen(60°))" },
      { type:"Multiplicación", visual:"✖️", q:"Calcula el producto punto de los vectores (1,3) y (2,4)", a:"14" },
      { type:"Multiplicación", visual:"✖️", q:"¿A qué es igual: log(x³)?", a:"3 · log(x)" },
      { type:"Multiplicación", visual:"✖️", q:"Calcula: sen(45°) × cos(45°)", a:"1/2" },
      { type:"Multiplicación", visual:"✖️", q:"¿Cuánto es el doble de la amplitud de la función y = 3sen(x)?", a:"6" },
      
      // 5 Preguntas de División
      { type:"División", visual:"➗", q:"¿A qué es igual la división trigonométrica sen(x) ÷ cos(x)?", a:"tan(x) (Tangente)" },
      { type:"División", visual:"➗", q:"¿A qué es igual cos(x) ÷ sen(x)?", a:"cotan(x)" },
      { type:"División", visual:"➗", q:"Si tan(x) = 1, ¿cuál es el valor del ángulo agudo x en grados?", a:"45°" },
      { type:"División", visual:"➗", q:"¿A qué es igual 1 ÷ sec(x)?", a:"cos(x)" },
      { type:"División", visual:"➗", q:"Divide el sector circular: ¿cuántos radianes equivalen a 180° ÷ 2?", a:"π/2 radianes (o 90°)" },
      
      // 5 Preguntas de Razonamiento Cuantitativo
      { type:"Razonamiento Cuantitativo", visual:"🧠", q:"Un árbol proyecta una sombra de 12 metros con un ángulo de elevación solar de 45°. ¿Cuál es la altura del árbol?", a:"12 metros" },
      { type:"Razonamiento Cuantitativo", visual:"🧠", q:"¿Cuál es el valor del diámetro de una circunferencia de radio 7,5 cm?", a:"15 cm" },
      { type:"Razonamiento Cuantitativo", visual:"🧠", q:"Si tiras un dado común, ¿cuál es la probabilidad de sacar un número par?", a:"1/2 (o 50%)" },
      { type:"Razonamiento Cuantitativo", visual:"🧠", q:"Un triángulo equilátero tiene un lado de 6 cm. ¿Cuánto mide su perímetro?", a:"18 cm" },
      { type:"Razonamiento Cuantitativo", visual:"🧠", q:"Si recorres una pista circular de 400 metros dando 2 vueltas y media, ¿cuántos metros recorres?", a:"1000 metros" }
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
      // 5 Preguntas de Suma
      { type:"Suma", visual:"➕", q:"Calcula el límite: lim(x→2) de (x² + 3x)", a:"10" },
      { type:"Suma", visual:"➕", q:"Calcula la suma infinita de la serie: 1/2 + 1/4 + 1/8 + ...", a:"1" },
      { type:"Suma", visual:"➕", q:"Si f(x)=x y g(x)=x², calcula la derivada de f(x)+g(x)", a:"1 + 2x" },
      { type:"Suma", visual:"➕", q:"Calcula el límite: lim(x→0) de (cos(x) + 5)", a:"6" },
      { type:"Suma", visual:"➕", q:"Suma las pendientes de las rectas y=2x e y=3x", a:"5" },
      
      // 5 Preguntas de Resta
      { type:"Resta", visual:"➖", q:"Si f(x) = 5x y g(x) = 2x, calcula la derivada de (f - g)(x)", a:"3" },
      { type:"Resta", visual:"➖", q:"Calcula el límite: lim(x→5) de (x² - 25) con x evaluado directamente", a:"0" },
      { type:"Resta", visual:"➖", q:"¿Cuál es la derivada de x² - x?", a:"2x - 1" },
      { type:"Resta", visual:"➖", q:"Calcula el valor de la integral definida de 2x dx desde 1 hasta 2", a:"3" },
      { type:"Resta", visual:"➖", q:"¿Cuál es la distancia entre los puntos x=10 y x=-2 en la recta numérica?", a:"12" },
      
      // 5 Preguntas de Multiplicación
      { type:"Multiplicación", visual:"✖️", q:"Calcula la derivada de f(x) = x³ usando la regla del producto o potencia", a:"3x²" },
      { type:"Multiplicación", visual:"✖️", q:"Aplica la regla de la derivada: ¿Cuál es la derivada de 5x⁴?", a:"20x³" },
      { type:"Multiplicación", visual:"✖️", q:"¿Cuál es la derivada de la función f(x) = e^x?", a:"e^x" },
      { type:"Multiplicación", visual:"✖️", q:"¿Cuál es la derivada de f(x) = sen(x)?", a:"cos(x)" },
      { type:"Multiplicación", visual:"✖️", q:"Calcula el límite: lim(x→3) de (2x × x)", a:"18" },
      
      // 5 Preguntas de División
      { type:"División", visual:"➗", q:"Calcula el límite indeterminado: lim(x→3) de (x² - 9) ÷ (x - 3)", a:"6" },
      { type:"División", visual:"➗", q:"¿Cuál es la derivada de una constante cualquiera?", a:"0" },
      { type:"División", visual:"➗", q:"¿Cuál es la derivada de f(x) = ln(x)?", a:"1/x" },
      { type:"División", visual:"➗", q:"Calcula el límite: lim(x→∞) de (2x ÷ x)", a:"2" },
      { type:"División", visual:"➗", q:"¿Cuál es la derivada de f(x) = cos(x)?", a:"-sen(x)" },
      
      // 5 Preguntas de Razonamiento Cuantitativo
      { type:"Razonamiento Cuantitativo", visual:"🧠", q:"Si el 20% de un número es 45, ¿cuál es el 100% de ese número?", a:"225" },
      { type:"Razonamiento Cuantitativo", visual:"🧠", q:"Una bacteria se duplica cada hora. Si empiezas con 1, ¿cuántas habrá a las 5 horas?", a:"32" },
      { type:"Razonamiento Cuantitativo", visual:"🧠", q:"¿De cuántas formas se pueden organizar 3 personas en una fila?", a:"6" },
      { type:"Razonamiento Cuantitativo", visual:"🧠", q:"Si lanzas dos monedas al aire, ¿cuál es la probabilidad de que ambas sean cara?", a:"1/4 (o 25%)" },
      { type:"Razonamiento Cuantitativo", visual:"🧠", q:"Un auto gasta 1 galón por cada 40 km. Si va a viajar 200 km, ¿cuántos galones necesita?", a:"5" }
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
      { type:"Final", visual:"⚡", q:"Si multiplicas todos los números del teclado de un eteléfono móvil, ¿cuál es el resultado?", a:"0 (debido al cero)" },
      { type:"Final", visual:"🎯", q:"¿Cómo se llama un polígono regular de 5 lados?", a:"Pentágono" },
      { type:"Final", visual:"👏", q:"¿Cuántos segundos hay en un cuarto de hora?", a:"900 segundos" },
      { type:"Final", visual:"🏆", q:"Calcula rápidamente: 7 + 7 ÷ 7 + 7 × 7 - 7", a:"50" }
    ]
  }
];