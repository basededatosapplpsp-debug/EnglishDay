const GAME_DATA = [
  {
    id: "primero-segundo",
    title: "Primero vs Segundo",
    match: "Primero contra Segundo",
    defaultTeams: ["Primero", "Segundo"],
    topics: ["Colors", "Animals"],
    questions: [
      { type:"Colors", visual:"🔴", q:"What color is this?", a:"Red" },
      { type:"Colors", visual:"🔵", q:"Say this color in English: Azul", a:"Blue" },
      { type:"Colors", visual:"🟢", q:"What color is the grass?", a:"Green" },
      { type:"Colors", visual:"🟡", q:"Say this color in English: Amarillo", a:"Yellow" },
      { type:"Colors", visual:"⚫", q:"What color is the night?", a:"Black" },
      { type:"Animals", visual:"🐶", q:"What animal is this?", a:"Dog" },
      { type:"Animals", visual:"🐱", q:"What animal is this?", a:"Cat" },
      { type:"Animals", visual:"🐘", q:"What animal is very big and has a trunk?", a:"Elephant" },
      { type:"Animals", visual:"🦁", q:"What animal is the king of the jungle?", a:"Lion" },
      { type:"Animals", visual:"🐦", q:"What animal can fly?", a:"Bird" }
    ],
    finalQuestions: [
      { type:"Colors", visual:"🌈", q:"Say three colors in English.", a:"Red, blue, green, etc." },
      { type:"Animals", visual:"🐾", q:"Say three animals in English.", a:"Dog, cat, lion, etc." },
      { type:"Colors", visual:"🍌", q:"What color is a banana?", a:"Yellow" },
      { type:"Animals", visual:"🐟", q:"What animal lives in water?", a:"Fish" },
      { type:"Mixed", visual:"⚡", q:"Say one color and one animal in English.", a:"Example: Blue dog / Red cat" }
    ]
  },
  {
    id: "tercero-cuarto",
    title: "Tercero vs Cuarto",
    match: "Tercero contra Cuarto",
    defaultTeams: ["Tercero", "Cuarto"],
    topics: ["Family", "House & Rooms"],
    questions: [
      { type:"Family", visual:"👩", q:"Your mother's sister is your...", a:"Aunt" },
      { type:"Family", visual:"👨", q:"Your father's brother is your...", a:"Uncle" },
      { type:"Family", visual:"👵", q:"Your mother's mother is your...", a:"Grandmother" },
      { type:"Family", visual:"👦", q:"Say in English: Hermano", a:"Brother" },
      { type:"Family", visual:"👧", q:"Say in English: Hermana", a:"Sister" },
      { type:"House & Rooms", visual:"🛏️", q:"Where do you sleep?", a:"Bedroom" },
      { type:"House & Rooms", visual:"🍳", q:"Where do you cook?", a:"Kitchen" },
      { type:"House & Rooms", visual:"🛁", q:"Where do you take a shower?", a:"Bathroom" },
      { type:"House & Rooms", visual:"🏠", q:"Say in English: Casa", a:"House" },
      { type:"House & Rooms", visual:"🛋️", q:"Where do you watch TV with your family?", a:"Living room" }
    ],
    finalQuestions: [
      { type:"Family", visual:"👨‍👩‍👧‍👦", q:"Say three family members in English.", a:"Mother, father, brother, etc." },
      { type:"House & Rooms", visual:"🏠", q:"Name three rooms in a house.", a:"Bedroom, kitchen, bathroom, etc." },
      { type:"Family", visual:"👵", q:"Your father's father is your...", a:"Grandfather" },
      { type:"House & Rooms", visual:"🍽️", q:"Where do you eat dinner?", a:"Dining room" },
      { type:"Mixed", visual:"⚡", q:"Say one family member and one room.", a:"Example: Mother and kitchen" }
    ]
  },
  {
    id: "quinto",
    title: "Quinto vs Quinto",
    match: "Quinto contra Quinto",
    defaultTeams: ["Quinto A", "Quinto B"],
    topics: ["Clothes", "Food"],
    questions: [
      { type:"Clothes", visual:"👕", q:"What is this?", a:"T-shirt" },
      { type:"Clothes", visual:"👟", q:"What do you wear on your feet?", a:"Shoes" },
      { type:"Clothes", visual:"🧢", q:"Say in English: Gorra", a:"Cap" },
      { type:"Clothes", visual:"👖", q:"What are these?", a:"Pants / Jeans" },
      { type:"Clothes", visual:"👗", q:"What is this?", a:"Dress" },
      { type:"Food", visual:"🍎", q:"What fruit is this?", a:"Apple" },
      { type:"Food", visual:"🍕", q:"What food is this?", a:"Pizza" },
      { type:"Food", visual:"🥛", q:"What do you drink that is white?", a:"Milk" },
      { type:"Food", visual:"🍞", q:"Say in English: Pan", a:"Bread" },
      { type:"Food", visual:"🍗", q:"What food is this?", a:"Chicken" }
    ],
    finalQuestions: [
      { type:"Clothes", visual:"👚", q:"Say three clothes in English.", a:"Shirt, shoes, pants, etc." },
      { type:"Food", visual:"🍽️", q:"Say three foods in English.", a:"Pizza, apple, bread, etc." },
      { type:"Clothes", visual:"🧦", q:"What do you wear under your shoes?", a:"Socks" },
      { type:"Food", visual:"🍌", q:"What fruit is yellow?", a:"Banana" },
      { type:"Mixed", visual:"⚡", q:"Say one food and one clothing item.", a:"Example: Apple and shoes" }
    ]
  },
  {
    id: "sexto",
    title: "Sexto A vs Sexto B",
    match: "Sexto A contra Sexto B",
    defaultTeams: ["Sexto A", "Sexto B"],
    topics: ["Weather", "Places in the City"],
    questions: [
      { type:"Weather", visual:"☀️", q:"What is the weather like?", a:"Sunny" },
      { type:"Weather", visual:"🌧️", q:"What is the weather like?", a:"Rainy" },
      { type:"Weather", visual:"☁️", q:"Say in English: Nublado", a:"Cloudy" },
      { type:"Weather", visual:"❄️", q:"What weather is very cold?", a:"Snowy" },
      { type:"Weather", visual:"🌬️", q:"What weather has a lot of wind?", a:"Windy" },
      { type:"Places in the City", visual:"🏥", q:"Where do doctors work?", a:"Hospital" },
      { type:"Places in the City", visual:"🏫", q:"Where do students study?", a:"School" },
      { type:"Places in the City", visual:"🏦", q:"Where can you save money?", a:"Bank" },
      { type:"Places in the City", visual:"💊", q:"Where can you buy medicine?", a:"Pharmacy" },
      { type:"Places in the City", visual:"🍽️", q:"Where can you eat food?", a:"Restaurant" }
    ],
    finalQuestions: [
      { type:"Weather", visual:"🌦️", q:"Say three types of weather.", a:"Sunny, rainy, cloudy, etc." },
      { type:"Places in the City", visual:"🏙️", q:"Name three places in the city.", a:"Hospital, school, bank, etc." },
      { type:"Weather", visual:"☔", q:"What do you use when it rains?", a:"Umbrella" },
      { type:"Places in the City", visual:"📚", q:"Where can you read or borrow books?", a:"Library" },
      { type:"Mixed", visual:"⚡", q:"Say one weather word and one city place.", a:"Example: Sunny and park" }
    ]
  },
  {
    id: "septimo-octavo",
    title: "Séptimo vs Octavo",
    match: "Séptimo contra Octavo",
    defaultTeams: ["Séptimo", "Octavo"],
    topics: ["Daily Routines", "Free Time Activities / Hobbies"],
    questions: [
      { type:"Daily Routines", visual:"⏰", q:"What do you do when the alarm rings?", a:"Wake up" },
      { type:"Daily Routines", visual:"🪥", q:"Say in English: Cepillarse los dientes", a:"Brush your teeth" },
      { type:"Daily Routines", visual:"🚌", q:"What do students do to go to school?", a:"Go to school" },
      { type:"Daily Routines", visual:"😴", q:"What do you do at night?", a:"Go to bed / Sleep" },
      { type:"Daily Routines", visual:"🍳", q:"What do you do in the morning with food?", a:"Have breakfast" },
      { type:"Hobbies", visual:"⚽", q:"Name this free time activity.", a:"Playing soccer / Football" },
      { type:"Hobbies", visual:"📚", q:"What hobby is this?", a:"Reading" },
      { type:"Hobbies", visual:"🎵", q:"Say a hobby with music.", a:"Listening to music / Singing" },
      { type:"Hobbies", visual:"🎮", q:"What hobby is this?", a:"Playing video games" },
      { type:"Hobbies", visual:"🎨", q:"What hobby uses colors and paper?", a:"Drawing / Painting" }
    ],
    finalQuestions: [
      { type:"Daily Routines", visual:"⏰", q:"Say three daily routines.", a:"Wake up, brush teeth, go to school, etc." },
      { type:"Hobbies", visual:"🎯", q:"Say three hobbies in English.", a:"Reading, singing, playing soccer, etc." },
      { type:"Daily Routines", visual:"🛏️", q:"What do you do before sleeping?", a:"Go to bed" },
      { type:"Hobbies", visual:"🎮", q:"What do you play on a console?", a:"Video games" },
      { type:"Mixed", visual:"⚡", q:"Say one routine and one hobby.", a:"Example: Wake up and reading" }
    ]
  },
  {
    id: "noveno-decimo",
    title: "Noveno vs Décimo",
    match: "Noveno contra Décimo",
    defaultTeams: ["Noveno", "Décimo"],
    topics: ["Feelings & Emotions", "Jobs & Professions"],
    questions: [
      { type:"Feelings & Emotions", visual:"😀", q:"How does this person feel?", a:"Happy" },
      { type:"Feelings & Emotions", visual:"😢", q:"How does this person feel?", a:"Sad" },
      { type:"Feelings & Emotions", visual:"😡", q:"Say in English: Enojado", a:"Angry" },
      { type:"Feelings & Emotions", visual:"😨", q:"Say in English: Asustado", a:"Scared / Afraid" },
      { type:"Feelings & Emotions", visual:"😴", q:"How do you feel when you want to sleep?", a:"Sleepy / Tired" },
      { type:"Jobs & Professions", visual:"👨‍⚕️", q:"Who works in a hospital?", a:"Doctor / Nurse" },
      { type:"Jobs & Professions", visual:"👩‍🏫", q:"Who teaches students?", a:"Teacher" },
      { type:"Jobs & Professions", visual:"👮", q:"Who protects people in the city?", a:"Police officer" },
      { type:"Jobs & Professions", visual:"👨‍🍳", q:"Who cooks in a restaurant?", a:"Chef / Cook" },
      { type:"Jobs & Professions", visual:"🚒", q:"Who puts out fires?", a:"Firefighter" }
    ],
    finalQuestions: [
      { type:"Feelings & Emotions", visual:"😀", q:"Say three emotions in English.", a:"Happy, sad, angry, etc." },
      { type:"Jobs & Professions", visual:"👔", q:"Say three professions in English.", a:"Doctor, teacher, chef, etc." },
      { type:"Feelings & Emotions", visual:"😬", q:"How do you feel before an exam?", a:"Nervous" },
      { type:"Jobs & Professions", visual:"✈️", q:"Who flies an airplane?", a:"Pilot" },
      { type:"Mixed", visual:"⚡", q:"Say one emotion and one profession.", a:"Example: Happy teacher" }
    ]
  },
  {
    id: "once",
    title: "Once A vs Once C",
    match: "Once A contra Once C",
    defaultTeams: ["Once A", "Once C"],
    topics: ["Environment", "Travel & Culture"],
    questions: [
      { type:"Environment", visual:"♻️", q:"What action helps the planet?", a:"Recycle" },
      { type:"Environment", visual:"🌳", q:"Say in English: Árbol", a:"Tree" },
      { type:"Environment", visual:"🚯", q:"What should we not throw on the floor?", a:"Trash / Garbage" },
      { type:"Environment", visual:"💧", q:"What natural resource do we need to drink?", a:"Water" },
      { type:"Environment", visual:"🌎", q:"What planet do we live on?", a:"Earth" },
      { type:"Travel & Culture", visual:"✈️", q:"What do people use to travel by air?", a:"Plane / Airplane" },
      { type:"Travel & Culture", visual:"🛂", q:"What document do you need to travel abroad?", a:"Passport" },
      { type:"Travel & Culture", visual:"🧳", q:"What do you pack for a trip?", a:"Suitcase" },
      { type:"Travel & Culture", visual:"🗺️", q:"What do tourists use to find places?", a:"Map" },
      { type:"Travel & Culture", visual:"🏨", q:"Where do tourists usually sleep?", a:"Hotel" }
    ],
    finalQuestions: [
      { type:"Environment", visual:"🌎", q:"Say three environment words.", a:"Recycle, water, tree, pollution, etc." },
      { type:"Travel & Culture", visual:"🧳", q:"Say three travel words.", a:"Passport, suitcase, hotel, etc." },
      { type:"Environment", visual:"🏭", q:"What word means dirty air, water or land?", a:"Pollution" },
      { type:"Travel & Culture", visual:"🌍", q:"People visit another country as...", a:"Tourists" },
      { type:"Mixed", visual:"⚡", q:"Say one environment word and one travel word.", a:"Example: Water and passport" }
    ]
  },

  {
    id: "profe-1",
    title: "Profe 1",
    match: "Profe 1 contra Profe 2",
    defaultTeams: ["Profe 1", "Profe 2"],
    topics: ["PIAR", "Mallas Curriculares", "Cultura General", "Variedades del Mundo Escolar"],
    questions: [
      { type:"PIAR", visual:"🧩", q:"¿Qué significa la sigla PIAR en el contexto educativo colombiano?", a:"Plan Individual de Ajustes Razonables" },
      { type:"PIAR", visual:"🏫", q:"¿Para qué sirve el PIAR en una institución educativa?", a:"Para identificar barreras y definir apoyos o ajustes razonables para el estudiante." },
      { type:"PIAR", visual:"👩‍🏫", q:"¿Quiénes participan en la construcción del PIAR?", a:"Docentes, directivos, orientación o apoyo pedagógico, familia y el estudiante cuando sea posible." },
      { type:"PIAR", visual:"📋", q:"¿El PIAR busca bajar la exigencia académica o facilitar el acceso al aprendizaje?", a:"Facilitar el acceso, la participación y el aprendizaje con ajustes razonables." },
      { type:"PIAR", visual:"♿", q:"¿Qué son los ajustes razonables dentro del PIAR?", a:"Adaptaciones necesarias y pertinentes que no imponen una carga desproporcionada a la escuela." },
      { type:"PIAR", visual:"🔎", q:"Antes de proponer ajustes, ¿qué debe identificar el docente?", a:"Las barreras que dificultan la participación, comunicación o aprendizaje del estudiante." },
      { type:"PIAR", visual:"📚", q:"Menciona un ejemplo de ajuste razonable en evaluación.", a:"Dar más tiempo, usar evaluación oral, apoyos visuales o diferentes formas de demostrar el aprendizaje." },
      { type:"PIAR", visual:"🗣️", q:"Menciona un ejemplo de ajuste razonable en comunicación.", a:"Usar pictogramas, instrucciones claras, lenguaje sencillo, apoyos visuales o tecnología de apoyo." },
      { type:"PIAR", visual:"🤝", q:"¿Por qué la familia es importante en el PIAR?", a:"Porque aporta información sobre el estudiante, sus apoyos, fortalezas y necesidades." },
      { type:"PIAR", visual:"🎯", q:"¿El PIAR debe centrarse solo en las dificultades del estudiante?", a:"No. También debe reconocer sus fortalezas, intereses y formas de aprender." },
      { type:"PIAR", visual:"⏱️", q:"¿El PIAR es un documento fijo o debe revisarse durante el año escolar?", a:"Debe revisarse y ajustarse según los avances y necesidades del estudiante." },
      { type:"PIAR", visual:"🌈", q:"¿A qué población se asocia principalmente el PIAR en Colombia?", a:"A estudiantes con discapacidad que requieren ajustes razonables." },
      { type:"PIAR", visual:"🧠", q:"¿Qué diferencia hay entre apoyo y ajuste razonable?", a:"El apoyo acompaña el proceso; el ajuste modifica condiciones, recursos o formas de enseñanza/evaluación." },
      { type:"PIAR", visual:"📌", q:"¿Cuál es una señal de que un ajuste del PIAR está funcionando?", a:"El estudiante participa más, comprende mejor y puede demostrar sus aprendizajes." },
      { type:"PIAR", visual:"✅", q:"¿Cuál es el objetivo principal del PIAR?", a:"Garantizar inclusión, permanencia, participación y aprendizaje en condiciones de equidad." },

      { type:"Mallas Curriculares", visual:"🧵", q:"¿Qué es una malla curricular?", a:"Una organización de aprendizajes, competencias, contenidos y desempeños por grados o periodos." },
      { type:"Mallas Curriculares", visual:"📆", q:"¿Para qué sirven los periodos dentro de una malla curricular?", a:"Para distribuir y secuenciar los aprendizajes durante el año escolar." },
      { type:"Mallas Curriculares", visual:"🎯", q:"¿Qué elemento indica lo que se espera que el estudiante logre?", a:"El desempeño, aprendizaje esperado, competencia o evidencia de aprendizaje." },
      { type:"Mallas Curriculares", visual:"🔗", q:"¿Por qué debe haber secuencia entre grados en una malla curricular?", a:"Para que los aprendizajes avancen de forma progresiva y coherente." },
      { type:"Mallas Curriculares", visual:"📝", q:"¿La evaluación debe estar relacionada con la malla curricular?", a:"Sí, debe evaluar los aprendizajes y desempeños planificados." },
      { type:"Mallas Curriculares", visual:"📖", q:"Menciona un documento colombiano que orienta la planeación curricular.", a:"Estándares Básicos de Competencias, DBA, lineamientos curriculares o PEI." },
      { type:"Mallas Curriculares", visual:"👥", q:"¿Quiénes suelen participar en la construcción o revisión de mallas curriculares?", a:"Docentes, coordinadores, directivos y áreas académicas." },
      { type:"Mallas Curriculares", visual:"🔄", q:"¿Por qué se actualiza una malla curricular?", a:"Para responder al contexto, resultados, necesidades de estudiantes y orientaciones institucionales." },

      { type:"Cultura General", visual:"🇨🇴", q:"¿Cuál es la capital de Colombia?", a:"Bogotá" },
      { type:"Cultura General", visual:"📚", q:"¿Quién escribió Cien años de soledad?", a:"Gabriel García Márquez" },
      { type:"Cultura General", visual:"🌊", q:"¿Qué océanos bañan costas de Colombia?", a:"Océano Pacífico y océano Atlántico, a través del mar Caribe." },
      { type:"Cultura General", visual:"🗳️", q:"¿Qué valor democrático se practica al elegir personero estudiantil?", a:"La participación democrática." },
      { type:"Cultura General", visual:"🌱", q:"¿Qué acción escolar ayuda al cuidado del ambiente?", a:"Reciclar, ahorrar agua, sembrar árboles o reducir residuos." },
      { type:"Cultura General", visual:"🕊️", q:"¿Qué valor permite resolver conflictos dialogando?", a:"La tolerancia, el respeto o la convivencia." },
      { type:"Cultura General", visual:"🧪", q:"¿Qué área estudia los seres vivos y su entorno?", a:"Ciencias naturales o biología." },
      { type:"Cultura General", visual:"📐", q:"¿Qué instrumento se usa para medir ángulos?", a:"Transportador" },

      { type:"Variedades del Mundo Escolar", visual:"🌍", q:"¿Cómo se llama la persona que lidera una institución educativa?", a:"Rector o rectora." },
      { type:"Variedades del Mundo Escolar", visual:"🧑‍🎓", q:"¿Qué documento define la identidad y ruta de una institución educativa?", a:"El PEI, Proyecto Educativo Institucional." },
      { type:"Variedades del Mundo Escolar", visual:"🤝", q:"¿Qué comité ayuda a promover la convivencia escolar?", a:"El Comité Escolar de Convivencia." },
      { type:"Variedades del Mundo Escolar", visual:"🔔", q:"¿Qué estrategia puede mejorar la puntualidad escolar?", a:"Rutinas claras, acuerdos, seguimiento y acompañamiento familiar." },
      { type:"Variedades del Mundo Escolar", visual:"💬", q:"¿Qué debe hacer un docente ante un conflicto entre estudiantes?", a:"Escuchar, mediar, registrar si aplica y activar la ruta correspondiente." },
      { type:"Variedades del Mundo Escolar", visual:"📱", q:"Menciona un uso pedagógico responsable del celular en clase.", a:"Consultar información, tomar evidencias, responder actividades o usar apps educativas." },
      { type:"Variedades del Mundo Escolar", visual:"🧭", q:"¿Qué significa orientar al estudiante más allá de calificarlo?", a:"Acompañar su proceso, dar retroalimentación y apoyar su mejora." },
      { type:"Variedades del Mundo Escolar", visual:"🏆", q:"¿Qué reconoce una escuela cuando celebra logros estudiantiles?", a:"El esfuerzo, la participación, el talento y el avance de los estudiantes." }
    ],
    finalQuestions: [
      { type:"PIAR", visual:"🧩", q:"En una frase, ¿para qué sirve el PIAR?", a:"Para definir ajustes razonables que favorecen inclusión, participación y aprendizaje." },
      { type:"Mallas Curriculares", visual:"🧵", q:"¿Qué organiza una malla curricular?", a:"Competencias, contenidos, desempeños, evidencias y secuencia de aprendizajes." },
      { type:"Cultura General", visual:"🇨🇴", q:"¿Cuál es la capital de Colombia?", a:"Bogotá" },
      { type:"Variedades del Mundo Escolar", visual:"🏫", q:"¿Qué documento orienta la identidad institucional de una escuela?", a:"El PEI." },
      { type:"PIAR", visual:"✅", q:"Menciona un ajuste razonable para evaluar a un estudiante.", a:"Más tiempo, evaluación oral, apoyos visuales o distintas formas de responder." }
    ]
  },
  {
    id: "profe-2",
    title: "Profe 2",
    match: "Profe 2 contra Profe 1",
    defaultTeams: ["Profe 2", "Profe 1"],
    topics: ["PIAR", "Mallas Curriculares", "Cultura General", "Variedades del Mundo Escolar"],
    questions: [
      { type:"PIAR", visual:"🧩", q:"¿Qué palabra clave resume el propósito del PIAR?", a:"Inclusión" },
      { type:"PIAR", visual:"📄", q:"¿El PIAR reemplaza la planeación de clase?", a:"No. La complementa con ajustes razonables para un estudiante específico." },
      { type:"PIAR", visual:"🔍", q:"¿Qué se debe observar para diseñar un PIAR pertinente?", a:"Fortalezas, necesidades, barreras, contexto y apoyos que requiere el estudiante." },
      { type:"PIAR", visual:"👨‍👩‍👧", q:"¿La familia solo firma el PIAR o también aporta información?", a:"También aporta información y participa en el seguimiento." },
      { type:"PIAR", visual:"🧑‍🏫", q:"¿Qué rol tiene el docente de aula en el PIAR?", a:"Planear, aplicar y hacer seguimiento a los ajustes en el proceso de enseñanza y evaluación." },
      { type:"PIAR", visual:"📌", q:"¿Qué debe quedar claro en un PIAR?", a:"Barreras, ajustes, responsables, seguimiento y estrategias de apoyo." },
      { type:"PIAR", visual:"🎒", q:"Menciona un ajuste razonable para la participación en clase.", a:"Trabajo por pares, apoyos visuales, instrucciones paso a paso o participación oral guiada." },
      { type:"PIAR", visual:"🧪", q:"En ciencias, ¿qué ajuste puede ayudar a un estudiante con barreras de lectura?", a:"Usar imágenes, experimentos guiados, audios, pictogramas o explicaciones orales." },
      { type:"PIAR", visual:"📊", q:"¿Cómo se evidencia el seguimiento del PIAR?", a:"Con registros de avances, observaciones, evidencias de trabajo y ajustes actualizados." },
      { type:"PIAR", visual:"⚖️", q:"¿El PIAR busca equidad o privilegios?", a:"Equidad, porque ofrece apoyos según necesidades para acceder al aprendizaje." },
      { type:"PIAR", visual:"🧱", q:"¿Qué es una barrera para el aprendizaje?", a:"Una condición del entorno, metodología, comunicación o actitud que limita la participación." },
      { type:"PIAR", visual:"💡", q:"¿Qué ejemplo de barrera actitudinal puede aparecer en la escuela?", a:"Creer que un estudiante no puede aprender o excluirlo de actividades." },
      { type:"PIAR", visual:"🖼️", q:"¿Qué recurso visual puede apoyar a estudiantes que necesitan instrucciones claras?", a:"Pictogramas, listas de pasos, agendas visuales o ejemplos modelo." },
      { type:"PIAR", visual:"🧭", q:"¿Qué debe hacer la escuela si un ajuste no funciona?", a:"Revisarlo, modificarlo y buscar nuevas estrategias de apoyo." },
      { type:"PIAR", visual:"🏁", q:"¿Cómo se relaciona el PIAR con la permanencia escolar?", a:"Ayuda a que el estudiante continúe en la escuela con apoyos adecuados." },

      { type:"Mallas Curriculares", visual:"📚", q:"¿Qué relación tienen los DBA con las mallas curriculares?", a:"Orientan aprendizajes básicos que pueden integrarse a la planeación por grados." },
      { type:"Mallas Curriculares", visual:"🎯", q:"¿Qué debe aparecer primero al planear: actividad o propósito de aprendizaje?", a:"El propósito de aprendizaje." },
      { type:"Mallas Curriculares", visual:"🔁", q:"¿Qué significa articulación curricular?", a:"Coherencia entre áreas, grados, competencias, evaluación y proyectos institucionales." },
      { type:"Mallas Curriculares", visual:"📈", q:"¿Qué permite ver una malla curricular bien organizada?", a:"La progresión de aprendizajes durante el año y entre grados." },
      { type:"Mallas Curriculares", visual:"🧠", q:"¿Por qué una malla debe considerar el contexto de los estudiantes?", a:"Porque el aprendizaje es más significativo cuando responde a su realidad y necesidades." },
      { type:"Mallas Curriculares", visual:"📝", q:"¿Qué son evidencias de aprendizaje?", a:"Productos, respuestas o desempeños que muestran lo que el estudiante aprendió." },
      { type:"Mallas Curriculares", visual:"🏫", q:"¿La malla curricular debe estar aislada del PEI?", a:"No. Debe estar articulada con el PEI y el enfoque institucional." },
      { type:"Mallas Curriculares", visual:"🧩", q:"¿Qué pasa si una malla no tiene criterios claros de evaluación?", a:"Se dificulta valorar los aprendizajes de forma justa y coherente." },

      { type:"Cultura General", visual:"🌎", q:"¿Cuál es el planeta conocido como el planeta azul?", a:"La Tierra" },
      { type:"Cultura General", visual:"🧮", q:"¿Cuánto es 12 x 8?", a:"96" },
      { type:"Cultura General", visual:"🕰️", q:"¿Cuántos minutos tiene una hora?", a:"60 minutos" },
      { type:"Cultura General", visual:"📜", q:"¿Cómo se llama la norma máxima de Colombia?", a:"La Constitución Política de Colombia." },
      { type:"Cultura General", visual:"🎨", q:"¿Qué colores tiene la bandera de Colombia?", a:"Amarillo, azul y rojo." },
      { type:"Cultura General", visual:"🗺️", q:"¿En qué continente está Colombia?", a:"América del Sur." },
      { type:"Cultura General", visual:"💧", q:"¿Por qué es importante ahorrar agua en la escuela?", a:"Porque es un recurso vital y limitado." },
      { type:"Cultura General", visual:"📖", q:"¿Qué habilidad fortalece la lectura diaria?", a:"Comprensión lectora, vocabulario y pensamiento crítico." },

      { type:"Variedades del Mundo Escolar", visual:"🍎", q:"¿Qué acción docente ayuda más: solo corregir o retroalimentar?", a:"Retroalimentar, porque orienta cómo mejorar." },
      { type:"Variedades del Mundo Escolar", visual:"🛡️", q:"¿Qué debe proteger siempre una escuela?", a:"La dignidad, seguridad y derechos de niñas, niños y adolescentes." },
      { type:"Variedades del Mundo Escolar", visual:"📢", q:"¿Qué es una instrucción efectiva en clase?", a:"Una indicación clara, breve, verificable y adecuada al grupo." },
      { type:"Variedades del Mundo Escolar", visual:"🧑‍🤝‍🧑", q:"¿Qué promueve el trabajo colaborativo?", a:"Participación, comunicación, responsabilidad compartida y aprendizaje entre pares." },
      { type:"Variedades del Mundo Escolar", visual:"🧘", q:"¿Qué puede hacer el docente para mejorar el clima de aula?", a:"Establecer acuerdos, escuchar, reconocer avances y manejar conflictos con respeto." },
      { type:"Variedades del Mundo Escolar", visual:"📌", q:"¿Qué es una ruta de atención escolar?", a:"Un procedimiento para actuar ante situaciones que afectan derechos o convivencia." },
      { type:"Variedades del Mundo Escolar", visual:"💻", q:"¿Qué debe tener una actividad digital segura?", a:"Propósito claro, protección de datos, acompañamiento y uso responsable." },
      { type:"Variedades del Mundo Escolar", visual:"🌟", q:"¿Qué frase motiva sin comparar estudiantes?", a:"Vas avanzando, sigue intentándolo / Tu esfuerzo se nota." }
    ],
    finalQuestions: [
      { type:"PIAR", visual:"🧩", q:"¿El PIAR se centra en barreras o en etiquetas?", a:"En barreras, apoyos y ajustes razonables." },
      { type:"Mallas Curriculares", visual:"📚", q:"¿Qué permite una buena secuencia curricular?", a:"Progresión coherente de aprendizajes." },
      { type:"Cultura General", visual:"🎨", q:"¿Cuáles son los colores de la bandera de Colombia?", a:"Amarillo, azul y rojo." },
      { type:"Variedades del Mundo Escolar", visual:"🤝", q:"¿Qué valor es esencial para la convivencia escolar?", a:"Respeto, tolerancia, empatía o responsabilidad." },
      { type:"PIAR", visual:"⚖️", q:"¿Por qué el PIAR promueve equidad?", a:"Porque ofrece apoyos según las necesidades reales del estudiante." }
    ]
  },
  {
    id: "final",
    title: "Gran Final",
    match: "Final de Ganadores",
    defaultTeams: ["Finalist 1", "Finalist 2"],
    topics: ["Final según categoría"],
    questions: [
      { type:"Final", visual:"🏆", q:"Selecciona primero la categoría de la final.", a:"La final usa 5 preguntas de la categoría elegida." },
      { type:"Final", visual:"⚡", q:"Usa el botón Modo Final después de tener los finalistas.", a:"Los finalistas pasan a la final." },
      { type:"Final", visual:"🎯", q:"Puedes editar data.js para personalizar la final.", a:"Agrega preguntas según el evento." },
      { type:"Final", visual:"👏", q:"Marca correcto o incorrecto como en las rondas.", a:"El puntaje define el campeón." },
      { type:"Final", visual:"🏆", q:"Presiona Mostrar campeón al terminar.", a:"Aparece la pantalla del ganador." }
    ]
  }
  ,
  {
    id: "mega-final",
    title: "Mega Final",
    match: "Mega Final",
    defaultTeams: ["Equipo 1", "Equipo 2"],
    topics: ["Mixed Topics"],
    questions: [
      { type:"Weather", visual:"🌩️", q:"What weather has thunder and lightning?", a:"Stormy" },
      { type:"Daily Routines", visual:"🚿", q:"What do you do before going to school?", a:"Take a shower" },
      { type:"Jobs & Professions", visual:"🦷", q:"Who takes care of teeth?", a:"Dentist" },
      { type:"Environment", visual:"🌱", q:"What should we plant to help the Earth?", a:"Trees / Plants" },
      { type:"Travel & Culture", visual:"🛫", q:"What place do airplanes use?", a:"Airport" }
    ]
  },
  {
    id: "ultra-final",
    title: "Ultra Final",
    match: "Ultra Final",
    defaultTeams: ["Equipo 1", "Equipo 2"],
    topics: ["Mixed Topics"],
    questions: [
      { type:"Places in the City", visual:"🏞️", q:"Where can children play outside?", a:"Park" },
      { type:"Hobbies", visual:"🎤", q:"What hobby uses a microphone?", a:"Singing" },
      { type:"Feelings & Emotions", visual:"😲", q:"How do you feel when something is unexpected?", a:"Surprised" },
      { type:"Environment", visual:"🗑️", q:"What should you do with trash?", a:"Recycle / Throw it away properly" },
      { type:"Travel & Culture", visual:"📸", q:"What do tourists take to remember places?", a:"Photos / Pictures" }
    ]
  },
  {
    id: "hiper-final",
    title: "Hiper Final",
    match: "Hiper Final",
    defaultTeams: ["Equipo 1", "Equipo 2"],
    topics: ["Mixed Topics"],
    questions: [
      { type:"Weather", visual:"🌡️", q:"What weather is very hot?", a:"Hot / Sunny" },
      { type:"Daily Routines", visual:"📚", q:"What do students do in class?", a:"Study / Learn" },
      { type:"Jobs & Professions", visual:"🏗️", q:"Who builds houses and buildings?", a:"Construction worker / Builder" },
      { type:"Feelings & Emotions", visual:"😍", q:"How do you feel when you really like something?", a:"Excited / Happy" },
      { type:"Travel & Culture", visual:"🚆", q:"What transportation travels on rails?", a:"Train" }
    ]
  }
];

