const readyAnimationHandler = () => {
    const body = document.querySelector('body');
    setTimeout(()=>{body.classList.add('ready')}, 5500);
}

export {readyAnimationHandler}
