/**Par de chave representa um objeto */
const prod1 = {}
/**Colocar um nome no objeto prod1*/
prod1.nome = 'Celular Ultra Mega'
/**Dar um valor */
prod1.preco = 4998.9
/**Desconto do produto */
prod1['Desconto legal']= 0.40 //evitar atributios com espaço
console.log(prod1)

/**
 * e possivel ter uma estrutura aninhada de objetos
 */
const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj:{
        blabla: 1,
        obj:{
            blabla: 2
        }
    }
}

/**Isso e um Json pois e um formato textual */
'{"Nome:" "Camisa polo", "preco": 79.90}'

console.log(prod2)