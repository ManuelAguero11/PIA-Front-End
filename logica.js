const getBtn = document.getElementById('get-btn');
const postBtn = document.getElementById('post-btn');
const menuBtn = document.getElementById('secciones-movil');

const form = document.getElementById('datos');
const formBtn = document.getElementById('form-btn');
const primerForm = document.forms[0]; 
const formPorNom = document.forms['formName']; 
const formPorId = document.forms['formId']; 
const campoNombre = form.elements['nombre'];
const campoEmail = form.elements['correo']; 
const primerElemento = form.elements[0];

const sendHttpRequest = (method, url) => {
    const promise = new Promise ((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);

        xhr.responseType = 'json';

        xhr.onload = () => {
            resolve(xhr.response);
        };

        xhr.send();
    });
};

const getData = () => {
    sendHttpRequest('GET', 'http:// api modifica');
};

const sendData = () => {};

const abrirMenu = () => {
    const activar = document.getElementById('secciones-movil');
    activar.setAttribute('class', 'active');
};

const enviarForm = () => {

    const correo = document.getElementById('email').value;

    if (!emailIsValid(correo)) {
        alert('Please enter a valid email address.');
        return;
    }


    // If validation passes, submit the form
    form.submit();

    event.preventDefault();
};

function emailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}


getBtn.addEventListener('click', getBtn);
postBtn.addEventListener('click',sendData);
menuBtn.addEventListener('click', abrirMenu);


// form.action;
// form.method;

formBtn.addEventListener('submit', enviarForm);