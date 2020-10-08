// A função Math.ceil(x) retorna o menor número inteiro maior ou igual a "x".
console.log(Math.ceil(6.1))

const obj1 = {} // Forma Literal
obj1.nome= 'Bola'
// obj1 ['nome'] = 'Bola2'
console.log(obj1.nome)

function Obj(nome){
    this.nome = nome // atributo público
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')

console.log(obj2.nome)
console.log(obj3.nome)