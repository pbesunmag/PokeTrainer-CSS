# ⚡ PokéTrainer CSS 🎮

[![Version](https://img.shields.io/badge/version-1.5.1-blue.svg)](https://poke-trainer-css.vercel.app)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/es/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/es/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/es/docs/Web/JavaScript)
[![Vercel](https://img.shields.io/badge/Deployment-Vercel-000000?style=flat&logo=vercel&logoColor=white)](https://poke-trainer-css.vercel.app)

**PokéTrainer CSS** es una plataforma interactiva gamificada creada para aprender y dominar selectores CSS a través de desafíos de captura Pokémon en un entorno visual inmersivo.

---

## 🚀 Novedades de la Versión v1.5.1

* **✨ Pokémon del Día:** Tarjeta interactiva en el menú principal con rotación matemática cíclica diaria (1 a 1025) sin repeticiones, sprite 3D animado y enlace directo a la enciclopedia **WikiDex**.
* **📻 PokéNav Radio Lateral:** Reproductor de música de la región de Hoenn mediante YouTube IFrame API, integrado en un panel retráctil desplegable anclado al margen lateral izquierdo.
* **📱 Optimización Móvil Completa:**
  * Cabecera adaptativa en 2 niveles para evitar cortes de texto en selectores y pseudoclases.
  * Calibración de la arena de batalla, suelo pixel-art y tamaños proporcionales de Pokéballs y sprites.
  * Flujo vertical natural del banner en pantallas táctiles pequeñas.
* **✨ Persistencia Shiny:** Conservación total del aura y destellos dorados durante la interacción y reproducción de gritos de combate.

---

## 🗺️ Zonas de Entrenamiento

* **👶 Guardería Pokémon (Tutorial):** Fundamentos iniciales, selectores de tipo (etiqueta) e identificadores (`#id`).
* **🌲 Ruta 1 (Fácil):** Clases (`.clase`), descendientes directos (`>`), hermanos adyacentes (`+`) y selectores universales (`*`).
* **🏛️ Primer Gimnasio (Intermedio):** Selectores de atributo (`[tipo="fuego"]`), pseudoclases estructurales (`:first-child`, `:last-child`, `:nth-child()`, `:only-child`).
* **🏆 Liga Pokémon (Difícil):** Selectores avanzados de negación (`:not()`), pseudoclases por tipo (`:first-of-type`, `:nth-of-type()`) y hermano general (`~`).

---

## 🛠️ Tecnologías y Recursos Utilizados

* **Frontend:** HTML5 Semántico, CSS3 moderno (Flexbox, CSS Grid, animaciones `@keyframes`, variables personalizadas) y JavaScript Vanilla (ES6+).
* **APIs & Assets:**
  * [PokeAPI](https://pokeapi.co/): Sprites animados Showdown 3D y gritos oficiales de cada especie en formato `.ogg`.
  * [YouTube IFrame Player API](https://developers.google.com/youtube/iframe_api_reference): Banda sonora original de Hoenn en segundo plano.
  * [WikiDex](https://www.wikidex.net/): Enlaces dinámicos a las entradas de cada Pokémon diario.

---

## 💻 Instalación y Ejecución Local

1. Clona el repositorio en tu máquina:
   ```bash
   git clone [https://github.com/tu-usuario/poke-trainer-css.git](https://github.com/tu-usuario/poke-trainer-css.git)
