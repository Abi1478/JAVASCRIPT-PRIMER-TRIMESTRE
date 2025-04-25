let persona = {
    nombre: "Abigail",
    edad: 16,
    pais: "Colombia",
    carrera: "Desarrolladora"
}

function verificarPropiedad(obj, propiedad) {
    if (propiedad in obj) { //También se puede hacer así -> if(obj.hasOwnProperty(propiedad)) { 
        console.log("Propiedad existente")
        return true;
    } else {
        console.log("Propiedad no encontrada")
        return false;
    }
}

console.log(verificarPropiedad(persona, "pais"));
console.log(verificarPropiedad(persona, "email"));