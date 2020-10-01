// Tipos em JavaScript: Number.

// Formas de declarar números.

// O objeto JavaScript Number é um objeto encapsulado que permite você trabalhar com valores numéricos. Um objeto Number é criado utilizando o construtor Number().

const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)

// Alguns métodos dentro da função Number.

// Saber se o valor de peso1 é inteiro.
console.log(Number.isInteger(peso1))

// Saber se o valor de peso2 é inteiro.
console.log(Number.isInteger(peso2))

// Algumas operações

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2

const media = total / ( peso1 + peso2 )

console.log(media)

// O método toFixed() formata um número utilizando notação de ponto fixo.
console.log(media.toFixed(2))

// Converter o valor númerico para String.
// O método toString() retorna uma string representando o objeto Number especificado.
console.log(media.toString())

console.log(media.toString(2)) // converte em binário.

console.log(typeof media)
console.log(typeof Number)