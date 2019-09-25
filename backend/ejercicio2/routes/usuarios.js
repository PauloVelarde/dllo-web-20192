const express = require('express')

const router = express.Router()

router.get('/usuarios', (request, response) => {
response.status(500).send({ "info" : "Estoy en el get de usuarios"})
})

router.put('/usuarios/:id', (request, response) => {
    response.send("Estoy en el put de usuarios")
})

router.post('/usuarios', (request, response) => {
    let body = request.body
    console.log(body);
    
    response.send("Estoy en el post de usuarios")
})

router.delete('/usuarios/:id', (request, response) => {
    let id = request.params.id
    console.log(id);
    
    response.send("Estoy en el delete de usuarios")
})

module.exports = router;