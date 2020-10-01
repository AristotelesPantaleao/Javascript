// Usando Template String

const nome = 'Rebeca'

const concatenacao = 'Olá '+ nome + '!'
const template = `Olá ${nome}!`
console.log(concatenacao,template)

// espressões

console.log(`1 + 1 = ${1+1}`)

// O método toUpperCase() retorna o valor da string chamada convertida para maiúscula.
const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)