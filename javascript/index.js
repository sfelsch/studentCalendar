const imageOptions = document.querySelectorAll('.image-option');
let selectedImage = null;

imageOptions.forEach(option => {
    option.addEventListener('click', () => {
        // Elimina la clase 'selected' de todas las miniaturas
        imageOptions.forEach(opt => opt.classList.remove('selected'));
        // Agrega la clase 'selected' a la miniatura seleccionada
        option.classList.add('selected');
        // Almacena la ruta de la imagen seleccionada
        selectedImage = option.getAttribute('data-src');
    });
});


const btnAgregar = document.querySelector('#agregar');
const contenedor = document.querySelector('#dinamic');

btnAgregar.addEventListener("click", function () {
    const nombreMateriaInput = document.getElementById("nombreMateria");
    const nombreProfesorInput = document.getElementById("nombreProfesor");

    const nombreMateria = nombreMateriaInput.value;
    const nombreProfesor = nombreProfesorInput.value;

    const selectedAnio = document.querySelector('input[name="anio"]:checked');


    if (nombreMateria && nombreProfesor && selectedImage && selectedAnio) {
        const anio = selectedAnio.value;
        const tarjeta = document.createElement('div');
        tarjeta.className = 'card';
        tarjeta.innerHTML = `
            <img src="${selectedImage}" alt="Imagen de la materia">
            <div class="info">
                <h2 class="nombreMateria">${nombreMateria}</h2>
                <h3 class="anioCard">${anio}° año</h3>
                <h2>${nombreProfesor}</h2>
            </div>
        `;

        contenedor.appendChild(tarjeta);

        // Limpia los campos de entrada del modal y la selección de imagen
        nombreMateriaInput.value = "";
        nombreProfesorInput.value = "";
        selectedAnio.checked = false; 
        selectedImage = null;

        // Cierra el modal
        modal.classList.remove('modal--show');
    } else {
        alert("Por favor, ingrese el nombre de la materia, el nombre del profesor y seleccione una imagen.");
    }
});

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


const contenedorTarjetas = document.querySelector('#dinamic');

contenedorTarjetas.addEventListener('click', function (event) {
    const tarjeta = event.target.closest('.card');

    if (tarjeta) {
        const urlRedireccion = `materias.html?nombre=${tarjeta.querySelector('.nombreMateria').textContent}&imagen=${tarjeta.querySelector('img').getAttribute('src')}`;
        window.location.href = urlRedireccion;
    }
});










