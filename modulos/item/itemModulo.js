export function item(titulo,urlImg,p,price){

    let item = document.createElement('div');
    item.className = "item";

    let h3 = document.createElement('h3');
    h3.textContent = titulo;
    item.appendChild(h3);
    
    let img = document.createElement('img');
    img.src = urlImg;
    item.appendChild(img);

    let description = document.createElement('p');
    description.textContent = p;
    item.appendChild(description);

    let spanPrice = document.createElement('span');
    spanPrice.textContent = "$" + price;
    item.appendChild(spanPrice);


    item.addEventListener('click', ()=>{
    item.classList.add("verde");
    let header = document.querySelector('.header');
    header.classList.add("ocultar");
    });

    return item;
}