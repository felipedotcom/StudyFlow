/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var array = ['GitHub', 13, null, false, undefined];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myFunction(array){
    return array;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/

console.log(myFunction(array)[1]); //13

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function myFunction2(array,numero){
    if (numero === undefined){
        return array;
    }
    else{
        return array[numero];
    }
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var array2 = ['JS', {ronaldo: "fenomeno"}, 13, true, null];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/

console.log(myFunction2(array2)); //['JS', {ronaldo: "fenomeno"}, 13, true, null]

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

function book(nomeDoLivro){

    var livraria = {
        
        'The Way of Kings': {
            quantidadePaginas: 1000,
            autor: "Brandon Sanderson",
            editora: "Tor"
        },       
        'Roda do Tempo': {
            quantidadePaginas: 1200,
            autor: "Jordan",
            editora: "Intrinseca"
        },
        'Harry Potter': {
            quantidadePaginas: 600,
            autor: "J. K. Rowling",
            editora: "Rocco"
        }
    };

    if(nomeDoLivro === undefined){
        return livraria;
    }
    
   
    return livraria[nomeDoLivro];  
};

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book()); 
        /*{ The Way of Kings: 
        { quantidadePaginas: 1000,
            autor: 'Brandon Sanderson',
            editora: 'Tor' },
        Roda do Tempo: 
        { quantidadePaginas: 1200,
            autor: 'Jordan',
            editora: 'Intrinseca' },
        Harry Potter: 
        { quantidadePaginas: 120,
            autor: 'J. K. Rowling',
            editora: 'Rocco' } }
        */

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var nomeDoLivro = "The Way of Kings";

console.log("O livro "+ nomeDoLivro + " tem " + book(nomeDoLivro).quantidadePaginas + " páginas!");

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log("O autor do livro " + nomeDoLivro + " é "+ book(nomeDoLivro).autor+ ".");

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log("O livro " + nomeDoLivro + " foi publicado pela editora " + book(nomeDoLivro).editora+ ".");
