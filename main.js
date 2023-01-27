
//Ventana MODAL

let cerrar = document.querySelectorAll(".close")[0];
let abrir = document.querySelectorAll(".containerAbrir")[0];
let modal = document.querySelectorAll(".modal")[0];
let modalContainer = document.querySelectorAll(".modal-container")[0];

abrir.addEventListener("click" , function(e){
    e.preventDefault(); //para que no se envie por default
    modalContainer.style.opacity = "1";
    modalContainer.style.visibility = "visible";
    modal.classList.toggle("modal-close");

});

cerrar.addEventListener("click", function(){
    modal.classList.toggle("modal-close");
    setTimeout(function(){
        
        modalContainer.style.opacity = "0";
        modalContainer.style.visibility = "hidden";
    },800) //tiempo de espera de 0,8 seg
  
});

window.addEventListener("click", function(e){
    console.log(e.target)
    if(e.target == modalContainer){
        modal.classList.toggle("modal-close");
    setTimeout(function(){
        
        modalContainer.style.opacity = "0";
        modalContainer.style.visibility = "hidden";
    },800)
    }
})

//Validacion de datos


const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const email = document.getElementById("email");
const form = document.getElementById('form');
const mensaje = document.getElementById("mensaje")
const parrafo = document.getElementById("warnings");

form.addEventListener("submit", e=>{
    e.preventDefault();
    
    let warnings = ""
    let regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ // validacion email
    let entrar = false
    parrafo.innerHTML = ""
    if(nombre.value.length < 4 || /^([0-9])*$/.test(nombre)){
        warnings+= 'El nombre no es valido <br>'
        entrar = true
    }
    if(apellido.value.length < 4 || /^([0-9])*$/.test(apellido)){
        warnings+= 'El apellido no es valido <br>' 
        entrar = true
    }
    if(!regEmail.test(email.value)){
        warnings+= 'El email no es valido <br>' 
        entrar = true
    }
    if(mensaje.value == ''){
        warnings+= 'Mensaje no escrito <br>'
        entrar = true 
    }

    if(entrar){
        parrafo.innerHTML = warnings;
    }else{
        parrafo.style.color = 'black';
        parrafo.innerHTML = "Enviado";
    }
})









