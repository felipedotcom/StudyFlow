### Module Pattern
```js
/*
Exportar o DOM como módulo do objeto window,
para poder usar a lib DOM dentro de outra IIFE
*/

// lib

(function(win){

win.DOM = DOM;
})(window);

// código

(function(DOM){

})(window.DOM);


// EXEMPLO:
(function(DOM){
  'use strict';

  function app() {
    function test(){

    }

  app();

})(window.DOM);
```
### revealing module pattern
```js
// Revela somente os métodos que eu preciso usar
(function(DOM){
  'use strict';

  function app() {
    function test(){

    }

  return {
    getMessage: getMessage,
    replaceCEP: replaceCEP

  };
  window.app = app(); /*  executando app, retornando diretamente o
                          objeto, não dando acesso aos outros métodos
                          do código */
  app();

})(window.DOM);
```
```
closure: Quando eu tenho uma função no javascript ela cria um contexto, 
quando eu crio uma outra função dentro dela, ela tem acesso
a tudo que está dentro da própria função e tudo que está fora, e tudo
que eu chamar de fora a função de dentro guarda pra ela.

closure: Uma função que consegue acessar todo o escopo que tem fora dela 
e consegue guardar esse valor, para que eu possa acessar depois
```
