let isAtivo = false
console.log("Estado: "+isAtivo);

/*
false = o estado estara falso no valor booleando
true  = o estado estara verdadeiro no valor booleando
*/

isAtivo = true
console.log("Estado: "+isAtivo);

/**
 * para saber se o valor e verdadeiro ou falso
 * use !!
 */

isAtivo = 1
console.log("O valor e: "+!!isAtivo); //mostra true por que 1 = verdadeiro e 0 = false

console.log("Estado de !true: "+!true); // vai ser false
console.log("Estado de !false: "+!false);// vai ser true

console.log("Os verdadeiros");
console.log("Estado de 3: "+!!3);
console.log("Estado -1: "+!!-1);
console.log("Estado de string vazia -->'' seria: "+!!' ');
console.log("Estado de um texto -->'' seria: "+!!'texto');
console.log("Estado de -1: "+!!-1);
console.log("Estado de um objeto literal: "+!!{});
console.log("Estado de um array: "+!![]);
console.log("Estado de infinity: "+!!Infinity);
/**esses pegam o resultado se der pre resolver vai ser true
 * se não como o 0 vai da false
 */
console.log("Estado de isAtivo com true: "+ !!(isAtivo = true))
console.log("Estado de isAtivo com 33: "+ !!(isAtivo = 33))
console.log("Estado de isAtivo com 0 que daria false como esse: "+ !!(isAtivo = 0))
console.log("-----------------------------------------");

/*
 * os valores
 * que são false
 */
console.log("\n\nOs falsos");
console.log("Estado de 0: "+!!0);
console.log("Estado de string vazia: "+!!'');
console.log("Estado de null: "+!!null);
console.log("Estado de NaN: "+!!NaN);
console.log("Estado de undefined: "+!!undefined);
console.log("Estado da atribução de isAtivo = false vai ser: "+!!(isAtivo = false));

console.log('\n\nPara finalizar...');
/**
 * Mostra se tiver 1 verdadeiro o retorno sera true se todos for falso o retorno sera false
 *  o ou --> || = ou 
 */
console.log("Valor: "+!!('' || null || 0 || ' '))

/**
 * Imprimiu Lucas inves de desconhecido pois tinha valor
 * e era true o nome se não tivesse nada teria imprimido
 * Desconhecido
 */
let nome = 'Lucas'
console.log(nome || 'Desconhecido');