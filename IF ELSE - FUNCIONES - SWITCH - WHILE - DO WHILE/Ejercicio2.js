function jugar(){
    let numero = Number(prompt("Ingrese un número"));
    
    if(numero % 2 === 0) {
        alert("El numero es par.");
    } else {
        alert("El numero es impar.");
    }
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