const valores = [7.7,8.9,6.3,9.2] // Forma literal

console.log(valores[0],valores[3])
console.log(valores[4])
valores[4] = 10
console.log(valores)

valores[10] = 10
console.log(valores)
//A propriedade length representa um inteiro de 32-bit sem sinal, que especifíca o número de elementos em um array.
console.log(valores.length) 
//O método push() adiciona um ou mais elementos ao final de um array e retorna o novo comprimento desse array.
valores.push({id: 3},false,null,'teste')
console.log(valores)
//O método pop() remove o último elemento de um array e retorna aquele elemento.
console.log(valores.pop())
delete valores[0]
console.log(valores)
//O operador typeof retorna uma string indicando o tipo de um operando.
console.log(typeof valores)