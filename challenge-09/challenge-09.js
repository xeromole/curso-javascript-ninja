/*
Crie uma IIFE que envolva todo o código desse arquivo. Faça também a
indentação correta do código, para ficar dentro da IIFE.
fun


/*
Analise as funções abaixo (`myFunction`, `myFunction2` e `myFunction3`, e
ajuste o posicionamento das variáveis e funções internas, para que os códigos
dentro de `console.log` que estão retornando `undefined` retornem o valor
correto da variável ou função chamada.
*/

(function(){



function myFunction() {
     var number1 = 10;
    var number2 = 20;
    console.log( 'Na função `myFunction`, o primeiro número é', number1 );
    console.log( 'Na função `myFunction`, o segundo número é', number2 );
    return number1 + number2;
    
}
myFunction();

/*
    myFunction2();
*/
function myFunction2() {

    var number1 = 10;
    var number2 = 20;
    var sum = function sum() {
        return number1 + number2;  
    };
    console.log( 'A soma de 10 e 20 é igual a', sum ? sum() : undefined );
    return sum();

}
myFunction2();

/*
    myFunction3();
*/
function myFunction3() {
     var number1 = 40;
     var number2 = 50;
     function sum() {
        return number1 + number2;
    };
    console.log( 'A soma de 40 e 50 é igual a', sum() );
    console.log( 'Na função myFunction3, number1 é igual a', number1 );
    return sum();
    

}
myFunction3();

/*
No desafio anterior criamos uma calculadora, usando uma estrutura funcional.
Agora vamos criar uma outra calculadora, usando uma outra abordagem :D
- Crie uma função `calculator` que recebe dois valores (números)
por parâmetro.
- Essa função deve retornar uma outra função, que recebe um parâmetro
chamado `callback`.
- Esse `callback` será uma função, que passaremos por parâmetro ao invocar
o retorno de `calculator`.
- O retorno dessa segunda função deve ser a função de `callback` passada
por parâmetro, INVOCADA, e passando a ela por parâmetro os dois valores
que foram passadas para a primeira função `calculator`.
*/
function calculator(value1,value2){
     return function(callback){
         return  callback(number1,number2);
      }

   
}



calculator(1,3);
}());