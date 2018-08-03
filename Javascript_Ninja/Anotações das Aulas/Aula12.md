### OBJETOS
```js
    // São mutáveis 
    // Ex:
    var objeto = { 
        prop1: 'prop1',
        prop2: 'prop2'
    }

    objeto; // {prop1: 'prop1' , prop2: 'prop2'}

    var objeto2 = { 
        prop1: 'prop1',
        prop2: 'prop2'
    }

    objeto2; // {prop1: 'prop1' , prop2: 'prop2'} , mesmas propriedades e valores que o objeto1 

    // Posso alterar propriedades
    objeto.prop1 = 'propriedad';
    objeto // {prop1: 'propriedade' , prop2: 'prop2'}
    // Posso excluir uma propriedade com a palavra delete
    delete objeto.prop1;
    objeto // {prop2: 'prop2'}
    // Posso adicionar propriedades
    objeto.prop1 = 'prop1'; // {prop2: 'prop2', prop1: 'prop1'}

    //São manipulados por referência 
    // Significa que cada objeto criado é um objeto diferente 

    objeto1 === objeto2 // false, porque são dois objetos diferentes criados na memória 

    var objeto1Copy = objeto;
    objeto1Copy; // {prop2: 'prop2', prop1: 'prop1'}
    objeto1 === objeto1Copy 
    /* true, porque o objeto1Copy não é uma cópia do objeto1 e sim uma referência do objeto1,
     são referências para o mesmo objeto*/  

    objeto1Copy.prop1 = 'propriedade do objeto copy'
    objeto1Copy; // {prop2: 'prop2', prop1: 'propriedade do objeto copy'}
    objeto1; //{ prop2: 'prop2', prop1: 'propriedade do objeto copy'}
```   
### CRIANDO OBJETOS
```js
    // 3 Formas de criar objetos: Literais, Como contrutor(new) e com Object.create()

    var objeto {}; // Literal
    var newObjeto = new Object(); // new
    Object // É uma função do JS que tem um método create 

    object.prototype // Todo objeto criado em JS, vai herdar de object.prototype

    var obj = {x: 1, y: 2};
    var obj2 = Object.create(obj); // obj2 herda as características do obj
    obj2.x // 1
    obj2.x = 'lala' 
    obj2.x // 'lala' é possível sobescrever as propriedades 

    exemplo = Object.create({}) // Objeto vazio 
    exemplo.toString(); // Converte o objeto em string

    // Objeto pai não muda os valores os objetos filhos sim.

    for( var prop in obj ) {
        console.log( prop );
    }
    // x, y 
   
    obj.hasOwnProperty('x'); //true * Verifica se aquela propriedade é especifica daquele objeto 

    for( var prop in obj2 ) {
        if( obj.hasOwnProperty(prop) ){
             console.log( prop );
        } // Mostrando as propriedades próprias do objeto, não as herdadas
    }
```
### MÉTODOS DOS OBJETOS
```js
    // Object.keys retorna um array com as propriedades do objeto
    var obj = {x: 1, y: 2};
    Object.keys(obj) // ['x', 'y']
    /*  Como o keys devolve um array, posso usar métodos que só funcionam com array no objeto */
    Object.keys(obj).length // 2 , contando quantidade de propriedades no array

    var obj2 = Object.create(obj);

    obj.isProtoTypeOf(obj2); // Verifica se o objeto 2 for herdado do objeto principal true
    obj.isPrototypeOf(obj3); // Devolve true porque ele heradou do dois que herdou do um
    obj2.isPrototypeOf(obj); // Devolve false porque obj2 que herdou do obj

    var obj = {x: 1, y: 2};
    // JSON é uma string que representa um objeto em javascript
    JSON.stringify(obj); // '{"x":1,"y":2}' transforma o objeto em padrão JSON
    var str = JSON.stringify(obj)
    JSON.parse(str); // {x: 1, y: 2} transformando a string em objeto novamente 
```
### ARRAYS
```js
    // Arrays são objetos, e como objetos ele tem propriedades e métodos
    var array = [];
    // Adicionando elementos em um array pelo indice
    array[0] = 10
    array[1] = 5
    array[2] = 'oito'
    array[12] = 'doze'
    array // [10, 5, 'oito', , , , , , , , , 'doze']

    // Adicionando um elemento no final do array
    array.push('treze'); 

    // Removendo o último iten do array
    array.pop(); // Remove o último elemento do array
    var last = array.pop(); // Guardando o último elemento removido em uma variável
    last // 'doze'

    // Juntando itens do array e transformar em uma string
    var comida = ['arroz','feijão','lasanha'];
    comida.join(); // 'arroz,feijão,lasanha'
    comida.join(' '); //'arroz feijão lasanha' => separados
    console.log('Meu almoço será ', comida.join(', ')); // Meu almoço será arroz, feijão, lasanha
    
    // Invertendo os elementos do array
    comida.reverse(); // ['lasanha', 'feijão', 'arroz' ]

    // Ordenando elementos de um array por ordem alfabética
    comida.reverse(); // ['lasanha', 'feijão', 'arroz' ]
    comida.sort(); // ['arroz','feijão','lasanha']

```