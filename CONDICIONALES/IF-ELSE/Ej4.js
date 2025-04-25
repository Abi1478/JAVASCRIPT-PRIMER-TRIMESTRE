let señal = "norte";

if(señal == "norte") {
    console.log("El dron se mueve hacia el norte para patrullar la zona.");
} else if(señal =="sur") {
    console.lo("El dron se mueve hacia el sur para seguir al objetivo.");
} else if(señal == "este") {
    console.log("El dron gira y se desplaza hacia el este.");
} else if (Señal == "oeste") {
    console.log("El dron cambia de dirección hacia el oeste.");
} else if(señal == "stop") {
    console.log("El dron se detiene en su posición actual.");
} else {
    console.log("Señal no reconocida, esperando nueva instrucción.")
}