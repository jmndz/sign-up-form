const audio = document.querySelector('.music');
const songList = ['./audio/ENHYPEN - Blessed Cursed.mp3',
                  './audio/ENHYPEN - Drunk-Dazed「Audio」.mp3',
                  './audio/ENHYPEN - FEVER「Audio」.mp3',
                  './audio/ENHYPEN - Given-Taken「Audio」.mp3',
                  './audio/ENHYPEN - ParadoXXX Invasion.mp3',
                  './audio/ENHYPEN - Tamed-Dashed「Audio」.mp3',
                  './audio/ENHYPEN (엔하이픈) - Future Perfect (Pass the MIC) 「Audio」.mp3'];
const song = new Audio();
audio.addEventListener('click', playAudio);

function playAudio(){
    const rand = Math.floor(Math.random() * songList.length);
    song.src = songList[rand];
    song.play();
}
