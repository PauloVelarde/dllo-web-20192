

let automotores = []

//Funcion para crear un automotor
function crearAutomotor() {

    let automotor = obtenerDatos()
    let es_valido = validarDatos(automotor)
    if (es_valido) {
        //Agregar el automotor a una lista
        automotores.push(automotor)
        console.log(automotores);

    }

}

/**
 * Esta función valida los datos de un automotor
 * @param {*} automotor El automotor es un objeto
 */
function validarDatos(automotor) {
    //1. Campos requeridos
    //2. Longitud de los datos
    //3. Rangos validos de los datos
    if (automotor.placa.length != 6) {
        alert('La placa debe de contener 6 digitos')
        return false
    }
    return true
}

function obtenerDatos() {
    // Obteniendo los valores de los campos
    let serie = document.getElementById('serie').value;
    let placa = document.getElementById('placa').value;
    let marca = document.getElementById('marca').value;
    let color = document.getElementById('color').value;
    let propietario = document.getElementById('propietario').value;
    let tipo = document.getElementById('tipo').value;
    let modelo = document.getElementById('modelo').value;

    // Crear el objeto de modelo
    // Primera forma
    let automotor = {}
    automotor.serie = serie
    automotor.placa = placa
    automotor.marca = marca
    automotor.propietario = propietario
    automotor.tipo = tipo
    automotor.color = color
    automotor.modelo = modelo

    // Segunda forma
    //let automotor = { serie }

    // Formas de imprimir
    //console.log(`El objeto automotor es: ${automotor}`);
    //console.log('El objeto automotor es:' + automotor);
    console.log('El objeto automotor es:', automotor);

    return automotor

}
