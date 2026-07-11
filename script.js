// ===============================
// Vida & IA
// script.js
// ===============================

// Copiar PIX
function copiarPix() {

    const chave = "projetav393@gmail.com";

    navigator.clipboard.writeText(chave);

    alert("✅ Chave PIX copiada!\n\nObrigado por apoiar o projeto ❤️");

}

// Scroll suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const destino = document.querySelector(this.getAttribute("href"));

        if(destino){

            destino.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

// Header transparente
const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 80){

        header.style.background="rgba(7,17,31,.95)";

    }

    else{

        header.style.background="rgba(7,17,31,.75)";

    }

});

// Revelar elementos ao rolar
const elementos = document.querySelectorAll("section");

const aparecer = ()=>{

    elementos.forEach(sec=>{

        const topo = sec.getBoundingClientRect().top;

        if(topo < window.innerHeight - 120){

            sec.style.opacity="1";
            sec.style.transform="translateY(0)";

        }

    });

}

elementos.forEach(sec=>{

    sec.style.opacity="0";
    sec.style.transform="translateY(40px)";
    sec.style.transition="all .8s";

});

window.addEventListener("scroll",aparecer);

aparecer();
