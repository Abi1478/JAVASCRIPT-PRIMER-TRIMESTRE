// 1. Obtener los botones HTML y agregar eventos cuando se haga click
document.getElementById("iniciarJuego").addEventListener("click", iniciarJuego);
document.getElementById("tercerTiroBtn").addEventListener("click", tercerTiro);

// 2. Variable para almacenar los puntajes
let puntajeJ1 = 0;
let puntajeJ2 = 0;
let turno = 1;

// 3. Función para generar un numero aleatorio entre 1 y 10
function generarNumeroAleatorio() {
    return Math.floor(Math.random() * 10) + 1;
}

// 4. Function para actualizar la pantalla con los puntajes
function actualizarPantalla() {
    document.getElementById("puntajes").innerHTML = `Jugador 1: ${puntajeJ1} | Jugador 2: ${puntajeJ2}`;
}

// 5️. Función que inicia el juego
function iniciarJuego() {
    puntajeJ1 = 0;
    puntajeJ2 = 0;
    turno = 1;
    document.getElementById("ganador").innerText = "";  // Limpiamos el mensaje del ganador
    document.getElementById("tercerTiroBtn").disabled = true;  // Desactivamos el tercer tiro
    jugarRonda();
}

// 6️. Función que juega las primeras dos rondas automáticamente
function jugarRonda() {
    for (let i = 1; i <= 2; i++) {
        let numJ1 = generarNumeroAleatorio();
        let numJ2 = generarNumeroAleatorio();
        
        puntajeJ1 += numJ1;
        puntajeJ2 += numJ2;
        
        alert(`Ronda ${i}:\nJugador 1 sacó ${numJ1} \nJugador 2 sacó ${numJ2}`);
    }

    actualizarPantalla();
    document.getElementById("tercerTiroBtn").disabled = false; // Activamos el botón del tercer tiro
}

// 7️. Función que maneja el tercer tiro
function tercerTiro() {
    let decisionJ1 = confirm("Jugador 1, ¿Deseas tomar un número en el tercer tiro?");
    let decisionJ2 = confirm("Jugador 2, ¿Deseas tomar un número en el tercer tiro?");
    
    if (decisionJ1) {
        let numJ1 = generarNumeroAleatorio();
        puntajeJ1 += numJ1;
        alert(`Jugador 1 tomó ${numJ1}`);
    }

    if (decisionJ2) {
        let numJ2 = generarNumeroAleatorio();
        puntajeJ2 += numJ2;
        alert(`Jugador 2 tomó ${numJ2}`);
    }

    determinarGanador();
}

// 8️. Función que determina quién es el ganador
function determinarGanador() {
    let resultado = "";

    if (puntajeJ1 > 21 && puntajeJ2 > 21) {
        resultado = "¡Ambos jugadores se pasaron de 21! No hay ganador.";
    } else if (puntajeJ1 > 21) {
        resultado = "Jugador 1 se pasó de 21. ¡Jugador 2 gana!";
    } else if (puntajeJ2 > 21) {
        resultado = "Jugador 2 se pasó de 21. ¡Jugador 1 gana!";
    } else {
        let difJ1 = 21 - puntajeJ1;
        let difJ2 = 21 - puntajeJ2;

        if (difJ1 < difJ2) {
            resultado = "¡Jugador 1 gana!";
        } else if (difJ2 < difJ1) {
            resultado = "¡Jugador 2 gana!";
        } else {
            resultado = "¡Empate!";
        }
    }

    document.getElementById("ganador").innerText = resultado;
    actualizarPantalla();
}