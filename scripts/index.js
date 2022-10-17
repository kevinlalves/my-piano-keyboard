
const keySoundMap = {
  "q": "../media/audio/key01.mp3",
  "w": "../media/audio/key02.mp3",
  "e": "../media/audio/key03.mp3",
  "r": "../media/audio/key04.mp3",
  "t": "../media/audio/key05.mp3",
  "y": "../media/audio/key06.mp3",
  "u": "../media/audio/key07.mp3",
  "i": "../media/audio/key08.mp3",
  "o": "../media/audio/key09.mp3",
  "p": "../media/audio/key10.mp3",
  "a": "../media/audio/key11.mp3",
  "s": "../media/audio/key12.mp3",
  "d": "../media/audio/key13.mp3",
  "f": "../media/audio/key14.mp3",
  "g": "../media/audio/key15.mp3",
  "h": "../media/audio/key16.mp3",
  "j": "../media/audio/key17.mp3",
  "k": "../media/audio/key18.mp3",
  "l": "../media/audio/key19.mp3",
  "ç": "../media/audio/key20.mp3",
  "z": "../media/audio/key21.mp3",
  "x": "../media/audio/key22.mp3",
  "c": "../media/audio/key23.mp3",
  "v": "../media/audio/key24.mp3",
}

const button = document.getElementById("q");
window.addEventListener("keydown", playSound);
window.addEventListener("keyup", e => {
  const button = document.getElementById(e.key);
  button.classList.remove("playing");
});

function playSound(e) {
  const button = document.getElementById(e.key);
  button.classList.add("playing");
  if (!keySoundMap[e.key]) return;
  const keySound = new Audio(keySoundMap[e.key]);
  keySound.currentTime = 0;
  keySound.play();
}

function buildKeyConfiguration() {
  const piano = document.querySelector(".piano");
  for (const key in keySoundMap) {
    const newElement = document.createElement("div");
    newElement.classList.add("key");
    newElement.id = key;
    newElement.innerHTML = `<p>${key.toUpperCase()}</p>`;
    piano.appendChild(newElement);
  }
}

buildKeyConfiguration();
