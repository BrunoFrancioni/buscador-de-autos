import { obtenerAutos } from './app.js';

// crear los años
const years = document.createElement('option');
const  max = new Date().getFullYear();
let  min = max - 10;

for(let i = max; i >  min; i--) {
    let option =  document.createElement('option');
    option.value = i;
    option.innerText = i;
    document.querySelector('#year').appendChild(option);
}

// Datos para la búsqueda

let datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: ''
}

// Event Listener

const autos = obtenerAutos();

document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(autos);
});

const marca = document.querySelector('#marca');
marca.addEventListener('input', (e) => {
    datosBusqueda.marca = e.target.value;

    filtrarAuto();
});

function mostrarAutos(autos) {
    const contenedor = document.getElementById('resultado');

    autos.forEach(auto => {
        const autoHTML = document.createElement('p');
        autoHTML.innerHTML = `
            <p>${auto.marca} ${auto.modelo} - ${auto.year} - ${auto.puertas} Puertas - Transmisión: ${auto.transmision} - Precio: $ ${auto.precio} - Color: ${auto.color}</p>
        `;
        contenedor.appendChild(autoHTML);
    });
}

function filtrarAuto() {
    const resultado = obtenerAutos();
    
}