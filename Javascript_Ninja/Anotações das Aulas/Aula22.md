### Propriedades e métodos de funções - parte 1
```js
.name /* Retorna o nome da função como uma string,
        se não usa o name e usa função anônima essa função retorna undefined */

.length // Conta a quantidade de parâmetros que a função possa receber
(function (){
  'use strict';

  function myFunction(a, b, c){
  }
  console.log( myFunction.length ); // 3
})();

.toString // Retorna todo o corpo da função em string
(function (){
  'use strict';

  function myFunction(a, b, c){
  }

  var obj = { prop: 1, prop: 2};
  console.log( myFunction.toString() );
})();

.call // Invoca a função
(function (){
  'use strict';

  function myFunction(a, b, c){
    return 'oi';
  }

  var obj = { prop: 1, prop: 2};
  console.log( myFunction.call() );
})(); // oi

.call(this) // Dizer quem vai ser o this da função
(function (){
  'use strict';

  function myFunction(a, b, c){
    console.log(this.lastName);
  }
  var obj = {
    lastName: 'Ronaldo'
    };
  var obj2 = {
    lastName: 'Silva'
    }

   myFunction.call(obj2);
})(); // Silva
```
### Propriedades e métodos de funções - parte 2
```js
// Consigo passar argumentos para função no call, primeiro parâmtro do call é sempre o this,
.call(this, arg1, arg2, ..., argN);

(function (){
  'use strict';

  function myFunction(a, b, c, d){
    console.log(this.lastName,a,b,c,d);
  }

  var obj = {
    lastName: 'Ronaldo'
    };
  var obj2 = {
    lastName: 'Silva'
    };

  myFunction.call(obj2, 'a', 'b', 'c', 'd')
  // Quando for usar o call e não precisar usar o this, passar a propria funcao como this
  myFunction.call(myFunction, 'a', 'b', 'c', 'd');

})();

.apply() // Invocar a função
.apply( this ) // Representando o this da função
.apply(this, [arg1, arg2, ...,argN]) // Consigo passar um array ou um array like

(function (){
  'use strict';

  function myFunction(a, b, c, d){
    console.log(this.lastName,a,b,c,d);
  }
  var obj = {
    lastName: 'Ronaldo'
  };
  var obj2 = {
    lastName: 'Silva'
  };

   var arr = [1, 2, 3,4];

  myFunction.apply(obj, arr); // Ronaldo 1 2 3 4

})();
```
### Prototype
```js
.prototype /* Tem todos os métodos do objeto principais sempre que criamos
                um novo objeto é o protótipo dos nossos métodos, dos contrutores.
                A partir do protótipo eu consigo fazer herança no JS */
(function (){
  'use strict';

  function MyFunction(name, lastName){ // Construtor
    this.name = name;
    this.lastName = lastName;
  }
  // Extendendo a função MyFunction
  MyFunction.prototype.fullName = function() {// método fullName
    return this.name + ' ' + this.lastName;
  }

  var ronaldo = new MyFunction('Ronaldo', 'Fenomeno');

/* prototype mantém o objeto vivo, então eu posso
criar propriedades depois de instanciar o objeto,
se eu adicionar mais propriedades no prototype
por exemplo eu posso ter acesso a elas */

  MyFunction.prototype.age = 30;
  console.log(ronaldo.age);
  MyFunction.prototype.age = 30; // Sobrescrevendo o prototype

})();

// Propriedades de objeto são lidas antes das propriedades do protótipo
```
### Array-like
```js
/*      Vários argumentos agrupados que eu posso usar como se fosse array,
        mas eles não herdam do Array.prototype
        Elementos de função são array-like, elementos html, node lists */
(function (){
  'use strict';

  function myFunction(){
    Array.prototype.forEach.call( arguments, function(item, index) {
    console.log( item );
    });
  }
    myFunction(1,2,3,4,5,6,7,8);

})();

(function (){
'use strict';

  function myFunction(){
    var result = Array.prototype.reduce.call( arguments, function(
    acumulado, atual, index) {
      return acumulado + atual;
    });
    console.log( result );
  }

  myFunction(1,2,3,4,5,6,7,8);

})();
  ```