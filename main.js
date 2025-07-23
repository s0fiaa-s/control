import { header } from "./componentes/header/headerComponent.js";

function seccion(){

    let seccion = document.createElement('section');

    seccion.appendChild(header());
    
    let h1 = document.createElement('h1');
    h1.className = "titulo";

    let parrafo = document.createElement('p');

    h1.innerText = "Hola mundo";
    seccion.appendChild(h1);
    seccion.appendChild(parrafo);
    
    parrafo.innerText = "Introducción a JavaScript";

    return seccion;

}
    document.body.appendChild(seccion());
