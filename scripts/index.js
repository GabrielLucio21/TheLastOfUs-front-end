const buttons = document.querySelectorAll('.botao');
const images = document.querySelectorAll('.imagem');

buttons.forEach((button, indexButton) => {
    button.addEventListener('click', () => {
        buttons.forEach(button => {button.classList.remove('selecionado')});
        button.classList.add('selecionado');
        images.forEach(image => {image.classList.remove('ativa')});
        images[indexButton].classList.add('ativa');
    })
});