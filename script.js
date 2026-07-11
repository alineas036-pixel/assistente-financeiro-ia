// ===============================
// Vida & IA
// script.js
// ===============================



// ===============================
// MENU MOBILE
// ===============================

const menu = document.querySelector(".menu-mobile");
const nav = document.querySelector("nav");


if(menu){

    menu.addEventListener("click",()=>{

        nav.classList.toggle("active");

    });

}



// Fecha menu ao clicar em um link

document.querySelectorAll("nav a").forEach(link=>{


    link.addEventListener("click",()=>{


        if(nav){

            nav.classList.remove("active");

        }


    });


});





// ===============================
// COPIAR PIX
// ===============================


function copiarPix(){


    const chave = "projetav393@gmail.com";


    navigator.clipboard.writeText(chave)

    .then(()=>{


        mostrarMensagem(
            "✅ Chave PIX copiada!<br>Obrigado por apoiar o projeto ❤️"
        );


    })


    .catch(()=>{


        mostrarMensagem(
            "⚠️ Não foi possível copiar. Copie manualmente: "+chave
        );


    });


}





// ===============================
// MENSAGEM PERSONALIZADA
// ===============================


function mostrarMensagem(texto){


    let mensagem = document.getElementById("mensagemPix");



    if(!mensagem){


        mensagem = document.createElement("div");

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


document.querySelectorAll('a[href^="#"]').forEach(link=>{


    link.addEventListener("click",function(e){


        e.preventDefault();



        const destino = document.querySelector(
            this.getAttribute("href")
        );



        if(destino){


            destino.scrollIntoView({

                behavior:"smooth"

            });


        }



    });


});







// ===============================
// HEADER DINÂMICO
// ===============================


const header = document.querySelector("header");



window.addEventListener("scroll",()=>{


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


const elementos = document.querySelectorAll("section");



elementos.forEach(sec=>{


    sec.style.opacity="0";

    sec.style.transform="translateY(40px)";

    sec.style.transition="all .8s ease";


});





function aparecer(){


    elementos.forEach(sec=>{


        const topo =
        sec.getBoundingClientRect().top;



        if(topo < window.innerHeight - 120){


            sec.style.opacity="1";

            sec.style.transform="translateY(0)";


        }



    });


}




window.addEventListener(
    "scroll",
    aparecer
);



aparecer();
