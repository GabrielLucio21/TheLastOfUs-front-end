const buttons = document.querySelectorAll('.botao');
const images = document.querySelectorAll('.imagem');

buttons.forEach((button, indexButton) => {

    button.addEventListener('click', () => {

        buttons.forEach(button => {button.classList.remove('selecionado')});
        button.classList.add('selecionado');

        images.forEach((image, indexImage) => {

            image.classList.remove('ativa');

            if(indexButton == indexImage) {
                image.classList.add('ativa');
            };

        })

    })

});