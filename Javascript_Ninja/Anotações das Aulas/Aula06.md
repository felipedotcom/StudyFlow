### Operador virgula
```js
  var a, b = 2, c; // a undefined b = 2 , c undefined

  function myFunction(){
     var x = 0;
     return (x += 1, x); // mesma coisa que return ++x
                          // vai fazer tudo que o x tem + 1 e depois retorna o valor de x
  }
```
### Estrutura Condicional Switch
```js
//Exemplo de switch/case
  function myFunction(x){
      switch(x) {
          case1: 
          console.log('x é 1');
          break;
          case2:
          console.log('x é 2');
          break;
          default: 
          console.log(x não é nem 1 nem 2);
      }
  }
  
  myFunction(1);
  x é 1
```
### Estrutura de Repetição While(Enquanto)
```js
  var counter = 0;

  while(counter < 10){
      console.log(counter);
      counter++;
  }
  //saida do while
    0
    1
    2
    3
    4
    5
    6
    7
    8
    9

  var counter = 10;
  while(counter > 0){
      console.log(counter);
      counter--;
  }
  //saida do while
    10
    9
    8
    7
    6
    5
    4
    3
    2
    1
  ```
