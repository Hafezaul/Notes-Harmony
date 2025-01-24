// Select all play-pause buttons and audio elements
const playPauseButtons = document.querySelectorAll('.play-pause');
const audios = document.querySelectorAll('.audio');

// Loop through all buttons and attach event listeners
playPauseButtons.forEach((button, index) => {
    const audio = audios[index]; // Get the corresponding audio element

    button.addEventListener('click', () => {
        // Pause all other audio elements first
        audios.forEach((otherAudio, otherIndex) => {
            if (otherIndex !== index) {
                otherAudio.pause();
                playPauseButtons[otherIndex].textContent = 'Play';
            }
        });

        // Toggle play/pause for the current audio
        if (audio.paused) {
            audio.play();
            button.textContent = 'Pause';
        } else {
            audio.pause();
            button.textContent = 'Play';
        }
    });

    // Reset button text when the audio ends
    audio.addEventListener('ended', () => {
        button.textContent = 'Play';
    });
});
// like control
let likes = 70;
function likeQuote() {
  likes++;
  document.getElementById('likeCount').textContent = `Likes: ${likes}`;
}
