### ARRAYS
```js
    // Em JS Arrays são objetos disfarçados, logo eles tem propriedades e métodos
    var array = [1,2,3];

    toString(); /*Pega todos os itens do array, transforma em string e 
    separa cada item com uma virgula */ 
    
    array.toString(); //'1, 2, 3'
    
    concat(); // Gera um novo array, como elemento passado por parâmetro

    array.concat([4,5,6,7,8,9]); // [1,2,3,4,5,6,7,8,9]
    array.concat([10,[11,12]]); // [1,2,3,4,5,6,7,8,9,10,[11,12]]

    unshift(); // Adiciona um item no inicio do array

    array.unshift(0); // [0,1,2,3,4,5,6,7,8,9,10,[11,12]]

    shift(); // Remove o primeiro item do array, e retorna o item removido 

    array.shift(0); // [1,2,3,4,5,6,7,8,9,10,[11,12]]
```   
### ARRAYS
```js
    var array = [1,2,3,4,5];
    slice(); /* Vai retornar um pedaço do array que eu selecionar, não modifica
    o array principal, retorna um novo array */ 

    array.slice(1); // [2,3,4,5] *Retorna do indice 1 até o último elemento do array
    array.slice(0, 2); /* [1, 2] Retorna do indice zero até o segundo indice mas 
                                 sem mostrar o segundo indice */ 

    array.slice(1, 4); // [2, 3, 4]

    array.slice(- 2); // [4, 5] devolve os dois últimos números do array

    splice(); // Modifica o array principal, adiciona ou remove itens do array
    array.splice(3); // [4, 5] Devolve um array a partir do indice 3
    array // [1,2,3] Remove os dois itens do array 
    array.splice(1, 3); // [2, 3, 4]
    array // [1, 5]
    array.splice(1 , 0, 'a'); /* A partir do indice 1, o 0 é indicando para 
                                 não remover nada do array, e o último parâmetro 
                                 é para adicionar a string a.*/ 
    array // [1, 'a',5] 
    array.splice(1,1,2,3,4); /* [1,2,3,4] A partir do indice 0, remove 1 elemento,
                                e adiciona o 2,3,4 */ 
```
### ARRAYS
```js
    var array = [1,2,3,4,5,6,7];

    forEach(); // Estrutura de repetição

    array.forEach(function(item, index, array){
        console.log(item, index, array);
    });
    1 0  [1,2,3,4,5,6,7]
    2 1  [1,2,3,4,5,6,7]
    3 2  [1,2,3,4,5,6,7]
    4 3  [1,2,3,4,5,6,7]
    5 4  [1,2,3,4,5,6,7]
    6 5  [1,2,3,4,5,6,7]
    7 6  [1,2,3,4,5,6,7]

    var sum = 0;
    array.forEach(function(item){
        sum += item;
    });
    console.log( sum ); // 28
    //----------------------------

    var newArr = [];
    array.forEach(function( item, index, array){
        newArr.push({index: index, item: item})
    });
    console.log( newArr );
    /* 
    { index: 0, item: 1}
    { index: 1, item: 2}
    { index: 2, item: 3}
    { index: 3, item: 4}
    { index: 4, item: 5}
    { index: 5, item: 6}
    { index: 6, item: 7}
    */

    every(); /* Testar os itens do array True ou False. 
                Precisa que todos os itens do array sejam 
                válidos para retornar true */  
    var every = array.every(function(item)) {
        return item < 5;
    });
    console.log( every ); /* false, porque nem todo os itens do array 
                             não são menores do que 5*/ 

    some(); /* Testar os itens do array, True ou False.
               Não precisa que todos os itens sejam válidos para retornar true,
               se um for true ele já retorna true */  

    var some = array.some(function(item)){
        return item % 2 === 0;
    });
    console.log( some ); // true
```
### ARRAYS
```js
    map(); /* Vai percorrer todo o array como o método forEach(), 
            e vai retornar um novo array com os valores passados por parâmetro. 
            Não modifica o array principal
            Diferença por forEach(); é que ele já retorna o array
            Uso forEach(); quando quizer iterar o array e fazer qualquer 
            outra ação com esse array 
            Uso map(); quando quizer iterar diretamente dentro do array, 
            mas gerando um novo array  */ 
            
    var array = [1,2,3,4,5,6,7];

    var map = array.map(function(item, index, array){
        return item;
    });
    console.log(map); // [1,2,3,4,5,6,7]
    //-------------------------------------

    var array = [1,2,3,4,5,6,7];

    var map = array.map(function(item, index, array){
        return item + 1;
    });
    console.log(array, map); // [1,2,3,4,5,6,7] [2,3,4,5,6,7,8]
    //-------------------------------------

    var array = [1,2,3,4,5];

    var map = array.map(function(item, index, array){
        return { index: index, item: item};
    });
    console.log(array, map);
    /* [1,2,3,4,5]
    { index: 0, item: 1}
    { index: 1, item: 2}
    { index: 2, item: 3}
    { index: 3, item: 4}
    { index: 4, item: 5}
    */ 
```
### ARRAYS
```js
    filter(); // Filtra os indices do array

    var array = [1,2,3,4,5];

    var filter = array.filter(function(item, index, array){
        return item > 2;
    });
    console.log( filter ); // [3,4,5]
    //---------------------------------------
    var array = [1,2,3,4,5];

    var map = array.map(function(item){
        return item + 10;
    });

    var filter = map.filter(function(item, index, array){
        return item > 13;
    });

    // O exemplo acima pode ser feito assim que o resultado será o mesmo

    var map = array.map(function( item ){
        return item + 10;
    }).filter(function( item ) {
        return item > 13;
    });

    console.log( filter ); // [14, 15]
```