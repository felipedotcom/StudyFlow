### Escopo das Funções 

```js
/* Funções literais estão disponiveis em todo o escopo da função */  
    
    // Ex:
    function myFunction(){
        function sum(){
            return 1 + 2;
        }
    return sum();
    } 

    console.log( myFunction()); // 3
    console.log( sum()); // sum is not defined 

/* As variáveis locais da função ser usadas inclusive por outras
funções que estejam dentro do escopo */
    function myFunction(){                        
        var num1 = 1;
        var num2 = 2;
        function sum(){
            return num1 + num2;
        }
    return sum();
    } 

    console.log( myFunction()); // 3

/* Independente de onde for criadas as variáveis dentro do escopo, 
   eu consigo acessar os valores, contanto que eu invoque a função depois desses valores */  
     function myFunction(){
        function sum(){
            return num1 + num2;
        }
        var num1 = 1;
        var num2 = 2;
        return sum();
    } 

    console.log( myFunction()); // 3 

```
     
### HOISTING (Elevação/Mover para cima)

```js
    
/* Quando eu tenho uma função literal no JS, ainda que eu crie ela depois do return, 
   o JS pega essa função e move para cima */ 
    function myFunction(){
        var num1 = 1;
        var num2 = 2;
        return sum();
        function sum(){ // Vai jogar essa função para cima do return
            return num1 + num2;
        }  
    } 

    console.log( myFunction()); // 3 

/* O JS vai pegar o var sum, jogar para cima do return e atribuir undefined. 
   Porque, variáveis só estão disponíveis a partir do ponto onde é feita a 
   atribuição para ela */  
    function myFunction(){
        var num1 = 1;
        var num2 = 2;
        return sum();
        var sum = function sum(){ // undefined is not a function  
            return num1 + num2;
        }  
    } 

// Declarar variáveis sempre no inicio da função
```
### IIFE Immediately-Invoked Function Expression (Função Auto-Executável)
```js
/* Não existe jeito de executar funções anônimas se ela não foi 
atribuida a um objeto ou propriedade.
Não consigo executar uma função literal sem chamar o nome. */ 
   
    function sum() {
        return 1 + 2;
    }();

    console.log(sum); // Unexpected token

/* Para executar uma função literal eu preciso torna-la uma expressão.
E envolver a função em parênteses transforma a função em uma expressão*/ 

    (function sum() {
        console.log(1+2);
    });(); // Executando a função auto-executável

    (function sum() {
        console.log(1+2);
    }()); // Executando a função auto-executável

// Vantagens da IIFE: Não precisa ter escopo global 
```
