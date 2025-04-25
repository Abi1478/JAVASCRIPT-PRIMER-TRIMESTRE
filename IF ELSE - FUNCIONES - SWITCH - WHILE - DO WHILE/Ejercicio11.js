function diagnosticarProblema(emitePitido, giraDisco, giraUnidad) {
    if(emitePitido === "Si" && giraDisco === "Si") {
        return "Está averiada.";
    }else if(emitePitido === "Si" && giraUnidad === "Si") {
        return "Póngase en contacto con el técnico de apoyo.";
    } else if(emitePitido === "Si" && giraUnidad === "No") {
        return "Verificar contactos de la unidad.";
    } else if(emitePitido === "No" && giraDisco === "No") {
        return "Traiga la computadora para repararla en la central.";
    }else if (emitePitido === "No" && giraDisco === "Si") {
        return "Compruebe las conexiones de altavoces.";
    }
}

function jugar(){
let emitePitido = prompt("La computadora emite un pitido al iniciarse? Si - No");
let giraDisco = prompt("El disco duro gira? Si - No");
let giraUnidad = prompt("La unidad gira? Si - No")

let resultado = diagnosticarProblema(emitePitido, giraDisco, giraUnidad);
alert(resultado);
}

jugar();
let opcion;
let continuar = true;
while (continuar) {
    opcion = Number(prompt("¿Qué desea hacer? (1) Intentarlo de nuevo (2) Volver al menú:"));
    switch (opcion) {
        case 1:
            jugar();
            break;
        case 2:
            window.location.href = "index.html";
            continuar = false;
            break;
        default:
            alert("Opción no válida. Intente de nuevo.")
    }
}