let usuario = {
    nombre: "Abigail",
    edad: 16,
    correo: "abiguis53@gamil.com"
}

function imprimirDatos() {
    for (let clave in usuario) {
        console.log(clave + ": " + usuario[clave]);
    }
}
imprimirDatos()