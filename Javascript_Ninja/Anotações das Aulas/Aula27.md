### DOM Fragments
```js
/* Cria um documento em branco para que eu possa
  manipular nós, e assim que eu terminar de manipular os nós eu possa incluir esses nós no HTML
  Melhora a performance porque, trabalha fora do DOM,
  depois inclui tudo de uma vez */

document.createDocumentFragment()
```
### Eventos
```js
/*
   Posição dos scripts no HTML importa
   Página carrega de cima para baixo, quando o browser
   encontra uma tag de script, ele para o carregamento,baixa o script, 
   parceia e o que tiver que ser executado ele executa.
   Nem carregou o body, mas já executou o código.
   Esse é o problema de colocar o script no topo.
   Boa prática é manter o script no final do body
*/


document = DOMContentLoaded  /* Dispara esse evento depois que o documento foi carregado. 
				Uso ele quando preciso manipular elementos HTML que não estejam prontos.
				Executa antes de qualquer coisa ter sido carregada
*/ 
window = load // Vai esperar tudo que estiver dentro de window carregar para depois disparar o evento
```
### Técnicas Ninja - Copiar Arrays
```js
/* Objetos são passados por referência */
  var arr = [1, 2, 3, 4, 5];
  var arr2 = arr; // Não é uma cópia real, é uma referência

  // Copiando array
  var arr2 = arr.map(function(item){
    return item;
  });

  // Copiando array 2
  var arr2 = arr.slice(0); /* Vai pegar todos os indices, fazendo assim uma cópia do array,
  			      pode ser sem parâmetro também*/ 

  console.log(arr, arr2, arr === arr2); // false pq não aponta para o mesmo array

  var $divs = document.querySelectorAll('div');
  var $divsCopy = Array.prototype.slice.call($divs); // Copia das divs do DOM
```
### Técnicas Ninja - Saber o tipo de dado real de um elemento
```js
  var arr = [1, 2, 3];
  console.log(Object.prototype.toString.call(arr)); // [object Array]

  function whatTypeIs(obj) {
    return Array.prototype.toString.call(obj);
  }

  function isArray(obj) {
    return whatTypeIs(obj) === '[object Array]';
  }

  console.log( whatTypeIs( function(){})); // [object Function]
```
