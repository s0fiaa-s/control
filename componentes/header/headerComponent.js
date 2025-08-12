function header() {
    
    let header = document.createElement('header');
    header.className = "header";

//div

    let text = document.createElement('text');
    text.className = 'titulo';
    text.innerText = "@sofii";

    let div = document.createElement('div');
    div.className = "circulo";
    div.innerHTML = "🌺";


    header.appendChild(text);
    header.appendChild(div);
    return header;
}

export {header}