const GAME_DATA = [
  {
    id: "bible_tv_show",
    title: "🔥 Desafío Bíblico: Batalla de Conocimiento 🔥",
    match: "Gran Duelo Bíblico",
    defaultTeams: ["Equipo Rojo", "Equipo Azul"],
    topics: ["Biblia"],

    rounds: [

      {
        name: "🎬 Ronda 1 - Fundamentos Bíblicos",
        questions: [
          { type:"Biblia", visual:"📖", q:"¿Cuántos libros tiene la Biblia?", a:"66" },
          { type:"Biblia", visual:"📖", q:"¿Cuál es el primer libro de la Biblia?", a:"Génesis" },
          { type:"Biblia", visual:"📖", q:"¿Cuál es el último libro de la Biblia?", a:"Apocalipsis" },
          { type:"Biblia", visual:"📖", q:"¿Quién construyó el arca?", a:"Noé" },
          { type:"Biblia", visual:"📖", q:"¿Quién fue tragado por un gran pez?", a:"Jonás" },

          { type:"Biblia", visual:"📖", q:"¿Quién derrotó a Goliat?", a:"David" },
          { type:"Biblia", visual:"📖", q:"¿Quién recibió los Diez Mandamientos?", a:"Moisés" },
          { type:"Biblia", visual:"📖", q:"¿Cuántos discípulos tuvo Jesús?", a:"12" },
          { type:"Biblia", visual:"📖", q:"¿Dónde nació Jesús?", a:"Belén" },
          { type:"Biblia", visual:"📖", q:"¿Quién bautizó a Jesús?", a:"Juan el Bautista" },

          { type:"Biblia", visual:"📖", q:"¿Quién fue el hombre más sabio?", a:"Salomón" },
          { type:"Biblia", visual:"📖", q:"¿Quién fue el hombre más fuerte?", a:"Sansón" },
          { type:"Biblia", visual:"📖", q:"¿Quién interpretó los sueños del faraón?", a:"José" },
          { type:"Biblia", visual:"📖", q:"¿Quién negó a Jesús tres veces?", a:"Pedro" },
          { type:"Biblia", visual:"📖", q:"¿Quién traicionó a Jesús?", a:"Judas Iscariote" },

          { type:"Biblia", visual:"📖", q:"¿Qué mar abrió Dios?", a:"Mar Rojo" },
          { type:"Biblia", visual:"📖", q:"¿Quién subió al cielo en carro de fuego?", a:"Elías" },
          { type:"Biblia", visual:"📖", q:"¿Quién escribió la mayoría de epístolas?", a:"Pablo" },
          { type:"Biblia", visual:"📖", q:"¿Quién fue la primera mujer?", a:"Eva" },
          { type:"Biblia", visual:"📖", q:"¿Quién fue el primer hombre?", a:"Adán" },

          { type:"Biblia", visual:"📖", q:"¿Quién soñó con una escalera al cielo?", a:"Jacob" },
          { type:"Biblia", visual:"📖", q:"¿Quién fue el primer rey de Israel?", a:"Saúl" },
          { type:"Biblia", visual:"📖", q:"¿Quién escribió los Salmos?", a:"David" },
          { type:"Biblia", visual:"📖", q:"¿Qué profeta llorón existe?", a:"Jeremías" },
          { type:"Biblia", visual:"📖", q:"¿Quién recibió la ley en el Sinaí?", a:"Moisés" }
        ]
      },

      {
        name: "🎬 Ronda 2 - Milagros de Jesús",
        questions: [
          { type:"Biblia", visual:"✨", q:"¿Cuántos días ayunó Jesús en el desierto?", a:"40 días" },
          { type:"Biblia", visual:"✨", q:"¿Quién fue levantado después de 4 días muerto?", a:"Lázaro" },
          { type:"Biblia", visual:"✨", q:"¿Cuántos panes y peces multiplicó Jesús?", a:"5 panes y 2 peces" },
          { type:"Biblia", visual:"✨", q:"¿En qué río fue bautizado Jesús?", a:"Jordán" },
          { type:"Biblia", visual:"✨", q:"¿Quién caminó sobre el agua con Jesús?", a:"Pedro" },

          { type:"Biblia", visual:"✨", q:"¿Qué discípulo dudó hasta ver a Jesús?", a:"Tomás" },
          { type:"Biblia", visual:"✨", q:"¿Quién escribió el Apocalipsis?", a:"Juan" },
          { type:"Biblia", visual:"✨", q:"¿Qué ciudad visitó Pablo al convertirse?", a:"Damasco" },
          { type:"Biblia", visual:"✨", q:"¿Quién cayó de un tercer piso predicando Pablo?", a:"Eutico" },
          { type:"Biblia", visual:"✨", q:"¿Qué iglesia fue llamada tibia?", a:"Laodicea" },

          { type:"Biblia", visual:"✨", q:"¿Quién interpretó la escritura en la pared?", a:"Daniel" },
          { type:"Biblia", visual:"✨", q:"¿Quién reemplazó a Judas?", a:"Matías" },
          { type:"Biblia", visual:"✨", q:"¿Quién escondió espías en Jericó?", a:"Rahab" },
          { type:"Biblia", visual:"✨", q:"¿Quién fue padre de Juan el Bautista?", a:"Zacarías" },
          { type:"Biblia", visual:"✨", q:"¿Quién escribió el evangelio médico?", a:"Lucas" },

          { type:"Biblia", visual:"✨", q:"¿Quién vio valle de huesos secos?", a:"Ezequiel" },
          { type:"Biblia", visual:"✨", q:"¿Quién luchó con un ángel?", a:"Jacob" },
          { type:"Biblia", visual:"✨", q:"¿Quién fue juez mujer en Israel?", a:"Débora" },
          { type:"Biblia", visual:"✨", q:"¿Quién fue alimentado por cuervos?", a:"Elías" },
          { type:"Biblia", visual:"✨", q:"¿Quién fue bisabuela de David?", a:"Rut" },

          { type:"Biblia", visual:"✨", q:"¿Quién fue sumo sacerdote en la crucifixión?", a:"Caifás" },
          { type:"Biblia", visual:"✨", q:"¿Quién era discípulo amado?", a:"Juan" },
          { type:"Biblia", visual:"✨", q:"¿Quién era hermano de Pedro?", a:"Andrés" },
          { type:"Biblia", visual:"✨", q:"¿Quién dijo 'heme aquí envíame'?", a:"Isaías" },
          { type:"Biblia", visual:"✨", q:"¿Quién pidió sabiduría a Dios?", a:"Salomón" }
        ]
      }

      {
  name: "🎬 Ronda 3 - Personajes y Eventos",
  questions: [
    { type:"Biblia", visual:"📖", q:"¿Quién construyó el arca?", a:"Noé" },
    { type:"Biblia", visual:"📖", q:"¿Quién fue tragado por un gran pez?", a:"Jonás" },
    { type:"Biblia", visual:"📖", q:"¿Quién derrotó a Goliat?", a:"David" },
    { type:"Biblia", visual:"📖", q:"¿Quién fue el primer rey de Israel?", a:"Saúl" },
    { type:"Biblia", visual:"📖", q:"¿Quién fue el sucesor de Moisés?", a:"Josué" },

    { type:"Biblia", visual:"📖", q:"¿Quién recibió los Diez Mandamientos?", a:"Moisés" },
    { type:"Biblia", visual:"📖", q:"¿Quién interpretó sueños en Egipto?", a:"José" },
    { type:"Biblia", visual:"📖", q:"¿Quién fue vendido por sus hermanos?", a:"José" },
    { type:"Biblia", visual:"📖", q:"¿Quién soñó con una escalera al cielo?", a:"Jacob" },
    { type:"Biblia", visual:"📖", q:"¿Quién luchó con un ángel?", a:"Jacob" },

    { type:"Biblia", visual:"📖", q:"¿Quién fue padre de Isaac?", a:"Abraham" },
    { type:"Biblia", visual:"📖", q:"¿Quién fue esposa de Abraham?", a:"Sara" },
    { type:"Biblia", visual:"📖", q:"¿Quién fue hijo de Abraham prometido?", a:"Isaac" },
    { type:"Biblia", visual:"📖", q:"¿Quién fue madre de Jesús?", a:"María" },
    { type:"Biblia", visual:"📖", q:"¿Quién fue padre terrenal de Jesús?", a:"José" },

    { type:"Biblia", visual:"📖", q:"¿Quién negó a Jesús tres veces?", a:"Pedro" },
    { type:"Biblia", visual:"📖", q:"¿Quién traicionó a Jesús?", a:"Judas Iscariote" },
    { type:"Biblia", visual:"📖", q:"¿Quién caminó sobre el agua?", a:"Pedro" },
    { type:"Biblia", visual:"📖", q:"¿Quién dudó de la resurrección?", a:"Tomás" },
    { type:"Biblia", visual:"📖", q:"¿Quién escribió la mayoría de cartas del NT?", a:"Pablo" },

    { type:"Biblia", visual:"📖", q:"¿Quién fue el primer mártir cristiano?", a:"Esteban" },
    { type:"Biblia", visual:"📖", q:"¿Quién escribió Apocalipsis?", a:"Juan" },
    { type:"Biblia", visual:"📖", q:"¿Qué discípulo era cobrador de impuestos?", a:"Mateo" },
    { type:"Biblia", visual:"📖", q:"¿Quién fue hermano de Pedro?", a:"Andrés" },
    { type:"Biblia", visual:"📖", q:"¿Quién fue el discípulo amado?", a:"Juan" }
  ]
}   {
  name: "🎬 Ronda 4 - Milagros y Poder",
  questions: [
    { type:"Biblia", visual:"✨", q:"¿Cuántos días ayunó Jesús?", a:"40 días" },
    { type:"Biblia", visual:"✨", q:"¿Cuántos panes y peces multiplicó Jesús?", a:"5 panes y 2 peces" },
    { type:"Biblia", visual:"✨", q:"¿Quién fue resucitado tras 4 días?", a:"Lázaro" },
    { type:"Biblia", visual:"✨", q:"¿En qué río fue bautizado Jesús?", a:"Jordán" },
    { type:"Biblia", visual:"✨", q:"¿Quién convirtió el agua en vino?", a:"Jesús" },

    { type:"Biblia", visual:"✨", q:"¿Quién abrió el Mar Rojo?", a:"Dios por medio de Moisés" },
    { type:"Biblia", visual:"✨", q:"¿Qué ciudad cayó con trompetas?", a:"Jericó" },
    { type:"Biblia", visual:"✨", q:"¿Quién fue alimentado por cuervos?", a:"Elías" },
    { type:"Biblia", visual:"✨", q:"¿Quién cayó del cielo en carro de fuego?", a:"Elías" },
    { type:"Biblia", visual:"✨", q:"¿Quién vio huesos secos cobrar vida?", a:"Ezequiel" },

    { type:"Biblia", visual:"✨", q:"¿Quién fue lanzado al foso de leones?", a:"Daniel" },
    { type:"Biblia", visual:"✨", q:"¿Quién sobrevivió horno de fuego?", a:"Sadrac, Mesac y Abed-nego" },
    { type:"Biblia", visual:"✨", q:"¿Quién interpretó sueños del faraón?", a:"José" },
    { type:"Biblia", visual:"✨", q:"¿Quién cayó de un tercer piso mientras Pablo predicaba?", a:"Eutico" },
    { type:"Biblia", visual:"✨", q:"¿Quién fue el médico evangelista?", a:"Lucas" },

    { type:"Biblia", visual:"✨", q:"¿Quién reemplazó a Judas?", a:"Matías" },
    { type:"Biblia", visual:"✨", q:"¿Quién vio escritura en la pared?", a:"Daniel" },
    { type:"Biblia", visual:"✨", q:"¿Quién escondió espías en Jericó?", a:"Rahab" },
    { type:"Biblia", visual:"✨", q:"¿Quién fue juez mujer de Israel?", a:"Débora" },
    { type:"Biblia", visual:"✨", q:"¿Quién fue bisabuela del rey David?", a:"Rut" },

    { type:"Biblia", visual:"✨", q:"¿Quién fue sumo sacerdote en la crucifixión?", a:"Caifás" },
    { type:"Biblia", visual:"✨", q:"¿Quién pidió sabiduría a Dios?", a:"Salomón" },
    { type:"Biblia", visual:"✨", q:"¿Quién dijo 'heme aquí'?", a:"Isaías" },
    { type:"Biblia", visual:"✨", q:"¿Quién fue alimentado por cuervos?", a:"Elías" },
    { type:"Biblia", visual:"✨", q:"¿Quién fue rey más sabio?", a:"Salomón" }
  ]
}    {
  name: "🎬 Ronda 5 - Reino y Profetas",
  questions: [
    { type:"Biblia", visual:"👑", q:"¿Quién fue el hombre más sabio?", a:"Salomón" },
    { type:"Biblia", visual:"👑", q:"¿Quién fue el rey más joven?", a:"Josías" },
    { type:"Biblia", visual:"👑", q:"¿Quién fue el primer rey de Israel?", a:"Saúl" },
    { type:"Biblia", visual:"👑", q:"¿Quién ungió a David?", a:"Samuel" },
    { type:"Biblia", visual:"👑", q:"¿Quién fue profeta llorón?", a:"Jeremías" },

    { type:"Biblia", visual:"👑", q:"¿Quién vio valle de huesos secos?", a:"Ezequiel" },
    { type:"Biblia", visual:"👑", q:"¿Quién desafió a profetas de Baal?", a:"Elías" },
    { type:"Biblia", visual:"👑", q:"¿Quién fue llevado a Babilonia joven?", a:"Daniel" },
    { type:"Biblia", visual:"👑", q:"¿Quién fue alimentado por cuervos?", a:"Elías" },
    { type:"Biblia", visual:"👑", q:"¿Quién interpretó escritura en la pared?", a:"Daniel" },

    { type:"Biblia", visual:"👑", q:"¿Quién encontró la ley en tiempos de Josías?", a:"Hilcías" },
    { type:"Biblia", visual:"👑", q:"¿Quién se rebeló contra Moisés?", a:"Coré" },
    { type:"Biblia", visual:"👑", q:"¿Quién abrió el Mar Rojo?", a:"Moisés" },
    { type:"Biblia", visual:"👑", q:"¿Quién sucedió a Moisés?", a:"Josué" },
    { type:"Biblia", visual:"👑", q:"¿Quién recibió la ley en el Sinaí?", a:"Moisés" },

    { type:"Biblia", visual:"👑", q:"¿Quién fue madre de Jesús?", a:"María" },
    { type:"Biblia", visual:"👑", q:"¿Quién fue padre terrenal de Jesús?", a:"José" },
    { type:"Biblia", visual:"👑", q:"¿Quién fue discípulo que negó a Jesús?", a:"Pedro" },
    { type:"Biblia", visual:"👑", q:"¿Quién dudó de la resurrección?", a:"Tomás" },
    { type:"Biblia", visual:"👑", q:"¿Quién escribió Apocalipsis?", a:"Juan" },

    { type:"Biblia", visual:"👑", q:"¿Quién fue cobrador de impuestos?", a:"Mateo" },
    { type:"Biblia", visual:"👑", q:"¿Quién era hermano de Pedro?", a:"Andrés" },
    { type:"Biblia", visual:"👑", q:"¿Quién escribió epístolas?", a:"Pablo" },
    { type:"Biblia", visual:"👑", q:"¿Quién fue el primer mártir?", a:"Esteban" },
    { type:"Biblia", visual:"👑", q:"¿Quién convirtió agua en vino?", a:"Jesús" }
  ]
}      // 🔥 (aquí siguen Ronda 3, 4, 5, 6 — ya listo para completar 150)
    ]
  }
];
