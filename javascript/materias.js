     // Obtén los parámetros de la URL
     const params = new URLSearchParams(window.location.search);

     // Extrae los valores de los parámetros
     const nombreMateria = params.get('nombre');
     const imagenMateria = params.get('imagen');

     // Actualiza el contenido de la página
     document.getElementById('nombreMateria').textContent = nombreMateria;
     document.getElementById('imagenMateria').src = imagenMateria;

     const openModal = document.querySelector('.hero__cta');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal__close');

openModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.add('modal--show');
});

closeModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.remove('modal--show');
});
modal.addEventListener('dragenter', (e) => {
    e.preventDefault();
    e.stopPropagation();
});

modal.addEventListener('dragover', (e) => {
    e.preventDefault();
    e.stopPropagation();
});

modal.addEventListener('dragleave', (e) => {
    e.preventDefault();
    e.stopPropagation();
});

modal.addEventListener('drop', (e) => {
    e.preventDefault();
    e.stopPropagation();

    // Procesa los archivos soltados
});
// Array para almacenar los archivos cargados
// Array para almacenar los archivos cargados
const inputArchivo = document.getElementById('inputArchivo');
const fileInput = document.getElementById("fileInput");

fileInput.addEventListener("change", procesarArchivos);
const archivosCargados = [];

function procesarArchivos(event) {
    const archivos = Array.from(event.target.files);
    
    // Agregar los archivos al array archivosCargados
    archivosCargados.push(...archivos);

    // Mostrar los archivos cargados en la consola
    console.log('Archivos cargados:', archivosCargados);
}
const botonAgregar = document.getElementById('agregar');

botonAgregar.addEventListener('click', () => {
    // Llama a la función de procesamiento para guardar los archivos
    procesarArchivos(fileInput);
    
    // Cierra el modal o realiza cualquier otra acción que desees
    modal.classList.remove('modal--show');
});

var menuToggle = document.querySelector(".menu-toggle");
var links = document.querySelectorAll(".menu-links");

menuToggle.addEventListener("click", function () {
    links.forEach(function (link) {
        if (link.style.display === "block") {
            link.style.display = "none";
        } else {
            link.style.display = "block";
        }
    });
});