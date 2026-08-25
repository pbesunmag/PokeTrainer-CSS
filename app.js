let currentLevelIdx = 0;
let levelAttempts = 0;
let totalAttempts = 0;

const battlefield = document.getElementById("battlefield-area");
const htmlCode = document.getElementById("html-code");
const htmlLines = document.getElementById("html-lines");
const levelTitle = document.getElementById("level-title");
const levelDesc = document.getElementById("level-desc");
const difficultyBadge = document.getElementById("difficulty-badge");
const cssInput = document.getElementById("css-input");
const livePreview = document.getElementById("css-live-preview");
const submitBtn = document.getElementById("submit-btn");
const feedback = document.getElementById("feedback");

const levelSelect = document.getElementById("level-select");
const prevLvlBtn = document.getElementById("prev-lvl-btn");
const nextLvlBtn = document.getElementById("next-lvl-btn");

const statLevel = document.getElementById("stat-level");
const statAttempts = document.getElementById("stat-attempts");
const statTotalAttempts = document.getElementById("stat-total-attempts");

const pokeDataCache = {};

function initLevelSelector() {
  levelSelect.innerHTML = "";
  const groups = {};

  levels.forEach((lvl, index) => {
    if (!groups[lvl.difficulty]) {
      groups[lvl.difficulty] = document.createElement("optgroup");
      groups[lvl.difficulty].label = `--- ${lvl.difficulty.toUpperCase()} ---`;
      levelSelect.appendChild(groups[lvl.difficulty]);
    }
    const option = document.createElement("option");
    option.value = index;
    option.textContent = `${index + 1}. ${lvl.title.split(":")[1] || lvl.title}`;
    groups[lvl.difficulty].appendChild(option);
  });
}

function updateStats() {
  statLevel.textContent = `${currentLevelIdx + 1}/${levels.length}`;
  statAttempts.textContent = levelAttempts;
  statTotalAttempts.textContent = totalAttempts;
  levelSelect.value = currentLevelIdx;
}

function playPokemonCry(pokeIdOrName) {
  const cryAudio = new Audio(`https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/${pokeIdOrName.toLowerCase()}.ogg`);
  cryAudio.volume = 0.25;
  cryAudio.play().catch(err => console.warn("Error reproduciendo el grito:", err));
}

async function enrichPokemonData(pokeElement) {
  const tagName = pokeElement.tagName.toLowerCase();
  const pokedexAttr = pokeElement.getAttribute("pokedex");
  const identifier = pokedexAttr || (tagName !== "pokemon" ? tagName : "25");
  const isShiny = pokeElement.classList.contains("shiny") || pokeElement.hasAttribute("shiny");

  try {
    let data = pokeDataCache[identifier];

    if (!data) {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${identifier.toLowerCase()}`);
      if (!response.ok) throw new Error("Pokémon no encontrado");
      data = await response.json();
      pokeDataCache[identifier] = data;
    }

    const showdownSprites = data.sprites?.other?.showdown;
    const spriteUrl = isShiny
      ? (showdownSprites?.front_shiny || data.sprites?.front_shiny)
      : (showdownSprites?.front_default || data.sprites?.front_default);

    pokeElement.style.backgroundImage = `url('${spriteUrl}')`;

    pokeElement.onclick = (e) => {
      e.stopPropagation();
      playPokemonCry(data.id.toString());
      pokeElement.classList.remove("cry-anim");
      void pokeElement.offsetWidth;
      pokeElement.classList.add("cry-anim");
    };

    pokeElement.addEventListener("animationend", (e) => {
      if (e.animationName === "cryHop" || e.animationName === "poke-cry") {
        pokeElement.classList.remove("cry-anim");
      }
    });

  } catch (error) {
    console.error(`Error cargando sprite 3D para ${identifier}:`, error);
    const fallbackBase = isShiny ? "shiny/" : "";
    pokeElement.style.backgroundImage = `url('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${fallbackBase}${identifier}.gif')`;
  }
}

async function loadLevel(idx) {
  currentLevelIdx = idx;
  const lvl = levels[currentLevelIdx];
  levelAttempts = 0;
  updateStats();

  difficultyBadge.textContent = lvl.difficulty;
  difficultyBadge.className = `badge badge-${lvl.difficulty.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`;
  levelTitle.textContent = lvl.title;
  levelDesc.textContent = lvl.desc;

  battlefield.innerHTML = lvl.html;
  htmlCode.textContent = lvl.html;

  const lineCount = lvl.html.split('\n').length;
  htmlLines.innerHTML = Array.from({ length: lineCount }, (_, i) => `<div>${i + 1}</div>`).join('');

  feedback.textContent = "";
  feedback.className = "";
  cssInput.value = "";

  livePreview.textContent = "/* Escribe tu selector */";
  livePreview.style.color = "#7dcfff";
  livePreview.style.fontStyle = "italic";

  const pokemons = Array.from(battlefield.querySelectorAll("pokemon, pikachu, charmander, bulbasaur, squirtle, eevee, snorlax, gengar, gyarados, magikarp, charizard, pidgey, rattata"));
  await Promise.all(pokemons.map(poke => enrichPokemonData(poke)));

  const targets = battlefield.querySelectorAll(lvl.targetSelector);
  targets.forEach(el => el.classList.add("target-bounce"));
}

function triggerShake() {
  battlefield.classList.remove("shake");
  void battlefield.offsetWidth;
  battlefield.classList.add("shake");
}

function checkAnswer() {
  const userInput = cssInput.value.trim();
  if (!userInput) return;

  levelAttempts++;
  totalAttempts++;
  updateStats();

  try {
    const userMatches = Array.from(battlefield.querySelectorAll(userInput));
    const targetMatches = Array.from(battlefield.querySelectorAll(levels[currentLevelIdx].targetSelector));

    const isCorrect = userMatches.length === targetMatches.length &&
                      userMatches.length > 0 &&
                      userMatches.every((el) => targetMatches.includes(el));

    if (isCorrect) {
      targetMatches.forEach(el => {
        el.classList.remove("target-bounce");
        el.classList.add("captured");
      });

      feedback.textContent = "¡Captura completada!";
      feedback.className = "success";

      setTimeout(() => {
        if (currentLevelIdx + 1 < levels.length) {
          loadLevel(currentLevelIdx + 1);
        } else {
          difficultyBadge.style.display = "none";
          levelTitle.textContent = "¡Maestro Pokémon del CSS!";
          levelDesc.textContent = `Has completado las 4 dificultades con un total de ${totalAttempts} intentos.`;
          battlefield.innerHTML = '<pokemon pokedex="150" class="target-bounce"></pokemon>';
          enrichPokemonData(battlefield.querySelector("pokemon"));
          htmlCode.textContent = "/* ¡Juego terminado con éxito! */";
        }
      }, 800);
    } else {
      triggerShake();
      feedback.textContent = "Objetivo incorrecto. Revisa el selector.";
      feedback.className = "error";
    }
  } catch (err) {
    triggerShake();
    feedback.textContent = "Sintaxis CSS no válida.";
    feedback.className = "error";
  }
}

submitBtn.addEventListener("click", checkAnswer);

cssInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") checkAnswer();
});

cssInput.addEventListener("input", (e) => {
  const val = e.target.value;
  if (val.length > 0) {
    livePreview.textContent = val;
    livePreview.style.color = "#f9e2af";
    livePreview.style.fontStyle = "normal";
  } else {
    livePreview.textContent = "/* Escribe tu selector */";
    livePreview.style.color = "#7dcfff";
    livePreview.style.fontStyle = "italic";
  }
});

levelSelect.addEventListener("change", (e) => {
  loadLevel(parseInt(e.target.value, 10));
});

prevLvlBtn.addEventListener("click", () => {
  if (currentLevelIdx > 0) loadLevel(currentLevelIdx - 1);
});

nextLvlBtn.addEventListener("click", () => {
  if (currentLevelIdx < levels.length - 1) loadLevel(currentLevelIdx + 1);
});

/* ===================================================
   REPRODUCTOR POKÉNAV (YOUTUBE PLAYLIST HOENN)
   =================================================== */
const PLAYLIST_ID = "PL2uxd6YWj7PIOlswxbt16G63Klr_3lsbR";

let ytPlayer = null;
let isRadioPlaying = false;

const radioTrackTitle = document.getElementById("radio-track-title");
const radioPlayBtn = document.getElementById("radio-play-btn");
const radioPrevBtn = document.getElementById("radio-prev-btn");
const radioNextBtn = document.getElementById("radio-next-btn");
const radioVolume = document.getElementById("radio-volume");

window.onYouTubeIframeAPIReady = function () {
  ytPlayer = new YT.Player("yt-player", {
    height: "200",
    width: "200",
    playerVars: {
      listType: "playlist",
      list: PLAYLIST_ID,
      autoplay: 0,
      controls: 0
    },
    events: {
      onReady: (event) => {
        event.target.setVolume(parseInt(radioVolume.value, 10));
        radioTrackTitle.textContent = "PokéNav Listo (Hoenn OST)";
      },
      onStateChange: (event) => {
        if (event.data === YT.PlayerState.PLAYING) {
          isRadioPlaying = true;
          radioPlayBtn.textContent = "⏸";
          const videoData = ytPlayer.getVideoData();
          if (videoData && videoData.title) {
            radioTrackTitle.textContent = videoData.title.replace(" - Pokémon Ruby/Sapphire/Emerald Soundtrack", "");
          }
        } else if (event.data === YT.PlayerState.PAUSED || event.data === YT.PlayerState.ENDED) {
          isRadioPlaying = false;
          radioPlayBtn.textContent = "▶";
        }
      }
    }
  });
};

radioPlayBtn.addEventListener("click", () => {
  if (!ytPlayer || typeof ytPlayer.playVideo !== "function") return;
  if (isRadioPlaying) {
    ytPlayer.pauseVideo();
  } else {
    ytPlayer.playVideo();
  }
});

radioPrevBtn.addEventListener("click", () => {
  if (ytPlayer && typeof ytPlayer.previousVideo === "function") {
    ytPlayer.previousVideo();
  }
});

radioNextBtn.addEventListener("click", () => {
  if (ytPlayer && typeof ytPlayer.nextVideo === "function") {
    ytPlayer.nextVideo();
  }
});

function updateVolumeTrack(val) {
  if (val === 0) {
    radioVolume.style.setProperty('--vol-percent', '0%');
    return;
  }
  const thumbWidth = 38;
  const trackWidth = radioVolume.offsetWidth || 140;
  const currentPos = (val / 100) * (trackWidth - thumbWidth) + (thumbWidth * 0.45);
  const realPercent = Math.min(100, Math.max(0, (currentPos / trackWidth) * 100));

  radioVolume.style.setProperty('--vol-percent', `${realPercent}%`);
}

radioVolume.addEventListener("input", (e) => {
  const val = parseInt(e.target.value, 10);
  updateVolumeTrack(val);
  if (ytPlayer && typeof ytPlayer.setVolume === "function") {
    ytPlayer.setVolume(val);
  }
});

initLevelSelector();
loadLevel(0);
updateVolumeTrack(radioVolume.value);