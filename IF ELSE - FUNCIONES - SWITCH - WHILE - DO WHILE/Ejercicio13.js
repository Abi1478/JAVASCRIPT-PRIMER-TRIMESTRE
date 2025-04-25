function jugar(){
    function calcularCostoCeluMovil() {
        let operador = prompt("Seleccione su operador (Tigo, Claro, Movistar)").toLowerCase();
        let minutos = parseInt(prompt("Ingrese la cantidad de minutos internacionales:"));
    
        let costoFijo = 0, costoMinuto = 0, costoPaqueteDatos = 0;
    
        if(operador === "tigo") {
            costoFijo = 45000;
            costoMinuto = 200;
            costoPaqueteDatos = 12000;
        } else if(operador === "claro") {
            costoFijo = 30000;
            costoMinuto = 100;
            costoPaqueteDatos = 18000;
        } else if(operador === "movistar") {
            costoFijo = 40000;
            costoMinuto = 250;
            costoPaqueteDatos = 8000;
        } else {
            alert("Operador no válido.");
            return;
        }
    
        let costoTotal = costoFijo + (minutos*costoMinuto) + costoPaqueteDatos;
        alert(`El costo total es: $${costoTotal}`)
    }
    
    calcularCostoCeluMovil();
    
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