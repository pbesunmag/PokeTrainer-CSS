# Poké-Trainer-CSS

# 🎮 CSS PokéTrainer

> ¡Aprende y domina los selectores de CSS capturando Pokémon en un campo de batalla interactivo!

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![PokeAPI](https://img.shields.io/badge/PokeAPI-EF5350?style=for-the-badge&logo=pokemon&logoColor=white)

---

## 📖 Acerca del Proyecto

**CSS PokéTrainer** es un juego educativo interactivo inspirado en clásicos como *CSS Diner*, diseñado para entrenar y poner a prueba tus habilidades con los selectores de **CSS3**. 

A través de 10 niveles divididos en 4 rangos de dificultad, tendrás que inspeccionar el código HTML del campo de batalla y escribir el selector CSS exacto para apuntar a los Pokémon objetivo y atraparlos.

---

## ✨ Características Principales

- 🎯 **10 Niveles Progresivos**: Desde selectores básicos de tipo hasta pseudo-clases avanzadas (`:nth-child`, `:not`, atributos y combinadores).
- 📻 **PokéNav Radio Integrada**: Reproductor de música flotante con la banda sonora original de Hoenn (*Pokémon Ruby / Sapphire / Emerald*) mediante la API de YouTube IFrame.
- 🔊 **Gritos de Pokémon Interactivos**: Haz clic en cualquier Pokémon del campo de batalla para escuchar su grito característico (vía PokeAPI Cries) con animación de salto.
- ⚡ **Sprites Oficiales y Formas Shiny**: Carga dinámica de sprites animados de 5ª generación y variantes Shiny con efectos de partículas.
- 💻 **Editor CSS en Vivo**: El editor refleja en tiempo real el selector que estás escribiendo en el bloque de reglas CSS.
- 🎨 **Estética Retro y Temática**: Interfaz con temática *Catppuccin*, sombras holográficas en Pokéballs, plataformas de combate clásicas y tipografías retro (`Pixelify Sans` + `Fira Code`).

---

## 🗂 Estructura de Dificultades y Niveles

| Rango | Nivel | Concepto CSS |
| :--- | :--- | :--- |
| **Tutorial** | 1 | Selector de tipo básico (`tag`) |
| **Tutorial** | 2 | Selector por ID (`#id`) |
| **Tutorial** | 3 | Selector por clase (`.class`) |
| **Fácil** | 4 | Selector descendiente directo (`parent > child`) |
| **Fácil** | 5 | Selector hermano adyacente (`prev + next`) |
| **Intermedio** | 6 | Selector por atributo (`[attr="value"]`) |
| **Intermedio** | 7 | Pseudo-clase `:first-child` |
| **Intermedio** | 8 | Pseudo-clase `:nth-child(odd/even)` |
| **Difícil** | 9 | Pseudo-clase de negación `:not()` |
| **Difícil** | 10 | Selector hermano general (`prev ~ next`) |

---

## 📂 Estructura del Repositorio

```text
├── index.html                      # Estructura del juego, visor y PokéNav Radio
├── style.css                       # Estilos globales, animaciones y diseño visual
├── levels.js                       # Definición de niveles, descripciones y objetivos
├── app.js                          # Lógica del juego, API de PokeAPI y reproductor YouTube
├── 180px-Pokenav.gif               # Sprite animado del PokéNav
├── background.jpg                  # Fondo general de la aplicación
└── background_battle_spritte.jpg   # Plataforma de combate Pokémon