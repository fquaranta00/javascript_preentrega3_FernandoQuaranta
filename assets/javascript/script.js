// Funcion para guardar datos de pacientes en local storage
function guardarPaciente(paciente) {
    var pacientes = JSON.parse(localStorage.getItem('pacientes')) || []; //el || [] lo agregamos porque si está vació el local storage da error
    pacientes.push(paciente);
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
}

let formulario = document.getElementById('formulario-paciente');
let elementosFormulario = document.querySelectorAll('#formulario-paciente input');

// Recorrer los elementos y vacía los placeholders de los campos del formulario
elementosFormulario.forEach(function(elemento) {
    elemento.addEventListener('focus', function() {
        this.setAttribute('placeholder', '');
    });
});

//cuando le doy guardar al formulario cargado, toma los valores de cada campo y los guarda en el objeto
formulario.addEventListener('submit', function (event) {
    event.preventDefault();
    // Obtener los valores de los campos
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var documento = document.getElementById('documento').value;
    var obraSocial = document.getElementById('obraSocial').value;
    var activo = document.getElementById('activo').value;

    // Crear un objeto paciente con los datos
    var nuevoPaciente = {
        nombre: nombre,
        apellido: apellido,
        documento: documento,
        obraSocial: obraSocial,
        activo: activo
    };


   // Ejecuta la funcion y guarda el objeto paciente en el Local Storage
    guardarPaciente(nuevoPaciente);

    // Devuelve ensaje de éxito
    alert('Paciente registrado correctamente');
    // window.location.href = 'otra_pagina.html';

    // Restablecer el formulario a su estado inicial
    document.getElementById('formulario-paciente').reset();


});
