let pacientes = JSON.parse(localStorage.getItem('pacientes'));

// Obtener el contenedor de resultados
let resultadosContainer = document.getElementById('resultados-pacientes');

// Recorrer los pacientes y crear un div para cada uno
pacientes.forEach(function (paciente) {
    // Crear el div del paciente
    var pacienteDiv = document.createElement('div');
    pacienteDiv.classList.add('paciente');

    // Agregar el contenido del paciente al div
    pacienteDiv.innerHTML = `
        <h3>${paciente.nombre} ${paciente.apellido}</h3>
        <p>Documento: ${paciente.documento}</p>
        <p>Obra Social: ${paciente.obraSocial}</p>
        <p>Activo: ${paciente.activo}</p>
    `;

    // Agregar el div del paciente al contenedor de resultados
    resultadosContainer.appendChild(pacienteDiv);
});