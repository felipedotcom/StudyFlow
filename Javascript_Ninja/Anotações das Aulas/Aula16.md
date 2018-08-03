### use strict
```js
/*  use strict serve para corrigir os erros do ecmascript3, por exemplo  variáveis não declaradas.
    O strict vai devolver o erro mostrando que a variável dentro da função,
    dizendo que eu não posso fazer esse tipo de coisa */
    (function(){
        'use strict';
        myName = 'Java Script';
        console.log(myName); // Uncaught ReferenceError: myName is not defined
        })();
    console.log(myName);

```
### use strict
```js
    'use strict'; /*Não permite o uso do with, with serve para diminuir o tamanho do objeto, as variáveis
    que eu chamar dentro do with vão ser baseadas no objeto do with
    Não é recomendável porque pode haver confusão com nomes de variáveis fora do with */
     // Exemplo:
    (function(){
    var obj ={
        prop1: {
            prop2: {
                prop3: {
                    prop31: 'prop31',
                    prop32: 'prop32',
                    prop33: 'prop33',
                }
            }
        }
    };
        with( obj.prop1.prop2.prop3 ){
            console.log( prop31 ); //{prop31: "prop31", prop32: "prop32", prop33: "prop33"}
        }
    })();
    /* No escopo global dentro de funções this === undefined
     Quando eu chamo Person como função o this já não é mais refêrencia para o objeto,
     porque eu nao estou instanciando nenhum objeto.
     O this é atribuido ao escopo global, e o escopo global é o window
     O use strict não vai deixar usar Person como função */
    // Exemplo:
    (function(){
    'use strict'
     function Person( name, lastName, age ) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
    }
    console.log( Person( 'Fernando', 'JS', 40 ) ); // undefined
    })();
```
### use strict
```js
    /* Delete serve para deletar propriedades do objeto
    No mode 'strict'; O delete não é qualificado */
    (function(){
    'use strict';
    var myvar = 2;
    var obj = {
        prop1: 'prop1',
        prop1: 'prop2',
        prop1: 'prop3',
    };
    console.log( delete obj.prop1 ); // true Object {prop2: 'prop2', prop3: 'prop3'}
    console.log( delete myvar); // false *Não pode deletar variáveis

    })();
    /* Os objetos devem ter propriedades com nomes diferentes
        Funções devem ter nomes de argumentos diferentes */
    (function(){
    'use strict';
     function myFunction(a, a, b ){
         return a + b;
     }
    console.log( myFunction(1, 2, 3 ) ); // Strict mode function may not have duplicate parameter names
```
### Objeto string
```js
    .length // Conta a quantidade de caractere que tem na string
    'oi'.length // 2

    .charAt(index); // Qual o caractere que no indice que eu passar para ele
    'oi'.charAt(0); // 'o'

    .concat(); // Vai concatenar strings, criando um novo array
    oi.concat('oi','oi'); // oioioi

    .indexOf(string [,start]); // verfica a posição do indice
    'oi'.indexOf(o); //  0

    .lastIndexOf(string [,start]); // Funciona como o indexOf só que começando da direita para a esquerda

    .replace(string, newString); /* Substitui um trecho de uma
    string por uma nova string, não modifica a string principal */

    'oi'.replace('o', 'i'); // 'ii'

    .slice(start, [,end]);
    'oi'.slice(1); // 'i'

    .split([separador][,limit]); // Quebra a string e transforma em um array
    var arr = 'fernando'.split('n'); // ['fer','a','do']
    // Posso juntar com join
    arr.join('n') // 'fernando'
    // Dica para substituição em massa
    'fernando'.split('n').join('z'); // 'ferzazdo'

    .substring(start [,end]); // Mesmo que o slice
    var fer =  'fernando';
    fer.substring(2,5); //'rna'
    fer.substring(3); // 'nando'
    fer.substring(6,2); // 'rnan' * se o começo for maior que o fim ele inverte

    .toLowerCase(); // Passa a string para minúsculo
    .toUpperCase(); // Devolve tudo em maiúsculo

    // Dica deixar a primeira letra maiúscula
    var newfer = fer.chartAt(0).toUpperCase() + fer.slice(1); // 'Fernando'

```