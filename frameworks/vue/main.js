var app = new Vue({
    el: '#app',
    data: {
        automotor: {},
        serie: '',
        placa: '',
        automotores: []
    },
    methods: {
        // Listar los automotores en una tabla
        listarAutomotores() {
            //Cargar automotores del localstorage
            let str_automotores = localStorage.getItem("lista_automotores")
            // Parse a Array
            this.automotores = JSON.parse(str_automotores)

            if (this.automotores == null) {
                this.automotores = []
            }


        },



        //Funcion para crear un automotor
        crearAutomotor() {
            console.log(this.automotor);

            let es_valido = this.validarDatos(this.automotor)
            if (es_valido) {
                //Agregar el automotor a una lista
                this.automotores.push(this.automotor)
                localStorage.setItem("lista_automotores", JSON.stringify(automotores))
            }
            this.listarAutomotores()

        },



        /**
         * Esta función valida los datos de un automotor
         * @param {*} automotor El automotor es un objeto
         */
        validarDatos(automotor) {
            //1. Campos requeridos
            //2. Longitud de los datos
            //3. Rangos validos de los datos
            if (automotor.placa.length != 6) {
                alert('La placa debe de contener 6 digitos')
                return false
            }
            return true
        },



        /**
         * PASO 1: Obtener la fila - OK
         * PASO 2: Eliminar el objeto de la fila pista "splice"
         * PASO 3: Actualizar el localStorage
         * @param {*} fila 
         */
        eliminar(fila) {
            console.log("Fila", fila);
            automotores.splice(fila, 1)
            localStorage.setItem("lista_automotores", JSON.stringify(automotores))
            listarAutomotores()
        }
    }
})