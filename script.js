function alterarCor(corBackground, corContainer) {
    let background = document.getElementById('background');
    let container = document.querySelectorAll('#container');
    background.style.color = '#000'
    background.style.backgroundColor = corBackground;
    container.forEach(element => {
        element.style.backgroundColor = corContainer;
        if (corBackground == '#29314A') {
            background.style.color = '#fff';
        }
    });
}
