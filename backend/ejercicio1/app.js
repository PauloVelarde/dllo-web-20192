//1. Importar framework express
const express = require('express')
const cors = require('cors')

//2. Crear la instancia de express
const app = express()
app.use(cors())
//3. Crear las rutas
app.use('/home', function (request, response) {
    response.status(500).send("Hola mundo desde API")
}

)

const port=3000
app.listen(port, ()=>{
    console.log("Mi API corre en: http://localhost:"+port)
})


