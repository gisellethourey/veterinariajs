const fs = require('fs');

// Función para cargar las citas actuales desde citas.json
const cargarCitas = () => {
    try {
        const citasJSON = fs.readFileSync('citas.json', 'utf8');
        return JSON.parse(citasJSON);
    } catch (err) {
        return [];
    }
};

// Función para guardar todas las citas en citas.json
const guardarCitas = (citas) => {
    try {
        fs.writeFileSync('citas.json', JSON.stringify(citas, null, 2));
        console.log('Citas guardadas correctamente en citas.json');
    } catch (err) {
        console.error('Error al guardar en el archivo citas.json:', err);
    }
};

// Función para registrar una nueva cita
const registrar = (nombre, edad, animal, color, enfermedad) => {

// Cargar todas las citas actuales
let citas = cargarCitas();

// Verificar que se proporcionen todos los datos necesarios
    if (!nombre || !edad || !animal || !color || !enfermedad) {
        console.log('Por favor ingresa toda la información requerida');
        return;
    }

// Agregar la nueva cita al array de citas
    const nuevaCita = { nombre, edad, animal, color, enfermedad };
    citas.push(nuevaCita);

// Guardar todas las citas de vuelta en citas.json
    guardarCitas(citas);
    console.log('Nueva cita registrada:', nuevaCita);
};

//Funcion para leer las citas
const leer = () => {
const citasJSON = JSON.parse(fs.readFileSync('citas.json', 'utf8'));
console.log(citasJSON)
}

module.exports = { registrar, leer };
