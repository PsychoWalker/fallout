const showMobileMenuHandler = () => {
    const mobileMenu = document.querySelector('.mobileMenu');
    const hamburger = document.querySelector('.hamburger');
    const listMenu = document.querySelector('.listMenu');
    mobileMenu.addEventListener('click', () => {
        mobileMenu.classList.toggle('open');
        hamburger.classList.toggle('is-active');
    });
}

export {showMobileMenuHandler}
