function calcularCostoTotal(tipoLavadora, cantidad, horasAlquiler) {
    let costoPorHora = tipoLavadora === 1? 4000 : 3000;
    let total = cantidad*horasAlquiler*costoPorHora;
    
    if(cantidad >3) {
    total *= 0.97;
    }
    
    return total;
    }
    
    function jugar(){
    let tipoLavadora = Number(prompt("Ingrese tipo de lavadora 1(grande) - 2(pequeña)"))
    let cantidad = Number(prompt("Ingrese la cantidad  de lavadoras que desea alquilar"))
    let horasAlquiler = Number(prompt("Ingrese la cantidad de horas que desea alquilar la/s lavadora/s"))
    let total = calcularCostoTotal(tipoLavadora, cantidad, horasAlquiler)
    
    alert(`Costo total por alquilar ${cantidad} lavadoras tipo ${tipoLavadora} por ${horasAlquiler} horas: $${total}`)
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