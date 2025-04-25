const precioProductos = [500, 1200, 300, 1500, 800]
const preciosAltos = precioProductos.some( p => p > 1000)
console.log(preciosAltos)