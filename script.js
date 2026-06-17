let idioma = "es";

function cambiarIdioma() {
    const contenidoES = document.querySelectorAll(".contenido-es");
    const contenidoEN = document.querySelectorAll(".contenido-en");
    const boton = document.getElementById("btnIdioma");

    if (idioma === "es") {
        contenidoES.forEach(elemento => {
            elemento.style.display = "none";
        });

        contenidoEN.forEach(elemento => {
            elemento.style.display = "block";
        });

        boton.textContent = "Español";
        idioma = "en";
    } else {
        contenidoES.forEach(elemento => {
            elemento.style.display = "block";
        });

        contenidoEN.forEach(elemento => {
            elemento.style.display = "none";
        });

        boton.textContent = "English";
        idioma = "es";
    }
}

function volverArriba() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

const btnTop = document.getElementById("btnTop");

window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        btnTop.style.display = "block";
    } else {
        btnTop.style.display = "none";
    }
});