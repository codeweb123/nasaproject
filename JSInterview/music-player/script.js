const image = document.querySelector('img');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const music = document.querySelector('audio');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');

//Music
const songs = [
    {
        name: 'hero',
        displayName: 'Hero',
        artist: 'Mariah Carey',
    },
    {
        name: 'hello',
        displayName: 'Hello',
        artist: 'Adele',
    },
    {
        name: 'iwillalwaysloveyou',
        displayName: 'I will always love you',
        artist: 'Whitney Houston',
    },

    {
        name: 'myheart',
        displayName: 'My heart will go on and on',
        artist: 'Celine Dion',
    }
]

//check if playing
let isPlaying = false;

//play
function playSong() {
    isPlaying = true;
    playBtn.classList.replace('fa-play', 'fa-pause');
    music.play();
}

//Pause
function pauseSong() {
    isPlaying = false;
    playBtn.classList.replace('fa-pause', 'fa-play');
    music.pause();
}

//play or pause event listener
playBtn.addEventListener('click', () => (isPlaying ? pauseSong() : playSong()));

//Update DOM
function loadSong(song) {
    title.textContent = song.displayName;
    artist.textContent = song.artist;
    music.src = `music/${song.name}.mp3`;
    image.src = `img/${song.name}.jpg`;
}

//Current Song
let songIndex = 0;

//previous Song
function prevSong(){
    songIndex--;
    loadSong(songs[songIndex]);
    playSong();
}

//next song
function nextSong(){
    songIndex++;
    loadSong(songs[songIndex]);
    playSong();
}

//On load - select song
loadSong(songs[songIndex]);

//Event Listeners
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);