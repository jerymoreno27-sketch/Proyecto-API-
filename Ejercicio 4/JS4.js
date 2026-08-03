const inputColor = document.getElementById("colorElegido");
const resultado = document.getElementById("resultado");

document.getElementById("btnGuardar").onclick = function () {
    localStorage.setItem("colorFavorito", inputColor.value);
    resultado.textContent = "Color guardado correctamente.";
};

document.getElementById("btnMostrar").onclick = function () {
    let color = localStorage.getItem("colorFavorito");
    if (color) {
        resultado.textContent = "Tu color favorito es: " + color;
        resultado.style.color = color; // cambia el texto al color guardado
    } else {
        resultado.textContent = "No hay color guardado.";
        resultado.style.color = "#444";
    }
};

document.getElementById("btnEliminar").onclick = function () {
    localStorage.removeItem("colorFavorito");
    resultado.textContent = "Color eliminado.";
    resultado.style.color = "#444";
};
