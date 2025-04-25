// Simulador de espera de comida

const promesa = new Promise((resolve, reject) => {
    setTimeout (() => {
    const pedidoLLega = true

        if(pedidoLLega) {
            resolve(" 🍔Tu pedido llegó")
        } else {
            reject("❌ No llegó el pedido")
        }
    }, 3000)
})

promesa 

    .then(mensaje => console.log(mensaje))
    .catch(error => console.log(error))