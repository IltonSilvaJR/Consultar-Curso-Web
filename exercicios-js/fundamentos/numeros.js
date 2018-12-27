const peso1 = 1.0
const peso2 = Number('2.0')

console.log("peso1 = "+peso1 +"\npeso2 = "+ peso2)
//verifica se e verdade ou não se e um Number ou não
console.log("E um valor inteiro?:"+Number.isInteger(peso1))

const avaliacao1 = 9.871
const avaliacao2 = 6.871
const total = (avaliacao1*peso1) + (avaliacao2 * peso2) //operação para calcular a media
const media = total / (peso1 + peso2) //operação para calcular a media

console.log("Media: "+media.toFixed(2)) //toFixed(2) = duas casas depois na virgula
console.log("Binario: "+media.toString(2))//retorna o valor em binario
console.log("Original: "+media.toString())//Retorna o valor original
console.log("Tipo de dado de media: "+typeof media)//Retorna o tipo
console.log("Tipo de dados de number: "+typeof Number)//retorna o tipo
