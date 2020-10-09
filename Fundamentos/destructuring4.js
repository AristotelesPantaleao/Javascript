function rand([min = 0, max = 1000]){
    if( min > max ) [min,max] = [max,min]
    // A função Math.random() retorna um número pseudo-aleatório no intervalo [0, 1[, ou seja, de 0 (inclusivo) até, mas não incluindo, 1 (exclusivo)
    // que depois você pode dimensionar para um intervalo desejado.
    const valor = Math.random() * (max - min) + min
    // A função Math.floor(x) retorna o menor número inteiro dentre o número "x".
    return Math.floor(valor)
}

console.log(rand([50,40]))
console.log(rand([992]))
console.log(rand([,10]))
console.log(rand([]))
//console.log(rand())