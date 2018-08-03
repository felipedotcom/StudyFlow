### Operador Módulo 
```js
  // Retorna resto da divisão entre dois operandos

  3 % 3  = 0
  5 % 2 = 1
```
### Arrays são objetos disfarçados
```js
  //Propriedade length conta a quantidade de itens que tem em um array 

  //Ex: 
  var array = ['Ronaldo', true, {copa: 'Hexa'}, function(){}, null ];

  array.length // 5

  var quantidade = array.length;

  while (quantide => 0) {
      console.log(array[quantidade--];)
  };

  while (quantidade > 0 ){
      console.log(array[--quantidade]);
  };

  // Mostrando a propriedade do objeto dentro do laço while

  while (quantidade > 0){
      console.log(console.log(array[--quantidade]);
      if(quantidade === 3){
          console.log(array[quantidade].bola);
      }
  };
```
### O método .push()
```js
  // Ex: 
  var array = ['Ronaldo', true, {copa: 'Hexa'}, function(){}, null ];

  array.push(); // Empura mais um item para dentro do array

  array.push({carro: 'BMW'}); // Adicionando o objeto carro dentro do array 

  array.push(function soma(x,y){return x + y;}); // Adicionando uma função dentro do array 

  array.push(['a','b']); // Adicionando um array dentro de um array

  // Invocando a funcao dentro do array

  array[7](1,2);
```
### Estrutura de repetição *for* 
```js
  // Estrutura do for
  for (inicializador; condição; expressão final);

  for (var num = 0; num < 20; num++ ){
      console.log(num);

  }; // imprime do 0 até 19

  // pode ter mais de uma variavel dentro do for 
  for (var num = 0, var boom = 3; num < 20; num++ ){
      console.log(num);
      console.log(boom++);
  };
```
