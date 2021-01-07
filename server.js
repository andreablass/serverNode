var express = require('express')
var app = express()

app.use('/', (req, res) => res.send("Hola Andre "))

app.listen(3000,()=>console.log("Escuchando el puerto 3000"))