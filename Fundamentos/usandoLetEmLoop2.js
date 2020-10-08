const funcs = []

// for ( variável;condição;incremento) {}
for(let i = 0; i < 10; i++){
    //O método push() adiciona um ou mais elementos ao final de um array e retorna o novo comprimento desse array.
    funcs.push(function(){// Função anônima
        console.log(i)
    })
}

funcs[2]()
funcs[6]()
funcs[8]()