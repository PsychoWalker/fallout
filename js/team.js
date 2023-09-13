const teamHandler = () => {
    const team = document.querySelectorAll('.team');
    const goBack = document.querySelector('.goMain');
    const screenFirst = document.querySelector('.screen-1');
    const screenThird = document.querySelector('.screen-3');
    const mobileMenu = document.querySelector('.mobileMenu');
    const hamburger = document.querySelector('.hamburger');

    team.forEach((element) => {
      element.addEventListener('click', (e) => {
          e.preventDefault();
          screenFirst.classList.add('right');
          screenThird.classList.add('main');
          mobileMenu.classList.remove('open');
          hamburger.classList.remove('is-active');
      });
    })

    goBack.addEventListener('click', (e) => {
        e.preventDefault();
        screenFirst.classList.remove('right');
        screenThird.classList.remove('main');
    });
}

export {teamHandler}
