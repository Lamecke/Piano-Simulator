const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input");
const keysChecked = document.querySelector(".keys-check input");

let audio = new Audio("/src/tunes/a.wav");
let mapedKeys = [];
const playTune = (key) => {
  audio.src = `/src/tunes/${key}.wav`;
  audio.play();

  const clikedkey = document.querySelector(`[data-key="${key}"]`);
  clikedkey.classList.add("active");

  setTimeout(() => {
    clikedkey.classList.remove("active");
  }, 150);
};
pianoKeys.forEach((key) => {
  key.addEventListener("click", () => playTune(key.dataset.key));
  mapedKeys.push(key.dataset.key);
});

document.addEventListener("keydown", (e) => {
  if (mapedKeys.includes(e.key)) {
    playTune(e.key);
  }
});

const handleVolume = (e) => {
  audio.volume = e.target.value;
};

const showHideKeys =()=>{
pianoKeys.forEach(key =>{
    key.classList.toggle("hide")
})
}
volumeSlider.addEventListener("input", handleVolume);
keysChecked.addEventListener("click", showHideKeys)