const form = document.querySelector('.feedback-form');

let formData = {
    email: '',
    message: '',
}

const savedData = localStorage.getItem('feedback-form-state')
if (savedData) {
    formData = JSON.parse(savedData);
    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
}

form.addEventListener('input', event => {
    formData[event.target.name] = event.target.value.trim();
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.elements.email.value.trim() || !form.elements.message.value.trim()) {
        alert('Lütfen tüm alanları doldurunuz!');
        return;
    }
    console.log(formData);
    form.reset();
    localStorage.removeItem('feedback-form-state');
    formData = { email: '', message: '' };
});