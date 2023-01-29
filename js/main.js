/*const numero = document.getElementById("porcentaje");
let porcentaje = 0;
setInterval(() =>{
    if(porcentaje == 75){
    porcentaje += 1;
    numero.innerHTML = porcentaje + "%";
    }
}, 20)*/
/*
const $form = document.querySelector('#form');
const $buttonMailTo = document.querySelector('#rellenar');

$form.addEventListener('submit',handleSubmit);
function handleSubmit(){
    event.preventDefault()
   const form = new FormData(this);
   $buttonMailTo.setAttribute('href', `mailto:ivanrng.work@gmail.com?subject= Nombre: ${form.get('name')} Correo: ${form.get('email')}&body=${form.get('message')}`)
   $buttonMailTo.click()
   console.log(form.get('message'))
}
*/

/**funcionamiento de la hamburguesa*/
document.getElementById('hamburguesa').addEventListener('click', mostrarMenu);
document.getElementById('back_menu').addEventListener('click', ocultarMenu);
const nav = document.getElementById('nav');

const backgroundMenu = document.getElementById('back_menu');

function mostrarMenu(){
    nav.style.right = '0px';
    backgroundMenu.style.display = 'block'
}
function ocultarMenu(){

    nav.style.right =  '-250px';
    backgroundMenu.style.display = 'none';
}

