let fs = require("fs");

//Clase Container que se encarga de guardar, borrar y traer la data de un archivo
class container {
  insert(NuevoProducto) {
    let ProductosData = fs.readFileSync("./Data.txt", "utf-8");
    let ProductosJSON = JSON.parse(ProductosData);
    ProductosJSON.Productos.push(NuevoProducto);
    fs.writeFileSync("./Data.txt", JSON.stringify(ProductosJSON));
  }
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
  deleteById(Id) {
    let ProductosData = fs.readFileSync("./Data.txt", "utf-8");
    let ProductosJSON = JSON.parse(ProductosData);
    ProductosJSON.Productos.splice(Id, Id);
    fs.writeFileSync("./Data.txt", JSON.stringify(ProductosJSON));
  }
  deleteAll() {
    fs.writeFileSync("./Data.txt", JSON.stringify({"Productos":[{}]}))
  }
}

//Clase Producto
class Productos {
  constructor(id, nombre, precio) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
  }
}
//Controladores producto
const Archivador = new container();

function addProducto(nombre, precio) {
  let Data = Archivador.selectAll();
  let i = 1;
  let registrado = false;
  Data.Productos.forEach((element) => {i++;});
  const NuevoProducto = new Productos(i, nombre, precio);

  Data.Productos.forEach((element) => {
    if (element.nombre == NuevoProducto.nombre) {
      registrado = true;
    }
  });
  if (registrado == false) {
    Data.Productos.push(NuevoProducto);
    fs.writeFileSync("./Data.txt", JSON.stringify(Data));
    return console.log(`El producto ${NuevoProducto.nombre} se registro correctamente`)
  } else {
    return console.log(`El producto ${NuevoProducto.nombre} ya esta registrado`);
  }
}
