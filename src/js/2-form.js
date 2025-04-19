const form = document.querySelector('.feedback-form');
const loadData = 'feedback-form-state';

const formData = {
    email: '',
    message: '',
};

const savedData = localStorage.getItem(loadData);
if (savedData) {
    const parsedData = JSON.parse(savedData);
    formData.email = parsedData.email || '';
    formData.message = parsedData.message || '';
    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
}

form.addEventListener('input', (event) => {
    formData[event.target.name] = event.target.value.trim();
    localStorage.setItem(loadData, JSON.stringify(formData));
});

form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!formData.email || !formData.message) {
        alert('Fill please all fields');
        return;
    }

    console.log(formData);
    localStorage.removeItem(loadData);
    form.reset();
    formData.email = '';
    formData.message = '';
});