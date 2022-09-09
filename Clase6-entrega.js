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
      let ProductosJSON = JSON.parse(ProductosData);
      return ProductosJSON;
    }
    selectId(Id) {
      let ProductosData = fs.readFileSync("./Data.txt", "utf-8");
      let ProductosJSON = JSON.parse(ProductosData);
      return ProductosJSON.Productos[id];
    }
    devolverLargoArray() {
        let ProductosData = fs.readFileSync("./Data.txt", "utf-8");
        let ProductosJSON = JSON.parse(ProductosData);
        return ProductosJSON;
      }
  }
  
data = new container 
app.get('/Productos',(req, res) => {
    try {
        res.send(data.selectAll())
    } catch (error) {
        console.log("Error al encontrar la data")
    }
})
app.get('/ProductosAleatorio',(req, res) => {
    try {
        res.send(data.selectId(1))
    } catch (error) {
        console.log("Error al encontrar la data")
    }
})