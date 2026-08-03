const mensaje = document.getElementById("mensaje");

const botonAzul = document.getElementById("azul");
const botonVerde = document.getElementById("verde");
const botonBlanco = document.getElementById("blanco");

function cambiarColor(color) {
    document.body.style.backgroundColor = color;
    localStorage.setItem("colorFondo", color);
    mensaje.textContent = "Color guardado correctamente.";
}

const colorGuardado = localStorage.getItem("colorFondo");

if (colorGuardado) {
    document.body.style.backgroundColor = colorGuardado;
    mensaje.textContent = "Color cargado desde localStorage.";
}

botonAzul.addEventListener("click", function () {
    cambiarColor("#60a5fa");
});

botonVerde.addEventListener("click", function () {
    cambiarColor("#86efac");
});

botonBlanco.addEventListener("click", function () {
    cambiarColor("#ffffff");
});