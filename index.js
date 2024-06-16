const fs =  require ('fs');
//creacion archivo citas.json
if (!fs.existsSync('citas.json')) {
    const citas = JSON.stringify([]);
    try {
        fs.writeFileSync('citas.json', citas);
        console.log(' Se creo el archivo citas.json');
    } catch (err) {
        console.log (' No se pudo crear el archivo', err)

    }
}

//creacion arhivo operaciones.js
if (!fs.existsSync('operaciones.js')) {
    const operaciones = 'creacion archivo';
    try {
        fs.writeFileSync('operaciones.js', operaciones);
        console.log('Archivo operaciones.js creado exitosamente');
    } catch (err) {
        console.log('Error al crear el archivo operaciones.js', err);
    }
} else {
    console.log('El archivo operaciones.js ya existe. No se sobrescribirá.');
}

//Importacion
const {registrar, leer} = require('./operaciones');

const [operacion, nombre, edad, animal, color, enfermedad] = process.argv.slice(2);

//Condicional registrar
if(operacion === "registrar"){
    registrar(nombre, edad, animal, color, enfermedad)
    } else {
        console.log('Operación no válida. Usa "registrar" para agregar una cita.');
    }

//Condicional leer
if(operacion === "leer"){
    leer()
    }
    
    