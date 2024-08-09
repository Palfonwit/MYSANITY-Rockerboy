
        const galleryImages = document.querySelectorAll('.gallery-item img');
        const lightbox = document.getElementById('lightbox');
        const lightboxImage = document.getElementById('lightbox-image');
        const playBtn = document.getElementById('play-music-btn');
        const volumeSlider = document.getElementById('volume-slider');
        const timelineSlider = document.getElementById('timeline-slider');
        const audio = new Audio('audio/background-music.mp3');

        galleryImages.forEach(img => {
            img.addEventListener('click', () => {
                lightboxImage.src = img.src;
                lightbox.style.display = 'flex';
            });
        });

        lightbox.addEventListener('click', (event) => {
            if (event.target === lightbox) {
                lightbox.style.display = 'none';
            }
        });

        playBtn.addEventListener('click', () => {
            if (audio.paused) {
                audio.play();
                playBtn.textContent = 'Pause Music';
            } else {
                audio.pause();
                playBtn.textContent = 'Play Music';
            }
        });

        volumeSlider.addEventListener('input', () => {
            audio.volume = volumeSlider.value;
        });

        audio.addEventListener('timeupdate', () => {
            const currentTime = audio.currentTime;
            const duration = audio.duration;
            timelineSlider.value = (currentTime / duration) * 100;
        });

        timelineSlider.addEventListener('input', () => {
            const duration = audio.duration;
            audio.currentTime = (timelineSlider.value / 100) * duration;
        });

        volumeSlider.value = audio.volume;
 