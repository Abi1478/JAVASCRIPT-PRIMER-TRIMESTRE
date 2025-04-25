function jugar(){
    let ang1 = Number(prompt("Ingrese el valor del primer angulo"));
    let ang2 = Number(prompt("Ingrese el valor del segundo angulo"));
    let ang3 = Number(prompt("Ingrese el valor del tercer angulo"));
    let suma = (ang1+ang2+ang3);
    
    if(suma === 180) {
        alert("El triangulo es válido.");
    } else {
        alert("El triangulo no es válido.");
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