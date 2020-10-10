function tratarErroELancar(erro){
    //throw new Error('...')
    //throw 10
    //throw true
    //throw 'mensagem'
    throw{
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNome(obj){
    try{
        // O método toUpperCase() retorna o valor da string chamada convertida para maiúscula.
        console.log(obj.name.toUpperCase() + '!!!')
    } catch(e){
        tratarErroELancar(e)
    }finally{
        console.log('final')
    }
}

const obj = {nome: 'Roberto'}
imprimirNome(obj)