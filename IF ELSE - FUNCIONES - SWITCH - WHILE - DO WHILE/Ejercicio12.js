function jugar(){
    let modelo = Number(prompt("Ingrese el modelo de su auto"));
    let defectuosos = [119, 179, 189, 190, 191, 192, 192, 193, 194, 195, 221, 780];
    
    if(defectuosos.includes(modelo)) {
        alert("El automóvil está defectuoso, llevar a garantía.");
    } else {
        alert("Su automóvil no está defectuoso.");
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