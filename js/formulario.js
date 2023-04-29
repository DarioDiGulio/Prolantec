function showLoaderForm() {
    const loaderForm = document.getElementById('loader-container');
    const sendButton = document.getElementById('send-button');
    sendButton.style.display = 'none';
    loaderForm.style.display = 'flex';
}

function hideLoaderForm() {
    const loaderForm = document.getElementById('loader-container');
    const sendButton = document.getElementById('send-button');
    const form = document.getElementById('contact-form');

    form.reset();
    sendButton.style.display = '';
    loaderForm.style.display = 'none';
}