var app = new Vue({
  el: "#app",
  data: {
    automotor: {},
    filaAModificar: null,
    automotores: []
  },
  methods: {
    // Obtener la lista de automotores desde el localstorage
    listarAutomotores() {
      //Cargar automotores del localstorage
      let str_automotores = localStorage.getItem("lista_automotores");
      // Parse a Array
      this.automotores = JSON.parse(str_automotores);
      if (this.automotores == null) {
        this.automotores = [];
      }
    },

    //Funcion para crear un automotor
    crearAutomotor() {
      let es_valido = this.validarDatos(this.automotor);
      if (es_valido) {
        //Agregar el automotor a una lista
        this.automotores.push(this.automotor);
        localStorage.setItem(
          "lista_automotores",
          JSON.stringify(this.automotores)
        );
        //Limpio los datos
        this.automotor = {};
      }
      this.listarAutomotores();
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
        alert("La placa debe de contener 6 digitos");
        return false;
      }
      return true;
    },

    /**
     * PASO 1: Obtener la fila - OK
     * PASO 2: Eliminar el objeto de la fila pista "splice"
     * PASO 3: Actualizar el localStorage
     * @param {*} fila
     */
    eliminar(fila) {
      this.automotores.splice(fila, 1);
      localStorage.setItem(
        "lista_automotores",
        JSON.stringify(this.automotores)
      );
      this.listarAutomotores();
    },

    /**
     * Accion de modificar de la tabla
     * @param {*} index
     */
    modificar(index) {
      this.filaAModificar = index;
      this.automotor = Object.assign({}, this.automotores[index]);
    },

    /**
     * Funcion cuando se guarda la informacion despues de editar
     */
    modificarGuardar() {
      let es_valido = this.validarDatos(this.automotor);
      if (es_valido) {
        this.automotores.splice(this.filaAModificar, 1, this.automotor);
        localStorage.setItem(
          "lista_automotores",
          JSON.stringify(this.automotores)
        );
        this.listarAutomotores();
        this.automotor = {};
        this.filaAModificar = null;
      }
    }
  }
});
