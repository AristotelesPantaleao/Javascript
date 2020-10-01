// Tipos em JavaScript: String.

const escola = "Cod3r"

// O método charAt() retorna o caractere especificado a partir de uma string.
console.log(escola.charAt(4))
console.log(escola.charAt(5))

// O método charCodeAt() retorna um inteiro entre 0 e 65535 representando a unidade de código UTF-16 em seu dado índice.
console.log(escola.charCodeAt(3))

// O método indexOf() retorna o primeiro índice em que o elemento pode ser encontrado no array, retorna -1 caso o mesmo não esteja presente.
console.log(escola.indexOf('3'))

// O método substring() retorna um subconjunto de uma string entre um indice e outro, ou até o final da string.
console.log(escola.substring(1))
console.log(escola.substring(0,3))

// O método concat() retorna um novo array contendo todos os arrays ou valores passados como parâmetro.
console.log('Escola '.concat(escola).concat("!"))

// O método replace() retorna uma nova string com algum ou todas as combinações do padrão substituído por um substituto.
console.log(escola.replace(3,'e'))

//O método split() divide um objeto String em um array de strings ao separar a string em substrings.
console.log('Ana,Maria,Pedro'.split(','))