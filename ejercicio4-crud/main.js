
// Lista global de automotores
let automotores = []

// Fila a modificar cuando se selecciona
let filaAModificar;

listarAutomotores()


// Listar los automotores en una tabla
function listarAutomotores() {
    //Cargar automotores del localstorage
    let str_automotores = localStorage.getItem("lista_automotores")
    // Parse a Array
    automotores = JSON.parse(str_automotores)

    if (automotores == null) {
        automotores = []
    }

    // Agregar filas a la tabla
    let tbody = document.getElementById('list_body')
    tbody.innerHTML = ""
    for (let index = 0; index < automotores.length; index++) {
        let element = automotores[index];
        let row = ""
        row += "<tr>"
        row += "<td>" + element['serie'] + "</td>"
        row += "<td>" + element['placa'] + "</td>"
        row += "<td>" + element['modelo'] + "</td>"
        row += "<td>" + element['propietario'] + "</td>"
        row += "<td><button onclick='modificar(" + index + ")'> Modificar </button> </td>"
        row += "<td><button onclick='eliminar(" + index + ")'> Eliminar </button> </td>"
        row += "</tr>"
        tbody.innerHTML += row
    }
}

/**
 * Accion de modificar de la tabla
 * @param {*} index 
 */
function modificar(index) {
    let automotor = automotores[index]
    cargarDatos(automotor)
    //Guardar el indice de forma global
    filaAModificar = index
    document.getElementById('index').value = index;
}

/**
 * Funcion cuando se guarda la informacion despues de editar,
 * pendiente por validar datos
 */
function modificarGuardar() {
    let fila = filaAModificar;
    // fila=    document.getElementById('index').value
    let nuevoAutomotor = obtenerDatos()
    console.log(nuevoAutomotor);
    automotores.splice(fila, 1, nuevoAutomotor)
    console.log(automotores);
    localStorage.setItem("lista_automotores", JSON.stringify(automotores))
    listarAutomotores()

}

function cargarDatos(element) {
    document.getElementById('serie').value = element.serie;
    document.getElementById('placa').value = element.placa;
    document.getElementById('marca').value = element.marca;
    document.getElementById('color').value = element.color;
    document.getElementById('propietario').value = element.propietario;
    document.getElementById('tipo').value = element.tipo;
    document.getElementById('modelo').value = element.modelo;
}

//Funcion para crear un automotor
function crearAutomotor() {
    let automotor = obtenerDatos()
    let es_valido = validarDatos(automotor)
    if (es_valido) {
        //Agregar el automotor a una lista
        automotores.push(automotor)
        localStorage.setItem("lista_automotores", JSON.stringify(automotores))
        console.log(automotores);
    }
    listarAutomotores()

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

/**
 * PASO 1: Obtener la fila - OK
 * PASO 2: Eliminar el objeto de la fila pista "splice"
 * PASO 3: Actualizar el localStorage
 * @param {*} fila 
 */
function eliminar(fila) {
    console.log("Fila", fila);
    automotores.splice(fila, 1)
    localStorage.setItem("lista_automotores", JSON.stringify(automotores))
    listarAutomotores()
}



