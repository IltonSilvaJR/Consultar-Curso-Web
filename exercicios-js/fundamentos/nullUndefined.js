let valor //Não inicializada
//console.log(valor) //foi declarado mas não foi inicializado
//console.log(valor2) //Não existe ainda não foi declarado

valor = null //Ausencia de valor mas não aponta pra nenhum endereço na memoria
// console.log(null); 

    console.log(valor)

    const produto = {}

    /**Vai dar undefined */
    console.log("produto = "+produto.preco);
    console.log(produto)
    produto.preco = 3.50
    console.log("preço "+produto.preco);

    produto.preco = undefined //Evitar atribuir unefined e evite isso
    console.log("Tipo de produto.preco: "+!!produto.preco) // falso
    // delete.produto.preco // tirar um atributo de um preço
    console.log(produto);
    produto.preco = null //Sem preço
    console.log("Estado: "+!!produto.preco)
    console.log(produto)

    