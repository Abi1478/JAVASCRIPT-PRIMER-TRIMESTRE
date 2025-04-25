let producto = {
    nombre: "Chocorramo",
    precio: 3000,
    stock: 5
}

function actualizarStock(obj, cantidad) {
    obj.stock -= cantidad

    if (obj.stock <= 0) {
        console.log("El producto se encuentra agotado")
    } else {
        console.log(`Stock actual: ${obj.stock}`)
    } 
}

actualizarStock(producto, 3);
actualizarStock(producto, 8);