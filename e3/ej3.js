const express = require('express')
const puerto = 3000
const app = express()

app.listen(puerto, () => {
 console.log(`Servidor levantado en el puerto ${puerto}`)
})

app.get('/products', (req, res) => {
    res.send({
         description: 'Productos',
        items: [
          { id: 1, nombre: 'Taza de Harry Potter' , precio: 300},
          { id: 2, nombre: 'FIFA 22 PS5' , precio: 1000},
          {  id: 3, nombre: 'Figura Goku Super Saiyan' , precio: 100},
          {  id: 4,  nombre: 'Zelda Breath of the Wild' , precio: 200},
          {  id: 5,  nombre: 'Skin Valorant' , precio: 120},
          {  id: 6, nombre: 'Taza de Star Wars' , precio: 220}
        ]
      })
})
// const productos = [
//     {
//          description: 'Productos',
//         items: [
//           { id: 1, nombre: 'Taza de Harry Potter' , precio: 300},
//           { id: 2, nombre: 'FIFA 22 PS5' , precio: 1000},
//           {  id: 3, nombre: 'Figura Goku Super Saiyan' , precio: 100},
//           {  id: 4,  nombre: 'Zelda Breath of the Wild' , precio: 200},
//           {  id: 5,  nombre: 'Skin Valorant' , precio: 120},
//           {  id: 6, nombre: 'Taza de Star Wars' , precio: 220}
//         ]
//       }
      
//    ]
   