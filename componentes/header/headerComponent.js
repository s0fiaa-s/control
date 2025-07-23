function header() {
    
    let header = document.createElement('header');

//div

    let divgeneral = document.createElement("div");
    divgeneral.className = "divgeneral";

    let circulo = document.createElement("div");
    circulo.className = "circulo";

    divgeneral.appendChild(circulo);

    return divgeneral;
}

export {header}