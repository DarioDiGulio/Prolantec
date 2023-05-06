let actualIdx = 0;

function cambiarImagenes() {
    const brea = "../images/brea.jpg";
    const pileta = "../images/pileta.jpeg";
    const pistola = "../images/pistola-pegamento.jpeg";
    const tinglado = "../images/imgTinglado.png";
    const imagenes = [brea, pileta, pistola, tinglado]
    setInterval(() => {
        siguienteImagen(imagenes);
    }, 3000);
}

function siguienteImagen(imagenes) {
    const container = document.getElementsByClassName("bannerImg")[0];
    actualIdx++;
    if (actualIdx === imagenes.length) actualIdx = 0;
    container.style.backgroundImage =  `url('${imagenes[actualIdx]}')`;
    console.log('Cambié imagen');
}

function getCurrentYear() {
    return new Date().getFullYear();
}

function updateYear() {
    const year = document.getElementById('year');
    year.innerText = getCurrentYear();
}


updateYear();
cambiarImagenes();