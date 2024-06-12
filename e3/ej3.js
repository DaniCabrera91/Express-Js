// // Crear un archivo con el nombre ej3.js
// // Levantar un servidor de Express
const express = require('express')
const puerto = 3000
const app = express()

app.listen(puerto, () => {
 console.log(`Servidor levantado en el puerto ${puerto}`)
})

const productos = {
    description: 'Productos',
   items: [
     { id: 1, nombre: 'Taza de Harry Potter' , precio: 300},
     { id: 2, nombre: 'FIFA 22 PS5' , precio: 1000},
     {  id: 3, nombre: 'Figura Goku Super Saiyan' , precio: 100},
     {  id: 4,  nombre: 'Zelda Breath of the Wild' , precio: 200},
     {  id: 5,  nombre: 'Skin Valorant' , precio: 120},
     {  id: 6, nombre: 'Taza de Star Wars' , precio: 220}
   ]
 }

const productsItems = productos.items;  
app.use(express.json())

// Al llamar a localhost:3000/products se debe mostrar el siguiente JSON:
app.get('/products', (req, res) => {
    res.status(200).send(productos);
});

// Crear endpoint para poder crear un producto nuevo
app.post('/products', (req, res) => {
    console.log(productsItems);
    const {nombre, precio} = req.body
    const newProduct = {
        id: productsItems.length +1,
        nombre,
        precio
    }
    if (!nombre || !precio){
        res.status(400).send({message: "rellena todos los campos"})
    }else{
        productsItems.push(newProduct)
        res.status(200).send(productos)
    }
})

// Crear endpoint para poder actualizar un producto
app.put('/products/:id', (req, res) => {
    const productId = parseInt(req.params.id, 10);
    const filterById = productsItems.some(item => item.id === +req.params.id)
if (filterById){
    productsItems.forEach((item) => {
        if (item.id == productId) {
            item.nombre = req.body.nombre ? req.body.nombre : item.nombre
            item.precio = req.body.precio ? req.body.precio : item.precio
            res.status(200).send(item)
        }
    })
}else {

res.status(400).send({message: 'Error: No encontramos el producto'})
}    
})

// Crear endpoint para poder eliminar un producto
app.delete('/products/id/:id', (req, res) => {
    const productId = parseInt(req.params.id, 10);
    const deleteById = productsItems.some(item => item.id === +req.params.id)
    
    if (deleteById) {
        const deleteItem = productsItems.filter((item) => item.id === productId)
        res.status(200).send(deleteItem)
    } else { 
        res.status(400).send({message: 'El producto que se quiere eliminar no existe'})
    }
})

// Crear filtro por precio de producto
app.get('/products/filter/price', (req, res) => {
    const { min, max } = req.query;
    const filteredProducts = products.filter(
      product => product.precio >= parseInt(min) && product.precio <= parseInt(max)
    );
    res.json({ description: 'Productos filtrados por precio', items: filteredProducts });
  });

// Crear filtro que muestre los productos con un precio entre 50 y 250.

// Crear un filtro que cuando busque en postman por parámetro el id de un producto me devuelva ese producto

// Crear un filtro que cuando busque en postman por parámetro el nombre de un producto me devuelva ese producto
