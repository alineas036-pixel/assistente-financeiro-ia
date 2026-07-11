// ===============================
// Vida & IA
// script.js
// ===============================



// ===============================
// MENU MOBILE
// ===============================


const menu = document.querySelector(".menu-mobile");
const nav = document.querySelector("nav");


if(menu && nav){


    menu.addEventListener("click",()=>{


        nav.classList.toggle("active");


    });



}



// Fecha menu ao clicar nos links


document.querySelectorAll("nav a").forEach(link=>{


    link.addEventListener("click",()=>{


        if(nav){

            nav.classList.remove("active");

        }


    });


});






// Fecha menu clicando fora


document.addEventListener("click",(e)=>{


    if(
        nav &&
        menu &&
        !nav.contains(e.target) &&
        !menu.contains(e.target)

    ){

        nav.classList.remove("active");

    }


});








// ===============================
// COPIAR PIX
// ===============================


function copiarPix(){


const chave = "projetav393@gmail.com";



navigator.clipboard.writeText(chave)

.then(()=>{


mostrarMensagem(
"✅ PIX copiado!<br>Obrigado por apoiar o Vida & IA ❤️"
);



})

.catch(()=>{


mostrarMensagem(
"⚠️ Copie manualmente:<br>"+chave
);



});


}






// ===============================
// ALERTA PIX
// ===============================


function mostrarMensagem(texto){


let mensagem =
document.getElementById("mensagemPix");



if(!mensagem){


mensagem =
document.createElement("div");


mensagem.id="mensagemPix";


document.body.appendChild(mensagem);


}




mensagem.innerHTML = texto;


mensagem.classList.add("mostrar");



setTimeout(()=>{


mensagem.classList.remove("mostrar");


},4000);



}









// ===============================
// SCROLL SUAVE
// ===============================


document.querySelectorAll(
'a[href^="#"]'
)
.forEach(link=>{


link.addEventListener(
"click",
function(e){


const id =
this.getAttribute("href");



if(id === "#") return;



const destino =
document.querySelector(id);



if(destino){


e.preventDefault();


destino.scrollIntoView({

behavior:"smooth"

});


}



});


});









// ===============================
// HEADER DINÂMICO
// ===============================


const header =
document.querySelector("header");



window.addEventListener(
"scroll",
()=>{


if(!header) return;



if(window.scrollY > 80){


header.style.background =
"rgba(7,17,31,.95)";


}

else{


header.style.background =
"rgba(7,17,31,.75)";


}



});









// ===============================
// ANIMAÇÃO DAS SEÇÕES
// ===============================



const secoes =
document.querySelectorAll("section");



const observer =
new IntersectionObserver(

(entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.classList.add("mostrar");


}



});


},

{

threshold:0.15

}

);





secoes.forEach(sec=>{


sec.classList.add("animar");


observer.observe(sec);


});
