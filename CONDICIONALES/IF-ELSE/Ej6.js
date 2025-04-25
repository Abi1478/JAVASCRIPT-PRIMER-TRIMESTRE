let dia = "Jueves";
let actividad = "";

if(dia == "Lunes") {
    actividad = "Matemáticas";
} else if(dia == "Martes") {
    actividad = "Inglés";
} else if(dia == "Miercoles") {
    actividad = "Front-end";
} else if(dia == "Jueves") {
    actividad = "Back-end";
} else if(dia == "Viernes") {
    actividad = "Deportes";
} else {
    actividad = "Descanso";
}

console.log(`La actividad del día ${dia} es ${actividad}.`);