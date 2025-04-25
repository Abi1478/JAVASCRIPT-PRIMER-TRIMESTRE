const esPrimo = (num) => {
    if (num < 2) return false

    for (let i = 2; i < num; i++) { 
        if (num % i === 0) return false
    }

    return true
};

console.log(esPrimo(7));  
console.log(esPrimo(10)); 
console.log(esPrimo(13)); 
console.log(esPrimo(25)); 
console.log(esPrimo(1));