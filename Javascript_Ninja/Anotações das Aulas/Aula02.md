
### Operadores Lógicos - combinam ou invertem valores booleanos
```js   

&& // Operador Lógico E 

//exemplo
  var x = 7;
  var y = 3; 
 
  x === 3 && y === 7; 
  true // Operador Lógico E só é true quando todas as condições forem verdadeiras
  
  || // Operador Lógico Ou
  
//exemplo
  x === 3 || y === 8; 
  true // Operador Lógico Ou vai ser true quando uma ou mais condições forem verdadeiras
 
```
### Operadores Unários (+ , -)

Além da soma e subtração, eles também servem para **concatenar valores**    
```js 
//exemplo
  'ro' + 'naldo'
  "ronaldo"
  3 + "3"
  33
```
### Estrutura Léxica - conjunto de regras para definir como vamos escrever a linguagem

**case sensitive** - JS diferencia maiúsculas de minúsculas 
```js
var animal = "cachorro";
var Animal = "macaco";

animal
'cachorro'
Animal 
'macaco'
```
### Comentários
```js
// isso é um comentário de linha

/*
isso 
é um comentário 
de
bloco
*/ 
```
### Identificadores - nomes de funcões/variáveis 
+ **podem iniciar com _ ou $**    
+ **podem iniciar de a até z ou A até z**   
+ **podem conter números de 0 a 9 e unicode.**  


### Instruções condicionais IF/ ELSE / ELSE IF  (SE/ SE NÃO / SE NÃO SE)
```js

  var x = 3;
  var y = 7;

  if(x === 3){ //sempre retorna um valor booleano true ou false
      y = 3;
  };

   if (x === y && x === 3) { //pode ser utilizado junto com operadores lógicos
       x = 5;
       y = 2;
   };

   if(x === 2 ){
      y = 10;
   }
   else { // se a instrução do if for false ele entra no else 
      y = 2;
   };


   if(x === 2 ){
      y = 10;
   } 
   else if (y === 3) { //ELSE IF cria uma nova instrução dentro de uma mesma avaliacao 
      x = 3;
   } 
   else if (y === x) {
      x = 10;
      y = 100;
   } 
   else {
       x = 0;
       y 0;
   };
   ```
