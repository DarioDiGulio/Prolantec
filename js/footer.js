function getCurrentYear() {
    return new Date().getFullYear();
}

const year = document.getElementById('year');
year.innerText = getCurrentYear();