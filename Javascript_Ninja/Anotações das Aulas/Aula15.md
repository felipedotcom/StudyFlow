### JS no Browser
```html
 <!-- Tag em que vamos colocar os códigos javascript -->
            <script src="main15.js"></script>
```
```python
    # Comando para subir um server python para testar o js no browser
            python -m SimpleHTTPServer 9001
```
```html
<!--
    Posso colocar no head ou no body:
    Se eu colocar o script no head, o browser vai baixar aquele script,
    vai parsear o script, ler tudo o que tem nele e depois vai carregar a página
    Colocando o script em um arquivo separado, vai permitir ao navegador fazer cache do script,
    e na próxima vez que ele for carregar, se o script já foi carregado da primeira vez,
    o navegador pega do cache e já carrega
-->
 <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8" />
        <title>JS Ninja</title>
        <script src="main15.js"></script>
        <script src="main15_2.js"></script>
    </head>
    <body>
    </body>
    </html>

```
### JS no Browser - Escopo
```js
    // IIFE - faz nossos scripts serem locais, sempre vamos trabalhar com IIFE no browser
    /*
    Usando a palavra chave var, o JS cria duas varáveis uma no escopo global
    outra no escopo local, sem a palavra chave var o JS modifica a variável
    global para local
    */
   // Com var
    var name = 'Global';
    (function() ) {
        var name = 'Local';
        console.log( name );
    })();
    console.log( name ); // Saida da função: Local / Global

    // Sem var
    var name = 'Global';
    (function() ) {
        name = 'Local';
        console.log( name );
    })();
    console.log( name );  // Saida da função: Local / Local
```
### This em Objetos
```js
    // Vamos encontrar o this em métodos e em objetos, e ele vai fazer uma referência ao objeto principal
    (function(){
        var myObject = {
            myProperty: 1,
            init: function init() {
                return this;
            }
        };
        console.log(myObject);
        console.log(myObject.init());
    })(); // Saida da função: myObject
    /*
     Vai retornar o objeto myObject, porque ele está referenciando myObject.
     Dentro de métodos e objeto o this vai referencia-los.
     Isso significa que eu consigo acessar propriedades do objeto com a ajuda do this.
    */

    (function(){
        var myObject = {
            myProperty: 1,
            init: function init() {
                return this.myProperty;
            }
        };
        console.log(myObject.init());

    })(); // Saida da função: 1

```
### This dentro de funções
```js
    /*
    Dentro de funções podem existir dois valores, primeiro tipo de valor, é referência
    ao objeto global, que é tudo aquilo que conseguimos acessar de qualquer lugar,
     ou faz parte do core do JS (Window)
    */
    (function(){
        function myFunction() {
            return this;
        }
        console.log(myFunction()); // window
        console.log(' myFunction :', myFunction(), myFunction() === window );
        // Retorna true, porque chamou direto invocando a função

        var myObject = {
            myProperty: 1,
            init: function init() {
                return this.myProperty;
            }
        };
        console.log(' myObject:' , myObject.init(), myObject.init()=== myObject );
    })(); // Retorna true porque o this está fazendo referência ao objeto myObject

    /*
    Sempre que eu tenho uma função e ela não está dentro de um objeto, ela não é o método do objeto.
    O this vai apontar para o objeto global, no caso o Window como referência ao objeto global
    */
```
### This dentro de funções
```js
    // Fazendo referência ao objeto instanciado

    (function(){
        function myFunction() {
            return this;
        }
        console.log(myFunction());
        console.log(' myFunction :', myFunction(), myFunction() === window );
        var myObject = {
            myProperty: 1,
            init: function init() {
                return this;
            }
        };
        console.log(' myObject:' , myObject.init(), myObject.init()=== myObject );

        var newObject = new Object();
        /* new cria uma nova referência de object e atribui a newObject, que é o
        construtor padrão em JS. Contrutores em JS começam com letras maiúsculas
        Construtor, cria um novo objeto com algumas características prontas que eu definir
        EM JS posso fazer meus próprios construtores */

        function MyConstructor() {
            this.prop1 = 'prop1';
            this.prop2 = 'prop2';
        }
        var constructor = new MyConstructor();
        //Criei um novo objeto, instanciei ele e atribui a var constructor
        console.log( 'MyConstructor', constructor );  MyConstructor {prop1 :"prop1", prop2: "prop2"}

        console.log( 'MyConstructor', constructor.prop2 ); // prop2
        // this faz referência ao objeto contructor, vai apontar para o que estiver em constructor
        console.log( prop2 );
        /* is not defined , porque quando o this está dentro de uma função
         ele está referênciando a window*/
        prop1 = 'propriedade1'; // sem var eu consigo chamar usando prop1 ou window.prop1
        console.log(window.prop1);
        /*
        Variável sem var dentro do escopo da função, ele vai criar essa variável em escopo global
        chamando a função como contrutor, dentro do constructor ele vai ter as propriedades
         e elas vao ficar penduradas no constructorse chamar
         como funcao MyConstructor(); vai ficar penduradas no window
        */

    })();
```
### Arguments
```js
    /*
    arguments é um array like, funciona como um array, parecido como um array mas não é um array.
    Representa todos os argumentos passados para a função
    */
    (function() {
        function myFunction() {
            return arguments[1];
        }
        console.log( myFunction(1, 2) ); // 1
    })();
```