const express = require('express')

const router = express.Router()

router.get('/tareas', (request, response) => {
response.send("Estoy en el get de tareas")
})

router.put('/tareas/:id', (request, response) => {
    response.send("Estoy en el put de tareas")
})

router.post('/tareas', (request, response) => {
    let body = request.body
    console.log(body);
    
    response.send("Estoy en el post de tareas")
})

router.delete('/tareas/:id', (request, response) => {
    let id = request.params.id
    console.log(id);
    
    response.send("Estoy en el delete de tareas")
})

module.exports = router;