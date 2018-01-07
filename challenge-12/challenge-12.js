(function(){

/*
Envolva todo o conteúdo desse arquivo em uma IIFE.
*/

/*
Crie um objeto chamado `person`, com as propriedades:
    `name`: String
    `lastname`: String
    `age`: Number
Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
de valor para cada propriedade.
*/
var person = {name: "Tiago",
			  lastname: "Alves",
			  age: 20
}



/*
Mostre no console, em um array, todas as propriedades do objeto acima.
Não use nenhuma estrutura de repetição, nem crie o array manualmente.
*/
console.log( 'Propriedades de "person":'  +Object.keys(person));

/*
Crie um array vazio chamado `books`.
*/
var books = [];

/*
Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
seguintes propriedades:
`name`: String
`pages`: Number
*/
books.push({name: 'Book1', pages: 50});
books.push({name: 'Book2', pages: 60});
books.push({name: 'Book3', pages: 70});


/*
Mostre no console todos os livros.
*/


console.log( '\nLista de livros:');
console.log(books);





/*
Remova o último livro, e mostre-o no console.
*/


console.log( '\nLivro que está sendo removido: ' );
var last = books.pop();
console.log(last);





console.log( '\nAgora sobraram somente os livros:' );
/*
Mostre no console os livros restantes.
*/
console.log(books);

/*
Converta os objetos que ficaram em `books` para strings.
*/
books = JSON.stringify(books);
console.log( '\nLivros em formato string:' );

/*
Mostre os livros nesse formato no console:
*/
console.log(books);

/*
Converta os livros novamente para objeto.
*/
books = JSON.parse(books);
console.log( '\nAgora os livros são objetos novamente:' );
console.log(books);
/*
Mostre no console todas as propriedades e valores de todos os livros,
no formato abaixo:
    "[PROPRIEDADE]: [VALOR]"
*/
for(var i = 0; i < Object.keys(books).length; i++ ){
	for(var objetos in books[i]){
		console.log(objetos +": "+ books[i][objetos]);
	}

}

/*
Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
seu nome. Adicione seu nome completo no array.
*/
myName = ["T","I","A","G","O"];
console.log( '\nMeu nome é:' );
var test = myName.join("");
console.log(test);
/*
Juntando todos os itens do array, mostre no console seu nome.
*/

console.log( '\nMeu nome invertido é:' );
/*
Ainda usando o objeto acima, mostre no console seu nome invertido.
*/

console.log(myName.reverse().join(""));

console.log( '\nAgora em ordem alfabética:' );
/*
Mostre todos os itens do array acima, odenados alfabéticamente.
*/
console.log(myName.sort().join(""));
})();