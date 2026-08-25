<div align="center">

# ⚡ PokéTrainer CSS ⚡
**Aprende y domina los selectores de CSS a través de desafíos interactivos con temática Pokémon.**

[![Version](https://img.shields.io/badge/version-1.5.0-blue.svg)](https://poke-trainer-css.vercel.app)
[![Vercel](https://img.shields.io/badge/deployed%20on-Vercel-black?logo=vercel)](https://poke-trainer-css.vercel.app)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](#)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](#)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](#)

🎮 **[Jugar Ahora en Vercel](https://poke-trainer-css.vercel.app)**

</div>

---

## 📖 Descripción

**PokéTrainer CSS** es un juego educativo interactivo diseñado para enseñar y reforzar conceptos clave de maquetación y selectores CSS. A través de distintos escenarios y objetivos, los jugadores deben escribir el selector CSS exacto para seleccionar ("atrapar") a los Pokémon correctos en el campo de batalla.

---

## 🗺️ Zonas de Entrenamiento y Dificultades

El juego cuenta con un **Menú Principal interactivo (Lobby)** dividido en 4 zonas temáticas:

| Zona | Dificultad | Conceptos de CSS Aprendidos |
| :--- | :---: | :--- |
| 🏡 **Guardería Pokémon** | `Tutorial` | Selectores de tipo (etiqueta) y selectores por ID (`#starter`). |
| 🌿 **Ruta 1** | `Fácil` | Clases (`.shiny`), combinadores de hijo directo (`>`) y hermanos adyacentes (`+`). |
| 🥋 **Primer Gimnasio** | `Intermedio` | Selectores de atributo (`[type="fire"]`) y pseudo-clases estructurales (`:first-child`, `:nth-child`). |
| 🏆 **Liga Pokémon** | `Difícil` | Pseudo-clases de negación (`:not`) y combinadores de hermano general (`~`). |

---

## ✨ Características Principales

* **⚔️ Campo de Batalla Interactivo:** Sprites 3D animados traídos en tiempo real vía PokeAPI (*Showdown sprites*).
* **🔊 Audio & Efectos Inmersivos:**
  * Gritos oficiales de los Pokémon al hacer clic sobre ellos.
  * Efectos visuales de animación al capturar y destellos *Shiny* para variantes especiales.
* **📻 PokéNav Radio Flotante:**
  * Reproductor de música integrado con la banda sonora oficial de Hoenn (*Pokémon R/S/E*).
  * Marquesina de desplazamiento dinámico para títulos largos.
  * Control de volumen personalizado con Pikachu interactivo.
* **💻 Entorno de Aprendizaje en Vivo:**
  * **HTML Viewer:** Visualizador de la estructura DOM en tiempo real.
  * **CSS Editor:** Editor con previsualización en vivo de la sintaxis escrita.
  * Navegación fluida entre menú principal y niveles con selector desplegable sincronizado.

---

## 🛠️ Tecnologías Utilizadas

* **HTML5 Semantic:** Estructura limpia y accesible.
* **CSS3 Vanilla:** Variables CSS, animaciones (`@keyframes`), diseño adaptable (*Responsive Grid & Flexbox*) y filtros avanzados.
* **JavaScript (ES6+):** Manipulación dinámica del DOM, gestión de estados de la aplicación y peticiones asíncronas (`fetch API`).
* **PokeAPI:** Sprites 3D oficiales y gritos en formato de audio OGG.
* **YouTube IFrame API:** Integración de la lista de reproducción de la radio PokéNav.

---

## 🚀 Despliegue e Instalación Local

### Despliegue en Producción
La aplicación se encuentra desplegada y disponible públicamente en:
👉 **[https://poke-trainer-css.vercel.app](https://poke-trainer-css.vercel.app)**

### Ejecución Local

1. Clona este repositorio en tu máquina:
   ```bash
   git clone [https://github.com/TU-USUARIO/poke-trainer.git](https://github.com/TU-USUARIO/poke-trainer.git)
