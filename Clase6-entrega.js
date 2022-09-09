const { randomInt } = require('crypto');
const  express = require('express')
let fs = require("fs");

const app = express ()
const PORT = 8080
const server = app.listen(PORT,() =>{
    console.log(`Servidor HTTP escuchando en el puerto ${server.address().port}`)    
})

class container {
    selectAll() {
      let ProductosData = fs.readFileSync("./Data.txt", "utf-8");
      return ProductosData;
    }
  }
  
data = new container 
app.get('/Productos',(req, res) => {
    try {
        res.send(JSON.parse(data.selectAll()))
    } catch (error) {
        res.send("Error al encontrar la data")
    }
})
app.get('/ProductoAleatorio',(req, res) => {
    try {
        let dataJSON = JSON.parse(data.selectAll())
        let rango = Object.keys(dataJSON.Productos).length
        let numeroRandom = randomInt(rango)
        res.send(dataJSON.Productos[numeroRandom])
    } catch (error) {
        res.send("Error al encontrar la data")
    }
})