function fondo() {
    document.body.style.backgroundColor = "black";
    const nav = document.querySelector(".navbar");

    if (nav) {
        nav.style.color = "cyan";
        const links = nav.querySelectorAll("a");
        links.forEach(link => {
            link.style.color = "cyan";
        });
    }

    const titulo=document.querySelector("h3");
    if(titulo){
        titulo.style.color="white"
    }

}
function fondo2() {
    document.body.style.backgroundColor = "white";
       const nav = document.querySelector(".navbar");

    if (nav) {
        nav.style.color = "";
        const links = nav.querySelectorAll("a");
        links.forEach(link => {
            link.style.color = "";
        });
    }

    const titulo=document.querySelector("h3");
    if(titulo){
        titulo.style.color=""
    }

}

function mensaje(){
     document.getElementById("parrafo").innerText =
"¡Bienvenido!"; 
}
