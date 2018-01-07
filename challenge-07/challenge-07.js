/*
Crie um array com 5 items (tipos variados).
*/
array = [function(){},1,"tiago",null, bolean = true];

;
/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
addItem = function(add){
	value = 0;
	array.push(add);

	for(counter = array.length; counter > 0; counter--){
		console.log(array[value++]);

		
	}
};

addItem("funcaoAdd");

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
console.log("---");
array.push(test = ["item1",null,true]);
console.log(test);




/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
console.log("---");
console.log("O segundo elemento do segunda array é "+array[6][1]);

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
console.log("---");
console.log("O primeiro array tem "+array.length+" itens");

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log("---");
console.log("O segundo array tem "+test.length+" itens");

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
//console.log( 'Números pares entre 10 e 20:' );
console.log("---");
var num  = 10;
while( num <= 20){
	 num % 2 === 0 ? console.log(num) : "";
	 num++;
};
/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
//console.log( 'Números ímpares entre 10 e 20:' );
console.log("---");
var num = 10;
while(num <= 20){

	num % 2 === 1 ? console.log(num) : "";
	num++;
};

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
//console.log( 'Números pares entre 100 e 120:' );
console.log("---");
for(var x = 100; x <= 120; x++){
	x % 2 === 0 ? console.log(x) : "";
};

//console.log( 'Números ímpares entre 111 e 125:' );
console.log("---");
for(var x = 111; x <= 125; x++){
	x % 2 === 1 ? console.log(x) : "";
};