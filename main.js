import { header } from "./componentes/header/headerComponent.js";
import { seccion1 } from "./componentes/seccion/seccion1.js";

function seccion(){ 

    let seccion = document.createElement('section');

// header

    seccion.appendChild(header());
    
// sección

    seccion.appendChild(seccion1());

    return seccion;

}

    document.body.appendChild(seccion());
