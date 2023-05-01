function showLoaderForm() {
    const loaderForm = document.getElementById('loader-container');
    const sendButton = document.getElementById('send-button');
    sendButton.style.display = 'none';
    loaderForm.style.display = 'flex';
}

function hideLoaderForm() {
    const loaderForm = document.getElementById('loader-container');
    const sendButton = document.getElementById('send-button');
    sendButton.style.display = '';
    loaderForm.style.display = 'none';
}

function showError(fieldName) {
    const errorField = document.getElementById(fieldName + '-error');
    errorField.style.visibility = 'visible';
}

function hiddenError(fieldName) {
    const errorField = document.getElementById(fieldName + '-error');
    errorField.style.visibility = 'hidden';
}

function isValid(name, email, subject, message) {
    return name.value && email.value && subject.value && message.value;
}

function submitContactForm() {
    showLoaderForm()
    const name = document.getElementsByName('name')[0];
    if (!name.value) showError('name');
    else hiddenError('name');
    const email = document.getElementsByName('email')[0];
    if (!email.value) showError('email');
    else hiddenError('email');
    const subject = document.getElementsByName('subject')[0];
    if (!subject.value) showError('subject');
    else hiddenError('subject');
    const message = document.getElementsByName('message')[0];
    if (!message.value) showError('message');
    else hiddenError('message');
    if (isValid(name, email, subject, message)) {
        postData('https://prolantec-mailsender.onrender.com/send', {
            name: name.value,
            email: email.value,
            subject: subject.value,
            message: message.value
        }).then(() => {
            name.value = '';
            email.value = '';
            subject.value = '';
            message.value = '';
        });
    }
    hideLoaderForm();
}

async function postData(url, data) {
    const response = await fetch(url, {
        method: "POST",
        cache: "no-cache",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });
    const result = await response.json();
    console.log(result);
}