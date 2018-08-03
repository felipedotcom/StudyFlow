### API DOM
![dom](http://cs110.wellesley.edu/~cs110/lectures/L11/images/dom.png)
### O que é DOM e como percorrer os elementos da árvore
```js
.parentNode /* Vai pegar o nó que é pai daquele nó que estou selecionando */

.childNodes /* Vai trazer todos os nós que são
            filhos do nó que eu estou procurando
            Enter conta como nó filhos */

.firstChild /* Vai trazer o primeiro filho, pode variar de
            acordo com o espaço que eu tiver no html*/

.lastChild /* Vai trazer o último filho, pode variar de
            acordo com o espaço que eu tiver no html*/

.nextSibling /* Mostra quem é o irmão */

.previousSibling /* Mostra quem é o irmão anterior */
```
### Percorrer DOM - Propriedades - parte 1
```js
.nodeType /* Vai dizer qual tipo de nó
            document = tipo 9
            element = tipo 1 ( tags HTML )
            text = tipo 3
            comments = tipo 8
            documentFragmanet = tipo 22
*/

.nodeValue /* Conteúdo textual de Text e Comment*/

.nodeName /* Vai dizer o nome do nó */
```
```
Suporte de features nos browsers
https://caniuse.com

```
### Percorrer DOM - Propriedades - parte 2
```js
.children /* Traz somentes os nós que são elementos html */

.firstElementChild /* Traz o primeiro filho que é um elemento */

.lastElementChild /* Traz o último elemento */

.nextElementSibling /* Próximo elemento que é irmão */

.previousElementSibling /* Elemento anterior que é irmão */

.childElementCount /* Qual a quantide de filho que tem
                    para esse elemento*/

.children.length /* Qual a quantide de filho que tem para esse elemento*/
```
#### Percorrer DOM - Métodos - parte 1
```js
.hasAttribute( name ); /* Verifica se o atributo tem um
                         elemento específico, true ou false
                         Atributo HTML: class, data etc
                         */

.hasAttributes(); /* Verifica se tem qualquer atributo */

.appendChild( child ); /* Adiciona um filho a um elemento */

.insertBefore( node, beforeWhom ); /* Insere antes, recebe o nó e antes de quem ele vai ser inserido */

.cloneNode( boolean ); /* Clona um nó que a gente já tem,
                          booleano quer dizer se você
                          vai querer copiar o conteúdo do container */

.hasChildNodes( ); /* Verifica se tem algum nó filho */
```
#### Percorrer DOM - Métodos - parte 2
```js
.removeChild( child ) /* Remove um elemento filho e eu tenho
                        que passar qual é esse elemento */

.replaceChild( novo, velho) /* Vai substituir, passando
                                por parâmetro o filho que você
                                quer trocar, e por quem você vai trocar  */

document.createTextNode( text ) /* Cria um nó de texto */
document.createElement( tagName ) /* Passa uma tag e ele cria um novo elemento */
```
### Percorrer DOM - Atributos
```js
.element.id /* Consigo pegar qualquer atributo que seja padrão html*/
// EX:
  $main.className // className para pegar nomes de classe
  $main.id;

/* Atributos são getters e setters
EX: */
console.log( $main1.className="arroz" ); /* Muda o nome da classe
                                            para arroz*/

.getAttribute( 'atributo' ); /* retorna o atributo, passando o nome do atributo como string*/

parseInt(, 10); //Converte para inteiro
parseFloat(); //Converte para decimal

.setAttribute( attr, value ); /* É um setter, ele cria um atributo novo ou modifica um antigo */
```