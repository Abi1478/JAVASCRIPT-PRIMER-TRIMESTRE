function calcularNumMayor(num1, num2, num3) {
    let mayor = Math.max(num1, num2, num3);
    
    return mayor;
    }
    
    function jugar(){
    let num1 = Number(prompt("Ingrese el primer número"));
    let num2 = Number(prompt("Ingrese el segundo número"));
    let num3 = Number(prompt("Ingrese el tercer número"));
    
    let mayor = calcularNumMayor(num1, num2, num3);
    alert(`El numero mayor es: ${mayor}`);
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