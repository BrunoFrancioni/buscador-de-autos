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

const year = document.querySelector('#year');
year.addEventListener('input', (e) => {
    datosBusqueda.year = Number(e.target.value);

    filtrarAuto();
});

const minimo = document.querySelector('#minimo');
minimo.addEventListener('input', (e) => {
    datosBusqueda.minimo = Number(e.target.value);

    filtrarAuto();
});

const maximo = document.querySelector('#maximo');
maximo.addEventListener('input', (e) => {
    datosBusqueda.maximo = Number(e.target.value);

    filtrarAuto();
});

const puertas = document.querySelector('#puertas');
puertas.addEventListener('input', (e) => {
    datosBusqueda.puertas = Number(e.target.value);

    filtrarAuto();
});

const transmision = document.querySelector('#transmision');
transmision.addEventListener('input', (e) => {
    datosBusqueda.transmision = e.target.value;

    filtrarAuto();
});

const color = document.querySelector('#color');
color.addEventListener('input', (e) => {
    datosBusqueda.color = e.target.value;

    filtrarAuto();
});

//Funciones

function mostrarAutos(autos) {
    const contenedor = document.getElementById('resultado');

    limpiarHTML();

    autos.forEach(auto => {
        const autoHTML = document.createElement('p');
        autoHTML.innerHTML = `
            <p>${auto.marca} ${auto.modelo} - ${auto.year} - ${auto.puertas} Puertas - Transmisión: ${auto.transmision} - Precio: $ ${auto.precio} - Color: ${auto.color}</p>
        `;
        contenedor.appendChild(autoHTML);
    });
}

function filtrarAuto() {
    const resultado = obtenerAutos().filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);
    
    if(resultado.length) {
        mostrarAutos(resultado);
    } else {
        noResultado();
    }
}

function noResultado() {
    limpiarHTML();

    const noResultado = document.createElement('div');
    noResultado.classList.add('alerta', 'error');
    noResultado.appendChild(document.createTextNode('No hay resultados'));

    document.querySelector('#resultado').appendChild(noResultado);
}

function limpiarHTML() {
    const contenedor = document.getElementById('resultado');

    while(contenedor.firstChild) {
        contenedor.removeChild(contenedor.firstChild);
    }
}

function filtrarMarca(auto) {
    if(datosBusqueda.marca) {
        return auto.marca === datosBusqueda.marca;
    } else {
        return auto;
    }
}

function filtrarYear(auto) {
    if(datosBusqueda.year) {
        return auto.year === datosBusqueda.year;
    } else {
        return auto;
    }
}

function filtrarMinimo(auto) {
    if(datosBusqueda.minimo) {
        return auto.precio >= datosBusqueda.minimo;
    } else {
        return auto;
    }
}

function filtrarMaximo(auto) {
    if(datosBusqueda.minimo) {
        return auto.precio <= datosBusqueda.minimo;
    } else {
        return auto;
    }
}

function filtrarPuertas(auto) {
    if(datosBusqueda.puertas) {
        return auto.puertas === datosBusqueda.puertas;
    } else {
        return auto;
    }
}

function filtrarTransmision(auto) {
    if(datosBusqueda.transmision) {
        return auto.transmision === datosBusqueda.transmision;
    } else {
        return auto;
    }
}

function filtrarColor(auto) {
    if(datosBusqueda.color) {
        return auto.color === datosBusqueda.color;
    } else {
        return auto;
    }
}