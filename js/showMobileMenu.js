const showMobileMenuHandler = () => {
    const mobileMenu = document.querySelector('.mobileMenu');
    mobileMenu.addEventListener('click', () => {
        mobileMenu.classList.toggle('open');
    });
}

export {showMobileMenuHandler}
