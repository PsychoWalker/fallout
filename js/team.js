const teamHandler = () => {
    const team = document.querySelector('.team');
    const goBack = document.querySelector('.goMain');
    const screenFirst = document.querySelector('.screen-1')
    const screenThird = document.querySelector('.screen-3')

    team.addEventListener('click', (e) => {
        e.preventDefault();
        screenFirst.classList.add('right');
        screenThird.classList.add('main');
    });

    goBack.addEventListener('click', (e) => {
        e.preventDefault();
        screenFirst.classList.remove('right');
        screenThird.classList.remove('main');
    });
}

export {teamHandler}
