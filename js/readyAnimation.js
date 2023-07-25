const readyAnimation = () => {
    const body = document.querySelector('body');
    setTimeout(()=>{body.classList.add('ready')}, 5500);
}

export {readyAnimation}
