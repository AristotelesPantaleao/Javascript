// Expressão(nota>=7) operador ternário (?) resultado true(Aprovado) : resultado false(Reprovado)
const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

console.log(resultado(7.1))
console.log(resultado(6.7))