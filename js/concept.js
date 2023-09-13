const conceptHandler = () => {
    const concept = document.querySelectorAll('.concept');
    const goBack = document.querySelector('.goBack');
    const screenFirst = document.querySelector('.screen-1')
    const screenSecond = document.querySelector('.screen-2')
    const mobileMenu = document.querySelector('.mobileMenu');
    const hamburger = document.querySelector('.hamburger');

    concept.forEach((element) => {
      element.addEventListener('click', (e) => {
          e.preventDefault();
          screenFirst.classList.add('left');
          screenSecond.classList.add('main');
          mobileMenu.classList.remove('open');
          hamburger.classList.remove('is-active');
      });
    })

    goBack.addEventListener('click', (e) => {
        e.preventDefault();
        screenFirst.classList.remove('left');
        screenSecond.classList.remove('main');
    });
}

export {conceptHandler}
