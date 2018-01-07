/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var val = ["TEST","TIAGO","USER","BTF","08"];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
myFunction = function(arg){
	console.log(arg);
};

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
myFunction(val[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
myFunctionTwo = function(arg,x){
	console.log(arg[x]);
};

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var valtwo = [undefined,null,function(){},"BTF",8];




/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
myFunctionTwo(valtwo,0);
myFunctionTwo(valtwo,1);
myFunctionTwo(valtwo,2);
myFunctionTwo(valtwo,3);
myFunctionTwo(valtwo,4);

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
book = function(obj){
	var allBooks = {
	"Percy":{quantidadePaginas: "265",
	autor:"sla",
	editora:"Saraiva"} ,

	"HTML":{quantidadePaginas: 11,
	autor:"slakskss",
	editora:"HTML"},
	
	"CSS":{quantidadePaginas: 56,
	autor:"Eu",
	editora:"Tiago"}};
	
	
	return !obj ? allBooks : allBooks[obj]; 
};




/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book("Percy"));

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var percy = "Percy";
console.log("O livro "+percy+ " tem "+book(percy).quantidadePaginas+" Paginas");

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log("O autor do livro "+percy+ " é  "+book(percy).autor);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log("O livro "+percy+ " foi publicado pela editora "+book(percy).editora);