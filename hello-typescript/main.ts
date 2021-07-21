var minhaVar = 'minha vairavel';

function minhaFunc(x,y){
    return x + y;
}

//ECMAScript 2015
//Precisamos de um transpiler: transforma ES em JS!

// Compila codigo ECMAScript15 em JS purto (vanila)

//Exemplo let no lugar de num

let num = 3;
const PI = 3.141;

//arrow functions

var numeros = [1, 2, 3];
numeros.map(function(valor){
    return valor*2;
});

numeros.map((valor) => { //ES2015
    return valor * 2;
})

//para REACT babel é o transpiler para JS puro.

class Matematica{
    soma(x,y){
        return x+y;
    }
}

//var n1: string = 'sdfas';
var n1: any = 'sdfas';
n1 = 4;