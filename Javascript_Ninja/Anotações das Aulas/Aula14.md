### ARRAYS
```js
    reduce();
    /*
    Vai reduzir o array, não modifica o array principal nem retorna um array.
    reduce passa por cada item do array, fazendo a expressão acumulado + atual.
    Então todo valor acumulado vai somar com o atual.
    Valor acumulado é todo valor que já tem
    Quando é a primeira vez que vou usar esse método, não vai ter nenhum valor acumulado,
    então eu passo um segundo parâmetro pro reduce, que vai ser o primeiro item no caso,
    o acumulado é o 0 ali na função.
    Se nao passar um valor de acumulado ele pega o primeiro item do array,
    tomando o como se fosse o valor acumulado,e o valor atual o segundo item.
    Passa sempre por todos os itens do array.
    */
    var array = [1, 2, 3, 4, 5];

    var reduce = array.reduce(function(acumulado, atual, index, array){
        return acumulado + atual;

    }, 0);
    console.log( reduce ); // 15
    /*
    1 - 0 + 1 = 1
    2 - 1 + 2 = 3
    3 - 3 + 3 = 6
    4 - 6 + 4 = 10
    5 - 10 + 5 = 15
    */
    var string = ['R','O','N','A','L','D','O'];

    var reduce = string.reduce(function(acumulado, atual, index, array){
        return acumulado + atual;
    }, 0);
    console.log( reduce ); // RONALDO
    // Faz basicamente o que o join faz, mas o join converte para string no final
```
### ARRAYS
```js
    reduceRight(); // Faz a mesma coisa que reduce só que da direita para a esquerda
    var string = ['R','O','N','A','L','D','O'];

    var reduce = string.reduceRight(function(acumulado, atual, index, array){
        return acumulado + atual;
    }, 0);
    console.log( reduce ); // ODLANOR
    // Faz basicamente o que o reverse faz
```
### ARRAYS
```js
    indexOf( valor que eu quero procurar no indice, a partir de qual indice eu quero começar a procurar )
    // Procura se o valor existe no indice do array
    // Se não especificar o segundo parâmetro do indexOf ele começa a procurar no começo do array

    var array = [ 1, 2, 3, 4, 5];
    var letras = [ 'A', 'E', 'I', 'O', 'U' ];
    console.log( array.indexOf( 3, 1 ) );  //2  * O valor 3 está no indice 2 do array
    console.log( letras.indexOf( 'F' ) ); // -1 * Indica que aquele valor não existe no array
    console.log( letras.indexOf( 'E' ) === - 1); /* false * Quer dizer que existe no array,porque o
                                                    valor existe no array
                                                    */
    console.log( letras.indexOf( 'E' ) > - 1); // true * Existe dentro do array
```
### ARRAYS
```js
    lastIndexOf(); // Procura se o valor existe no indece do final para o inicio

    var letras = [ 'A', 'E', 'I', 'O', 'U' ];
    console.log( letras.lastIndexOf('O', 2 ); // - 1 * Indicando que ele não existe
```
### ARRAYS
```js
    isArray(); // Verifica se o valor passado por parâmetro é um array

    var array = [ 1, 2, 3, 4, 5 ];
    console.log( Array.isArray( array )); // true *É um array
    console.log( Array.isArray( {} )); // false *É um objeto
```
