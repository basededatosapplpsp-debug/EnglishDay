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

