const express = require('express')
const bodyparse = require('body-parser')
const app = express()

app.use(bodyparse())

app.use( (request, response, next) => {
   console.log('Paso por acá')
   next()
})

const tarea = require('./routes/tareas')
app.use(tarea)

const usuarios = require('./routes/usuarios')
app.use(usuarios)

app.use('/', (request, response) => {
   response.status(404).send("<h1>Not found</h1>")
})


const port = 3100
app.listen(port, function () {
   console.log('API run in http://localhost:' + port)
})
