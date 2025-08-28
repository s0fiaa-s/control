export function nav() {
    
    let nav = document.createElement('div');
    nav.className = "nav";
    
    let divn1 = document.createElement('div');
    divn1.className = "cuadro-n";
    divn1.textContent = "🏠";
    nav.appendChild(divn1);
    
    let divn2 = document.createElement('div');
    divn2.className = "cuadro-n";
    divn2.textContent = "📦";
    nav.appendChild(divn2);

    let divn3 = document.createElement('div');
    divn3.className = "cuadro-n";
    divn3.textContent = "❓";
    nav.appendChild(divn3);

    let divn4 = document.createElement('div');
    divn4.className = "cuadro-n";
    divn4.textContent = "🛒";
    nav.appendChild(divn4);

    return nav;
}