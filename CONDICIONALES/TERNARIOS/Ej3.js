let estacionamientoLleno = true;
let nombreEstacionamiento ="Unicentro"

let mensaje = estacionamientoLleno ?
    `El estacionamiento ${nombreEstacionamiento} está lleno.` :
    `El estacionamiento ${nombreEstacionamiento} tiene espacios disponibles.`;

console.log(mensaje)