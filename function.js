//Function Of Menu Toggle
const menuBtn = document.getElementById("menu-btn");
const menu = document.querySelector(".menu-box");
const closeBtn = document.querySelector(".close-btn");

function menuOpen () {
    menu.classList.add ("open"); }
    menuBtn.addEventListener("click", menuOpen);

function menuClose () {
    menu.classList.remove ("open"); }
    closeBtn.addEventListener("click", menuClose);


let songIndex = 0;

//Music Track Timings
const audio = document.getElementById ("audio-player");
const songCurrentTime = document.querySelector('.current-time');
const songDuration = document.querySelector('.duration');
const progress = document.getElementById('progress');

function audioTimimg (seconds) {
    if (isNaN(seconds)) return "00:00";
    const mins = Math.floor (seconds / 60);
    const secs = Math.floor (seconds % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

audio.addEventListener ('loadedmetadata', () => {
    const duration = audio.duration;
    progress.max - Math.floor (audio.duration);
    songDuration.textContent = audioTimimg (duration);
    progress.value = 0;
})

audio.addEventListener ('timeupdate', () => {
    progress.value = (audio.currentTime / audio.duration) * 100 || 0;
    progress.style.background = `linear-gradient(to right, #5d7088 ${progress.value}%, #e0e1dd ${progress.value}%)`;
    songCurrentTime.textContent = audioTimimg (audio.currentTime);

})

progress.addEventListener ('input', () => {
    const progressTime = (progress.value / 100) * audio.duration;
    audio.currentTime = progressTime;
})


//Menu List
const music1 = document.getElementById ('music1');
const music2 = document.getElementById ('music2');
const music3 = document.getElementById ('music3');
const music4 = document.getElementById ('music4');

music1.addEventListener ('click', () => { 
    loadSongs(0);
    audio.play();
    playPause.classList.remove("fa-play");
    playPause.classList.add("fa-pause");
    playPause.classList.add("paused");
});

music2.addEventListener ('click', () => { 
    loadSongs(1);
    audio.play();
    playPause.classList.remove("fa-play");
    playPause.classList.add("fa-pause");
    playPause.classList.add("paused");
});

music3.addEventListener ('click', () => { 
    loadSongs(2);
    audio.play();
    playPause.classList.remove("fa-play");
    playPause.classList.add("fa-pause");
    playPause.classList.add("paused");
});

music4.addEventListener ('click', () => { 
    loadSongs(3);
    audio.play();
    playPause.classList.remove("fa-play");
    playPause.classList.add("fa-pause");
    playPause.classList.add("paused");
});

//Function Of Listing
const favlist = document.querySelectorAll ('.favlist');

favlist.forEach ( fav => {
fav.addEventListener("click", () => {
if (fav.classList.contains ('fa-regular') && fav.classList.contains ('fa-heart')) {
    fav.classList.remove ('fa-regular');
    fav.classList.add ('fa-solid');
    event.stopPropagation();
}
else {
    fav.classList.add ('fa-regular');
    fav.classList.remove ('fa-solid');
    event.stopPropagation();
}
})
})

//Function Of Play-Pause
const playPause = document.getElementById("play-pause");

playPause.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        playPause.classList.remove("fa-play");
        playPause.classList.add("fa-pause");
        playPause.classList.add("paused");
    }
    else {
        audio.pause();
        playPause.classList.add("fa-play");
        playPause.classList.remove("fa-pause");
        playPause.classList.remove("paused");
    }
})

//List Of Tracks
const songImg = document.getElementById ("song-img");
const songName = document.getElementById ("song-name");

const musicLists = [
    {
    img : 'Saiyaara.png',
    name : 'Saiyaara x Saiyaara',
    music : 'Saiyaara.mp3'
    },

        {
    img : 'Humdum.png',
    name : 'Humdum Unplugged',
    music : 'Humdum Unplugged.mp3'
    },

        {
    img : 'Ek Tarfa.png',
    name : 'Ek Tarfa x Paaro',
    music : 'Ek Tarfa.mp3'
    },

        {
    img : 'Kya Tumhe.png',
    name : 'Kya Tumhe Unplugged',
    music : 'Kya Tumhe.mp3'
    }
]

function loadSongs(index) {
    const song = musicLists[index];
    songImg.src = song.img;
    songName.textContent = song.name;
    audio.play();
    audio.src = song.music;
}
loadSongs(songIndex);


//Function Of Next And Previous Buttons and Autoplaying
const nextBtn = document.getElementById ("next");
const prevBtn = document.getElementById ("backwards");

function nextSong () {
    songIndex = (songIndex + 1) % musicLists.length;
    loadSongs(songIndex);
    audio.play();
    playPause.classList.remove("fa-play");
    playPause.classList.add("fa-pause");
    playPause.classList.add("paused");
}
nextBtn.addEventListener ('click', nextSong);

function prevSong () {
    songIndex = (songIndex - 1 + musicLists.length) % musicLists.length;
    loadSongs(songIndex);
    audio.play();
    playPause.classList.remove("fa-play");
    playPause.classList.add("fa-pause");
    playPause.classList.add("paused");
}
prevBtn.addEventListener ('click', prevSong);

audio.addEventListener ('ended', () => {
    nextSong();

})
