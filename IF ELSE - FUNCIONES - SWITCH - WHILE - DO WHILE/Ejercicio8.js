function calcularCosto(nombreCliente, dias) {
    let costo;
    
    if(dias === 15) {
        costo = 18000;
    } else if(dias === 30) {
        costo = 35000;
    } else if(dias === 90) {
        costo = 86000;
    }
    
    return costo;
    }
    
    function jugar(){
    let nombreCliente = prompt("Ingrese su nombre");
    let dias = Number(prompt("Ingrese la cantidad de días que desea entrenar (15 - 30 - 90 (3 meses))"));
    let costo = calcularCosto(nombreCliente, dias)
    
    alert(`Señor/a ${nombreCliente} el costo del gimnasio por entrenar ${dias} días es: $${costo}`);
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