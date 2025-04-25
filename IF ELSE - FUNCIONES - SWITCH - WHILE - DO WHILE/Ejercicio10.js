function calcularPrecioCopia(copias) {
    let precioPorCopia;

if(copias < 500) {
    precioPorCopia = 120;
} else if(copias < 750) {
    precioPorCopia = 100;
} else if (copias < 1000) {
    precioPorCopia = 80;
} else {
    precioPorCopia = 50;
}

return precioPorCopia;
}

function jugar(){
let copias = Number(prompt("Ingrese la cantidad de copias que desea imprimir"));
let precioPorCopia = calcularPrecioCopia(copias)

let precioTotal = copias*precioPorCopia;
alert(`Precio por copia: $${precioPorCopia}. Costo total $${precioTotal}`);

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