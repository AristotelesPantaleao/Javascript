function rand( {min = 0, max = 1000 }){
    // A função Math.random() retorna um número pseudo-aleatório no intervalo [0, 1[, ou seja, de 0 (inclusivo) até, mas não incluindo, 1 (exclusivo)
    // que depois você pode dimensionar para um intervalo desejado.
    const valor = Math.random() * (max-min) + min
    // A função Math.floor(x) retorna o menor número inteiro dentre o número "x".
    return Math.floor(valor)
}

const obj = { min: 40, max: 50}
console.log(rand(obj))
console.log(rand({min: 955}))
console.log(rand({}))
//console.log(rand())