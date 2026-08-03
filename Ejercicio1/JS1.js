const inputNombre = document.getElementById('nombre');
const mensaje = document.getElementById('mensaje');

const guardarBtn = document.getElementById('guardarBtn');
const cargarBtn = document.getElementById('cargarBtn');
const borrarBtn = document.getElementById('borrarBtn');

guardarBtn.addEventListener('click', () => {
  const nombre = inputNombre.value.trim();

  if (nombre === '') {
    mensaje.textContent = 'Escribe un nombre antes de guardar.';
    return;
  }

  localStorage.setItem('nombreGuardado', nombre);
  mensaje.textContent = `Nombre guardado: ${nombre}`;
});

cargarBtn.addEventListener('click', () => {
  const nombreGuardado = localStorage.getItem('nombreGuardado');

  if (nombreGuardado) {
    inputNombre.value = nombreGuardado;
    mensaje.textContent = `Nombre cargado: ${nombreGuardado}`;
  } else {
    mensaje.textContent = 'No hay datos guardados todavía.';
  }
});

borrarBtn.addEventListener('click', () => {
  localStorage.removeItem('nombreGuardado');
  inputNombre.value = '';
  mensaje.textContent = 'Datos eliminados.';
});
