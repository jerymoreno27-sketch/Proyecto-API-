function guardarNombre() {
    let nombre = document.getElementById("nombre").value;

    if (nombre) {
        sessionStorage.setItem("nombreUsuario", nombre);
        document.getElementById("resultado").innerText =
            "Nombre guardado temporalmente.";
    } else {
        document.getElementById("resultado").innerText =
            "Por favor escribe un nombre.";
    }
}

function mostrarNombre() {
    let nombre = sessionStorage.getItem("nombreUsuario");

    if (nombre) {
        document.getElementById("resultado").innerText =
            "Tu nombre es: " + nombre;
    } else {
        document.getElementById("resultado").innerText =
            "No hay nombre guardado.";
    }
}

function eliminarNombre() {
    sessionStorage.removeItem("nombreUsuario");
    document.getElementById("resultado").innerText =
        "Nombre eliminado.";
}