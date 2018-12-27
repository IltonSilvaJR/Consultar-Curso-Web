const escola = "Cod3r"

//Vai retorna o ultimo caracter que seria "R"
console.log("Retorna na letra: "+escola.charAt(4))

//Vai retorna nada pelo fato de nao ter caracter 5
console.log("Retorna da letra: "+escola.charAt(5))

//Vai retorna o valor do item 3 da string escola o valor dele na tabela ascii
console.log("Valor da tabela ascii: "+escola.charCodeAt(3))

//Posição ou indice que o valor esta na palavra
/*
C: 0
o: 1
d: 2
3: 3
r: 4
*/
console.log("Indice: "+escola.indexOf('3'))

//de qual ate qual vai aparecer ex: 0,5 --> Aparece a palavra inteira mas 1,5 aparece od3r e se fosse 0,4 aparece cod3
console.log("Quantidade que vai aparecer: "+escola.substring(0, 4))

//concatenar juntar as palavras que forem pedidas
console.log('Escola '.concat(escola).concat("!"))

//replace pega a posição do indice indicado e troca pela palavra pedida que no caso foi o 3
console.log(escola.replace(3, 'e'))
//substituir todos os digitos pela letra pedida que no caso foi o e
console.log("Escola: "+escola.replace(/\d/, 'e')) //trocou 3 por e
console.log("Escola: "+escola.replace(/\w/, 'e')) // coloca o caracter pedido que no caso foi o 3 na primeira posiçao
console.log("Escola: "+escola.replace(/\w/g, 'e'))//troca tudo por e

//split transforma em array o caracter que for passado que no caso e a (",")
console.log('Ana,Maria,Pedro'.split(','))//gera um array
console.log('Ana,Maria,Pedro'.split(/,/)) //ou assim gera o mesmo que de cima
console.log('Ana,Maria,Pedro'.split(/./)) //gera uma coisa espacial diferente de cima

