let estudiante = {
    nombre: "Sebastian",
    materias: ["Ingles", "Filosofía"]
}

function agregarMateria(est, nuevaMateria) {
    est.materias.push(nuevaMateria)
    for (let clave in estudiante) {
        console.log(clave + ": " + estudiante[clave]);
    }
}

agregarMateria(estudiante, ["Matemáticas", "Programación", "Etica"])
