const valores = [7.7, 8.9 , 6.3, 9.2];
console.log("Valores do array:"+valores[0] +" e "+ valores[3]);
console.log("Valores do array do indice [4]:"+valores[4]);

valores[4] = 10;
console.log("Valores do array ate o indice 10 com 6 empty items:"+valores);

/**TAMANHO DO ARRAY */
console.log(valores.length)

/**Adicionar valores do array */
valores.push({id: 3}, false, null, 'teste')
console.log("Array = "+valores);

/**Retirar o ultimo valor de seu array */
console.log("Valore removido: "+valores.pop())
console.log("Array -1 = "+valores);

/**Array = object */
console.log("Tipo do array: "+typeof valores)

/**
 * Deletar o indice do array
 */
delete valores[0]
console.log("Array"+valores);
console.log("Tamanho do array com indice deletado: "+valores.length);