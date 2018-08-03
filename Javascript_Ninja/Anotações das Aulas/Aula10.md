### Wrapper Objects  
```js
/* Se tem propriedades e métodos é um objeto, logo valores primitivos NÃO são objetos. 
   Construtores são funções que criam novos objetos.
*/ 

/* Três construtores do JS para valores primitivos
   Quando criamos um desses contrutores, esse construtor é um objeto,
   e como um objeto ele tem propriedades e métodos.
*/ 
    var name = new String('Timão');
    name; // [String: 'Timão']

/* O JS envolve(Wrapper) a string literal 'Timão' em um objeto do tipo string,
   para que eu possa usar propriedades de um objeto, como length por exemplo.
   E logo depois, ele descarta esse objeto da memória e o name volta a ser 'Timão'
*/
    name.length; // 6
    name.valueOf(); // retorna o valor real do objeto 'Timão'
    var age = new Number(30);
    var campeao = new Boolean(true);

// Usado com o new ele cria um novo objeto, quando não utiliza o new converte o valor
// JS é linguagem de tipagem dinâmica, ele converte o tipo se for necessário automaticamente 
    var myVar = Number('30');
    myVar // 30
```     
### Como Testar TIPOS de valores 
```js
// typeof <operando> (funciona só ele e o operando, é devolvido o resultado ou o tipo do operando)
    typeof undefined; //'undefined'
    typeof function(){}; // 'function'
    typeof true; // 'boolean'
    typeof 10; // 'number'
    typeof 'JS Ninja'; // 'string'
    typeof NaN; // 'number'
// Qualquer outro objeto que não seja function => 'object'
    typeof {}; // 'object'
    typeof []; // 'object'
    typeof null; // 'object'

// Só usar typeof somente para valores primitivos 
    function sub(a , b){
        if(typeof a === 'number' && typeof b === 'number'){
            return a - b;
        }
        return 'Entre com dois numeros';
    }
    console.log(sub(10,2));
    console.log(sub('JS', 2));
    console.log(sub({},[]));

// Testando se o tipo é null
    function sub(a , b){
        if(a === null){ //!a se o valor é falso
            return 'Não entre com valores nulos ';
        }
        return a - b ;
    }
    console.log(sub(10,5));
    console.log(sub(null, 2));
    
```

