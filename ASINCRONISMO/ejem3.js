// Cargar perfil de datos despues de 2 segundos

function cargarPerfil(){
    return new Promise((resolve) => {
    setTimeout(() => {
        resolve({
            nommbre: "Abi",
            edad: 16,
            nacionalidad: "colombiana"
        })
    }, 2000)
})
}

cargarPerfil()
  .then(perfil => console.log("Perfil cargado:", perfil))