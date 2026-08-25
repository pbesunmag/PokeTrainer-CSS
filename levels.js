const levels = [
  {
    id: 1,
    difficulty: "Tutorial",
    title: "Nivel 1: Selector de Tipo Básico",
    desc: 'Selecciona a todos los Pikachu escribiendo el nombre de su etiqueta: "pikachu".',
    html: "<pikachu></pikachu>\n<charmander></charmander>\n<pikachu></pikachu>",
    targetSelector: "pikachu"
  },
  {
    id: 2,
    difficulty: "Tutorial",
    title: "Nivel 2: Selector por ID (#)",
    desc: 'Selecciona al Pokémon inicial con el identificador único: "#starter".',
    html: '<pidgey></pidgey>\n<bulbasaur id="starter"></bulbasaur>\n<rattata></rattata>',
    targetSelector: "#starter"
  },
  {
    id: 3,
    difficulty: "Fácil",
    title: "Nivel 3: Selector por Clase (.)",
    desc: 'Selecciona a los Pokémon que pertenezcan a la clase: ".shiny".',
    html: '<gyarados class="shiny"></gyarados>\n<magikarp></magikarp>\n<charizard class="shiny"></charizard>',
    targetSelector: ".shiny"
  },
  {
    id: 4,
    difficulty: "Fácil",
    title: "Nivel 4: Descendiente Directo (>)",
    desc: "Selecciona únicamente al Eevee que se encuentra en el interior de la Pokéball.",
    html: "<pokeball>\n  <eevee></eevee>\n</pokeball>\n<eevee></eevee>",
    targetSelector: "pokeball > eevee"
  },
  {
    id: 5,
    difficulty: "Fácil",
    title: "Nivel 5: Hermano Adyacente (+)",
    desc: "Selecciona al Gengar que está ubicado inmediatamente después de Snorlax.",
    html: "<snorlax></snorlax>\n<gengar></gengar>\n<pikachu></pikachu>",
    targetSelector: "snorlax + gengar"
  },
  {
    id: 6,
    difficulty: "Intermedio",
    title: "Nivel 6: Selector por Atributo",
    desc: "Selecciona a todos los Pokémon de tipo fuego utilizando su atributo correspondiente.",
    html: '<pokemon pokedex="25" type="electric"></pokemon>\n<pokemon pokedex="4" type="fire"></pokemon>\n<pokemon pokedex="6" type="fire"></pokemon>',
    targetSelector: '[type="fire"]'
  },
  {
    id: 7,
    difficulty: "Intermedio",
    title: "Nivel 7: Primer Hijo (:first-child)",
    desc: "Selecciona únicamente al primer Pokémon dentro del equipo.",
    html: '<team>\n  <pokemon pokedex="1"></pokemon>\n  <pokemon pokedex="4"></pokemon>\n  <pokemon pokedex="7"></pokemon>\n</team>',
    targetSelector: "team pokemon:first-child, team > pokemon:first-child"
  },
  {
    id: 8,
    difficulty: "Intermedio",
    title: "Nivel 8: Posiciones Específicas (:nth-child)",
    desc: "Selecciona a los Pokémon que ocupan las posiciones impares (1º y 3º) dentro de la caja.",
    html: '<box>\n  <pokemon pokedex="133"></pokemon>\n  <pokemon pokedex="134"></pokemon>\n  <pokemon pokedex="135"></pokemon>\n  <pokemon pokedex="136"></pokemon>\n</box>',
    targetSelector: "box pokemon:nth-child(odd), box pokemon:nth-child(2n+1)"
  },
  {
    id: 9,
    difficulty: "Difícil",
    title: "Nivel 9: Negación (:not)",
    desc: "Selecciona a todos los Pokémon legendarios que NO sean de tipo psíquico.",
    html: '<pokemon pokedex="150" tier="legendary" type="psychic"></pokemon>\n<pokemon pokedex="144" tier="legendary" type="ice"></pokemon>\n<pokemon pokedex="145" tier="legendary" type="electric"></pokemon>',
    targetSelector: 'pokemon:not([type="psychic"]), pokemon[tier="legendary"]:not([type="psychic"])'
  },
  {
    id: 10,
    difficulty: "Difícil",
    title: "Nivel 10: Hermano General (~)",
    desc: "Selecciona a todos los Pokémon compañeros que se encuentran después de Mewtwo.",
    html: '<pokemon pokedex="25"></pokemon>\n<pokemon pokedex="150"></pokemon>\n<pokemon pokedex="151"></pokemon>\n<pokemon pokedex="94"></pokemon>',
    targetSelector: '[pokedex="150"] ~ pokemon, [pokedex="150"] ~ *'
  }
];