const conceptHandler = () => {
    const concept = document.querySelectorAll('.concept');
    const goBack = document.querySelector('.goBack');
    const screenFirst = document.querySelector('.screen-1')
    const screenSecond = document.querySelector('.screen-2')

    concept.forEach((element) => {
      element.addEventListener('click', (e) => {
          e.preventDefault();
          screenFirst.classList.add('left');
          screenSecond.classList.add('main');
      });
    })

    goBack.addEventListener('click', (e) => {
        e.preventDefault();
        screenFirst.classList.remove('left');
        screenSecond.classList.remove('main');
    });
}

export {conceptHandler}
