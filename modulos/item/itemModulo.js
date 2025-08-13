<<<<<<< HEAD
export function item (titulo,urlImg){

    let item = document.createElement('div');
    item.className ='item';
    item.textContent = titulo;

    let img = document.createElement('img');
    img.src = urlImg;
    item.appendChild(img);

    item.addEventListener('click', ()=>{
        item.classList.add("verde");
        let rHeader =document.querySelector('.header');
        rHeader.classList.add("ocultar");
    });
=======
export function item(){
    let item = document.createElement("div");
    item.className = "item"

    let titulo = document.createElement('h1');
    titulo.className = "titulo";
    titulo.innerText = " Miguel Mora";
>>>>>>> origin/main

    let imagen = document.createElement("img");
    imagen.className = "img";
    imagen.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWnOzrucoiykBP8eUzgHQ8lfgEgfz6BlZBUg&s";

    let descripcion = document.createElement("p");
    descripcion.className = "descrip";
    descripcion.innerText = "Miguel Cazarez Mora (nacido el 1 de marzo de 2007 en Arizona, EE.UU.) es un joven actor y modelo, especialmente reconocido por interpretar a Robin Arellano en la exitosa película de terror The Black Phone (2021)";

    item.appendChild(titulo);
    item.appendChild(imagen);
    item.appendChild(descripcion);
    
    return item;
}