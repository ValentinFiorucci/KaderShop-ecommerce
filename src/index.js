const producto = {
  title: "buzo",
  descripcion: "cuello redondo",
  price: 4500
};

const productoColores = {
 ...producto,
 color: "negro",
 colordos: "azul",
 colortres: "turquesa",
 colorcuatro: "rosa" 
};
console.log(productoColores);


const productos = ['buzo', 'pantalon', 'patineta', 'remera'];

const nuevosProductos = [...productos, 'chomba', 'zapatillas'];

console.log(nuevosProductos);