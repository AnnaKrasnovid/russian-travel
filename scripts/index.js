function date() {
    const date = new Date().getFullYear();
    const dateFooter = document.querySelector('.footer__copyright') ;   
    dateFooter.textContent = `${date}. Анна Красновид`;
}

date()