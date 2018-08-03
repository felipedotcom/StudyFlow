### JS no Browser
```js
    /* Quando precisamos utilizar um objeto global,ou algo que não está no escopo local,
       podemos passar como parâmetro para a IIFE
       Sempre que criarmos uma variável fora de uma função, é possível acessá-la dentro de qualquer
       função que esteja no mesmo escopo. O mesmo não acontece para variáveis criadas dentro de funções.
       Sempre que você cria uma variável dentro de uma função, essa variável não está acessível fora
       dela.

        E qualquer variável criada dentro de uma função, que tenha o mesmo nome de uma variável criada
        fora dessa função (em escopo global), a variável mais interna terá precedência sobre a variável
        externa.
*/

        // if, while e for com 1 linha não precisam de chaves

// Mostra mensagem na tela
    window.alert
    (function(win) {
        'use strict';

        alert('Mensagem');

    })(window);

// Faz uma pergunta na tela
    window.prompt
    (function(win) {
        'use strict';

        var name = (prompt('Qual seu nome ?'));
        if( name )
            console.log( 'Ola', name );
        else
            console.log( 'Não respondeu :(' );
    })(window);
```
### JS no Browser parte 2
```js
// Faz uma confirmação
    window.confirm
    (function(win) {
        'use strict';

        var del = confirm( 'Deseja realmente excluir?');
        if( del )
            console.log( 'Excluido com sucesso', del);
        else
            console.log( 'Ação cancelada' );
    })(window);
```
#### DOM - Document Object Model: É um objeto criado quando temos uma estrutura HTML ou XML
![dom](http://cs110.wellesley.edu/~cs110/lectures/L11/images/dom.png)
```js
window.document // Vai representar o documento do HTML

/* Variáveis ficam dinâmica, qualquer item que for adicionado
   depois de atribuir o valor da variável, ele vai ser adiciona a essa variável
   Gera um HTMLCollection com x classes, como se fosse um array*/

doc.getElementById( 'my-link' ); // Seleciona um elemento a partir do id dele
doc.getElementsByClassName( 'my-link' ); // Seleciona um elemento a partir da classe


doc.getElementsByTagName( 'a' ); // Seleciona um elemento a partir do nome da tela
doc.getElementsByName('username');

// Quando vamos nos referir a elementos do DOM utilizamos $
var $inputs = doc.getElementsByTagName( 'input' );
console.log( $inputs.length ); // Saber o tamanho
```
### JS no Browser parte 3
```js
    /* Fazem a seleção de elementos a partir de uma estrutura CSS, e não causa efeito colateral,
     só atualiza a quantidade de elementos quando você reatribuir mais elementos.*/

    var $inputs = document.querySelector('input'); // Pega o primeiro elemento input que ele encontrar

    var $inputs = document.querySelectorAll('input'); // Pega todos os elementos input que ele encontrar

    var $inputs = document.querySelectorAll('.input'); // Pega todas as classes input

    var $inputs = document.querySelectorAll('[type="text"]'); // Seleciona todos os input type="text"

     var $inputs = document.querySelector('#username'); // Seleciona o id do username
```
### JS no Browser parte 3
```js
    // Formulários:
    $inputUsername.value = 'ronaldo'; // setter
    var $inputUserName = doc.querySelector('#username'); // getter
    .value // Pegar valores de input
    var $inputUserName = document.querySelector('#username');
    var $inputPassword = document.querySelector('#password');
    console.log( $inputUserName.value, $inputPassword.value); // vai trazer nome do usuário e senha

    // Eventos - são ações
    var $button = doc.querySelector('#button');
    .addEventListener('click');

    $button.addEventListener('click', function(event){
        event.preventDefault();
        console.log( 'Click no botão' );
    }, false);

    document.addEventListener('click', function(event){
        alert( 'Clicou no input' );
    }, false);
```