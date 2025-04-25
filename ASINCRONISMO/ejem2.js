// Envío de un correo con 50% de probabilidad

const correo = new Promise((resolve, reject) => {
    Math.random()

    if(Math.random() < 0.5) {
        resolve("✅ Correo enviado!")
    } else {
        reject("❌ Error al enviar correo")
    }
})

correo

    .then(enviado => console.log(enviado))
    .catch(error => console.log(error))