const audio = document.querySelector("audio");
const play = document.getElementById("play");
const pre = document.getElementById("pre");
const next = document.getElementById("next");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const image = document.getElementById("image");

// song data
const songData = [
  {
    name: "baby",
    title: "Baby",
    artist: "Justin Beiber",
    img: "./images/justin.jpg",
  },
  {
    name: "bang",
    title: "Bang Band",
    artist: "Dua Lipa",
    img: "./images/dua-1.jpg",
  },
  {
    name: "levi",
    title: "Levitating",
    artist: "Dua Lipa",
    img: "./images/dua-2.jpg",
  },
];

isPlaying = false;
//play pause music
const pauseMusic = () => {
  audio.pause();
  isPlaying = false;
  play.classList.replace("fa-pause", "fa-play");
};
const playMusic = () => {
  audio.play();
  isPlaying = true;
  play.classList.replace("fa-play", "fa-pause");
};

//handling song change
const loadSong = (songData) => {
  title.textContent = songData.title;
  artist.textContent = songData.artist;
  image.src = songData.img;
  audio.src = "./songs/" + songData.name + ".mp3";
};
songIndex = 0;
loadSong(songData[0]);

const nextSong = () => {
  songIndex = (songIndex + 1) % songData.length;
  loadSong(songData[songIndex]);
  playMusic();
};
const preSong = () => {
  songIndex = (songIndex - 1 + songData.length) % songData.length;
  loadSong(songData[songIndex]);
  playMusic();
};

//events
play.addEventListener("click", () => {
  isPlaying ? pauseMusic() : playMusic();
});

next.addEventListener("click", nextSong);
pre.addEventListener("click", preSong);
