let actualIdx = 0;

function cambiarImagenes() {
    const brea = "../images/brea.jpg";
    const pileta = "../images/pileta.jpeg";
    const pistola = "../images/pistola-pegamento.jpeg";
    const tinglado = "../images/imgTinglado.png";
    const imagenes = [brea, pileta, pistola, tinglado]
    setInterval(() => {
        siguienteImagen(imagenes);
    }, 2000);
}

function siguienteImagen(imagenes) {
    const container = document.getElementsByClassName("bannerImg")[0];
    (actualIdx === imagenes.length -1) ? actualIdx = 0 : actualIdx = actualIdx++
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