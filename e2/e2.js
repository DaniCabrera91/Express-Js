const express = require('express')
const puerto = 3000
const app = express()

app.listen(puerto, () => {
 console.log(`Servidor levantado en el puerto ${puerto}`)
})

app.get('/', (req, res) => {
    res.send('Hola bienvenidos')
})

app.get('/Productos', (req, res) => {
    res.send('listado de productos')
})

app.use(express.json())

app.post('/Productos', (req, res) => {
 res.status(200).send(`crear un producto ${req.body.name}`)
})

app.put('/Productos', (req, res) => {
    res.status(200).send(`actualizar un producto ${req.body.name}`);
})

app.delete('/Productos', (req, res) => {
    res.status(200).send('borrar un producto');
})



app.get('/Usuarios', (req, res) => {
    res.status(200).send('listado de usuarios')
})

app.use(express.json())

app.post('/Usuarios', (req, res) => {
 res.status(200).send(`crear un usuario ${req.body.name}`)
})

app.put('/Usuarios', (req, res) => {
    res.status(200).send(`actualizar un usuario ${req.body.name}`);
})

app.status(200).delete('/Usuarios', (req, res) => {
    res.send('borrar un usuario');
})