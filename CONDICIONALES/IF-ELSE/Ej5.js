let encendido = true;
let velocidad = 50;
let combustible = 0;

if(encendido) {
    console.log(`El coche está encendido`);
    if(combustible > 0) {
        if(velocidad == 0) {
            console.log(`el auto está detenido`);
        } else if(velocidad > 0 && velocidad <= 120) {
            console.log(`El auto está en movimiento a una velocidad de ${velocidad} Km/h`)
        } else {
            console.log(`¡Cuidado! Exceso de velocidad`)
        }
    } else {
        console.log(`No hay combustible, el auto se apagará`);
    }
} else {
    console.log(`Encienda el auto para comenzar a conducir`);
}