const factorial = (num) => {
    
    let resultado = 1;

    if(num < 0) return "Ingrese un número positivo"

    for(let i = 1; i <= num; i++) {
        resultado *= i
    }
    return resultado
}

console.log(factorial(7))