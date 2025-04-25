let usuarioBase = "sebas24";
let passwordBase = "sbs123";
let usuarioIngresado = "sebas24";
let passwordIngresado = "sbs";

if(usuarioBase == usuarioIngresado && passwordBase == passwordIngresado) {
    console.log(`Bienvenido ${usuarioIngresado}, acceso concedido.`);
} else {
    console.log(`Acceso denegado, verifique sus credenciales.`);
}