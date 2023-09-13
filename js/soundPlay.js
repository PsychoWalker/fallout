let toggle = true;
const audio = document.querySelector('.audio');

const soundPlayHandler = () => {
    const audio = document.querySelector('.audio');
    const sound = new Howl({
        src: ['audio/intro.mp3'],
    });
    audio.addEventListener('click', () => {
        toggle ? audio.textContent = 'Поставить на паузу' : audio.textContent = 'Запустить голозапись';
        toggle ? sound.play() : sound.pause();
        toggle = !toggle;
    });
}

export {soundPlayHandler}
