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
      { type:"Animals", visual:"🐶", q:"What animal is this?", a:"Dog" },
      { type:"Animals", visual:"🐱", q:"What animal is this?", a:"Cat" },
      { type:"Animals", visual:"🐘", q:"What animal is very big and has a trunk?", a:"Elephant" },
      { type:"Animals", visual:"🦁", q:"What animal is the king of the jungle?", a:"Lion" }
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
      { type:"House & Rooms", visual:"🛏️", q:"Where do you sleep?", a:"Bedroom" },
      { type:"House & Rooms", visual:"🍳", q:"Where do you cook?", a:"Kitchen" },
      { type:"House & Rooms", visual:"🛁", q:"Where do you take a shower?", a:"Bathroom" },
      { type:"House & Rooms", visual:"🏠", q:"Say in English: Casa", a:"House" }
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
      { type:"Food", visual:"🍎", q:"What fruit is this?", a:"Apple" },
      { type:"Food", visual:"🍕", q:"What food is this?", a:"Pizza" },
      { type:"Food", visual:"🥛", q:"What do you drink that is white?", a:"Milk" },
      { type:"Food", visual:"🍞", q:"Say in English: Pan", a:"Bread" }
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
      { type:"Places in the City", visual:"🏥", q:"Where do doctors work?", a:"Hospital" },
      { type:"Places in the City", visual:"🏫", q:"Where do students study?", a:"School" },
      { type:"Places in the City", visual:"🏦", q:"Where can you save money?", a:"Bank" },
      { type:"Places in the City", visual:"💊", q:"Where can you buy medicine?", a:"Pharmacy" }
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
      { type:"Hobbies", visual:"⚽", q:"Name this free time activity.", a:"Playing soccer / Football" },
      { type:"Hobbies", visual:"📚", q:"What hobby is this?", a:"Reading" },
      { type:"Hobbies", visual:"🎵", q:"Say a hobby with music.", a:"Listening to music / Singing" },
      { type:"Hobbies", visual:"🎮", q:"What hobby is this?", a:"Playing video games" }
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
      { type:"Jobs & Professions", visual:"👨‍⚕️", q:"Who works in a hospital?", a:"Doctor / Nurse" },
      { type:"Jobs & Professions", visual:"👩‍🏫", q:"Who teaches students?", a:"Teacher" },
      { type:"Jobs & Professions", visual:"👮", q:"Who protects people in the city?", a:"Police officer" },
      { type:"Jobs & Professions", visual:"👨‍🍳", q:"Who cooks in a restaurant?", a:"Chef / Cook" }
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
      { type:"Travel & Culture", visual:"✈️", q:"What do people use to travel by air?", a:"Plane / Airplane" },
      { type:"Travel & Culture", visual:"🛂", q:"What document do you need to travel abroad?", a:"Passport" },
      { type:"Travel & Culture", visual:"🧳", q:"What do you pack for a trip?", a:"Suitcase" },
      { type:"Travel & Culture", visual:"🗺️", q:"What do tourists use to find places?", a:"Map" }
    ]
  },
  {
    id: "final",
    title: "Gran Final",
    match: "Final de Ganadores",
    defaultTeams: ["Finalist 1", "Finalist 2"],
    topics: ["Mixed Vocabulary"],
    questions: [
      { type:"Mixed", visual:"⚡", q:"Say three colors in English.", a:"Red, blue, green, etc." },
      { type:"Mixed", visual:"🐾", q:"Say three animals in English.", a:"Dog, cat, lion, etc." },
      { type:"Mixed", visual:"🏙️", q:"Name two places in the city.", a:"Hospital, school, bank, etc." },
      { type:"Mixed", visual:"🌦️", q:"Say three types of weather.", a:"Sunny, rainy, cloudy, etc." },
      { type:"Mixed", visual:"👔", q:"Name two jobs or professions.", a:"Doctor, teacher, chef, etc." },
      { type:"Mixed", visual:"🌎", q:"Say one way to help the environment.", a:"Recycle / Save water / Plant trees" },
      { type:"Mixed", visual:"🧳", q:"Name two things for travel.", a:"Passport, suitcase, map, etc." },
      { type:"Mixed", visual:"🏆", q:"Spell the word: CHAMPION", a:"C-H-A-M-P-I-O-N" }
    ]
  }
];
