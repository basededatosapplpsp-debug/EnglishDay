const GAME_DATA = [
  {
    id: "fuselaje_quiz",
    title: "Vida Integral del Creyente",
    match: "Adolescentes VS Clase",
    defaultTeams: ["Equipo A", "Equipo B"],
    topics: ["Espíritu", "Alma", "Cuerpo", "Todo"],
    questions: [
      // Espíritu (10)
      { type:"Espíritu", visual:"🙏", q:"¿Cuál es la acción principal para fortalecer tu espíritu?", a:"Orar y buscar a Dios" },
      { type:"Espíritu", visual:"📖", q:"¿Qué actividad ayuda a conocer la voluntad de Dios?", a:"Leer la Biblia" },
      { type:"Espíritu", visual:"🎵", q:"¿Cómo podemos adorar a Dios diariamente?", a:"Cantando y alabando con el corazón" },
      { type:"Espíritu", visual:"🕊️", q:"¿Qué fruto se evidencia cuando el espíritu está alineado con Dios?", a:"Paz y alegría" },
      { type:"Espíritu", visual:"💡", q:"¿Cuál es un hábito que fortalece la relación con Dios?", a:"Reflexión y oración diaria" },
      { type:"Espíritu", visual:"🤲", q:"¿Qué significa entregar nuestra vida a Dios?", a:"Confiar y obedecerlo en todo" },
      { type:"Espíritu", visual:"⏰", q:"¿Cuándo debemos buscar a Dios?", a:"Todos los días y en todo momento" },
      { type:"Espíritu", visual:"🗣️", q:"¿Cómo expresamos nuestra fe de manera auténtica?", a:"Compartiendo y testificando" },
      { type:"Espíritu", visual:"❤️", q:"¿Qué actitud refleja un espíritu alineado con Dios?", a:"Amor y humildad" },
      { type:"Espíritu", visual:"🌟", q:"¿Qué debemos permitir que Dios haga en nuestra vida?", a:"Guiar y transformar todo nuestro ser" },
      
      // Alma (10)
      { type:"Alma", visual:"🧠", q:"¿Qué debemos cuidar en nuestra mente?", a:"Pensamientos positivos y de fe" },
      { type:"Alma", visual:"💭", q:"¿Qué emoción debemos entregar a Dios?", a:"Ansiedad, miedo o resentimiento" },
      { type:"Alma", visual:"📝", q:"¿Cómo podemos tomar decisiones correctas?", a:"Buscando la guía de Dios" },
      { type:"Alma", visual:"🤝", q:"¿Qué actitud ayuda a mantener relaciones sanas?", a:"Perdón y comprensión" },
      { type:"Alma", visual:"😌", q:"¿Qué hábito fortalece la estabilidad emocional?", a:"Meditación en la Palabra de Dios" },
      { type:"Alma", visual:"🌱", q:"¿Qué significa renovar nuestra mente?", a:"Cambiar pensamientos negativos por los de Dios" },
      { type:"Alma", visual:"🛡️", q:"¿Qué debemos usar para proteger nuestra alma?", a:"La fe y la verdad de Dios" },
      { type:"Alma", visual:"🔥", q:"¿Qué debemos evitar que domine nuestra alma?", a:"La ira, envidia o orgullo" },
      { type:"Alma", visual:"💡", q:"¿Cómo discernimos entre lo bueno y lo malo para nuestra alma?", a:"Aplicando los principios bíblicos" },
      { type:"Alma", visual:"🕊️", q:"¿Qué refleja un alma alineada con Dios?", a:"Serena, confiada y llena de esperanza" },
      
      // Cuerpo (10)
      { type:"Cuerpo", visual:"🏃", q:"¿Qué representa cuidar nuestro cuerpo?", a:"Hábito, salud y obediencia a Dios" },
      { type:"Cuerpo", visual:"🍎", q:"¿Qué hábitos alimenticios reflejan disciplina?", a:"Comer sano y moderadamente" },
      { type:"Cuerpo", visual:"🛌", q:"¿Cómo reflejamos cuidado físico y espiritual?", a:"Descansando y evitando excesos" },
      { type:"Cuerpo", visual:"💪", q:"¿Qué demuestra coherencia entre espíritu y cuerpo?", a:"Obedecer a Dios en acciones y conducta" },
      { type:"Cuerpo", visual:"🗣️", q:"¿Cómo debemos usar nuestra boca?", a:"Para bendecir, hablar la verdad y alabar" },
      { type:"Cuerpo", visual:"📱", q:"¿Qué debemos vigilar en nuestra conducta diaria?", a:"Uso de redes y entretenimiento" },
      { type:"Cuerpo", visual:"👕", q:"¿Cómo refleja nuestro cuerpo lo que somos por dentro?", a:"Con acciones coherentes y hábitos correctos" },
      { type:"Cuerpo", visual:"⏳", q:"¿Qué importancia tiene la disciplina física?", a:"Para servir a Dios mejor y estar saludables" },
      { type:"Cuerpo", visual:"🎯", q:"¿Qué decisiones afectan la integridad del cuerpo?", a:"Hábitos diarios y relaciones" },
      { type:"Cuerpo", visual:"🔑", q:"¿Qué es clave para mantener el cuerpo alineado con Dios?", a:"Dominio propio y obediencia" },
      
      // Todo (30)
      { type:"Todo", visual:"🌐", q:"¿Qué es la vida integral del creyente?", a:"La unión de espíritu, alma y cuerpo alineados con Dios" },
      { type:"Todo", visual:"🌟", q:"¿Por qué Dios quiere que todo nuestro ser esté alineado?", a:"Porque somos su vehículo para obrar" },
      { type:"Todo", visual:"❤️", q:"¿Qué refleja una vida integral?", a:"Coherencia, paz y obediencia" },
      { type:"Todo", visual:"🕊️", q:"¿Qué áreas deben estar alineadas con Dios?", a:"Espíritu, alma y cuerpo" },
      { type:"Todo", visual:"🙏", q:"¿Qué hábito fortalece el espíritu y cuerpo?", a:"Oración diaria" },
      { type:"Todo", visual:"📖", q:"¿Qué debemos leer para fortalecer nuestra vida integral?", a:"La Biblia" },
      { type:"Todo", visual:"💭", q:"¿Qué debemos entregar a Dios de nuestra alma?", a:"Pensamientos negativos y emociones dañinas" },
      { type:"Todo", visual:"🏃", q:"¿Qué refleja cuidado del cuerpo y obediencia?", a:"Hábitos saludables y disciplina" },
      { type:"Todo", visual:"📝", q:"¿Cómo tomar decisiones correctas?", a:"Buscando la guía de Dios" },
      { type:"Todo", visual:"🎵", q:"¿Qué acción diaria fortalece la adoración?", a:"Alabar y cantar con el corazón" },
      { type:"Todo", visual:"🌱", q:"¿Qué significa renovar nuestra mente?", a:"Cambiar pensamientos negativos por principios de Dios" },
      { type:"Todo", visual:"💡", q:"¿Qué actitud refleja un alma alineada?", a:"Esperanza y serenidad" },
      { type:"Todo", visual:"🔥", q:"¿Qué debemos evitar que domine nuestra vida?", a:"Ira, orgullo y envidia" },
      { type:"Todo", visual:"💪", q:"¿Qué demuestra coherencia entre cuerpo y espíritu?", a:"Obedecer a Dios y cuidar hábitos" },
      { type:"Todo", visual:"⏰", q:"¿Cuándo debemos buscar a Dios?", a:"Todos los días" },
      { type:"Todo", visual:"🤲", q:"¿Qué significa entregar nuestra vida?", a:"Confiar y obedecer a Dios" },
      { type:"Todo", visual:"🛡️", q:"¿Qué debemos usar para proteger nuestra alma?", a:"La fe y la verdad de Dios" },
      { type:"Todo", visual:"🤝", q:"¿Qué actitud ayuda a mantener relaciones sanas?", a:"Perdón y comprensión" },
      { type:"Todo", visual:"📱", q:"¿Qué debemos vigilar para el cuerpo y alma?", a:"Uso de redes y entretenimiento" },
      { type:"Todo", visual:"🎯", q:"¿Qué decisiones afectan nuestra integridad?", a:"Hábitos diarios, pensamientos y relaciones" },
      { type:"Todo", visual:"🔑", q:"¿Qué es clave para mantener la vida integral alineada?", a:"Dominio propio y obediencia" }
    ]
  }
];