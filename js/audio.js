const audioContainer = document.getElementById("audioContainer");

audioContainer.innerHTML += 
    `<audio id="background-music" loop>
        <source src="./Assets/BackgroundMusic.mp3" type="audio/mp3">
    </audio>

    <div id="volume-control" class="volume-control">
        <input type="range" id="volume-slider" class="volume-slider" min="0" max="1" step="0.01" value="1">
        <button id="mute-btn" class="btn btn-mute">🔇</button>
    </div>`;
    
const music = document.getElementById('background-music');
const muteBtn = document.getElementById('mute-btn');
const volumeSlider = document.getElementById('volume-slider');

document.body.addEventListener('click', () => {
    muteBtn.textContent = '🔊';
    
    if (music.paused) {
        music.play().catch((error) => console.error('Error playing music:', error));
    }
}, { once: true });

// Mute/Unmute
muteBtn.addEventListener('click', () => {
    if (music.muted) {
        music.muted = false;
        muteBtn.textContent = '🔊';
    } else {
        music.muted = true;
        muteBtn.textContent = '🔇';
    }
});

volumeSlider.addEventListener('input', (event) => {
    music.volume = event.target.value;
});