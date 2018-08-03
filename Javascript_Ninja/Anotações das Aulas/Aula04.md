### Falsy e Truthy 
```js
/* Falsy - boleanamente falando é falso
    valores Falsy:
    
    undefined
    null
    NaN
    0 
    -0
    " " string vazia
    false 
*/
//Exemplo de Falsy
  if (0) { teste = true;} else { teste = false; }
  false // resposta
  if (" ") { teste = true;} else { teste = false; }
  false // resposta

//Truthy - boleanamente falando é verdadeiro
//Todos os outros valores que não forem Falsy são Truthy

//Exemplo de Truthy
  var teste;

  if (1) { teste = true;} else { teste = false; }
  // true
  if ("0") { teste = true;} else { teste = false; } // string com valor é sempre true
  // true 
  if ({}) { teste = true;} else { teste = false; } // objeto é true
  // true 
  if ([]) { teste = true;} else { teste = false; } // array é true
  // true 
``` 
### Condicional Ternario
```js
//Usado para condições pequenas
  
  condicao ? true : false; //representação de condicional ternário

//Exemplo

  1 === 2 ? true : false;
  // false 
```

### Escopo de variáveis
```js
//Escopo global - variável declarada fora da função ( é possível acessar dentro de escopos locais )

//Escopo local - variável declarada dentro da função (só é possível acessar dentro da função)

//Exemplo de variável global
  var myvar = 1;

  function myFunction() {
      return myvar;
  }
  myFunction(); // 1

//Exemplo de variável local  

  function otherFunction() {
      var otherVar = true;
      return otherVar;
  }

//Chamando a função 
otherFunction(); //true, porque a variável está dentro do escopo da funcão 
//Chamando a variável fora do escopo da função
otherVar; // is not defined  

//Sem utlizar a palavra reservada var, para criar variáveis ela fica acessível no escopo global

//Argumentos tambem são variáveis de escopo local
//Exemplo
  function outraFuncao(a,b,c){
      return a;
  }

  a; // a is not defined
``` 
