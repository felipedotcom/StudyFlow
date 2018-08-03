### Funções 

```js
    // Sempre nomear funções   
    var func = function func(){
    };
    /*
    Sempre que nomeamos uma função nós facilitamos 
    o debug

    O objeto function no javascript, tem algumas propriedades
    e alguns métodos imbutidos    
    */ 
    var func = function oi(){
        return 'hi';
    };

    oi(); // 'hi'
    func.name; // 'oi' 
    // Sem invocar a função (), ele é um objeto que tem uma
    // propriedade .name, que retorna o nome da função como uma string         
```
### Programação Funcional parte 1 

```js
    /* 
    Programação Funcional é uma forma de prgramar baseado em funções.
    Para que isso seja possível a linguagem tem que disponibilizar algumas coisas como:

    Objetos(Cidadãos) de primeira classe: Significa que as funções tem 
    o mesmo tratamento que os objetos. Tudo que eu consigo fazer com 
    objetos, eu consigo fazer com funções.
    */

    /*Objeto literal: Usa chaves e coda direto dentro do objeto, é a 
      forma final do objeto */ 
    var car = {
        marca: 'Honda',
        modelo: 'Fit'
    };
    // Função literal
    function soma(x,y){
        return x + y;
    }

    // Do mesmo jeito que eu atribuo objetos a variáveis eu posso atributir funções

    var obj = {};
    var func = function func(){};

    // Do mesmo jeito que eu retorno objetos em uma função, eu posso atribuir, 
     //o objeto a uma variável e retornar esse objeto.

    function person(){ // retornando objeto 
        return {
            nome: 'Ronaldo',
            sobrenome: 'Fenomeno'
        };
    }

    function pessoa(){ // atribuindo um objeto a uma variável e retornando
        var info = {
           nome: 'Ronaldo',
            sobrenome: 'Fenomeno'
        };    
    return info;
    }

    // Chamando as propriedades do objeto dentro da função pessoa
    pessoa().nome; //'Ronaldo'
    pessoa().sobrenome; // 'Fenomeno'
```
### Programação Funcional parte 2
```js
    // É possível retornar funções dentro das próprias funções 
    function adder(x){
        return function add0ther(y){
            return x + y;
        };
    return addOter; // retornando a função sem executar 
    }

    var add2 = adder(2); // atribuindo funcão a uma variável 
    add2(3); //5
    adder(2)(3); //5
```
### Programação Funcional parte 3
```js
    // É possível passar funções por parâmetro dentro de uma função

    function showOtherFunction(func){
        return func();
    }

    showOtherFunction(function() {
        return 'Vai Malandra';
    }); // 'Vai Malandra'

    
```
