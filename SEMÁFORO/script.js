let luces = document.querySelectorAll(".luz");
let boton = document.getElementById("interruptor");
let encendido = false;
let indice = 0; 
let intervalo = null;

function cambiarLuz() {
    //Apagar todas las luces
    luces.forEach(luz => luz.classList.remove("encendido"));

    //Encender la luz correspondiente 
    luces[indice].classList.add("encendido");

    //Para pasar a la siguiente luz (rojo -> amarillo -> verde)
    indice = (indice + 1) % luces.length;
}

function iniciarSemaforo() {
    if (!encendido) {
        //si esta apagado, encenderlo
        encendido = true;
        boton.textContent = "Apagar"; // Cambia el texto  del boton
        indice = 0; //Reinicia la secuencia desde rojo
        cambiarLuz();
        intervalo = setInterval(cambiarLuz, 2000); //cambia cada 2 segundos
    } else {
        //si esta encendido, apagarlo
        encendido = false;
        boton.textContent = "Encender"; //Cambia el texto del botón
        clearInterval(intervalo); //Detiene el cambio de luces
        intervalo = null; //Reinicia la variable de control
        luces.forEach(luz => luz.classList.remove("encendido"));
    }
}


boton.addEventListener("click", iniciarSemaforo);