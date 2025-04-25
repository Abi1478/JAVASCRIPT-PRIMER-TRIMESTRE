const sumaDigitos = (num) => String(num).split('').reduce((acc, dig) => acc + Number(dig), 0)

console.log(sumaDigitos(345))