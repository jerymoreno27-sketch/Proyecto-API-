const lista = document.getElementById("opcion");

const texto = document.getElementById("resultado");

const guardar = document.getElementById("btnGuardar");

const consultar = document.getElementById("btnLeer");

const eliminar = document.getElementById("btnEliminar");

guardar.onclick = function(){

    if(lista.value==""){

        texto.textContent="Debes elegir una opción.";

        return;

    }

    localStorage.setItem("estadoDia",lista.value);

    texto.textContent="Información almacenada correctamente.";

}

consultar.onclick=function(){

    let valor=localStorage.getItem("estadoDia");

    if(valor){

        texto.textContent="Tu último registro fue: " + valor;

    }

    else{

        texto.textContent="No existe ningún registro.";

    }

}

eliminar.onclick=function(){

    localStorage.removeItem("estadoDia");

    lista.selectedIndex=0;

    texto.textContent="Registro eliminado.";

}