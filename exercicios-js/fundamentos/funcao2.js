// Armazendo uma funcao em uma variavel
const imprimirSoma = function(a, b){
    console.log(a + b)
}
imprimirSoma("Resultado 01: "+2, 3)

// Armazendo uma funcao arrow em uma variavel
const soma = (a, b) =>{
    return a + b
}

console.log("Resultado 02: "+soma(1, 2))

// Retorno implicito
const subtracao = (a, b) => a-b

console.log("Resultado 03: "+subtracao(5, 5))
