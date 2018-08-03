### LAÇOS (LOOPS)
```js
    
    // Só entra se a instrução for verdadeira
    var counter = 10;
    while( counter < 10 ){
        console.log( counter++ );
    }
    console.log('counter não é menor que 10');

    // do while, entra na primeira instrução depois verifica se é verdadeira 
    var counter = 1;

    do {
        console.log( counter++ );
    } while ( counter < 10 );

    

    var car = {
        brand: 'WV',
        model: 'Gol',
        year: 2013
    };
    
    for( var prop in car ) { // for in serve para percorrer objetos *É mais lento que for normal*
        console.log(prop); // console.log(car[prop]) para pegar a propriedade do objeto
    }
    

    console.log('brand in car?', 'brand' in car );   
    // true, posso usar o in para saber se uma propriedade existe dentro de um objeto
```
### SALTOS (return)
```js
    // Saltos são algumas instruções do javascript que é usado para pular algumas partes do código.

    function myFunction(){
        var number = 5;
        if( number === 10 ){ 
        // Se o number for 10 ele retorna true e pula as instruções a baixo
            return true; // Mais legivel, não precisa do else
        } 
        var number2 = 5; // Se number não for 10 ele realiza essa instrução
        var name = 'Timão';
        return name + ' ' + number2;
    }

    console.log(myFunction()); // Timão 5
```
### SALTOS (break)
```js
    // break serve para parar instruções

    var number = 10;

    switch( number ) {
        case 1: 
            console.log( '1' );
            break;
        case 2: 
            console.log( '2' );
            break;
        case 3: 
            console.log( '10' );
            break;
        default: 
            console.log( 'default' );
    }

    console.log( 'fim do switch' )

    // Funciona em loops também
    var array = [1,2,3,4,5,6,7,8,9,10];

    for(var i = 0; i < array.length; i++ ) {
        if ( i === 5 ) {
            break;
        }
        console.log(i);
    }

```
### SALTOS (continue)
```js   
    // Continue, continua para a próxima intrução válida

     var array = [1,2,3,4,5,6,7,8,9,10];

    for(var i = 0; i < array.length; i++ ) {
        if ( i % 2 === 0 ) {
            continue; // Ele vai voltar para o inicio do for com o próximo valor, ele pula um estado
        }
        console.log(i);
    }
```
