//Funcao sem retorno
function imprimirSoma(a, b){
    console.log(a +b);

}
//Chamar a funçao e passar os valores para funçao
imprimirSoma(2, 3)

//undefined
imprimirSoma(2);

//soma so a quantidade valores que a funçao recebeu
//como paramentro
imprimirSoma(2, 3, 4, 5, 6, 7, 8);

//Not a Number or NaN
imprimirSoma();

//Funcao com retorno
function soma(a, b = 2){
    return a+b;
}
//Chamou a funçao e somou com retorno 
console.log("Soma: "+soma(2, 3))
// resultado vai ser 2 por causa que umas das variaveis
//ja por padrao e 0 entao 2+0=2
console.log("Soma: "+soma(2));