const audio = document.querySelector("audio");
const play = document.getElementById("play");
const pre = document.getElementById("pre");
const next = document.getElementById("next");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const image = document.getElementById("image");
const bgimg = document.querySelector(":root");
const progress = document.getElementById("progressBar");
const time = document.getElementById("time");
const totalTime = document.getElementById("totalTime");

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
    title: "Bang Bang",
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
  bgimg.style.setProperty("--bgsrc", "url(" + songData.img + ")");
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

const updateProgress = (e) => {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
  time.textContent = (currentTime / 60).toFixed(2);
  totalTime.textContent = (duration / 60).toFixed(2);
};

//events
play.addEventListener("click", () => {
  isPlaying ? pauseMusic() : playMusic();
});

next.addEventListener("click", nextSong);
pre.addEventListener("click", preSong);

audio.addEventListener("timeupdate", updateProgress);
