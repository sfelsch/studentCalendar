
var currentDate = new Date();
var currentYear = currentDate.getFullYear();
var currentMonth = currentDate.getMonth();
var calendar = document.getElementById("calendar");
var calendarTitle = calendar.querySelector("h2");
var calendarBody = calendar.querySelector("tbody");
var prevButton = document.getElementById("prev");
var nextButton = document.getElementById("next");

prevButton.addEventListener("click", showPreviousMonth);
nextButton.addEventListener("click", showNextMonth);

function showCalendar() {
    var firstDay = new Date(currentYear, currentMonth, 1);
    var lastDay = new Date(currentYear, currentMonth + 1, 0);

    calendarTitle.textContent = firstDay.toLocaleString('default', { month: 'long' }) + " " + currentYear;

    calendarBody.innerHTML = "";

    var date = new Date(firstDay);
    date.setDate(1 - firstDay.getDay());

    while (date <= lastDay) {
        var weekRow = document.createElement("tr");
    
        for (var i = 0; i < 7; i++) {
            var dayCell = document.createElement("td");
            dayCell.textContent = date.getDate();
    
            if (date.getMonth() !== currentMonth) {
                dayCell.classList.add("other-month");
            }
    
            if (date.toDateString() === currentDate.toDateString()) {
                dayCell.classList.add("today");
            }
    
            
            // Almacena el valor de date en una función anónima
            (function (selectedDate) {
                dayCell.addEventListener("click", function () {
                    openModal(selectedDate);
                });
            })(new Date(date));
           
    
            weekRow.appendChild(dayCell);
            date.setDate(date.getDate() + 1);
        }
    
        calendarBody.appendChild(weekRow);
    }
}

function showPreviousMonth() {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    showCalendar();
}

function showNextMonth() {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    showCalendar();
}

showCalendar();

var modal = document.querySelector(".modal");
var modalContent = document.querySelector(".modal__container");
const closeModal = document.querySelector('.modal__close');
var selectedDate = document.getElementById("selectedDate");
var noteInput = document.getElementById("noteInput");
var saveNoteBtn = document.getElementById("saveNote");

// Esta función maneja la apertura del modal para el día seleccionado
function openModal(date) {
    var day = date.getDate();
    var month = date.getMonth() + 1; // Se agrega 1 ya que los meses en JavaScript comienzan desde 0
    var year = date.getFullYear();

    selectedDate.textContent = day + "/" + month + "/" + year;
    modal.classList.add('modal--show');
}

// Agrega un evento de clic para el botón de guardar notas
saveNoteBtn.addEventListener("click", function () {
    var day = selectedDate.textContent;
    var notes = noteInput.value;

    //acá puedo guardar las notas....
    console.log("guardé la nota: " + notes + " del día " + day);

    // vacío la nota y cierro
    noteInput.value = "";
    modal.classList.remove('modal--show');
});

// Agrega un evento de clic para el botón de cerrar el modal
closeModal.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.remove('modal--show');
});