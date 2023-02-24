var idade = 2e-2;
console.log(idade);

// Qual o resultado da seguinte expressão?
var total = 10 + 5 * 2 / 2 + 20;
console.log(total);

// Crie duas expressões que retornem NaN
var $nan = 10;
var _nan = 'a';
var somaNan= $nan - _nan;
console.log(somaNan);
// Somar a string '200' com o número 50 e retornar 250
var $string = '200';
var $numero = 50;
var soma250 = $string + $numero;
console.log(+$string + $numero);
// Incremente o número 5 e retorne o seu valor incrementado
var incrementar = 5;
console.log(++incrementar)
// Como dividir o peso por 2?
var numero = +'80'/2;
var unidade = 'kg';
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso; // NaN (Not a Number)
console.log(pesoPorDois)