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

function getFormValidatedData(fieldName) {
    const field = document.getElementsByName(fieldName)[0];
    if (!field.value) showError(fieldName);
    else hiddenError(fieldName);
    return field;
}

function clearForm(name, email, subject, message) {
    name.value = '';
    email.value = '';
    subject.value = '';
    message.value = '';
}

function emailContentBy(name, email, message) {
    return `<Mensaje enviado por ${name.value} con mail ${email.value}>\n${message.value}`
}

function submitContactForm() {
    showLoaderForm()
    const name = getFormValidatedData('name');
    const email = getFormValidatedData('email');
    const subject = getFormValidatedData('subject');
    const message = getFormValidatedData('message');
    if (isValid(name, email, subject, message)) {
        postData('https://prolantec-mailsender.onrender.com/send', {
            subject: subject.value,
            content: emailContentBy(name.value, email.value, message.value)
        }).then(() => {
            clearForm(name, email, subject, message)
        }).catch((e) => {
            console.error('No se pudo enviar el email.');
            console.error(e);
        });
    }
    else hideLoaderForm();
}

async function postData(url, data) {
    await fetch(url, {
        method: "POST",
        cache: "no-cache",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });
    hideLoaderForm();
}