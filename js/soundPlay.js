let toggle = true;

const soundPlayHandler = () => {
    const audio = document.querySelector('.audio');
    audio.addEventListener('click', () => {
        let sound = new Howl({
            src: ['audio/intro.mp3'],
        });
        toggle ? sound.play() : sound.stop();
        toggle = !toggle;
    });

}

export {soundPlayHandler}
