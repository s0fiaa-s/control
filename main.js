import { header } from "./componentes/header/headerComponent.js";
import { seccion1 } from "./componentes/seccion/seccion1.js";
import { nav } from "./componentes/nav/navComponent.js";


function seccion(){ 

    let seccion = document.createElement('section');

// header

    seccion.appendChild(header());
    
// sección

    seccion.appendChild(seccion1());

//nav

    seccion.appendChild(nav());
    
    return seccion;
}

    document.body.appendChild(seccion());
