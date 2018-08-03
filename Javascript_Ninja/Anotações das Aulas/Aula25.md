### Scripts Inline
```js
/* Tudo que vem depois de javascript: é um código JS válido NÃO USAR !!!*/
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>JS Ninja</title>
</head>
<body>
    <a href="javascript:boom()">Boom!</a>
    <script>
      function boom() {
          alert('boom');
      }
    </script>
</body>
</html>
```
https://developer.mozilla.org/en-US/docs/Web/Events

### Eventos Inline
```js
/* Tudo que vem depois de javascript: é um código JS válido NÃO USAR !!!*/
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>JS Ninja</title>
</head>
<body>
    <a href="javascript:" onclick="boom()">Boom!</a>
    <script>
      function boom() {
          alert('boom');
      }
    </script>
</body>
</html>
```
### Eventos
```js
/* use capture
    Vai dizer como vai ser a captura de eventos
    false: começa no elemento que eu cliquei e vai subindo
    até o elemento pai
    true: começar a atrelar os eventos a partir do pai até
    chegar no filho
*/

function on(element, event, callback) {
    document.querySelector(element)
      .addEventListener(event, callback, false);
}

on('[data-js="link"]', 'click', function(event){
    event.preventDefault();
    alert('clicou no a');
});

on('[data-js="div"]', 'click' , function(){
    alert('clicou na div');
});

on('[data-js="span"]', 'click' , function(){
    alert('clicou no span');
});
```
### Eventos por elementos
```js
/* Consigo atribuir mais de um evento para o mesmo elemento, são
cumulativos*/
function on(element, event, callback) {
    document.querySelector(element)
      .addEventListener(event, callback, false);
}
// Removendo eventos
function off(element, event, callback) {
    document.querySelector(element)
      .removeEventListener(event, callback, false);
}
function handleClick(event) {
    event.preventDefault();
    alert('clicou no a');
}

function handleClick2(event) {
    event.preventDefault();
    alert('novo evento de click');
}
on('[data-js="link"]', 'click', handleClick);
on('[data-js="span"]', 'click' , handleClick2);
off('[data-js="link"]', 'click' , handleClick2);
```
### Eventos por elementos
```js

function on(element, event, callback) {
    document.querySelector(element)
      .addEventListener(event, callback, false);
}

function off(element, event, callback) {
    document.querySelector(element)
      .removeEventListener(event, callback, false);
}

on('[data-js="input"]', 'change', function() {
    document.querySelector('[data-js="input"]').value = this.value;
    /* O valor do input vai ser o valor que vai ser selecionado no
    campo select */
});
// Eventos
'keyup' /* Quando solta a tecla ele dispara o evento */
'input' // Quando começa a digitar no formulário
'keydown' // Quando aperta a tecla ele dispara o evento
'change' // Faz modificação de valores
```