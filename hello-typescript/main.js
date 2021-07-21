var minhaVar = 'minha vairavel';
function minhaFunc(x, y) {
    return x + y;
}
//ECMAScript 2015
//Precisamos de um transpiler: transforma ES em JS!
// Compila codigo ECMAScript15 em JS purto (vanila)
//Exemplo let no lugar de num
var num = 3;
var PI = 3.141;
//arrow functions
var numeros = [1, 2, 3];
numeros.map(function (valor) {
    return valor * 2;
});
numeros.map(function (valor) {
    return valor * 2;
});
//para REACT babel é o transpiler para JS puro.
var Matematica = /** @class */ (function () {
    function Matematica() {
    }
    Matematica.prototype.soma = function (x, y) {
        return x + y;
    };
    return Matematica;
}());
var n1 = 'sdfas';
n1 = 4;
